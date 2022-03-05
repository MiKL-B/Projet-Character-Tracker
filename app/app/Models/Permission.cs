using System.ComponentModel.DataAnnotations.Schema;

namespace app.Models;

[Table("permission")]
public class Permission
{
  [Column("id_permission")] public long Id { get; set; }
  [Column("level_permission")] public long Level { get; set; }
  
  public ICollection<GroupUser> GroupUsers { get; set; }
  public ICollection<Schema> Schemas { get; set; }
}