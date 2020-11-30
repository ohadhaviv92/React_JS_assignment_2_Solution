using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Ingredient
    {
        
        string name;
        string image;
        int calories;

        public Ingredient(string name, string image, int calories)
        {
            
            this.name = name;
            this.image = image;
            this.calories = calories;
        }

        
        public string Name { get => name; set => name = value; }
        public string Image { get => image; set => image = value; }
        public int Calories { get => calories; set => calories = value; }


        public static int addIngredient(Ingredient i)
        {
            DBservices db = new DBservices();
            return db.insert(i);

        }

    }
}