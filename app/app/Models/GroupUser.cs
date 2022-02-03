using System.ComponentModel.DataAnnotations.Schema;

namespace app.Models;

[Table("groupuser")]
public class GroupUser
{
 [Column("id_group_user")] public int Id { get; set; }
 [Column("img_group")] public string? Img { get; set; }
 [Column("desc_group")] public string? Desc { get; set; }
 [Column("private")] public bool? Private { get; set; }
}