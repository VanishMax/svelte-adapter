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
    <section className="react">
      <span>React button</span>
      <Button title="React button"/>
    </section>
  );
}
