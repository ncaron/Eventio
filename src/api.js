import firebase from './firebase';

export function signup({firstName, lastName, email, password}) {
  return firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
    .then(() => {
      let user = firebase.auth().currentUser;
      user.sendEmailVerification();
    })
    .then(() => {
      let user = firebase.auth().currentUser;
      user.updateProfile({ displayName: `${firstName} ${lastName}`});

      return user;
    })
    .catch(error => error);
}

export function login({email, password}) {
  return firebase.auth().signInWithEmailAndPassword(email, password).catch(error => error);
}

export function forgotPassword({email}) {
  return firebase.auth().sendPasswordResetEmail(email).catch(error => error);
}
