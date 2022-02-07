import React, { Component } from "react";

export class ShowSearch extends Component {
  static displayName = ShowSearch.name;

  render() {
    return (
      <div>
        <div className="container-fluid">
          <h3 className="d-flex justify-content-center p-5">Search display</h3>

          <div className="row ">
            <div className="col-md-3 border p-3">Search menu and filter</div>
            <div className="col border p-3">
              <ul className="list-group">
                <li className="list-group-item">Result of the research 1</li>
                <li className="list-group-item">Result of the research 2</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
