import React, { Component } from "react";

export class Schema extends Component {
  static displayName = Schema.name;

  constructor(props) {
    super(props);
    this.state = { schema: [], loading: true };
  }
  async getSchema() {
    const response = await fetch(`schema/${this.props.match.params.id}`).then(
      (res) => res.json()
    );

    this.setState({ schema: response, loading: false });
  }
  async componentDidMount() {
    await this.getSchema();
  }
  render() {
    return <div> {this.state.schema.name}</div>;
  }
}
