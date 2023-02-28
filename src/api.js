import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


import firebaseConfig from './firebaseConfig';


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();



const apiLogin = {
  facebookPopup: async () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    return await firebaseApp.auth().signInWithPopup(provider);

  }, addUser: async (data) => {
    await db.collection('users').doc(data.id).set({
      name: data.name,
      avatar: data.avatar,
    }, { merge: true })

  }
}

export default apiLogin;