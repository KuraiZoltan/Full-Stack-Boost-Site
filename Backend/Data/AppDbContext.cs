using EmailSender.Models;
using Microsoft.EntityFrameworkCore;

namespace EmailSender.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<OrderDetails> Orders { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
    }
}
