import React, { Component } from "react";

export class ShowSearch extends Component {
  static displayName = ShowSearch.name;

  render() {
    return (
      <div>
        <div class="container-fluid">
          <h3 class="d-flex justify-content-center p-5">Search display</h3>

          <div class="row ">
            <div class="col-md-3 border p-3">Search menu and filter</div>
            <div class="col border p-3">
              <ul class="list-group">
                <li class="list-group-item">Result of the research 1</li>
                <li class="list-group-item">Result of the research 2</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
