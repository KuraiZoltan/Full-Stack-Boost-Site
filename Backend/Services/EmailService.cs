﻿using EmailSender.Models;
using MailKit.Net.Smtp;
using MimeKit;
using Org.BouncyCastle.Crypto.Macs;

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
                $"<p><b>Discord Name:</b> {orderDetails.DiscordName}</p> " +
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

        internal void SendMessageEmail(Message message)
        {
            var email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse("fakebboost@gmail.com"));
            email.To.Add(MailboxAddress.Parse("fakebboost@gmail.com"));
            email.Subject = "FB Order Confirmation";
            email.Body = new TextPart(MimeKit.Text.TextFormat.Html)
            {
                Text =
                $"<h1>FB Contact Message</h1> "+
                $"<h1>Name</h1> {message.Name}" +
                $"<h1>Discord</h1> {message.Discord}" +
                $"<h1>Email</h1>  {message.Email}" +
                $"<h1>Message</h1>  {message.MessageText}" 
            };

            using var smtp = new SmtpClient();
            smtp.Connect("smtp.gmail.com", 465, MailKit.Security.SecureSocketOptions.SslOnConnect);
            smtp.Authenticate("fakebboost@gmail.com", "gconlzshnpusjupa");
            smtp.Send(email);
            smtp.Disconnect(true);
        }
    }
}
