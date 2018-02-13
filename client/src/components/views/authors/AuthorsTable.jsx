import React, { Component } from 'react';
import { Icon, Menu, Table } from 'semantic-ui-react';
import Author from './Author';
import authorsStore from './AuthorsStore';

import { inject, observer } from 'mobx-react';

@inject('authorsStore')
@observer
export default class AuthorsTable extends Component {
  constructor() {
    super();
    this.state = {
      authors: [
        {
          id: '1',
          name: 'name1',
          count: 'count1'
        },
        {
          id: '2',
          name: 'name2',
          count: '2'
        }
      ]
    };
  }

  componentDidMount() {
    //this.fetchAuthors();
    this.props.authorsStore.fetchAuthors();
    console.log(11, this.props.authorsStore.authors);
  }

  render() {
    const store = this.props.authorsStore;
    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Authors ID</Table.HeaderCell>
              <Table.HeaderCell>Authors Name</Table.HeaderCell>
              <Table.HeaderCell>Books Count</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {store.authors.map(author => {
              return (
                <Author
                  id={author.authorId}
                  name={author.authorName}
                  count={author.booksCount}
                />
              );
            })}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="3">
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="left chevron" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a">2</Menu.Item>
                  <Menu.Item as="a">3</Menu.Item>
                  <Menu.Item as="a">4</Menu.Item>
                  <Menu.Item as="a" icon>
                    <Icon name="right chevron" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    );
  }

  async fetchAuthors() {
    await fetch('http://localhost:5001/api/test')
      .then(response => response.json())
      .then(data => {
        console.log('data', data);
        this.setState({ authors: data, loading: false });
        console.log('state', this.state);
      });
  }
}
