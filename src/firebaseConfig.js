import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA4Jd5P21Yhdaivfw-IQipXlqRkLtb3vCw',
  authDomain: 'react-devjobs-webapp.firebaseapp.com',
  projectId: 'react-devjobs-webapp',
  storageBucket: 'react-devjobs-webapp.appspot.com',
  messagingSenderId: '1028328527096',
  appId: '1:1028328527096:web:df7577da4013385aab570d'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };