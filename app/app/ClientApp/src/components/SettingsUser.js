import React, { Component } from "react";

export class SettingsUser extends Component {
  static displayName = SettingsUser.name;

  render() {
    return (
      <div>
        <div class="container-fluid">
          <h3 class="d-flex justify-content-center p-5">My options</h3>

          <div class="row ">
            <div class="col-md-3 border p-3">Groups option</div>
            <div class="col border p-3"></div>
          </div>
        </div>
      </div>
    );
  }
}
