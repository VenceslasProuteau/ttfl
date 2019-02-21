import React from 'react';
import get from 'lodash/get';
import firebase from 'firebase';
import {Login} from '../login/Login';
import { UserService } from 'commons/user/user.service';

export const authentication = Component =>
  class Authentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLogged: false,
        isLoading: true
      }
    }

    componentDidMount() {
      this.setAuthObserver();
    }

    setAuthObserver() {
      return firebase.auth()
        .onAuthStateChanged(user =>  {
          if (!user) {
            return this.setState({
              isLogged: false,
              isLoading: false
            })
          }

          return UserService.getCurrentUser(get(user, 'uid'))
            .then(() => {
              this.setState({
                isLogged: true,
                isLoading: false
              })
            }).catch(((e) => {
              console.log('error retrieving user', e);
            }));
        });
    }

    render() {
      return this.state.isLoading ?
        <div>Loading ...</div> :
        this.state.isLogged ?
          <Component /> :
          <Login />
    }
  }