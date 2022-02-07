import React, { Component } from "react";

export class SettingsUser extends Component {
  static displayName = SettingsUser.name;

  render() {
    return (
      <div>
        <div className="container-fluid">
          <h3 className="d-flex justify-content-center p-5">My options</h3>

          <div className="row ">
            <div className="col-md-3 border p-3">Groups option</div>
            <div className="col border p-3"></div>
          </div>
        </div>
      </div>
    );
  }
}
