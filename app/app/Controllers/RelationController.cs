using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using app.Models;

namespace app.Controllers;

[ApiController]
[Route("api/[controller]")]

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

    //GET BY RELATION
    [HttpGet("byrelation/{id:long}")]
    public List<Relation> GetRelationBySchema(long id)
    {
        var query = "SELECT * FROM relation inner join personage on relation.actor = personage.id_personage WHERE id_schema =" + id;
        var relationBySchema = _context.Relations.FromSqlRaw(query).ToList<Relation>();

        return relationBySchema;
    }
    //CREATE
    [HttpPost]
    public async Task<ActionResult<Relation>> Create(Relation relation)
    {

        _context.Relations.Add(relation);
        await _context.SaveChangesAsync();

        return CreatedAtAction("getRelationBySchema", new { id = relation.Id }, relation);
    }



    // UPDATE relation
    [HttpPut("{id:long}")]
    public async Task<IActionResult> UpdateRelation(long id, Relation relation)
    {
        if (id != relation.Id) return BadRequest();

        _context.Entry(relation).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!RelationExists(id)) return NotFound();
            throw;
        }

        return NoContent();
    }
    //DELETE
    [HttpDelete("{id:long}")]
    public async Task<IActionResult> DeleteRelation(long id)
    {
        try
        {
            var relation = await _context.Relations.FindAsync(id);
            if (relation == null)
            {
                return NotFound();
            }
            _context.Relations.RemoveRange(relation);

            await _context.SaveChangesAsync();
            return Ok();
        }
        catch
        {
            throw;
        }
    }
    private bool RelationExists(long id)
    {
        return _context.Relations.Any(e => e.Id == id);
    }

}