using Microsoft.EntityFrameworkCore;

namespace app.Models;

public class CharacterTrackerContext : DbContext
{
  public CharacterTrackerContext (DbContextOptions<CharacterTrackerContext> options)
    : base(options)
  {
  }
  
  public DbSet<Account> Accounts { get; set; }  = null!;
  public DbSet<Event> Events { get; set; } = null!;
  public DbSet<Family> Families { get; set; } = null!;
  public DbSet<GroupUser> GroupUsers { get; set; } = null!;
  public DbSet<Permission> Permissions { get; set; } = null!;
  public DbSet<Personage> Personages { get; set; } = null!;
  public DbSet<Privacy> Privacies { get; set; } = null!;
  public DbSet<Race> Races { get; set; } = null!;
  public DbSet<Relation> Relations { get; set; } = null!;
  public DbSet<Schema> Schemas { get; set; } = null!;
}