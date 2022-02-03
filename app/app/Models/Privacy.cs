using System.ComponentModel.DataAnnotations.Schema;

namespace app.Models;

[Table("privacy")]
public class Privacy
{
  [Column("id_privacy")] public int Id { get; set; }
  [Column("type_privacy")] public string? Type { get; set; }
}