import firebase from 'firebase';

export const AuthenticationService = {
  isLogged() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = firebase.auth().currentUser;
        console.log('user', user);
        return user ? resolve(user) : reject();
      }, 2000)
    });
  }
}