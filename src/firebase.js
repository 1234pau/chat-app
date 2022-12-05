import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAUpuOLo5VJuJut2LGuh8AcFKquQRCUiWM",
  authDomain: "chat-app-1726e.firebaseapp.com",
  projectId: "chat-app-1726e",
  storageBucket: "chat-app-1726e.appspot.com",
  messagingSenderId: "162276689468",
  appId: "1:162276689468:web:12224931da361a28846539"
};


const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore()

export default db