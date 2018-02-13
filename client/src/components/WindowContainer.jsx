import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomeView from './views/home/HomeView';
import AuthorsView from './views/authors/AuthorsView';

export default class WindowContainer extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={HomeView} />

        <Route exact path="/home" component={HomeView} />
        <Route exact path="/authors" component={AuthorsView} />
      </div>
    );
  }
}
