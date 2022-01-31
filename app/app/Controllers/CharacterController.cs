using app.Models;
using app.Services;
using Microsoft.AspNetCore.Mvc;

namespace app.Controllers;

[ApiController]
[Route("[controller]")]
public class CharacterController : ControllerBase
{
    public CharacterController()
    {
        
    }

    // GET all action
    [HttpGet]
    public ActionResult<List<Character>> GetAll() =>
     CharacterService.GetAll();
    
    // GET by Id action
    [HttpGet("{id}")]
    public ActionResult<Character> Get(int id)
    {
        var character = CharacterService.Get(id);

        if (character == null)
            return NotFound();

        return character;
    }

    // POST action
    [HttpPost]
    public IActionResult Create(Character character)
    {
        CharacterService.Add(character);
        return CreatedAtAction(nameof(Create), new { id = character.Id }, character);
    }

    //// PUT action
    //[HttpPut("{id}")]
    //public IActionResult Update(int id, Character character)
    //{
    //    // This code will update the character and return a result
    //}

    // DELETE action
    //[HttpDelete("{id}")]
    //public IActionResult Delete(int id)
    //{
    //    // This code will delete the character and return a result
    //}
}
