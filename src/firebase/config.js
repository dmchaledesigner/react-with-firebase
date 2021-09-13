

//import Firebase
import * as firebase from 'firebase/app';
import 'firebase/storage'; // this holds the images
import 'firebase/firestore' // this holds the database



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAw8dIAPrqHWEXWl4MislF3QvPKlDb-7aI",
    authDomain: "firegram-68751.firebaseapp.com",
    projectId: "firegram-68751",
    storageBucket: "firegram-68751.appspot.com",
    messagingSenderId: "292030938638",
    appId: "1:292030938638:web:bb3abcdc697d3008b5c65f"
};



// Initialise Firebase
firebase.initializeApp(firebaseConfig);


//initialise storage and firestore
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();



// export storage and firestore
export { projectStorage, projectFirestore }