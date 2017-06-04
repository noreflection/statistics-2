import * as React from 'react';
import 'isomorphic-fetch';

interface ViewPersonsState {
    persons: Person[],
    loading: boolean
}
interface Person {
    name: string;
    id: number;
    status: string;
}

export class ViewPersons extends React.Component<{}, ViewPersonsState>{
    constructor() {
        super();
        this.state = { persons: [], loading: false };

        fetch('api/SampleData/GetPersons')
            .then(response => response.json() as Promise<Person[]>)
            .then(function (data) { this.setState({ persons: data })
         })
    }



    render() {
        let contents = this.state.loading ? <p>Loading...</p> :
            ViewPersons.renderPersonsTable(this.state.persons);

        return <div>
            <h1>Persons Table:</h1>
            {contents}
        </div>
    }

    private static renderPersonsTable(persons: Person[]) {
        return <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Id</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {persons.map(person =>
                    <tr key={person.id}>
                        <td>{person.name}</td>
                        <td>{person.id}</td>
                        <td>{person.status}</td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}
