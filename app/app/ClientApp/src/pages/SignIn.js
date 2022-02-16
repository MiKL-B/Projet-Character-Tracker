import React, { Component } from "react";
import { Button, Input } from "../components/FormInput";

import "./SignIn.css";

export class SignIn extends Component {
  static displayName = SignIn.name;

  constructor(props) {
    super(props);

    this.state = { username: "", password: "", accounts: {}, loading: true };
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

  handleSubmit(event) {
    this.login();
    event.preventDefault();
  }

  async login() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    };
    let response = await fetch("api/auth/login/", requestOptions).catch((error) => {
      console.log(error);
    });
    if (response.status === 200) {
      let data = await response.text();
      localStorage.setItem("token", data);
    }
  }

  render() {
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
                    <div className="erreur" />
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
