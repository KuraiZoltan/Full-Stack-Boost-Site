using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace EmailSender.Models
{
    public class OrderDetails
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Username { get; set; }
        public string CurrentRank { get; set; }
        public string CurrentRankLevel { get; set; }
        public string CurrentRankPoints { get; set; }
        public string OrderedRank { get; set; }
        public string OrderedRankLevel { get; set;}
        public string SelectedRegion { get; set; }
        public string DiscordName { get; set; }
        public string Email { get; set; }
        public string GameName { get; set; }
        public string Status { get; set; }
        public string RankedType { get; set; }
    }
}
