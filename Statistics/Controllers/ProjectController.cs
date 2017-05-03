using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Statistics.Models;

namespace Statistics.Controllers
{
    public class ProjectController: Controller
    {
        private IProjectRepository repository;

        public ProjectController(IProjectRepository repository)
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
                repository.SaveProject(project);
            }

            return View(project);
        }
    }
}
