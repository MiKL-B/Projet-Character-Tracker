import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormPersonage } from "./FormPersonage.js";
import { withHook } from "../helpers";

import "./Schema.css";
import { Modal } from "reactstrap";

class Schema extends Component {
  constructor(props) {
    super(props);
    this.state = { schema: [], isOpen: false, personages: [] };
    this.handleCallback = this.handleCallback.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleDeletePerso = this.handleDeletePerso.bind(this);
  }

  async getSchema() {
    const response = await fetch(`api/schema/${this.props.params.id}`).then(
      (res) => res.json()
    );
    this.setState({ schema: response, loading: false });
  }
  async getPersoBySchema() {
    const listPersonage = await fetch(
      `api/personage/${this.props.params.id}`
    ).then((res) => res.json());

    this.setState({ personages: listPersonage });
  }

  handleDeletePerso(persoId) {
    fetch(`/api/personage/${persoId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: persoId,
    })
      .then((res) => {
        this.setState({
          personages: this.state.personages.filter((perso) => {
            return perso.id !== persoId;
          }),
        });
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }
  async componentDidMount() {
    await this.getPersoBySchema();
    await this.getSchema();
  }

  handleCallback(data) {
    this.setState({
      personages: [...this.state.personages, data],
      isOpen: false,
    });
  }

  handleModal() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <div className="container">
          <h3 className="d-flex justify-content-center p-3">
            Schema {this.state.schema.name}
          </h3>
          <p className="d-flex justify-content-center ">
            {this.state.schema.desc}
          </p>

          <div className="container-card">
            {/* card */}
            {this.state.personages.map((n) => (
              <div className="col my-card" key={n.id}>
                <div className="head-card">
                  <img src={n?.img} alt="" />
                </div>

                <div className="body-card">
                  <h5 className=" text-uppercase text-primary">{n.lastname}</h5>
                  <h6 className="text-capitalize card-subtitle text-muted mb-2">
                    {n.firstname}
                  </h6>

                  <p className="">gender: {n.gender}</p>
                  <p className="">birthdate: {n.birthdate}</p>
                  <p className="">deathdate: {n.deathdate}</p>
                  {/*  */}
                  <button
                    onClick={(id) => {
                      if (window.confirm("do you want to delete this perso")) {
                        this.handleDeletePerso(n.id);
                      }
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <div
              onClick={this.handleModal}
              data-toggle="modal"
              data-target="#exampleModal"
              className="add-card"
            >
              +
            </div>
            <Link
              to={`/show-schema/${this.props.params.id}`}
              className="btn btn-primary"
            >
              show schema
            </Link>
            <Modal isOpen={this.state.isOpen} toggle={this.handleModal}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Creation personage</h5>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={this.handleModal}
                  >
                    Close
                  </button>
                </div>
                <div className="modal-body">
                  <FormPersonage
                    id={this.state.schema.id}
                    onUpdate={this.handleCallback}
                  />
                </div>
              </div>
            </Modal>
            {/* card */}
          </div>
        </div>
      </div>
    );
  }
}

export default withHook(Schema);
