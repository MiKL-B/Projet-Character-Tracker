import React, { Component } from "react";

export class Admin extends Component {
  static displayName = Admin.name;

  render() {
    return (
      <div>
        <div class="container-fluid p-5">
          <div class="row">
            {/* sidebar */}
            <div class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
              <div class="position-sticky pt-3">
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link active" href="/#">Dashboard</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/#">Dashboard</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/#">Dashboard</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/#">Dashboard</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/#">Dashboard</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* main dashboard */}
            <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1>Dashboard</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                  <div class="btn-group me-2">
                    <button class="btn btn-sm btn-outline-secondary">
                      share
                    </button>
                    <button class="btn btn-sm btn-outline-secondary">
                      export
                    </button>
                  </div>
                </div>
              </div>

              <div class="table-reponsive">
                <table class="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">header</th>
                      <th scope="col">header</th>
                      <th scope="col">header</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                    </tr>
                    <tr>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                    </tr>
                    <tr>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                    </tr>
                    <tr>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                    </tr>
                    <tr>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                    </tr>
                    <tr>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
