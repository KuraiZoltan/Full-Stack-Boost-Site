using EmailSender.Data;
using EmailSender.Models.Credentials;
using EmailSender.Services;
using Microsoft.AspNetCore.Mvc;

namespace EmailSender.Controllers
{
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;
        public UserController(UserService userService) 
        {
            _userService = userService;
        }

        [HttpGet]
        [Route("registrate")]
        public async Task RegistrateUser([FromBody]RegistrationCredentials registrationCredentials)
        {
            await _userService.AddUser(registrationCredentials);
        }
    }
}
