import React, { Component } from "react";

export class ModificationSchema extends Component {
  static displayName = ModificationSchema.name;

  render() {
    return (
      <div>
        <div class="container-fluid p-5">
          <div class="row">
            <div class="col-md-3 border p-3">Modification schema option</div>
            <div class="col border p-3">
              <h3 class="d-flex justify-content-center p-5">
                List of the different events of the schema
              </h3>
              <ul class="list-group">
                <li class="list-group-item">Event 1</li>
                <li class="list-group-item">Event 2</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
