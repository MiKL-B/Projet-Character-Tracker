using System.ComponentModel.DataAnnotations.Schema;

namespace app.Models;

[Table("event")]
public class Event
{
  [Column("id_event")] public int Id { get; set; }
  [Column("date_event")] public string? Date { get; set; }
  [Column("order_event")] public int? Order { get; set; }
  [Column("name_event")] public string? Name { get; set; }
  [Column("place_event")] public string? Place { get; set; }
  [Column("desc_event")] public string? Desc { get; set; }
}