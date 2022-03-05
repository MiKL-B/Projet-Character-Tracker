using System.ComponentModel.DataAnnotations.Schema;

namespace app.Models;

[Table("privacy")]
public class Privacy
{
  [Column("id_privacy")] public long Id { get; set; }
  [Column("type_privacy")] public string? Type { get; set; }
}