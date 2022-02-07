import React, { Component } from "react";

export class MyGroup extends Component {
  static displayName = MyGroup.name;

  render() {
    return (
      <div>
        <div class="container-fluid">
          <h3 class="d-flex justify-content-center p-5">My groups</h3>

          <div class="row ">
            <div class="col-md-3 border p-3">Groups option</div>
            <div class="col border p-3">
              <ul class="list-group">
                <li class="list-group-item">schema 1</li>
                <li class="list-group-item">schema 2</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
