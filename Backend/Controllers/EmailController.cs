using Microsoft.AspNetCore.Mvc;
using EmailSender.Models;
using EmailSender.Services;
using Microsoft.AspNetCore.Authorization;

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
        [Authorize]
        [Route("sendEmail")]
        public async Task<IActionResult> SendEmail([FromBody] OrderDetails orderDetails)
        {
            await _orderService.SaveOrder(orderDetails);
            _emailService.SendBoostingEmail(orderDetails);
            return Ok();
        }

        [HttpPost]
        [Authorize]
        [Route("sendCoachingEmail")]
        public async Task<IActionResult> SendCoachingEmail([FromBody] CoachingOrderDetails orderDetails)
        {
            await _orderService.SaveCoachingOrder(orderDetails);
            _emailService.SendCoachingEmail(orderDetails);
            return Ok();
        }
    }
}
