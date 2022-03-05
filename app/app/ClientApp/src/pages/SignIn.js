import React, { Component } from "react";
import { Button, Input } from "../components/FormInput";

import "./SignIn.css";
import { withHook } from "../helpers";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      info: null,
      error: null,
    };
    this.auth = props.auth;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;
    const logged = await this.auth.signin({ username, password });
    if (logged) {
      this.props.history.push("/");
      return window.location.reload(false);
    }
    this.setState({
      error: true,
      info: "Error account doesn't exist or password are bad",
    });
  }

  render() {
    const info = this.state.info;
    const error = this.state.error;

    return (
      <div className="container ps-md-0">
        <div className="row g-0">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Connexion</h3>
                    {info && (
                      <div
                        className={`alert alert-${
                          error ? "danger" : "success"
                        }`}
                        role="alert"
                      >
                        {info}
                      </div>
                    )}
                    <form id="form-login" onSubmit={this.handleSubmit}>
                      <Input
                        type={"text"}
                        name={"username"}
                        label={"Username"}
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        placeholder={"Username"}
                      />
                      <Input
                        type={"password"}
                        name={"password"}
                        label={"Password"}
                        value={this.state.password}
                        onChange={this.handleInputChange}
                      />
                      <Button type={"submit"} value={"submit"} />
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

export default withHook(SignIn);
