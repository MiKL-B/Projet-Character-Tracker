import React, { Component } from "react";
import './SignIn.css';

export class SignIn extends Component {
    static displayName = SignIn.name;

    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange_pw = this.handleChange_pw.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { accounts: [], loading: true };
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleChange_pw(event) {
        this.setState({ value_pw: event.target.value });
    }

    handleSubmit(event) {
        alert('Le nom a été soumis : ' + this.state.value + ' ' + this.state.value_pw);
        event.preventDefault();
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    async populateWeatherData() {
        const response = await fetch('account');
        const data = await response.json();
        this.setState({ accounts: data, loading: false });
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : console.log(this.state.accounts[0].id);

        return (
            <div className="container-fluid ps-md-0">
                <div className="row g-0">
                    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
                    <div className="col-md-8 col-lg-6">
                        <div className="login d-flex align-items-center py-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-9 col-lg-8 mx-auto">
                                        <h3 className="login-heading mb-4">Connexion</h3>
                                        <div className="erreur"></div>
                                        <form id="form-login" onSubmit={this.handleSubmit}>
                                            <div className="form-floating mb-3">
                                                <input type="email" value={this.state.value} onChange={this.handleChange} className="form-control" id="email" placeholder="name@example.com"/>
                                                <label htmlFor="floatingInput">Email address</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input type="password" value_pw={this.state.value} onChange={this.handleChange_pw} className="form-control" id="password" placeholder="Password" minLength="8"/>
                                                <label htmlFor="floatingPassword">Password</label>
                                            </div>
                                            <div className="d-grid">
                                                <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Sign in</button>
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