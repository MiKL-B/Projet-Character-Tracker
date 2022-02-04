using System.ComponentModel.DataAnnotations.Schema;

namespace app.Models;

[Table("personage")]
public class Personage
{
  [Column("id_personage")] public long Id { get; set; }
  [Column("lastname_pers")] public string? Lastname { get; set; }
  [Column("firstname_pers")] public string? Firstname { get; set; }
  [Column("birthdate_pers")] public string? Birthdate { get; set; }
  [Column("deathdate_pers")] public string? Deathdate { get; set; }
  [Column("gender_pers")] public string? Gender { get; set; }
  [Column("img_pers")] public string? Img { get; set; }
  [Column("id_race")] public long RaceId { get; set; }
  [Column("id_schema")] public long SchemaId { get; set; }
  
  public Schema Schema { get; set; }
  public Race Race { get; set; }
  
  public ICollection<Family> Families { get; set; }
}