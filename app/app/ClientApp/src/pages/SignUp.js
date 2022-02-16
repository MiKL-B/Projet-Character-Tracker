import React, { Component } from "react";
import { Button, Input } from "../components/FormInput";

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      formErrors: {
        name: null,
        email: null,
        password: null,
        confirmPassword: null,
      },
    };
    this.register = this.register.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async formValidation() {
    const userRegEx = RegExp(/^[a-z0-9-_]{3,}$/);
    const emailRegEx = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
    const passwordRegEx = RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/);

    const { name, email, password, confirmPassword } = this.state;

    if (!userRegEx.test(name)) {
      await this.setState({
        formErrors: {
          ...this.state.formErrors,
          name: "Username invalid",
        },
      });
    } else {
      await this.setState({
        formErrors: {
          ...this.state.formErrors,
          name: null,
        },
      });
    }

    if (!emailRegEx.test(email)) {
      await this.setState({
        formErrors: {
          ...this.state.formErrors,
          email: "Email invalid",
        },
      });
    } else {
      await this.setState({
        formErrors: {
          ...this.state.formErrors,
          email: null,
        },
      });
    }

    if (!passwordRegEx.test(password)) {
      await this.setState({
        formErrors: {
          ...this.state.formErrors,
          password:
            "8 chars, 1 uppercase letter, 1 lowercase letter and 1 number",
        },
      });
    } else {
      await this.setState({
        formErrors: {
          ...this.state.formErrors,
          password: null,
        },
      });
    }

    if (password !== confirmPassword) {
      await this.setState({
        formErrors: {
          ...this.state.formErrors,
          confirmPassword: "Password do not match !",
        },
      });
    } else {
      await this.setState({
        formErrors: {
          ...this.state.formErrors,
          confirmPassword: null,
        },
      });
    }

    return this.state.formErrors;
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  async register(event) {
    event.preventDefault();
    const { loading, ...credential } = this.state;

    if (!(await this.formValidation())) return;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credential),
    };
    const response = await fetch("api/auth/register/", requestOptions).then((res) =>
      res.json()
    );
    this.setState({ accounts: response, loading: false });
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
                    <h3 className="login-heading mb-4">Inscription</h3>
                    <div className="erreur" />
                    <form onSubmit={this.register}>
                      <Input
                        type={"text"}
                        name={"name"}
                        label={"Name"}
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        feedback={this.state.formErrors.name}
                      />
                      <div className="invalid-feedback">
                        Please choose a username.
                      </div>
                      <Input
                        type={"email"}
                        name={"email"}
                        label={"Email"}
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        placeholder={"name@example.com"}
                        feedback={this.state.formErrors.email}
                      />
                      <Input
                        type={"password"}
                        name={"password"}
                        label={"Password"}
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        feedback={this.state.formErrors.password}
                      />
                      <Input
                        type={"password"}
                        name={"confirmPassword"}
                        label={"Confirm Password"}
                        value={this.state.confirmPassword}
                        onChange={this.handleInputChange}
                        feedback={this.state.formErrors.confirmPassword}
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
