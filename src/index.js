import React from 'react';
import { Header } from './molecules';
import { Buttons, Inputs } from './templates/stories';

import './scss/argon.scss';

export default function ExampleComponent() {
  return (
    <div>
      <Header />
      <Buttons />
      <Inputs />
    </div>
  );
}
