import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBqP9LXsHR2uI07_32sFLD215hUY0lz6co",
    authDomain: "project-67-b2dde.firebaseapp.com",
    databaseURL: "https://project-67-b2dde-default-rtdb.firebaseio.com",
    projectId: "project-67-b2dde",
    storageBucket: "project-67-b2dde.appspot.com",
    messagingSenderId: "141353000210",
    appId: "1:141353000210:web:1a401a5be797d3a78ba7cb",
    measurementId: "G-CG3LHL7P3H"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export default firebase.database();