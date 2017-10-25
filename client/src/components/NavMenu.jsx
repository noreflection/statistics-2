import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default class NavMenu extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted vertical stackable fixed="left">
        <NavLink to="/home">
          <Menu.Item>
            <img src="/recourses/logo.png" alt="" />
          </Menu.Item>
        </NavLink>

        <NavLink to="/home">
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
        </NavLink>

        <NavLink to="/authors">
          <Menu.Item
            name="authors"
            active={activeItem === "authors"}
            onClick={this.handleItemClick}
          />
        </NavLink>

        <NavLink to="/projects">
          <Menu.Item
            name="projects"
            active={activeItem === "projects"}
            onClick={this.handleItemClick}
          />
        </NavLink>
      </Menu>
    );
  }
}
