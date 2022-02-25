import { Link } from "react-router-dom";
import React, { Component } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";

import logo from "../image/outline_home_black_24dp.png";

import "./NavMenu.css";
import { withHook } from "../helpers";

class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.auth = props.auth;
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(event) {
    event.preventDefault();
    this.auth.signout();
    window.location.reload(false);
  }

  static Item(to, children, className) {
    return (
      <NavItem>
        <NavLink
          to={to}
          tag={Link}
          className={`navlinkhover text-dark ${className}`}
        >
          {children}
        </NavLink>
      </NavItem>
    );
  }

  render() {
    let compMenu;

    if (!this.auth.user) {
      compMenu = (
        <ul className="navbar-nav flex-grow">
          {/*<input className={"searchBar"} placeholder="Search..." />*/}
          {NavMenu.Item("/sign-in", "Sign In")}
          {NavMenu.Item("/sign-up", "Sign Up")}
        </ul>
      );
    } else {
      compMenu = (
        <>
          <Button
            children={"logout"}
            className={"nav-item ms-4"}
            color={"danger"}
            outline
            onClick={this.handleLogout}
          />
          <ul className="navbar-nav flex-grow">
            {NavMenu.Item("/my-schema", "My Schema")}
          </ul>
        </>
      );
    }

    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow">
          <Container>
            <NavbarBrand tag={Link} to="/">
              <img src={logo} width="40" height="40" alt="" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse
              className="d-sm-inline-flex flex-sm-row-reverse"
              isOpen={!this.state.collapsed}
              navbar
            >
              {compMenu}
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default withHook(NavMenu);
