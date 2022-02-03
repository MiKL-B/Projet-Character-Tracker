using System.ComponentModel.DataAnnotations.Schema;

namespace app.Models;

[Table("family")]
public class Family
{
  [Column("id_family")] public int Id { get; set; }
  [Column("name_family")] public string? Name { get; set; }
  [Column("desc_family")] public string? Desc { get; set; }
  [Column("img_family")] public string? Img { get; set; }
}