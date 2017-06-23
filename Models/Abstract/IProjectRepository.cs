using System.Collections.Generic;

namespace Statistics.Models
{
    public interface IProjectRepository
    {
        IEnumerable<Project> Projects { get; }

        void SaveProject(Project project);
    }
}