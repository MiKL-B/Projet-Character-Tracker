using System.ComponentModel.DataAnnotations.Schema;

namespace app.Models;

[Table("permission")]
public class Permission
{
  [Column("id_permission")] public int Id { get; set; }
  [Column("level_permission")] public int Level { get; set; }
}