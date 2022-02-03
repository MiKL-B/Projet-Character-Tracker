using System.ComponentModel.DataAnnotations.Schema;

namespace app.Models;

[Table("relation")]
public class Relation
{
  [Column("id_relation")] public long Id { get; set; }
  [Column("id_privacy")] public long IdPrivacy { get; set; }
  [Column("id_event")] public long IdEvent { get; set; }
  [Column("actor")] public string? Actor { get; set; }
  [Column("target")] public string? Target { get; set; }
  [Column("relationship")] public string? Relationship { get; set; }
  [Column("affinity")] public int? Affinity { get; set; }
}