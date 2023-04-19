using Microsoft.AspNetCore.Mvc;
using EmailSender.Models;
using EmailSender.Services;

namespace EmailSender.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        private EmailService _emailService;
        private OrderService _orderService;
        public EmailController(EmailService emailService, OrderService orderService) 
        {
            _emailService = emailService;
            _orderService = orderService;
        }

        [HttpPost]
        [Route("sendEmail")]
        public async Task<IActionResult> SendEmail([FromBody] OrderDetails orderDetails)
        {
            await _orderService.SaveOrder(orderDetails);
            _emailService.SendEmail(orderDetails);
            return Ok();
        }
    }
}
