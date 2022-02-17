import { Button } from "./FormInput";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, } from "reactstrap";

import logo from "../image/outline_home_black_24dp.png";

import "./NavMenu.css";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
    this.auth();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  static Item(to, children) {
    return (
      <NavItem>
        <NavLink tag={Link} className="navlinkhover text-dark" to={to}>
          {children}
        </NavLink>
      </NavItem>
    );
  }

  handleSubmit(event) {
    localStorage.clear();
    window.location.reload(false);
    event.preventDefault();
  }

  async auth() {
    const setState = this.setState.bind(this);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: localStorage.getItem("token") }),
    };
    let response = await fetch("api/auth/verif", requestOptions).catch(
      (error) => {
        console.log(error);
      }
    );
      if (response.status !== 200) {
        setState({ data: response.status });
    } else {
        setState({ data: response.status });
    }
  }

    render() {
        let compMenu;

        if (this.state.data === null) {
            compMenu = <div></div>
        } else if (this.state.data === 404) {
            compMenu = <ul className="navbar-nav flex-grow"> <input placeholder="Search..." />{NavMenu.Item("/sign-in", "Sign In")} {NavMenu.Item("/sign-up", "Sign Up")} </ul>
        } else {
            compMenu = <div className="dropdown">
                <Link to="#" className="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Menu
                </Link>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                        <Link to="/my-schema" className="dropdown-item">
                            my-schema
                        </Link>
                    </li>
                    <li>
                        <Link to="/my-group" className="dropdown-item">
                            my-group
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings" className="dropdown-item">
                            setting
                        </Link>
                    </li>
                    <li>
                        <Link to="/modification-event" className="dropdown-item">
                            modif event
                        </Link>
                    </li>
                    <li>
                        <Link to="/show-schema" className="dropdown-item">
                            show schema
                        </Link>
                    </li>
                    <li>
                        <Link to="/show-search" className="dropdown-item">
                            show search
                        </Link>
                    </li>
                    <form id="form-login" onSubmit={this.handleSubmit}> <Button type={"submit"} value={"logout"} /> </form>
                </ul>
            </div>
        }
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow">
          <Container>
            <NavbarBrand tag={Link} to="/">
              <img src={logo} width="40" height="40" alt="" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              {compMenu}
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

/*
                            this.state.data === null ? (
                <ul className="navbar-nav flex-grow">
                  <input placeholder="Search..." />
                  {NavMenu.Item("/sign-in", "Sign In")}
                  {NavMenu.Item("/sign-up", "Sign Up")}
                </ul>
              ) : (
                <div>
                  <form id="form-login" onSubmit={this.handleSubmit}>
                    <Button type={"submit"} value={"logout"} />
                  </form>
                </div>
                            )
*/