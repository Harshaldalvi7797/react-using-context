import React, { Component } from "react";

class Field extends Component {
  render() {
    return (
      <React.Fragment>
        <form>
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
