using System.ComponentModel.DataAnnotations.Schema;

namespace app.Models;

[Table("group_account")]
public class GroupAccount
{
  [Column("id_account")] public long IdAccount { get; set; }
  [Column("id_group_user")] public long IdGroupUser { get; set; }
}