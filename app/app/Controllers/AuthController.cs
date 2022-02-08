using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using app.Models;

namespace app.Controllers;

[ApiController]
[Route("[controller]/[action]")]
public class AuthController : ControllerBase
{
  private readonly CharacterTrackerContext _context;

  public AuthController(CharacterTrackerContext context)
  {
    _context = context;
  }

  // LOGIN USER
  [HttpPost]
  public async Task<ActionResult<Account>> Login(Account account)
  {
    var user = await _context.Accounts.FirstOrDefaultAsync(a => a.Username == account.Username);
    if (user == null) return NotFound();
    if (user.Password != account.Password) return ValidationProblem();
    
    return user;
  }

  // REGISTER ACCOUNT
  [HttpPost]
  public async Task<ActionResult<Account>> Register(Account account)
  {
    _context.Accounts.Add(account);
    await _context.SaveChangesAsync();

    return CreatedAtAction(nameof(GetAccount), new {id = account.Id}, account);
  }

  public async Task<ActionResult<Account>> GetAccount(long id)
  {
    var account = await _context.Accounts.FindAsync(id);
    if (account == null) return NotFound();

    return account;
  }
}