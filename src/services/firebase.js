import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { uid } from "uid";

const firebaseConfig = {
  apiKey: "AIzaSyAWNh8DkQHBhSmQjtPDNEgXccMKAtU1yPE",
  authDomain: "weather-751bb.firebaseapp.com",
  databaseURL: "https://weather-751bb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "weather-751bb",
  storageBucket: "weather-751bb.appspot.com",
  messagingSenderId: "1067749199399",
  appId: "1:1067749199399:web:7db935742a70c29c8d8802"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {db, auth, provider}


























function writeUserData(city, fingerprint) {
  const uuid = uid()
  set(ref(db, `/${fingerprint} ${uuid}`), {
    city
  });
}
function readUserData(fingerprint) {
  const dbRef = ref(db);
  const user = []
  get(child(dbRef, '/')).then((snapshot) => {
    if (snapshot.exists()) {
      const list = snapshot.val()
      for(let item in list){
       if(item.split(' ')[0] === fingerprint){
        user.push(list[item].city)
       }
      }
      console.log(user)
    } else {
      console.log("No data available"); 
    }
  }).catch((error) => {
    console.error(error);
  });
}