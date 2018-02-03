import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCk2Cp_YA_fZNeFuibU0sDMGNZ7QHbrEr0',
  authDomain: 'eventio-769ea.firebaseapp.com',
  databaseURL: 'https://eventio-769ea.firebaseio.com',
  projectId: 'eventio-769ea',
  storageBucket: 'eventio-769ea.appspot.com',
  messagingSenderId: '205862713837'
};

firebase.initializeApp(config);

export default firebase;
