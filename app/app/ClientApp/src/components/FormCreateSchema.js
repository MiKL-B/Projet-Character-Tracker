import React, { Component } from "react";
import { Button, Checkbox, File, Input } from "./FormInput";

export class FormCreateSchema extends Component {
  static displayName = FormCreateSchema.name;

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      desc: "",
      img: "",
      readableDate: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch("api/schema", {
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
        <div className="container ps-md-0 ">
          <div className="row g-0 ">
            <div className="">
              <div className="">
                <div className="container-fluid">
                  <div className="row">
                    <div className=" ">
                      <div className="erreur"></div>
                      <form id="form-login" onSubmit={this.handleSubmit}>
                        <Input
                          type={"text"}
                          name={"name"}
                          label={"Name Schema"}
                          value={this.state.name}
                          onChange={this.handleInputChange}
                        />
                        <Input
                          type={"text"}
                          name={"desc"}
                          label={"Description schema"}
                          value={this.state.desc}
                          onChange={this.handleInputChange}
                        />
                        <File
                          name={"img"}
                          label={"Image"}
                          value={this.state.img}
                          onChange={this.handleInputChange}
                        />
                        <Checkbox
                          name={"readableDate"}
                          label={"Readable date ?"}
                          checked={this.state.readableDate}
                          onChange={this.handleInputChange}
                        />
                        <Button type={"submit"} value={"submit"} />
                      </form>
                    </div>
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
