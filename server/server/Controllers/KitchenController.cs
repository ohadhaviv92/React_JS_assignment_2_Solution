using server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

using System.Net.Http;


namespace server.Controllers
{
    public class KitchenController : Controller
    {

        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }


    }
}