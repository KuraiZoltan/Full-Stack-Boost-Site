using EmailSender.Data;
using EmailSender.Models;
using Microsoft.EntityFrameworkCore;

namespace EmailSender.Services
{
    public class OrderService
    {
        private AppDbContext _context { get; set; }

        public OrderService(AppDbContext context)
        {
            _context = context;
        }

        public async Task SaveOrder(OrderDetails orderDetails)
        {
            _context.Orders.Add(orderDetails);
            await _context.SaveChangesAsync();
        }

        public IEnumerable<OrderDetails> GetAllOrders()
        {
            return _context.Orders.ToList();
        }

        public IEnumerable<OrderDetails> GetOrdersById(int userId)
        {
            return _context.Orders.Where(order => order.UserId == userId).ToList();
        }
    }
}
