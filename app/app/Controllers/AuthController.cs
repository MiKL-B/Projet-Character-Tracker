using app.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;

namespace app.Controllers;

[ApiController]
[Route("[controller]/[action]")]
public class AuthController : ControllerBase
{
    private readonly CharacterTrackerContext _context;
    private readonly IConfiguration _configuration;

    public AuthController(CharacterTrackerContext context, IConfiguration configuration)
    {
        _context = context;
        _configuration = configuration;
    }

    // LOGIN USER
    [HttpPost]
    public async Task<ActionResult<Account>> Login(Account account)
    {
        var user = await _context.Accounts.FirstOrDefaultAsync(a => a.Username == account.Username);

        if (user == null) return NotFound();
        if (!VerifyPasswordHash(account.Password, user.PasswordHash, user.PasswordSalt))
        {
            return BadRequest("Wrong Password");
        }
        string token = CreateToken(account);

        return Ok(token);
    }

    // REGISTER ACCOUNT
    [HttpPost]
    public async Task<ActionResult<Account>> Register(Account account)
    {
        CreatePasswordHash(account.Password, out byte[] passwordHash, out byte[] passwordSalt);
        account.Password = null;
        account.PasswordHash = passwordHash;
        account.PasswordSalt = passwordSalt;
        _context.Accounts.Add(account);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetAccount), new { id = account.Id }, account);
    }

    public async Task<ActionResult<Account>> GetAccount(long id)
    {
        var account = await _context.Accounts.FindAsync(id);
        if (account == null) return NotFound();

        return account;
    }

    private string CreateToken(Account user)
    {
        List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Username)
            };
        var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
        var token = new JwtSecurityToken(claims: claims, expires: DateTime.Now.AddDays(1), signingCredentials: creds);
        var jwt = new JwtSecurityTokenHandler().WriteToken(token);

        return jwt;
    }

    private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
    {
        using (var hmac = new HMACSHA512())
        {
            passwordSalt = hmac.Key;
            passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
        }
    }

    private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
    {
        using (var hmac = new HMACSHA512(passwordSalt))
        {
            var computeHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));

            return computeHash.SequenceEqual(passwordHash);
        }
    }
}