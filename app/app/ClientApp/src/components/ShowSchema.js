import React, { Component } from "react";

export class ShowSchema extends Component {
  static displayName = ShowSchema.name;

  render() {
    return (
      <div>
        <div class="container-fluid p-5">
          <h3 class="d-flex justify-content-center p-5">Show schema</h3>

          <div class="row">
            <div class="col-md-3 border p-3">Show schema option</div>
            <div class="col border p-3">
              {/* name event */}
              <div class="d-flex justify-content-around">
                <h4>Name Event</h4>
                <div>
                  <span>&lt;</span> <span>2 / 12</span>
                  <span>&gt;</span>
                </div>
              </div>

              {/* event */}
              <div class="">
                <img
                  class="rounded d-block mx-auto pt-5"
                  src="https://via.placeholder.com/300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
