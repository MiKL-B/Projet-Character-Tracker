﻿using System.ComponentModel.DataAnnotations.Schema;

namespace app.Models;

[Table("race")]
public class Race
{
  [Column("id_race")] public long Id { get; set; }
  [Column("name_race")] public string? Name { get; set; }
}