using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using app.Models;

namespace app.Controllers;

[ApiController]
[Route("[controller]")]

public class RelationController : ControllerBase
{
    private readonly CharacterTrackerContext _context;

    public RelationController(CharacterTrackerContext context)
    {
        _context = context;
    }
    
    [HttpGet]
    public async Task<ActionResult<List<Relation>>> GetAll() => await _context.Relations.ToListAsync();

    //get a specific relation
    [HttpGet("{id:long}")]
    public async Task<ActionResult<Relation>> GetRelation(long id)
    {
        var relation = await _context.Relations.FindAsync(id);
        if (relation == null) return NotFound();

        return relation;
    }
}