import React from 'react';
import ReactDOM from 'react-dom';
import ReactApp from './ReactApp';

import Vue from 'vue';
import VueApp from './VueApp';

import './index.css';

ReactDOM.render(<ReactApp />, document.getElementById('react'));

new Vue({
  el: '#vue',
  template: '<VueApp />',
  components: {VueApp},
});
