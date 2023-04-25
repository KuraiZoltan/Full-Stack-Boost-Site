using EmailSender.Data;
using EmailSender.Models;
using EmailSender.Models.Credentials;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace EmailSender.Services
{
    public class UserService
    {
        private PasswordHasher<User> PasswordHasher { get; }
        private AppDbContext _context { get; set; }
        public UserService(AppDbContext appDbContext)
        {
            _context = appDbContext;
            PasswordHasher = new PasswordHasher<User>();
        }

        public async Task<bool> AddUser(RegistrationCredentials registrationCredentials)
        {
            if (registrationCredentials.Password == registrationCredentials.PasswordConfirmation)
            {
                User user = new User()
                {
                    FirstName = registrationCredentials.FirstName,
                    LastName = registrationCredentials.LastName,
                    Username = registrationCredentials.Username,
                    Email = registrationCredentials.Email,
                    Role = "User"
                };
                user.HashedPassword = PasswordHasher.HashPassword(user, registrationCredentials.Password);
                await _context.Users.AddAsync(user);
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }

        public async Task<User?> GetUser(string username)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Username == username);
        }

        public async Task<IEnumerable<Claim>> CreateClaims(LoginCredentials loginCredentials)
        {
            var user = await GetUser(loginCredentials.Username);

            var claims = new List<Claim>
            {
                new (ClaimTypes.Name, user.Username),
                new (ClaimTypes.Email, user.Email),
                new (ClaimTypes.Role, user.Role),
                new ("UserId", user.UserId.ToString()),
            };

            return claims;
        }

        public async Task<bool> LoginIsValid(LoginCredentials loginData)
        {
            var user = await GetUser(loginData.Username);
            if (user == null)
            {
                return false;
            }

            var result = PasswordHasher.VerifyHashedPassword(user, user.HashedPassword, loginData.Password);
            return result == PasswordVerificationResult.Success;

        }
    }
}
