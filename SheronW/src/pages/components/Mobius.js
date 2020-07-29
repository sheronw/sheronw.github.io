import React, { Component } from "react";

export class Mobius extends Component {
  constructor(props) {
    super(props);
    this.info = props.info;
  }

  render() {
    return <div class="canvas-wrapper"></div>;
  }
}

export default Mobius;
