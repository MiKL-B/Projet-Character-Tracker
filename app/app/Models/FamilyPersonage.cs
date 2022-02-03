using System.ComponentModel.DataAnnotations.Schema;

namespace app.Models;

[Table("family_personage")]
public class FamilyPersonage
{
  [Column("id_personage")] public int IdPersonage { get; set; }
  [Column("id_family")] public int IdFamily { get; set; }
}