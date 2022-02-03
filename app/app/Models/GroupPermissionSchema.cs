using System.ComponentModel.DataAnnotations.Schema;

namespace app.Models;

[Table("group_permission_schema")]
public class GroupPermissionSchema
{
  [Column("id_permission")] public int IdPermission { get; set; }
  [Column("id_schema")] public int IdSchema { get; set; }
  [Column("id_group_user")] public int IdGroupUser { get; set; }
}