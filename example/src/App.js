import React, { Component } from 'react';

import { Header } from 'design-system-react';
import { Buttons, Inputs } from './templates/stories';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Buttons />
        <Inputs />
      </div>
    )
  }
}
