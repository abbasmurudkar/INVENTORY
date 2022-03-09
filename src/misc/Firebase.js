import firebase from 'firebase/app';
import 'firebase/auth'
const Config = {
    apiKey: "AIzaSyBtwu1lF0UtkY_PVVNLH8TxEbzLbLI5N6o",
    authDomain: "stocks-management-9495e.firebaseapp.com",
    databaseURL: "https://stocks-management-9495e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "stocks-management-9495e",
    storageBucket: "stocks-management-9495e.appspot.com",
    messagingSenderId: "158745224275",
    appId: "1:158745224275:web:743318e3f438c8a4a292a6"
  };

  const app = firebase.initializeApp(Config)
  export const auth = app.auth()