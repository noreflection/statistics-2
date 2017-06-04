using System.Collections.Generic;

namespace Statistics.Models
{
    public interface IProjectController
    {
        IEnumerable<Project> Projects { get; }

        void SaveProject(Project project);
    }
}