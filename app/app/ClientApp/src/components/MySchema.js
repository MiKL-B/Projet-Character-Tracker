import React, { Component } from "react";
import "./MySchema.css";
export class MySchema extends Component {
  static displayName = MySchema.name;

  render() {
    return (
      <div>
        <div class="container-fluid">
          <h1 class="d-flex justify-content-center p-5">Mes schéma</h1>

          <div class="row ">
            <div class="col-md-3 border p-3">Option du schéma</div>
            <div class="col border p-3">
              <ul class="list-group">
                <li class="list-group-item">Schéma 1</li>
                <li class="list-group-item">Schéma 2</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
