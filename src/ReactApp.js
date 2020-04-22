import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import SvelteButton from './Button.svelte';
import toReact from '../react';

const Button = toReact(
  SvelteButton,
  {},
  'div',
);


export default function () {
  return (
    <div className="App">
      <Button title="Some button"/>
    </div>
  );
}
