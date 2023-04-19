using System.ComponentModel.DataAnnotations.Schema;

namespace EmailSender.Models
{
    public class User
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string HashedPassword { get; set; }
        public IEnumerable<OrderDetails> Orders { get; set; }
    }
}
