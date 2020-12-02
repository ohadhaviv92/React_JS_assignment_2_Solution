using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class DishRecipeController : ApiController
    {

        public List<DishRecipe> Get()
        {
            return DishRecipe.getAllRecipe();
        }

        public int Post([FromBody] DishRecipe d)
        {
           

            try
            {
                DishRecipe.addDishRecipe(d);
                return 1;
            }
            catch(Exception ex)
            {
                throw ex;
            }


        }
    }
}