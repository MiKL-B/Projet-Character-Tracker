using Microsoft.AspNetCore.Mvc;
using app.Models;
using Microsoft.EntityFrameworkCore;

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

  // GET all action
  [HttpGet]
  // public async Task<ActionResult<IEnumerable<Account>>> GetAll() =>
  public async Task<ActionResult<List<Account>>> GetAll() =>
    await _context.Accounts.ToListAsync();
}