import firebase from "firebase/compat";

const fierbaseChat = firebase.initializeApp({
    apiKey: "AIzaSyCetrktFKd1jD9SpLNzjPuA2n9iKrkI0AE",
    authDomain: "chat-app-5be40.firebaseapp.com",
    projectId: "chat-app-5be40",
    storageBucket: "chat-app-5be40.appspot.com",
    messagingSenderId: "291959512013",
    appId: "1:291959512013:web:b5fb1312e0e50fcfce8284",
    measurementId: "G-GK0BL1MYE1"
});

const database = fierbaseChat.firestore();

const authentication = fierbaseChat.auth();

export {database, authentication};