import React, { Component } from "react";
import CreateUser from "../../context/creator";

class Button extends Component {
  static contextType = CreateUser;
  render() {
    console.log(this.context);
    let data = this.context === "English" ? "username" : "NAMM";
    console.log(data);
    return (
      <React.Fragment>
        <button type="button" className="btn btn-danger">
          {data}
        </button>
      </React.Fragment>
    );
  }
}
export default Button;
