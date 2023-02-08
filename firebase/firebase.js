import {initializeApp} from 'firebase/app'
import { getFirestore} from 'firebase/firestore'
 
const firebaseConfig = {
    apiKey: "AIzaSyCE96p_BevgVNEWW8JbGCk_UY3TntOdT3c",
    authDomain: "coffeeshop-b3b96.firebaseapp.com",
    projectId: "coffeeshop-b3b96",
    storageBucket: "coffeeshop-b3b96.appspot.com",
    messagingSenderId: "762040283929",
    appId: "1:762040283929:web:7c89c18b235dd7f9ff4b88",
    measurementId: "G-YM8QNP48RZ"
  };
initializeApp();
const db = getFirestore();

const docRef = db.collection('users').doc('alovelace');

await docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});
