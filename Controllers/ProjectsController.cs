using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

using Statistics.Models;
using Statistics.Models.Abstract;

namespace WebApplicationBasic.Controllers
{
    [Route("api/[controller]")]
    public class ProjectsController : Controller
    {
        private IProjectRepository repository;

        public ProjectsController(IProjectRepository repository)
        {
            {
                this.repository = repository;
            }
        }

        [HttpGet("[action]")]
        public IEnumerable<Project> GetProjects()
        {
            var tt =repository.Projects;
            return tt;
        }

    }
}