﻿using System.ComponentModel.DataAnnotations.Schema;

namespace app.Models;

[Table("schema")]
public class Schema
{
    [Column("id_schema")] public long Id { get; set; }
    [Column("is_public")] public bool IsPublic { get; set; }
    [Column("name_schema")] public string? Name { get; set; }
    [Column("desc_schema")] public string? Desc { get; set; }
    [Column("readable_date")] public bool? ReadableDate { get; set; }
    [Column("img_schema")] public string? Img { get; set; }

    public ICollection<Personage>? Personages { get; set; }
    public ICollection<Permission>? Permissions { get; set; }
    public ICollection<GroupUser>? GroupUsers { get; set; }

}