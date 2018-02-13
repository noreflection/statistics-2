import React, { Component } from 'react';
import { Icon, Menu, Table } from 'semantic-ui-react';
import Author from './Author';

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
  render() {
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
            {this.state.authors.map(author => {
              return (
                <Author
                  id={author.id}
                  name={author.name}
                  count={author.count}
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
}
