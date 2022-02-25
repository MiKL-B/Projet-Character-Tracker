import React, { Component } from "react";
import { Button } from "../components/FormInput";

export class Admin extends Component {
  static displayName = Admin.name;

  constructor(props) {
    super(props);
    this.state = {
      id: null,
      status: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.delete();
    event.preventDefault();
  }

  async delete() {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: this.state.id }),
    };
    let response = await fetch("api/account/", requestOptions).catch(
      (error) => {
        console.log(error);
      }
    );
    if (response.status === 204) {
      localStorage.clear("token");
      window.location.reload(false);
      this.props.history.push("/");
    } else {
      alert("Error delete account");
    }
  }

  render() {
    let autoAccount;

    if (this.state.status === 200) {
      autoAccount = (
        <div className="container-fluid p-5">
          <div className="row">
            {/* sidebar */}
            <div className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
              <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href="/#">
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#">
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#">
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#">
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#">
                      Dashboard
                    </a>
                  </li>
                  <form id="form-login" onSubmit={this.handleSubmit}>
                    <Button type={"submit"} value={"Delete"} />
                  </form>
                </ul>
              </div>
            </div>
            {/* main dashboard */}
            <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1>Dashboard</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                  <div className="btn-group me-2">
                    <button className="btn btn-sm btn-outline-secondary">
                      share
                    </button>
                    <button className="btn btn-sm btn-outline-secondary">
                      export
                    </button>
                  </div>
                </div>
              </div>

              <div className="table-reponsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">header</th>
                      <th scope="col">header</th>
                      <th scope="col">header</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                    </tr>
                    <tr>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                    </tr>
                    <tr>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                    </tr>
                    <tr>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                    </tr>
                    <tr>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                    </tr>
                    <tr>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      autoAccount = <div></div>;
    }
    return <div>{autoAccount}</div>;
  }
}
