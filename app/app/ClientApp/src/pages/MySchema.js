import React, { Component } from "react";

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
          <ul key={schema.id}>
            <li>id: {schema.id}</li>
            <li>name: {schema.name}</li>
            <li>desc: {schema.desc}</li>
            <li>group users: {schema.groupUsers}</li>
            <li>img: {schema.img}</li>
            <li>ispublic: {schema.isPublic}</li>
            <li>permission: {schema.permission}</li>
            <li>personages: {schema.personages}</li>
            <li>readable date: {schema.readableDate}</li>
          </ul>
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
