import React, { Component } from "react";

export class FormCreateSchema extends Component {
  static displayName = FormCreateSchema.name;

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center p-5">
          <h1>Schema creation form</h1>
        </div>

        <div className="container ps-md-0 ">
          <div className="row g-0 ">
            <div className="col-md-8 col-lg-6 mx-auto">
              <div className="d-flex  align-items-center py-5">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto ">
                      <div className="erreur"></div>

                      <form id="form-login" action="" method="post">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="nameSchema"
                            placeholder="name@example.com"
                          />
                          <label for="nameSchema">Name schema</label>
                        </div>

                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="descSchema"
                            placeholder="desc schema"
                            minlength="8"
                          />
                          <label for="descSchema">Description schema</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="imageSchema"
                            placeholder="img schema"
                            minlength="8"
                          />
                          <label for="imageSchema">Image schema</label>
                        </div>
                        <div className="form-check mb-3">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="readableDate"
                            placeholder="readable date"
                          />
                          <label
                            className="form-check-label"
                            for="readableDate"
                          >
                            Readable date
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
