using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using app.Models;

namespace app.Controllers;

[ApiController]
[Route("[controller]")]

public class SchemaController : ControllerBase
{
    private readonly CharacterTrackerContext _context;
    public SchemaController(CharacterTrackerContext context)
    {
        _context = context;
    }
    //GET ALL SCHEMA
    [HttpGet]
    public async Task<ActionResult<List<Schema>>> GetAll() =>
    await _context.Schemas.ToListAsync();

    //GET A SPECIFIC SCHEMA
    [HttpGet("{id:long}")]
    public async Task<ActionResult<Schema>> GetSchema(long id)
    {
        var schema = await _context.Schemas.FindAsync(id);
        if (schema == null) return NotFound();

        return schema;
    }

}