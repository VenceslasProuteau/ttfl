import firebase from 'firebase';
import { FireStore } from './services/firestore/store';
import './init.app';

const config = {
  apiKey: "AIzaSyBv5pgYuQzt2iko3cXJWS2L3UBm7mQT8X0",
  authDomain: "https://ttfl-eb580.firebaseapp.com",
  databaseURL: "https://ttfl-eb580.firebaseio.com",
  projectId: "ttfl-eb580"
};
const app = firebase.initializeApp(config);
FireStore.set(firebase.firestore(app));