using System.ComponentModel.DataAnnotations.Schema;

namespace EmailSender.Models
{
    public class CoachingOrderDetails
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Email { get; set; }
        public string DiscordName { get; set; }
        public string PlayedLane { get; set; }
        public string Rank { get; set; }
        public string SessionCount { get; set; }
        public string SessionsFinished { get; set; }
    }
}
