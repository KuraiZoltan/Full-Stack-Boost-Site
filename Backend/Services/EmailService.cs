using EmailSender.Models;
using MailKit.Net.Smtp;
using MimeKit;

namespace EmailSender.Services
{
    public class EmailService
    {
        public void SendBoostingEmail(OrderDetails orderDetails)
        {
            var email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse("fakebboost@gmail.com"));
            email.To.Add(MailboxAddress.Parse(orderDetails.Email));
            email.Subject = "FB Order Confirmation";
            email.Body = new TextPart(MimeKit.Text.TextFormat.Html)
            {
                Text =
                $"<h1>FB Order Details</h1> " +
                $"<p><b>First Name:</b> {orderDetails.FirstName}</p> " +
                $"<p><b>Last Name:</b> {orderDetails.LastName}</p> " +
                $"<p><b>Game:</b> {orderDetails.GameName}</p> " +
                $"<p><b>Region:</b> {orderDetails.SelectedRegion}</p>" +
                $"<p><b>Boost From:</b> {orderDetails.CurrentRank} {orderDetails.CurrentRankLevel} {orderDetails.CurrentRankPoints}</p> " +
                $"<p><b>Boost To:</b> {orderDetails.OrderedRank} {orderDetails.OrderedRankLevel}</p>" +
                "<h2>Thank You for your order, FB will contact you soon!</h2>"
            };

            using var smtp = new SmtpClient();
            smtp.Connect("smtp.gmail.com", 465, MailKit.Security.SecureSocketOptions.SslOnConnect);
            smtp.Authenticate("fakebboost@gmail.com", "gconlzshnpusjupa");
            smtp.Send(email);
            smtp.Disconnect(true);
        }

        public void SendCoachingEmail(CoachingOrderDetails orderDetails)
        {
            var email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse("fakebboost@gmail.com"));
            email.To.Add(MailboxAddress.Parse(orderDetails.Email));
            email.Subject = "FB Order Confirmation";
            email.Body = new TextPart(MimeKit.Text.TextFormat.Html)
            {
                Text =
                $"<h1>FB Order Details</h1> " +
                $"<p><b>Discord:</b> {orderDetails.DiscordName}</p> " +
                $"<p><b>Lane:</b> {orderDetails.PlayedLane}</p> " +
                $"<p><b>Current rank:</b> {orderDetails.Rank}</p> " +
                $"<p><b>Reserved sessions:</b> {orderDetails.SessionCount}</p>" +
                "<h2>Thank You for your order, FB will contact you soon!</h2>"
            };

            using var smtp = new SmtpClient();
            smtp.Connect("smtp.gmail.com", 465, MailKit.Security.SecureSocketOptions.SslOnConnect);
            smtp.Authenticate("fakebboost@gmail.com", "gconlzshnpusjupa");
            smtp.Send(email);
            smtp.Disconnect(true);
        }
    }
}
