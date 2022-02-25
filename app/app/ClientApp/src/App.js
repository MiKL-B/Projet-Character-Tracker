import React, { Component } from "react";
import { Route, Switch } from "react-router";

import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import MySchema from "./pages/MySchema";
import { MyGroup } from "./pages/MyGroup";
import { SettingsUser } from "./pages/SettingsUser";
import { ModificationEvent } from "./pages/ModificationEvent";
import ShowSchema from "./pages/ShowSchema";
import { ShowSearch } from "./pages/ShowSearch";
import { Admin } from "./pages/Admin";
import Schema from "./components/Schema";
import "./custom.css";
import { PrivateRoute, ProvideAuth } from "./Auth";

export default class App extends Component {
  async componentDidMount() {
    document.title = "Character Tracker";
  }

  render() {
    return (
      <ProvideAuth>
        <Switch>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/sign-up">
              <SignUp />
            </Route>
            <Route path="/sign-in">
              <SignIn />
            </Route>
            <PrivateRoute path="/my-schema">
              <MySchema />
            </PrivateRoute>
            <PrivateRoute path="/my-group">
              <MyGroup />
            </PrivateRoute>
            <PrivateRoute path="/settings">
              <SettingsUser />{" "}
            </PrivateRoute>
            <PrivateRoute path="/modification-event">
              <ModificationEvent />{" "}
            </PrivateRoute>
            <PrivateRoute path="/show-schema/:id">
              <ShowSchema />{" "}
            </PrivateRoute>
            <PrivateRoute path="/show-search">
              <ShowSearch />{" "}
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <PrivateRoute path="/schema/:id">
              <Schema />
            </PrivateRoute>
          </Layout>
        </Switch>
      </ProvideAuth>
    );
  }
}
