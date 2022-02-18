import React, { Component } from "react";

export class SettingsUser extends Component {
  static displayName = SettingsUser.name;

    constructor(props) {
        super(props);
        this.state = { schemas: [], loading: true, id: null, status: null };
        this.auth();
    }

    async auth() {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: localStorage.getItem("token") }),
        };
        const response = await fetch("api/auth/verif", requestOptions)
        const data = await response.json();
        this.setState({ id: data, status: response.status })
        if (this.state.status !== 200) {
            this.props.history.push('/');
        }
    }

  render() {
    return (
      <div className="container-fluid">
        <h3 className="d-flex justify-content-center p-5">My options</h3>

        <div className="row ">
          <div className="col-md-3 border p-3">Groups option</div>
          <div className="col border p-3" />
        </div>
      </div>
    );
  }
}
