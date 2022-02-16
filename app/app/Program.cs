using Microsoft.EntityFrameworkCore;
using app.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<CharacterTrackerContext>(opt =>
  opt.UseNpgsql("Server=localhost;Port=5432;Database=characterTracker;User Id=postgres;Password=azerty54"));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
  name: "default",
  pattern: "api/{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");
;

app.Run();