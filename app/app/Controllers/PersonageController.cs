using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using app.Models;

namespace app.Controllers;

[ApiController]
[Route("[controller]")]
public class PersonageController : ControllerBase
{
    private readonly CharacterTrackerContext _context;

    public PersonageController(CharacterTrackerContext context)
    {
        _context = context;
    }

    // GET ALL PERSONAGE
    [HttpGet]
    public async Task<ActionResult<List<Personage>>> GetAll() =>
            await _context.Personages.ToListAsync();

    // GET A SPECIFIC PERSONAGE
    [HttpGet("{id:long}")]
    public async Task<ActionResult<Personage>> GetAccount(long id)
    {
        var personage = await _context.Personages.FindAsync(id);
        if (personage == null) return NotFound();

        return personage;
    }
}