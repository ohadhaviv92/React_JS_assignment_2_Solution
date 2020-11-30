using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace server.Models
{
    public class Ingredient
    {
        int id;
        string name;
        string image;
        int calories;

        public Ingredient(int id, string name, string image, int calories)
        {
            
            this.name = name;
            this.image = image;
            this.calories = calories;
        }

        public int Id { get => id; set => id = value; }
        public string Name { get => name; set => name = value; }
        public string Image { get => image; set => image = value; }
        public int Calories { get => calories; set => calories = value; }


        public static int addIngredient(Ingredient i)
        {
            DBservices db = new DBservices();
            return db.insert(i);

        }

        public static Ingredient getIngredient()
        {
            return new Ingredient(1, "aa", "aaa", 10);
        }
    }
}