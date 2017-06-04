import * as React from 'react';
import 'isomorphic-fetch';

interface TestState {
    currentCount: number;
    persons: Person[];
    fetchStatus: string;
    loading: boolean;
}
interface Person {
    name: string;
    id: number;
    status: string;
}


export class Test extends React.Component<{}, TestState>{
    constructor() {
        super();
        this.state = { persons: [], fetchStatus: "hey", currentCount: 0, loading: false };
        fetch('api/SampleData/GetPersons')
            .then(response => response.json() as Promise<Person[]>)
            // .then(function (data) {
            //     this.setState({ persons: data })
            //})
            .then(data=>this.setState({persons:data}))
        .then(this.onFulfilled, this.onRejected)
    }

    render() {
        let personsContents = this.renderPersonsTable(this.state.persons);
        let counterContents = this.viewCounter();
        return <div>
            <h1>Test</h1>
            <p>Show persons in table</p>
            {personsContents}

            <p>View Counter:</p>
            <b>{this.state.currentCount}</b>

            {counterContents}
            <p>Error message:</p>
            {this.state.fetchStatus}

        </div>

    }

    private renderPersonsTable(persons: Person[]) {
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

    private viewCounter() {
        return <div>
            <button type="button" className="btn btn-secondary" onClick={() => this.incrementCounter()}>Up</button>
            <button className="btn btn-secondary" onClick={() => this.decrementCounter()}>Down</button>
        </div>
    }

    private incrementCounter() {
        this.setState({ currentCount: this.state.currentCount + 1 })
    }

    private decrementCounter() {
        this.setState({ currentCount: this.state.currentCount - 1 })
    }

    private onFulfilled(result) {
        alert("result");
        this.setState({ fetchStatus: result.message });
    }

    private onRejected(reject) {
        alert(reject.message);
        debugger;
        this.setState({ fetchStatus: reject.message });
    }

}