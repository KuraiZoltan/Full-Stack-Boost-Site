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
            _context.BoostingOrders.Add(orderDetails);
            await _context.SaveChangesAsync();
        }

        public IEnumerable<OrderDetails> GetAllOrders()
        {
            return _context.BoostingOrders.ToList();
        }

        public IEnumerable<OrderDetails> GetOrdersByUserId(int userId)
        {
            return _context.BoostingOrders.Where(order => order.UserId == userId).ToList();
        }

        public async Task<OrderDetails> GetOrderByOrderId(int orderId)
        {
            return await _context.BoostingOrders.FirstOrDefaultAsync(order => order.Id == orderId);
        }

        public async Task ChangeStatus(SaveStatus saveStatus)
        {
            var order = await GetOrderByOrderId(saveStatus.OrderId);
            order.Status = saveStatus.Status;
            await _context.SaveChangesAsync();
        }

        public async Task SaveCoachingOrder(CoachingOrderDetails orderDetails)
        {
            _context.CoachingOrders.Add(orderDetails);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteOrder(int orderId)
        {
            var order = _context.BoostingOrders.FirstOrDefault(order => order.Id == orderId);
            _context.BoostingOrders.Remove(order);
            await _context.SaveChangesAsync();
        }
    }
}
