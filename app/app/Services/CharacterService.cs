using app.Models;
namespace app.Services;

public static class CharacterService
{
    static List<Character> Characters { get; }
    static int nextId = 3;
    static CharacterService()
    {
        Characters = new List<Character>
        {
            new Character { Id = 1, FirstName = "Paul", LastName="Jean" },
            new Character { Id = 2, FirstName = "Michel", LastName="Dupont" },
        };
    }

        public static List<Character> GetAll() => Characters;
        public static Character? Get(int id) => Characters.FirstOrDefault(c => c.Id == id);
        public static void Add(Character character)
        {
            character.Id = nextId++;
            Characters.Add(character);
        }
        public static void Delete(int id)
        {
            var character = Get(id);
            if(character is null)
            {
                return;
            }
            Characters.Remove(character);

        }
        public static void Update(Character character)
        {
            var index = Characters.FindIndex(c =>c.Id == character.Id);
            if(index == -1)
            {
                return;
            }
            Characters[index] = character;
        }
    
}