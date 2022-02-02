using Microsoft.EntityFrameworkCore;

namespace app.Models;

public class CharacterTrackerContext : DbContext
{
  public CharacterTrackerContext (DbContextOptions<CharacterTrackerContext> options)
    : base(options)
  {
  }
  
  public DbSet<Account> Accounts { get; set; }
}