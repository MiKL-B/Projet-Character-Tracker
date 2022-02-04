import React, { Component } from "react";
import './SignIn.css';

export class SignIn extends Component {
    static displayName = SignIn.name;

    render() {
        return (
            <div class="container-fluid ps-md-0">
                <div class="row g-0">
                    <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
                    <div class="col-md-8 col-lg-6">
                        <div class="login d-flex align-items-center py-5">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-9 col-lg-8 mx-auto">
                                        <h3 class="login-heading mb-4">Connexion</h3>
                                        <div class="erreur"></div>
                                        <form id="form-login" action="" method="post">
                                            <div class="form-floating mb-3">
                                                <input type="email" class="form-control" id="email" placeholder="name@example.com" />
                                                <label for="floatingInput">Email address</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input type="password" class="form-control" id="password" placeholder="Password" minlength="8" />
                                                <label for="floatingPassword">Password</label>
                                            </div>
                                            <div class="d-grid">
                                                <button class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Sign in</button>
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