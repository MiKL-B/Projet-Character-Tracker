using Microsoft.EntityFrameworkCore;
using Npgsql;

namespace app.Models;

public class CharacterTrackerContext : DbContext
{
  public CharacterTrackerContext (DbContextOptions<CharacterTrackerContext> options)
    : base(options)
  {
  }
  
  public DbSet<Account> Accounts { get; set; }
  public DbSet<Event> Events { get; set; }
  public DbSet<Family> Families { get; set; }
  public DbSet<GroupUser> GroupUsers { get; set; }
  public DbSet<Permission> Permissions { get; set; }
  public DbSet<Personage> Personages { get; set; }
  public DbSet<Privacy> Privacies { get; set; }
  public DbSet<Race> Races { get; set; }
  public DbSet<Relation> Relations { get; set; }
  public DbSet<Schema> Schemas { get; set; }
}