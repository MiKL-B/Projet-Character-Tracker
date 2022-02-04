﻿using System.ComponentModel.DataAnnotations.Schema;

namespace app.Models;

[Table("account")]
public class Account
{
  [Column("id_account")] public long Id { get; set; }
  [Column("username")] public string? Username { get; set; }
  [Column("password")] public string? Password { get; set; }
  [Column("mail")] public string? Mail { get; set; }
  [Column("is_admin")] public bool IsAdmin { get; set; } = false;
  [Column("img_user")] public string? Img { get; set; }
  
  public ICollection<GroupUser>? GroupUsers { get; set; }
}