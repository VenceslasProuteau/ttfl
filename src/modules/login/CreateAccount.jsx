import React from 'react';
import {Form, Field } from 'react-final-form';
import {Trans} from '@lingui/react';
import firebase from 'firebase';
import {FireStore} from '../../services/firestore/store';
import { Button } from 'commons/button/Button';
import { Input } from 'commons/input/Input';
import LocalesService from '../locales/locales.service';

export class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.i18n = LocalesService.getLocales();
  }

  onCreateAccount({email, password, pseudo}) {
    return firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({user}) => {
        FireStore.setDoc('users', user.uid, {
          email, pseudo,
        });
      }).catch(e => console.log('e', e));
  }

  render() {
    return (
        <Form 
        onSubmit={this.onCreateAccount}
        render={({
          handleSubmit,
          submitting,
          submitError
        }) => (
        <form onSubmit={handleSubmit} autoComplete="off">
          <input type="hidden" autoComplete="false" />
          <Field name="email">
            {({input,  meta}) => (
              <Input
                {...input}
                type="email"
                placeholder="Email"
                name="email"
              />
            )}
          </Field>
          <Field name="pseudo">
            {({input,  meta}) => (
              <Input
                {...input}
                type="text"
                placeholder="Mon pseudo"
                name="pseudo"
              />
            )}
          </Field>
          <Field name="password">
            {({input,  meta}) => (
              <Input
                {...input}
                type="password"
                placeholder="Mot de passe"
                name="password"
              />
            )}
          </Field>
          <Button type="submit" label={this.i18n._('authentication.createAccount')} />
      </form>
      )} />
    )
  }
}