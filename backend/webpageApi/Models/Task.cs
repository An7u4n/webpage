using System.ComponentModel.DataAnnotations;
namespace webpageApi.Models
{
    public class Task
    {
        [Required] [Key] public int Id { get; set; }
        [Required] public string Name { get; set; } = string.Empty;
        [Required] public string Description { get; set; } = string.Empty;
        [Required] public bool Status { get; set; }
        [Required] public string Priority { get; set; } = string.Empty;
        [Required] public DateTime CreatedAt { get; set; } = DateTime.Now;

    }
}
