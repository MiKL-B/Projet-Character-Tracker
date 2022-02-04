using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using app.Models;

namespace app.Controllers;

[ApiController]
[Route("[controller]")]
public class AccountController : ControllerBase
{
  private readonly CharacterTrackerContext _context;

  public AccountController(CharacterTrackerContext context)
  {
    _context = context;
  }

  // GET ALL ACCOUNTS
  [HttpGet]
  public async Task<ActionResult<List<Account>>> GetAll() =>
    await _context.Accounts.ToListAsync();

  // GET A SPECIFIC ACCOUNT
  [HttpGet("{id:long}")]
  public async Task<ActionResult<Account>> GetAccount(long id)
  {
    var account = await _context.Accounts.FindAsync(id);
    if (account == null) return NotFound();

    return account;
  }
  
  // UPDATE ACCOUNT
  [HttpPut("{id:long}")]
  public async Task<IActionResult> UpdateAccount(long id, Account account)
  {
    if (id != account.Id) return BadRequest();

    _context.Entry(account).State = EntityState.Modified;

    try
    {
      await _context.SaveChangesAsync();
    }
    catch (DbUpdateConcurrencyException)
    {
      if (!AccountExists(id)) return NotFound();
      throw;
    }

    return NoContent();
  }

  // REGISTER ACCOUNT
  [HttpPost]
  public async Task<ActionResult<Account>> Register(Account account)
  {
    _context.Accounts.Add(account);
    await _context.SaveChangesAsync();

    return CreatedAtAction(nameof(GetAccount), new {id = account.Id}, account);
  }

  // DELETE ACCOUNT
  [HttpDelete]
  public async Task<IActionResult> Delete(Account acc)
  {
    var account = await _context.Accounts.FindAsync(acc.Id);
    if (account == null) return NotFound();
    
    _context.Accounts.Remove(account);
    await _context.SaveChangesAsync();
    
    return NoContent();
  }
  
  private bool AccountExists(long id)
  {
    return _context.Accounts.Any(e => e.Id == id);
  }
}