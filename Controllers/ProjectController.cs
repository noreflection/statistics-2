using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Statistics.Models;
using Statistics.Models.Abstract;

namespace Statistics.Controllers
{
    public class ProjectController: Controller
    {
        private ISampleDataController repository;

        public ProjectController(ISampleDataController repository)
        {
            this.repository = repository;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult AddProject(Project project)
        {
            if (ModelState.IsValid)
            {
                //repository.SaveProject(project);
            }

            return View(project);
        }
    }
}
