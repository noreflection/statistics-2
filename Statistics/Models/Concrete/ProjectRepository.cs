using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Statistics.Models.Concrete
{
    public class ProjectRepository : IProjectRepository
    {
        private ApplicationDbContext context { get; }

        public ProjectRepository(ApplicationDbContext context)
        {
            this.context = context;
        }

        public IEnumerable<Project> Projects => context.Projects;


        public void SaveProject(Project project)
        {
            context.Projects.Add(new Project{Name = project.Name});
            context.SaveChanges();
        }

    }
}