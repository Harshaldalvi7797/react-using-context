import React, { Component } from "react";
import CreateUser from "../../context/creator";

class Field extends Component {
  static contextType = CreateUser;
  render() {
    let data = this.context === "English" ? "username" : "TUMCHA NAV";
    return (
      <React.Fragment>
        <form>
          <label>{data}</label>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Here.."
              className="form-control"
            />
          </div>
        </form>
      </React.Fragment>
    );
  }
}
export default Field;
