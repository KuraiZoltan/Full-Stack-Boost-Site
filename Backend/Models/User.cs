using System.ComponentModel.DataAnnotations.Schema;

namespace EmailSender.Models
{
    public class User
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
    }
}
