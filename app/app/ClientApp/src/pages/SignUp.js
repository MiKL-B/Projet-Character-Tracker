import React, { Component } from "react";
import { Button, Input } from "../components/FormInput";

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
                      <Input
                        type={"text"}
                        name={"name"}
                        label={"Name"}
                        value={this.state.name}
                        onChange={this.handleInputChange}
                      />
                      <Input
                        type={"email"}
                        name={"email"}
                        label={"Email"}
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        placeholder={"name@example.com"}
                      />
                      <Input
                        type={"password"}
                        name={"password"}
                        label={"Password"}
                        value={this.state.password}
                        onChange={this.handleInputChange}
                      />
                      <Input
                        type={"password"}
                        name={"confirmPassword"}
                        label={"Confirm Password"}
                        value={this.state.confirmPassword}
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
