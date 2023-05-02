using EmailSender.Models;
using EmailSender.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EmailSender.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrderController : ControllerBase
    {
        private OrderService _orderService;

        public OrderController(OrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpGet]
        [Route("getAllOrders")]
        [Authorize(Roles = "Admin")]
        public IEnumerable<OrderDetails> GetAllOrders()
        {
            return _orderService.GetAllOrders();
        }

        [HttpGet("{userId}")]
        [Authorize]
        [Route("getOrders/{userId}")]
        public IEnumerable<OrderDetails> GetOrdersById(int userId)
        {
            return _orderService.GetOrdersByUserId(userId);
        }

        [HttpPut]
        [Authorize(Roles = "Admin")]
        [Route("changeStatus")]
        public async Task ChangeStatus([FromBody] SaveStatus saveStatus)
        {
            await _orderService.ChangeStatus(saveStatus);
        }
    }
}
