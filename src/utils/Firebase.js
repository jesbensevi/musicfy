import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCghlJP0NYPHGX7fq7DEL9LdhMpUE5QvxU",
  authDomain: "musicfy-3dbcb.firebaseapp.com",
  databaseURL: "https://musicfy-3dbcb-default-rtdb.firebaseio.com",
  projectId: "musicfy-3dbcb",
  storageBucket: "musicfy-3dbcb.appspot.com",
  messagingSenderId: "387003676937",
  appId: "1:387003676937:web:43e7808262525cc8adfbd8",
};

export default firebase.initializeApp(firebaseConfig);
