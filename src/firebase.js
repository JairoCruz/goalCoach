import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB8B9RWPCJA5CwH6FKQB0fTdSJLpVq7FdU",
    authDomain: "goalcoach-d55a4.firebaseapp.com",
    databaseURL: "https://goalcoach-d55a4.firebaseio.com",
    storageBucket: "goalcoach-d55a4.appspot.com",
    messagingSenderId: "203110717790"
  };

  export const firebaseApp = firebase.initializeApp(config);