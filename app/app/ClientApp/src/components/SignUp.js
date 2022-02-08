import React, { Component } from "react";

export class SignUp extends Component {
  static displayName = SignUp.name;

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  static Input(type, value, name, onChange, label) {
    return (
      <div className="form-floating mb-3">
        <input
          type={type}
          value={value}
          onChange={onChange}
          className="form-control"
          placeholder=""
          name={name}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    );
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
                      {SignUp.Input(
                        "text",
                        this.state.name,
                        "name",
                        this.handleInputChange,
                        "Name"
                      )}
                      {SignUp.Input(
                        "email",
                        this.state.email,
                        "email",
                        this.handleInputChange,
                        "Email"
                      )}
                      {SignUp.Input(
                        "password",
                        this.state.password,
                        "password",
                        this.handleInputChange,
                        "Password"
                      )}
                      {SignUp.Input(
                        "password",
                        this.state.confirmPassword,
                        "confirmPassword",
                        this.handleInputChange,
                        "Confirm Password"
                      )}
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
