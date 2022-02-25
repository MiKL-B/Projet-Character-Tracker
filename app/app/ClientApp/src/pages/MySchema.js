import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormCreateSchema } from "../components/FormCreateSchema";

import "../components/Schema.css";
import { getUserId, withHook } from "../helpers";

class MySchema extends Component {
  static displayName = MySchema.name;

  constructor(props) {
    super(props);

    this.state = { schemas: [], loading: true, id: null, status: null };
    this.handleDeleteSchema = this.handleDeleteSchema.bind(this);
  }

  async getSchemaByUser() {
    const listSchema = await fetch(`api/schema/${getUserId()}`)
      .then((res) => res.json())
      .catch((e) => console.log(e));
    if (Array.isArray(listSchema)) this.setState({ schemas: listSchema });
  }

  handleDeleteSchema(schemId) {
    fetch(`/api/schema/${schemId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: schemId,
    })
      .then((res) => {
        this.setState({
          schemas: this.state.schemas.filter((schema) => {
            return schema.id !== schemId;
          }),
        });
        alert("delete success");
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }
  async componentDidMount() {
    await this.getSchemaByUser();
  }

  render() {
    return (
      <div>
        <div className="container">
          <h3 className="d-flex justify-content-center p-3">My Schema</h3>
          <div className="container-card">
            {this.state.schemas.map((s) => (
              <div className="col my-card" key={s.id}>
                <h5 className="title-card text-uppercase text-primary">
                  {s.name}
                </h5>
                <div className={"head-card"}>
                  <img src="https://picsum.photos/200" alt={s.name} />
                </div>
                <div className="body-card">
                  <p>{s.desc}</p>
                  <p>{s.groupUsers}</p>
                  <p>{s.isPublic}</p>
                  <p>{s.permission}</p>
                  <p>{s.personages}</p>
                  <p>{s.readableDate}</p>
                </div>
                <div className="card-footer d-flex justify-content-around ">
                  <Link to={`/schema/${s.id}`} className="btn btn-primary">
                    See this schema
                  </Link>
                  <button
                    onClick={(id) => {
                      if (window.confirm("Do you want to delete this schema ?"))
                        this.handleDeleteSchema(s.id);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            <div
              data-toggle="modal"
              data-target="#exampleModal"
              className="add-card"
            >
              +
            </div>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Creation schema
                    </h5>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                  <div className="modal-body">
                    <FormCreateSchema />
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

export default withHook(MySchema);
