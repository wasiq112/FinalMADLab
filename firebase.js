// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { initializeAuth,getReactNativePersistence } from 'firebase/auth';

// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'; // Import ReactNativeAsyncStorage

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAr1zk1XpMkOlCz0_5j69BdJNolMht6zaU",
//   authDomain: "reactapp-45b0e.firebaseapp.com",
//   databaseURL: "https://reactapp-45b0e-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "reactapp-45b0e",
//   storageBucket: "reactapp-45b0e.appspot.com",
//   messagingSenderId: "326690045865",
//   appId: "1:326690045865:web:08ca3f61f64573893e0eb8",
//   measurementId: "G-TXEJ704057",
//   databaseURL: 'https://reactapp-45b0e-default-rtdb.asia-southeast1.firebasedatabase.app/',
  
// };

// // Initialize Firebase
//  const app = initializeApp(firebaseConfig);

//  const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });

// export {app, auth};


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth,getReactNativePersistence } from 'firebase/auth';// TODO: Add SDKs for Firebase products that you want to use
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'; 

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoX48-DoKIwv01a_MuoPsLOf0f2Asy8mI",
  authDomain: "cricket-af3b8.firebaseapp.com",
  projectId: "cricket-af3b8",
  storageBucket: "cricket-af3b8.appspot.com",
  messagingSenderId: "1028343591179",
  appId: "1:1028343591179:web:12583e421dae15154df20e",
  measurementId: "G-294QERPX1J",
  databaseURL: 'https://cricket-af3b8-default-rtdb.asia-southeast1.firebasedatabase.app/'
};

const app = initializeApp(firebaseConfig);

 const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export {app, auth};