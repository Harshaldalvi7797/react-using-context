import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Creator from "./components/creator/creator";
import ContextUser from "./context/creator";
import CreateUser from "./context/creator";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: ""
    };
  }
  changeValue = lang => {
    this.setState({ language: lang });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => this.changeValue("English")}
            >
              English
            </button>
            &nbsp;
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={() => this.changeValue("Hindi")}
            >
              Hindi
            </button>
          </div>
        </div>
        <CreateUser.Provider value={this.state.language}>
          {" "}
          <Creator />
        </CreateUser.Provider>
      </div>
    );
  }
}
export default App;
