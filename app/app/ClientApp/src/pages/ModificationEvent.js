import React, { Component } from "react";
import { Button, Input, Select } from "../components/FormInput";

export class ModificationEvent extends Component {
  static displayName = ModificationEvent.name;

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: "",
      actor: "",
      target: "",
      relationship: "",
      force: "",
      privacy: 0,
      reciprocal: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    console.log(target.value);
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name);
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-3 border p-3">Changing Schema Options</div>
          <div className="col border p-3">
            <h1 className="d-flex justify-content-center p-5">
              Editing an event
            </h1>
            <form onSubmit={this.handleSubmit}>
              <Input
                type={"text"}
                name={"name"}
                label={"Name event"}
                value={this.state.name}
                onChange={this.handleInputChange}
              />
              <Input
                type={"text"}
                name={"date"}
                label={"Date event"}
                value={this.state.date}
                onChange={this.handleInputChange}
              />

              <div className="row">
                <div className="col-md">
                  <Input
                    type={"text"}
                    name={"actor"}
                    label={"Actor"}
                    value={this.state.actor}
                    onChange={this.handleInputChange}
                    col
                  />{" "}
                </div>
                <div className="col-md">
                  <Input
                    type={"text"}
                    name={"actor"}
                    label={"Target"}
                    value={this.state.target}
                    onChange={this.handleInputChange}
                    col
                  />
                </div>
              </div>
              <Input
                type={"text"}
                name={"relationship"}
                label={"Type of relationship"}
                value={this.state.relationship}
                onChange={this.handleInputChange}
              />
              <Input
                type={"text"}
                name={"force"}
                label={"Strength of the relationship"}
                value={this.state.force}
                onChange={this.handleInputChange}
              />

              <Select
                name={"privacy"}
                options={["Public", "Private", "Secret"]}
                label={"Type of relation"}
                value={this.state.privacy}
                onChange={this.handleInputChange}
              />
              <Input
                type={"text"}
                name={"reciprocal"}
                label={"Reciprocal relationship"}
                value={this.state.reciprocal}
                onChange={this.handleInputChange}
              />
              <Button type={"submit"} value={"submit"} />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
