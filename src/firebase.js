import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCeA9M1Aly9nbe4IANPL6tqNLojqf__63g",
  authDomain: "la-femme-inventory.firebaseapp.com",
  projectId: "la-femme-inventory",
  storageBucket: "la-femme-inventory.firebasestorage.app",
  messagingSenderId: "876077157255",
  appId: "1:876077157255:web:58b41f4cfa39fb2c672122"
};

const app = initializeApp(firebaseConfig);

export default app;