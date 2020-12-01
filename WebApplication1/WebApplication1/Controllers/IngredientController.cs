
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{

    
    public class IngredientController : ApiController
    {

        public List<Ingredient> Get()
        {
            return Ingredient.getIngredient();
        }


        public int Post([FromBody]Ingredient i)
        {
            
                
                return Ingredient.addIngredient(i);
            
     
        }

    }
}