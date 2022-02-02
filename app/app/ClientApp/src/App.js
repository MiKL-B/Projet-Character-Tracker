import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Test } from './components/Test';
import { Character } from './components/Character';
import TestHook from './components/TestHook';

import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
import { MySchema } from './components/MySchema';
import { MyGroup } from './components/MyGroup';
import { SettingsUser } from './components/SettingsUser';
import { FormCreateSchema } from './components/FormCreateSchema';
import { ModificationSchema } from './components/ModificationSchema';
import { ModificationEvent } from './components/ModificationEvent';
import { ShowSchema } from './components/ShowSchema';
import { ShowSearch } from './components/ShowSearch';
import { Admin } from './components/Admin';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/test' component={Test} />
        <Route path='/character' component={Character} />
        <Route path='/testHook' component={TestHook} />

            <Route path='/sign-up' component={SignUp} />
            <Route path='/sign-in' component={SignIn} />
            <Route path='/my-schema' component={MySchema} />
            <Route path='/my-group' component={MyGroup} />
            <Route path='/settings' component={SettingsUser} />
            <Route path='/form-create-schema' component={FormCreateSchema} />
            <Route path='/modification-schema' component={ModificationSchema} />
            <Route path='/modification-event' component={ModificationEvent} />
            <Route path='/show-schema' component={ShowSchema} />
            <Route path='/show-search' component={ShowSearch} />
            <Route path='/admin' component={Admin} />
            
      </Layout>
    );
  }
}
