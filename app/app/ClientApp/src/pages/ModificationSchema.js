import React, { Component } from "react";

export class ModificationSchema extends Component {
  static displayName = ModificationSchema.name;

  render() {
    return (
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-md-3 border p-3">Modification schema option</div>
          <div className="col border p-3">
            <h3 className="d-flex justify-content-center p-5">
              List of the different events of the schema
            </h3>
            <ul className="list-group">
              <li className="list-group-item">Event 1</li>
              <li className="list-group-item">Event 2</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
