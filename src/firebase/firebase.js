import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDY5AsmVqbhAaZEvCcXTbAffVrybLvoGg8',
  authDomain: 'developer-chat-websale-almond.firebaseapp.com',
  databaseURL: 'https://developer-chat-websale-almond.firebaseio.com',
  projectId: 'developer-chat-websale-almond',
  storageBucket: 'developer-chat-websale-almond.appspot.com',
  messagingSenderId: '672100055879'
};

firebase.initializeApp(config);

const database = firebase.database();
const githubAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, githubAuthProvider, database as default };
