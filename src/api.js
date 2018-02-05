import firebase from './firebase';

export function login({email, password}) {
  return firebase.auth().signInWithEmailAndPassword(email, password).catch(error => error);
}

export function forgotPassword({email}) {
  return firebase.auth().sendPasswordResetEmail(email).catch(error => error);
}
