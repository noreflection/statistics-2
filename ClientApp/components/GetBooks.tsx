import * as React from 'react';
import 'isomorphic-fetch';

interface GetBooksState {
    books: Book[]
}
interface Book {
    bookId: number,
    name: string,
    description: string
}

export class GetBooks extends React.Component<{}, GetBooksState>{
    constructor() {
        super();
        this.state = { books: [] };

        fetch('api/SampleData/GetBooks')
            .then(response => response.json() as Promise<Book[]>)
            .then(data => this.setState({ books: data }));
    }

    render() {
        return <div>
            <h1>Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {GetBooks.renderBooksTable(this.state.books)}
        </div>;
    }

    static renderBooksTable(books: Book[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Book id:</th>
                    <th>Book name:</th>
                    <th>Book desc:</th>
                </tr>
            </thead>
            <tbody>
                {books.map(book =>
                    <tr key={book.bookId}>
                        <td>{book.bookId}</td>
                        <td>{book.name}</td>
                        <td>{book.description}</td>
                    </tr>
                )}
            </tbody>
        </table>;
    }


}