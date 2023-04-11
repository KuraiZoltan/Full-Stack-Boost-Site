using Microsoft.AspNetCore.Mvc;
using EmailSender.Models;
using EmailSender.Services;

namespace EmailSender.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        private EmailService _emailService;
        public EmailController(EmailService emailService) 
        {
            _emailService = emailService;
        }

        [HttpPost]
        public IActionResult SendEmail([FromBody] OrderDetails orderDetails)
        {
            _emailService.SendEmail(orderDetails);
            return Ok();
        }
    }
}
