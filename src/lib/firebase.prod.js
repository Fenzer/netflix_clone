import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD5nbxnGONcP4DnrUEQ_gzyUbI19UA-Y6M',
  authDomain: 'netflix-b757f.firebaseapp.com',
  databaseURL: 'https://netflix-b757f.firebaseio.com',
  projectId: 'netflix-b757f',
  storageBucket: 'netflix-b757f.appspot.com',
  messagingSenderId: '885443464380',
  appId: '1:885443464380:web:63117c7dada4ac7dac54b9',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
