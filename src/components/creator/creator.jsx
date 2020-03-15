import React, { Component } from "react";
import Field from "../field/field";
import Button from "../button/button";

class Creator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Field />
            <Button />
          </div>
        </div>
      </div>
    );
  }
}
export default Creator;
