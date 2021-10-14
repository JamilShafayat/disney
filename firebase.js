import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDLZqByVeyCB5MblOw7Stf3i_bob-j-ryU",
    authDomain: "disney-clone-yt-11742.firebaseapp.com",
    projectId: "disney-clone-yt-11742",
    storageBucket: "disney-clone-yt-11742.appspot.com",
    messagingSenderId: "550974801485",
    appId: "1:550974801485:web:127cb035ef4154d06afe04"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firebase()

export { db };
