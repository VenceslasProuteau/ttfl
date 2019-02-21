import React from 'react';
import get from 'lodash/get';
import firebase from 'firebase';
import {Form, Field } from 'react-final-form';
import {Trans} from '@lingui/react';
import LocalesService from '../locales/locales.service';

import { Button } from 'commons/button/Button';
import { Input } from 'commons/input/Input';
import { UserService } from 'commons/user/user.service'; 
import { CreateAccount } from './CreateAccount';
import './login.scss';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: true,
      createAccount: false
    }
    this.i18n = LocalesService.getLocales();
    this.onLogin = this.onLogin.bind(this);
    this.toggleAuthMode = this.toggleAuthMode.bind(this);
  }

  onLogin({email, password}) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  toggleAuthMode() {
    this.setState({
      signIn: !this.state.signIn,
      createAccount: ! this.state.createAccount
    })
  }

  render() {
    return <div className="login">
        <div className="login__form">
            {this.state.signIn ?
              <Form 
              onSubmit={this.onLogin}
              render={({
                handleSubmit,
                submitting,
                submitError
              }) => (
              <form onSubmit={handleSubmit}>
                <Field name="email">
                  {({input,  meta}) => (
                    <Input
                      {...input}
                      placeholder="Email"
                      type="text"
                    />
                  )}
                </Field>
                <Field name="password">
                  {({input,  meta}) => (
                    <Input
                      {...input}
                      type="password"
                      placeholder="Mot de passe"
                    />
                  )}
                </Field>
                <div className="login__actions">
                  <Button type="submit" label={this.i18n._('authentication.connect')} />
                </div>
                <div className="login__switch" onClick={this.toggleAuthMode}>
                  <Trans id="authentication.notSubscribedYet" />
                </div>
            </form>
            )} /> :
              <CreateAccount />
            }
          </div>
      </div>
  }
}