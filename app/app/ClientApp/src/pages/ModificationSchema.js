import React, { Component } from "react";
import { Button, Input, File, Select } from "../components/FormInput";

export class ModificationSchema extends Component {
  static displayName = ModificationSchema.name;

  constructor(props) {
    super(props);
    this.state = {
      lastname: "",
      firstname: "",
      birthdate: "",
      deathdate: "",
      gender: "",
      img: "",
      raceId: 0,
      schemaId: null,
    };
    this.setState({
      schemaId: this.props.schema,
    });
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name);
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log({ ...this.state });

    fetch("api/personage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...this.state }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            type={"text"}
            name={"lastname"}
            label={"Last name"}
            value={this.state.lastname}
            onChange={this.handleInputChange}
          />
          <Input
            type={"text"}
            name={"firstname"}
            label={"First name"}
            value={this.state.firstname}
            onChange={this.handleInputChange}
          />
          <Input
            type={"text"}
            name={"birthdate"}
            label={"birthdate"}
            value={this.state.birthdate}
            onChange={this.handleInputChange}
          />
          <Input
            type={"text"}
            name={"deathdate"}
            label={"death date"}
            value={this.state.deathdate}
            onChange={this.handleInputChange}
          />
          <Input
            type={"text"}
            name={"gender"}
            label={"gender"}
            value={this.state.gender}
            onChange={this.handleInputChange}
          />
          <File
            name={"img"}
            label={"img"}
            value={this.state.img}
            onChange={this.handleInputChange}
          />
          <Select
            name={"raceId"}
            options={["Orc", "Elfe", "Nain", "Poney", "Licorne", "Humain"]}
            label={"race"}
            value={this.state.raceId}
            onChange={this.handleInputChange}
          />
          {/* <Input
            type={"number"}
            name={"schemaId"}
            label={"schema"}
            value={this.state.schemaId}
            onChange={this.handleInputChange}
          /> */}
          <Button type={"submit"} value={"submit"} />
        </form>
      </div>
    );
  }
}
