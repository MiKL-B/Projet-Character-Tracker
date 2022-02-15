using System.ComponentModel.DataAnnotations.Schema;

namespace app.Models;

[Table("relation")]
public class Relation
{
  [Column("id_relation")] public long Id { get; set; }
  [Column("id_privacy")] public long IdPrivacy { get; set; }
  [Column("id_event")] public long IdEvent { get; set; }
  [Column("actor")] public long? Actor { get; set; }
  [Column("target")] public long? Target { get; set; }
  [Column("relationship")] public string? Relationship { get; set; }
  [Column("affinity")] public long? Affinity { get; set; }
}