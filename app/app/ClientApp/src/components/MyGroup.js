import React, { Component } from "react";

export class MyGroup extends Component {
  static displayName = MyGroup.name;

  render() {
    return (
      <div className="container-fluid">
        <h3 className="d-flex justify-content-center p-5">My groups</h3>
        <div className="row ">
          <div className="col-md-3 border p-3">Groups option</div>
          <div className="col border p-3">
            <ul className="list-group">
              <li className="list-group-item">schema 1</li>
              <li className="list-group-item">schema 2</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
