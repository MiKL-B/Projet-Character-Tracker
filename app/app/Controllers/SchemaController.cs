using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using app.Models;

namespace app.Controllers;

[ApiController]
[Route("[controller]")]

public class SchemaController : ControllerBase{
    private readonly CharacterTrackerContext _context;
    public SchemaController(CharacterTrackerContext context)
    {
        _context = context;
    }
    [HttpGet]
    public async Task<ActionResult<List<Schema>>> GetAll()=>
    await _context.Schemas.ToListAsync();

    
}