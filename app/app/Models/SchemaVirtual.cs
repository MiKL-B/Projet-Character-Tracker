namespace app.Models;


public class SchemaVirtual
{
    public long Id { get; set; }
    public bool IsPublic { get; set; }
    public string Name { get; set; }
    public string Desc { get; set; }
    public bool ReadableDate { get; set; }
    public string Img { get; set; }

    public int IdAccount { get; set; }
}