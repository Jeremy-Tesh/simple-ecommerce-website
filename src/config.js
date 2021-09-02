import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCagJZz7Qq82dvInU4uMrATkwc2xzmO9Bk",
  authDomain: "ecommerce-47eb1.firebaseapp.com",
  projectId: "ecommerce-47eb1",
  storageBucket: "ecommerce-47eb1.appspot.com",
  messagingSenderId: "836597092585",
  appId: "1:836597092585:web:768e955e0a0bd231dca078",
});

export const db = firebase.firestore();

export const auth = app.auth();
export default app;
