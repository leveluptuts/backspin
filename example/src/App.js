import React, { Component } from 'react';

import ExampleComponent from 'backspin';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Backspin</h1>
        <h3>Admin Toolbar</h3>
        <ExampleComponent text="Modern React component module" />
      </div>
    );
  }
}
