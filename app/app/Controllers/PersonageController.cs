using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using app.Models;
using Microsoft.EntityFrameworkCore.Internal;

namespace app.Controllers
{

    [ApiController]
    [Route("api/[controller]")]


    public class PersonageController : ControllerBase
    {
        private readonly CharacterTrackerContext _context;

        public PersonageController(CharacterTrackerContext context)
        {
            _context = context;
        }
        //
        // GET ALL PERSONAGE
        [HttpGet]
        public async Task<ActionResult<List<Personage>>> GetAll() =>
                await _context.Personages.ToListAsync();

        // GET A SPECIFIC PERSONAGE
        // [HttpGet("{id:long}")]
        // public async Task<ActionResult<Personage>> GetPersonage(long id)
        // {
        //     var personage = await _context.Personages.FindAsync(id);
        //     if (personage == null) return NotFound();
        //
        //     return personage;
        // }

        [HttpGet("{id:long}")]

        public List<Personage> GetPersoBySchema(long id)
        {
            var query = "SELECT personage.* FROM personage  LEFT JOIN race r on personage.id_race = r.id_race WHERE id_schema=" + id;
            var persoBySchema = _context.Personages.FromSqlRaw(query).ToList<Personage>();

            return persoBySchema;
        }

        // UPDATE personage
        [HttpPut("{id:long}")]
        public async Task<IActionResult> UpdatePersonage(long id, Personage personage)
        {
            if (id != personage.Id) return BadRequest();

            _context.Entry(personage).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PersonageExists(id)) return NotFound();
                throw;
            }

            return NoContent();
        }
        [HttpPost]
        public async Task<ActionResult<Personage>> Create(Personage personage)
        {

            _context.Personages.Add(personage);
            await _context.SaveChangesAsync();

            return CreatedAtAction("getPersoBySchema", new { id = personage.Id }, personage);
        }

        [HttpDelete]
        public async Task<IActionResult> DeletePersonage(Personage personag)
        {
            var personage = await _context.Personages.FindAsync(personag.Id);
            if (personage == null)
            {
                return NotFound();
            }

            _context.Personages.Remove(personage);
            await _context.SaveChangesAsync();

            return Ok();
        }
        private bool PersonageExists(long id)
        {
            return _context.Personages.Any(e => e.Id == id);
        }
    }
}
