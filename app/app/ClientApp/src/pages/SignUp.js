import React, { Component } from "react";
import { Button, Input } from "../components/FormInput";
import { withHook } from "../helpers";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      mail: "",
      password: "",
      confirmPassword: "",
      formErrors: {
        username: null,
        mail: null,
        password: null,
        confirmPassword: null,
      },
      info: null,
    };
    this.auth = props.auth;
    this.register = this.register.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async formValidation() {
    const userRegEx = RegExp(/^[a-z0-9-_]{3,}$/);
    const emailRegEx = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
    const passwordRegEx = RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/);

    const { username, mail, password, confirmPassword } = this.state;

    if (!userRegEx.test(username)) {
      await this.setState({
        formErrors: {
          ...this.state.formErrors,
          username: "Username invalid",
        },
      });
    } else {
      await this.setState({
        formErrors: {
          ...this.state.formErrors,
          username: null,
        },
      });
    }

    if (!emailRegEx.test(mail)) {
      await this.setState({
        formErrors: {
          ...this.state.formErrors,
          mail: "Email invalid",
        },
      });
    } else {
      await this.setState({
        formErrors: {
          ...this.state.formErrors,
          mail: null,
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

    return Object.values(this.state.formErrors).some((e) => e);
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
    const { username, mail, password } = this.state;

    if (await this.formValidation()) {
      return this.setState({ info: "Please verify informations", error: true });
    } else {
      this.setState({ info: null, error: null });
    }

    const isRegistered = await this.auth.register({ username, password, mail });
    if (isRegistered) {
      this.props.history.push("/");
      return window.location.reload(false);
    }

    this.setState({
      error: true,
      info: "Please verify informations",
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
                    <h3 className="login-heading mb-4">Inscription</h3>
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
                    <form onSubmit={this.register}>
                      <Input
                        type={"text"}
                        name={"username"}
                        label={"Name"}
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        feedback={this.state.formErrors.username}
                      />
                      <Input
                        type={"email"}
                        name={"mail"}
                        label={"Email"}
                        value={this.state.mail}
                        onChange={this.handleInputChange}
                        placeholder={"name@example.com"}
                        feedback={this.state.formErrors.mail}
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

export default withHook(SignUp);
