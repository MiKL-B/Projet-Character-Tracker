using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using app.Models;

namespace app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]


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
        // [HttpGet("{id:long}")]
        // public async Task<ActionResult<Schema>> GetSchema(long id)
        // {
        //     var schema = await _context.Schemas.FindAsync(id);
        //     if (schema == null) return NotFound();

        //     return schema;
        // }

        [HttpGet("{id:long}")]

        public List<Schema> GetSchemaByUser(long id)
        {
            var query = "SELECT schema.* FROM schema INNER JOIN group_permission_schema ON schema.id_schema = group_permission_schema.id_schema INNER JOIN groupuser on group_permission_schema.id_group_user = groupuser.id_group_user INNER JOIN group_account on groupuser.id_group_user = group_account.id_group_user INNER JOIN account ON group_account.id_account = account.id_account WHERE account.id_account =" + id;
            var schemaByUser = _context.Schemas.FromSqlRaw(query).ToList<Schema>();

            return schemaByUser;
        }
        // UPDATE schema
        [HttpPut("{id:long}")]
        public async Task<IActionResult> UpdateSchema(long id, Schema schema)
        {
            if (id != schema.Id) return BadRequest();

            _context.Entry(schema).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SchemaExists(id)) return NotFound();
                throw;
            }

            return NoContent();
        }
        [HttpPost]
        public async Task<ActionResult<Schema>> Create(Schema schema)
        {

            _context.Schemas.Add(schema);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSchema", new { id = schema.Id }, schema);
        }


        [HttpDelete("{id:long}")]
        public async Task<IActionResult> DeleteSchema(long id)
        {
            try
            {
                var schema = await _context.Schemas.FindAsync(id);
                if (schema == null)
                {
                    return NotFound();
                }
                _context.Schemas.Remove(schema);
                await _context.SaveChangesAsync();
                return Ok();
            }
            catch
            {
                throw;
            }
        }
        private bool SchemaExists(long id)
        {
            return _context.Schemas.Any(e => e.Id == id);
        }
    }
}

