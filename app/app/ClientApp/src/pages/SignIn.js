import React, { Component } from "react";
import "./SignIn.css";
import { Button, Input } from "../components/FormInput";

export class SignIn extends Component {
  static displayName = SignIn.name;

  constructor(props) {
    super(props);
    this.state = { email: "", password: "", accounts: {}, loading: true };
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
        let e = 0;

        for (var i = 0; i < this.state.accounts.length; i++) {
            if (this.state.accounts[i].mail === this.state.email) {
                if (this.state.accounts[i].password === this.state.password) {
                    e = 1;
                    document.location.href = "https://localhost:44430/my-schema";
                    alert("Connection");
                }
            }
        }
        if (e === 0) {
            alert("Error connection");
        }
        event.preventDefault();
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    async populateWeatherData() {
        const response = await fetch("account");
        const data = await response.json();
        this.setState({ accounts: data, loading: false });
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
                    <h3 className="login-heading mb-4">Connexion</h3>
                    <div className="erreur" />
                    <form id="form-login" onSubmit={this.handleSubmit}>
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
