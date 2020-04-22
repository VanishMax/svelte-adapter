import React from "react";
import ReactDOM from "react-dom";
import App from "./ReactApp";

import Vue from "vue";
import App2 from "./VueApp";

import "./index.css";

ReactDOM.render(<App />, document.getElementById("react"));

new Vue({
  el: "#vue",
  template: "<App2/>",
  components: { App2 }
});
