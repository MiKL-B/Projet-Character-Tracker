import React, { Component } from "react";
import { ModificationSchema } from "../pages/ModificationSchema";
export class Schema extends Component {
  static displayName = Schema.name;

  constructor(props) {
    super(props);
    this.state = { schema: [], loading: true, nodes: [] };
  }
  async getSchema() {
    const response = await fetch(`schema/${this.props.match.params.id}`).then(
      (res) => res.json()
    );
    console.log(response);
    this.setState({ schema: response, loading: false });
  }
  async getPersonage() {
    const listPersonage = await fetch("personage").then((res) => res.json());

    console.log(listPersonage);
    this.setState({ nodes: listPersonage });
  }
  async componentDidMount() {
    await this.getPersonage();
    await this.getSchema();
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <h3 className="d-flex justify-content-center p-3">
            Schema {this.state.schema.name}
          </h3>
          <p className="d-flex justify-content-center ">
            {this.state.schema.desc}
          </p>
          <div className="row ">
            <div className="col-md-3 border p-3">
              Creation personage
              <ModificationSchema />
            </div>

            <div className="col border p-3 ">
              {/* card */}
              {this.state.nodes.map((n) => (
                <div className="card w-25 m-2" key={n.id}>
                  <div className="card-body">
                    <h5 className="text-capitalize">
                      <span>{n.lastname}</span>
                      <span className="mx-2">{n.firstname}</span>
                    </h5>

                    <p className="card-text">gender: {n.gender}</p>
                    <p className="card-text">birthdate: {n.birthdate}</p>
                    <p className="card-text">deathdate: {n.deathdate}</p>
                  </div>
                </div>
              ))}

              {/* card */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
