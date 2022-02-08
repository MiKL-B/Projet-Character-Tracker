using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using app.Models;

namespace app.Controllers;

[ApiController]
[Route("[controller]")]
public class FamilyController : ControllerBase
{
    private readonly CharacterTrackerContext _context;

    public FamilyController(CharacterTrackerContext context)
    {
        _context = context;
    }

    // GET ALL FAMILY
    [HttpGet]
    public async Task<ActionResult<List<Family>>> GetAll() =>
            await _context.Families.ToListAsync();

    // GET A SPECIFIC FAMILY
    [HttpGet("{id:long}")]
    public async Task<ActionResult<Family>> GetFamily(long id)
    {
        var family = await _context.Families.FindAsync(id);
        if (family == null) return NotFound();

        return family;
    }
}