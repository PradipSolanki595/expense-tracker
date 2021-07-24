import firebase from "firebase"

  const firebaseConfig = {
    apiKey: "AIzaSyABbRCkY0aLRCu0Xda4Ht7Hv1CeTSkTqAI",
    authDomain: "expense-tracker-43af1.firebaseapp.com",
    databaseURL: "https://expense-tracker-43af1-default-rtdb.firebaseio.com",
    projectId: "expense-tracker-43af1",
    storageBucket: "expense-tracker-43af1.appspot.com",
    messagingSenderId: "456696267777",
    appId: "1:456696267777:web:ced017e19909e339846c00",
    measurementId: "G-6L82Y6BQ9Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase