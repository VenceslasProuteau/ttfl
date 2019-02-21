import isEmpty from 'lodash/isEmpty';
import {FireStore} from '../../services/firestore/store';
import { DataStore } from 'commons/data-store/data-store.model';
import { User } from './user.model';


const UserServiceMethod = () => {
  const store = new DataStore('USER');

  return {
    getCurrentUser(uid) {
      const storedUser = store.get('user');
      return !isEmpty(storedUser)
        ? Promise.resolve(storedUser)
        : this.getUser(uid)
            .then((user) => this.setStore(user));
    },

    getUser(uid) {
      return FireStore.get().collection('users').doc(uid).get()
        .then(doc => new User(doc.data()));
    },

    setStore(user) {
      return store.set(user);
    }
  }
}

export const UserService = new UserServiceMethod();