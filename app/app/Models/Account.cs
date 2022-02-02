using System.ComponentModel.DataAnnotations.Schema;

namespace app.Models;

[Table("account")]
public class Account
{
  [Column("id_account")] public int Id { get; set; }
  [Column("username")] public string? Username { get; set; }
  [Column("password")] public string? Password { get; set; }
  [Column("mail")] public string? Mail { get; set; }
  [Column("is_admin")] public bool? IsAdmin { get; set; }
  [Column("img_user")] public string? ImgUser { get; set; }
}