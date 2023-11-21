import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAH8I02Md4QpNwQFaPpEMZZXzYfu8DY8i0",
    authDomain: "whatapp-firebase-yt.firebaseapp.com",
    projectId: "whatapp-firebase-yt",
    storageBucket: "whatapp-firebase-yt.appspot.com",
    messagingSenderId: "260012420472",
    appId: "1:260012420472:web:845174711453b5ae04ec8d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;