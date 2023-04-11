using EmailSender.Data;
using EmailSender.Models;
using EmailSender.Models.Credentials;
using Microsoft.AspNetCore.Identity;

namespace EmailSender.Services
{
    public class UserService
    {
        private PasswordHasher<User> PasswordHasher { get; }
        private AppDbContext _context { get; set; }
        public UserService() { }

        public async Task AddUser(RegistrationCredentials registrationCredentials)
        {
            User user = new User()
            {
                Username = registrationCredentials.Username,
                Email = registrationCredentials.Email,
            };
            user.HashedPassword = PasswordHasher.HashPassword(user, registrationCredentials.Password);
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
        }
    }
}
