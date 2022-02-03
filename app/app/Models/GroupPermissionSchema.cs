using System.ComponentModel.DataAnnotations.Schema;

namespace app.Models;

[Table("group_permission_schema")]
public class GroupPermissionSchema
{
  [Column("id_permission")] public long IdPermission { get; set; }
  [Column("id_schema")] public long IdSchema { get; set; }
  [Column("id_group_user")] public long IdGroupUser { get; set; }
}