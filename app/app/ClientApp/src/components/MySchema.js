import React, { Component } from "react";

export class MySchema extends Component {
  static displayName = MySchema.name;

  render() {
    return (
      <div>
        <div class="container-fluid">
          <h3 class="d-flex justify-content-center p-5">My schema</h3>

          <div class="row ">
            <div class="col-md-3 border p-3">schema option</div>
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
