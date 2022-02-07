import React, { Component } from "react";

export class ModificationEvent extends Component {
  static displayName = ModificationEvent.name;

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-md-3 border p-3">Changing Schema Options</div>
            <div className="col border p-3">
              <h1 className="d-flex justify-content-center p-5">
                Editing an event
              </h1>
              <form action="" method="post">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="nameEvent"
                    placeholder="name@example.com"
                  />
                  <label for="nameEvent">Name event</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="dateEvent"
                    placeholder="name@example.com"
                  />
                  <label for="dateEvent">Date event</label>
                </div>
                <div className="row">
                  <div className="col form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="personage1"
                      placeholder="name@example.com"
                    />
                    <label for="personage1" className="mx-3">
                      Personage 1
                    </label>
                  </div>

                  <div className="col form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="personage1"
                      placeholder="name@example.com"
                    />
                    <label for="personage2" className="mx-3">
                      Personage 2
                    </label>
                  </div>
                </div>
                <div className="col form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="dateEvent"
                    placeholder="name@example.com"
                  />
                  <label for="dateEvent">Date event</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="typeRelation"
                    placeholder="name@example.com"
                  />
                  <label for="typeRelation">Type of relationship</label>
                </div>
                <div className=" form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="forceRelation"
                    placeholder="name@example.com"
                  />
                  <label for="forceRelation">
                    Strength of the relationship
                  </label>
                </div>
                <div className="mb-3 border p-3">
                  <details>
                    <summary>Is public or not</summary>
                    <ul>
                      <li className="mb-1">Public</li>
                      <li className="mb-1">Private</li>
                      <li className="mb-1">Secret</li>
                    </ul>
                  </details>
                </div>

                <div className=" form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="relationReciproque"
                    placeholder="name@example.com"
                  />
                  <label for="relationReciproque">
                    Reciprocal relationship
                  </label>
                </div>
                <div className="d-grid">
                  <button
                    className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
