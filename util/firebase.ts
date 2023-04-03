import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyArvGt3L7fosj15zVui2OdywdxLGSAvT6o",
    authDomain: "beepr-caebe.firebaseapp.com",
    projectId: "beepr-caebe",
    storageBucket: "beepr-caebe.appspot.com",
    messagingSenderId: "751768378927",
    appId: "1:751768378927:web:f6061baf78965c53ac30da",
    measurementId: "G-53KDETL516"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export { db };