import React, { Component } from "react";

export class SignUp extends Component {
  static displayName = SignUp.name;

  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange_name = this.handleChange_name.bind(this);
    this.handleChange_email = this.handleChange_email.bind(this);
    this.handleChange_pw = this.handleChange_pw.bind(this);
    this.handleChange_confirme_pw = this.handleChange_confirme_pw.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange_name(event) {
    this.setState({ value_name: event.target.value });
  }

  handleChange_email(event) {
    this.setState({ value_email: event.target.value });
  }

  handleChange_pw(event) {
    this.setState({ value_pw: event.target.value });
  }

  handleChange_confirme_pw(event) {
    this.setState({ value_confirme_pw: event.target.value });
  }

  handleSubmit(event) {
    alert(
      "Le nom a été soumis : " +
        this.state.value_name +
        " " +
        this.state.value_email +
        " " +
        this.state.value_pw +
        " " +
        this.state.value_confirme_pw
    );
    event.preventDefault();
  }

  render() {
    return (
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Inscription</h3>
                    <div className="erreur" />
                    <form id="form-login" onSubmit={this.handleSubmit}>
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          value_name={this.state.value}
                          onChange={this.handleChange_name}
                          className="form-control"
                          id="name"
                          placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">Name</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          value_email={this.state.value}
                          onChange={this.handleChange_email}
                          className="form-control"
                          id="email"
                          placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">Email address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          value_pw={this.state.value}
                          onChange={this.handleChange_pw}
                          className="form-control"
                          id="password"
                          placeholder="Password"
                          minLength="8"
                        />
                        <label htmlFor="floatingPassword">Password</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          value_confirme_pw={this.state.value}
                          onChange={this.handleChange_confirme_pw}
                          className="form-control"
                          id="confirme-password"
                          placeholder="Password"
                          minLength="8"
                        />
                        <label htmlFor="floatingPassword">
                          Confirme Password
                        </label>
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
