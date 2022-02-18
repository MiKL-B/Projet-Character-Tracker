import React, { Component } from "react";

export class ShowSearch extends Component {
    static displayName = ShowSearch.name;

    constructor(props) {
        super(props);
        this.state = { id: null, status: null };
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
        <h3 className="d-flex justify-content-center p-5">Search display</h3>
        <div className="row ">
          <div className="col-md-3 border p-3">Search menu and filter</div>
          <div className="col border p-3">
            <ul className="list-group">
              <li className="list-group-item">Result of the research 1</li>
              <li className="list-group-item">Result of the research 2</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
