using EmailSender.Models;
using Microsoft.EntityFrameworkCore;

namespace EmailSender.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<OrderDetails> BoostingOrders { get; set; }
        public DbSet<CoachingOrderDetails> CoachingOrders { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
    }
}
