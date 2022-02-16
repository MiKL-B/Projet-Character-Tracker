import React, { Component } from "react";
import { Link } from "react-router-dom";
export class MySchema extends Component {
  static displayName = MySchema.name;

  constructor(props) {
    super(props);
    this.state = { schemas: [], loading: true };
  }

  async getAllSchemas() {
    const response = await fetch("schema");
    const data = await response.json();

    this.setState({ schemas: data, loading: false });
  }

  async componentDidMount() {
    await this.getAllSchemas();
  }

  static renderSchemas(schemas) {
    return (
      <div>
        {schemas.map((schema) => (
          <div className="card" key={schema.id}>
            <p>{schema.img}</p>
            <div className="card-body">
              <h5 className="card-title">{schema.name}</h5>
              <p className="card-text">{schema.desc}</p>
              <p>{schema.groupUsers}</p>
              <p>{schema.isPublic}</p>
              <p>{schema.permission}</p>
              <p>{schema.personages}</p>
              <p>{schema.readableDate}</p>

              <Link to={`/schema/${schema.id}`} className="btn btn-primary">
                see this schema
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }

  render() {
    let datasschemas = this.state.loading ? (
      <p>loading...</p>
    ) : (
      MySchema.renderSchemas(this.state.schemas)
    );

    return (
      <div>
        <div className="container-fluid">
          <h3 className="d-flex justify-content-center p-5">My schema</h3>
          <div className="row ">
            <div className="col-md-3 border p-3">Schema option</div>
            <div className="col border p-3">{datasschemas}</div>
          </div>
        </div>
      </div>
    );
  }
}
