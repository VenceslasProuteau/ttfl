import React from 'react';
import firebase from 'firebase';
import {Login} from '../login/Login';

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
          this.setState({
            isLogged: !!user,
            isLoading: false
          })
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