
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{

    
    public class KitchenController : ApiController
    {

        public IHttpActionResult Get()
        {
            return Json("value1");
        }


        public int Post([FromBody]Ingredient i)
        {
            
                
                return Ingredient.addIngredient(i);
            
     
        }

    }
}