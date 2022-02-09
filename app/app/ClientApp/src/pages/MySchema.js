import React, { Component } from "react";

export class MySchema extends Component {
  static displayName = MySchema.name;

  render() {
    return (
      <div>
        <div className="container-fluid">
          <h3 className="d-flex justify-content-center p-5">My schema</h3>
          <div className="row ">
            <div className="col-md-3 border p-3">Schema option</div>
            <div className="col border p-3">
              <ul className="list-group">
                <li className="list-group-item">schema 1</li>
                <li className="list-group-item">schema 2</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="cy" />
      </div>
    );
  }
}
