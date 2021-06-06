  import firebase from 'firebase'
  require("@firebase/firestore")

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCWR0bxDWP2cKzFsvFntaUpdMeZaZLSvP4",
    authDomain: "storyhub-e8f95.firebaseapp.com",
    projectId: "storyhub-e8f95",
    storageBucket: "storyhub-e8f95.appspot.com",
    messagingSenderId: "524210175787",
    appId: "1:524210175787:web:835addab604a3630cdcf6e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()
