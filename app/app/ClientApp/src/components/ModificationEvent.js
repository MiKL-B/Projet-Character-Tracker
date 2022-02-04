import React, { Component } from "react";

export class ModificationEvent extends Component {
  static displayName = ModificationEvent.name;

  render() {
    return (
      <div>
        <div class="container-fluid">
          <div class="row ">
            <div class="col-md-3 border p-3">Changing Schema Options</div>
            <div class="col border p-3">
              <h1 class="d-flex justify-content-center p-5">
                Editing an event
              </h1>
              <form action="" method="post">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="nameEvent"
                    placeholder="name@example.com"
                  />
                  <label for="nameEvent">Name event</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="dateEvent"
                    placeholder="name@example.com"
                  />
                  <label for="dateEvent">Date event</label>
                </div>
                <div class="row">
                  <div class="col form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="personage1"
                      placeholder="name@example.com"
                    />
                    <label for="personage1" class="mx-3">
                      Personage 1
                    </label>
                  </div>

                  <div class="col form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="personage1"
                      placeholder="name@example.com"
                    />
                    <label for="personage2" class="mx-3">
                      Personage 2
                    </label>
                  </div>
                </div>
                <div class="col form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="dateEvent"
                    placeholder="name@example.com"
                  />
                  <label for="dateEvent">Date event</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="typeRelation"
                    placeholder="name@example.com"
                  />
                  <label for="typeRelation">Type of relationship</label>
                </div>
                <div class=" form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="forceRelation"
                    placeholder="name@example.com"
                  />
                  <label for="forceRelation">
                    Strength of the relationship
                  </label>
                </div>
                <div class="mb-3 border p-3">
                  <details>
                    <summary>Is public or not</summary>
                    <ul>
                      <li class="mb-1">Public</li>
                      <li class="mb-1">Private</li>
                      <li class="mb-1">Secret</li>
                    </ul>
                  </details>
                </div>

                <div class=" form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="relationReciproque"
                    placeholder="name@example.com"
                  />
                  <label for="relationReciproque">
                    Reciprocal relationship
                  </label>
                </div>
                <div class="d-grid">
                  <button
                    class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
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
