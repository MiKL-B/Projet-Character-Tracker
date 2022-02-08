import React, { Component } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
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

  render() {
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
              <ul className="navbar-nav flex-grow">
                <input placeholder="Search..." />
                {NavMenu.Item("/sign-in", "Sign In")}
                {NavMenu.Item("/sign-up", "Sign Up")}
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
