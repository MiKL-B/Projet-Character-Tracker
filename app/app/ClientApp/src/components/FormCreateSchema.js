import React, { Component } from "react";

export class FormCreateSchema extends Component {
  static displayName = FormCreateSchema.name;

  render() {
    return (
      <div>
        <div class="d-flex justify-content-center p-5">
          <h1>Formulaire de création d'un schema</h1>
        </div>

        <div class="container ps-md-0 ">
          <div class="row g-0 ">
            <div class="col-md-8 col-lg-6 mx-auto">
              <div class="d-flex  align-items-center py-5">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-9 col-lg-8 mx-auto ">
                      <div class="erreur"></div>

                      <form id="form-login" action="" method="post">
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="nameSchema"
                            placeholder="name@example.com"
                          />
                          <label for="nameSchema">Name schema</label>
                        </div>

                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="descSchema"
                            placeholder="desc schema"
                            minlength="8"
                          />
                          <label for="descSchema">Description schema</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="imageSchema"
                            placeholder="img schema"
                            minlength="8"
                          />
                          <label for="imageSchema">Image schema</label>
                        </div>
                        <div class="form-check mb-3">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="readableDate"
                            placeholder="readable date"
                          />
                          <label class="form-check-label" for="readableDate">
                            Readable date
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
