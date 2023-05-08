using EmailSender.Data;
using EmailSender.Models.Credentials;
using EmailSender.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace EmailSender.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;
        private readonly IConfiguration _configuration;

        public UserController(UserService userService, IConfiguration configuration)
        {
            _userService = userService;
            _configuration = configuration;
        }

        [HttpPost]
        [Route("registrate")]
        public async Task<IActionResult> RegistrateUser([FromBody]RegistrationCredentials registrationCredentials)
        {
            var newUser = await _userService.AddUser(registrationCredentials);
            if (newUser != false)
            {
                return Ok(newUser);
            }
            return BadRequest("Passwords not matching");
        }

        [HttpPost]
        [Route("loginUser")]
        public async Task<IActionResult> Login([FromBody] LoginCredentials loginData)
        {
            if (await _userService.LoginIsValid(loginData))
            {
                var user = await _userService.GetUser(loginData.Username);
                var claims = await _userService.CreateClaims(loginData);

                var expireTime = DateTime.Now.AddHours(1);

                return Ok(new 
                {
                    access_token = CreateToken(claims, expireTime),
                    expiresAt = expireTime,
                    discordName = user.DiscordName,
                    email = user.Email,
                    userId = user.UserId
                });
            }
            ModelState.AddModelError("Unauthorized", "You are not authorized to access the endpoint.");
            return Unauthorized(ModelState);
        }

        private string CreateToken(IEnumerable<Claim> claims, DateTime expiresAt)
        {
            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetValue<string>("Jwt:Key")));
            var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

            var jwt = new JwtSecurityToken(
                    issuer: "https://localhost:7196",
                    audience: "https://localhost:7196",
                    claims: claims,
                    expires: expiresAt,
                    signingCredentials: signingCredentials
            );

            var token = new JwtSecurityTokenHandler().WriteToken(jwt);

            HttpContext.Response.Cookies.Append("token", token,
                new CookieOptions
                {
                    Domain = "localhost",
                    Expires = expiresAt,
                    HttpOnly = true,
                    Secure = true,
                    IsEssential = true,
                    SameSite = SameSiteMode.None
                });

            return token;
        }
    }
}
