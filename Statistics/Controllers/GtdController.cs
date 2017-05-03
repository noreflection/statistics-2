using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Statistics.Controllers
{
    public class GtdController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}