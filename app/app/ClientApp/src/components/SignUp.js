import React, { Component } from "react";

export class SignUp extends Component {
  static displayName = SignUp.name;

  render() {
    return (
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Inscription</h3>
                    <div className="erreur"></div>
                    <form id="form-login" action="" method="post">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="name@example.com"
                        />
                        <label for="floatingInput">Name</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="name@example.com"
                        />
                        <label for="floatingInput">Email address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Password"
                          minlength="8"
                        />
                        <label for="floatingPassword">Password</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Password"
                          minlength="8"
                        />
                        <label for="floatingPassword">Confirme Password</label>
                      </div>
                      <div className="d-grid">
                        <button
                          className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                          type="submit"
                        >
                          Sign up
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
    );
  }
}
