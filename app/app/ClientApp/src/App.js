import React, { Component } from "react";
import { Route } from "react-router";

import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { MySchema } from "./pages/MySchema";
import { MyGroup } from "./pages/MyGroup";
import { SettingsUser } from "./pages/SettingsUser";
import { FormCreateSchema } from "./pages/FormCreateSchema";
import { ModificationSchema } from "./pages/ModificationSchema";
import { ModificationEvent } from "./pages/ModificationEvent";
import { ShowSchema } from "./pages/ShowSchema";
import { ShowSearch } from "./pages/ShowSearch";
import { Admin } from "./pages/Admin";
import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  componentDidMount() {
    document.title = "Character Tracker";
  }

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/my-schema" component={MySchema} />
        <Route path="/my-group" component={MyGroup} />
        <Route path="/settings" component={SettingsUser} />
        <Route path="/form-create-schema" component={FormCreateSchema} />
        <Route path="/modification-schema" component={ModificationSchema} />
        <Route path="/modification-event" component={ModificationEvent} />
        <Route path="/show-schema" component={ShowSchema} />
        <Route path="/show-search" component={ShowSearch} />
        <Route path="/admin" component={Admin} />
      </Layout>
    );
  }
}
