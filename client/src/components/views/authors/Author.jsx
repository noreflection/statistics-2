import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
export default class Author extends Component {
  render() {
    return (
      <Table.Row>
        {/* <Table.Cell>
              <Label ribbon>First</Label>
            </Table.Cell> */}
        <Table.Cell>{this.props.id}</Table.Cell>
        <Table.Cell>{this.props.name}</Table.Cell>
        <Table.Cell>{this.props.count}</Table.Cell>
      </Table.Row>
    );
  }
}
