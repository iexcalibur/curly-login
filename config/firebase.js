import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import AUTH from '@react-native-firebase/auth';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); 
}

export const database = firestore();
export const auth = AUTH;

