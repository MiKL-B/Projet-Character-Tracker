import React, { Component } from "react";

export class MySchema extends Component {
  static displayName = MySchema.name;

  constructor(props) {
    super(props);
    this.state = { schemas: [], loading: true };
  }

  async getAllSchemas() {
    const response = await fetch("schema");
    const raw = await response.json();
    const data = raw.map((schema) => {
      return {
        schema,
      };
    });
    this.setState({ schemas: data, loading: false });
  }

  async componentDidMount() {
    await this.getAllSchemas();
    console.log(this.state.schemas);
  }

  static renderSchemas(schemas) {
    return (
      <div className="">
        {schemas.map((schema) => {
          <div key={schema.id}>{schema.name}</div>;
        })}
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
