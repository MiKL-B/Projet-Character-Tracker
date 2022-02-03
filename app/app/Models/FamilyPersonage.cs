using System.ComponentModel.DataAnnotations.Schema;

namespace app.Models;

[Table("family_personage")]
public class FamilyPersonage
{
  [Column("id_personage")] public long IdPersonage { get; set; }
  [Column("id_family")] public long IdFamily { get; set; }
  public Personage Personage { get; set; }
  public Family Family { get; set; }
}