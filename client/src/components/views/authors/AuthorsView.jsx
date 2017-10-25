import React, { Component } from "react";
import { Container, Segment, List, Header } from "semantic-ui-react";
//import { Menu } from 'semantic-ui-react'
import AuthorsTable from "./AuthorsTable";
export default class AuthorsView extends Component {
  render() {
    return (
      <Container id="introduction-page">
        <Segment clearing textAlign="center">
          <Header as="h1" textAlign="center">
            Authors
            <Header.Subheader>Authors management</Header.Subheader>
          </Header>
        </Segment>

        <Segment padded>
          <Header as="h2" dividing>
            Introduction
          </Header>
          <p>
            Page with pagination{" "}
            <a href="#">Semantic UI</a> .
          </p>
          <List>
            <List.Item icon="check" content="jQuery Free" />
            <List.Item icon="check" content="Declarative API" />
            <List.Item icon="check" content="Augmentation" />
            <List.Item icon="check" content="Shorthand Props" />
            <List.Item icon="check" content="Sub Components" />
            <List.Item icon="check" content="Auto Controlled State" />
          </List>
          <p>
            Installation instructions are provided in the{" "}
            {/* <Link to="/usage">Usage</Link> section. */}
          </p>

          <AuthorsTable />
        </Segment>
      </Container>
    );
  }
}
