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
        public UserService(AppDbContext appDbContext) 
        { 
            _context = appDbContext;
            PasswordHasher = new PasswordHasher<User>();
        }

        public async Task AddUser(RegistrationCredentials registrationCredentials)
        {
            User user = new User()
            {
                FirstName = registrationCredentials.FirstName,
                LastName = registrationCredentials.LastName,
                Username = registrationCredentials.Username,
                Email = registrationCredentials.Email,
            };
            user.HashedPassword = PasswordHasher.HashPassword(user, registrationCredentials.Password);
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
        }
    }
}
