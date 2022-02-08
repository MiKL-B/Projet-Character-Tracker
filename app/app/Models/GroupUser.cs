using System.ComponentModel.DataAnnotations.Schema;

namespace app.Models;

[Table("groupuser")]
public class GroupUser
{
 [Column("id_group_user")] public long Id { get; set; }
 [Column("img_group")] public string? Img { get; set; }
 [Column("desc_group")] public string? Desc { get; set; }
 [Column("private")] public bool? Private { get; set; }

 public List<Account> Accounts { get; set; } = new List<Account>();
 public ICollection<Schema> Schemas { get; set; }

}