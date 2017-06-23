import * as React from 'react';
import 'isomorphic-fetch';

interface ProjectsState {
    projects: Project[]
}

interface Project {
    projectId: number;
    startDate: string;
    endDate: string;
}

export class Projects extends React.Component<{}, ProjectsState>{
    constructor() {
        super();
        this.state = { projects: [] }

        fetch('api/Projects/GetProjects')
            .then(responce => responce.json() as Promise<Project[]>)
            .then(data => this.setState({ projects: data }));
    }

    render() {
        return <div>
            <h1>Projects list</h1>
            {Projects.renderProjectsTable(this.state.projects)}
        </div>
    }

    static renderProjectsTable(projects: Project[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>project id:</th>
                    <th>project startDate:</th>
                    <th>project endtDate:</th>
                </tr>
            </thead>
            <tbody>
                {projects.map(project =>
                    <tr key={project.projectId}>
                        <td>{project.projectId}</td>
                        <td>{project.startDate}</td>
                        <td>{project.endDate}</td>
                    </tr>
                )}
            </tbody>
        </table>
    }
}