// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCcUxI5ye0FMB5n9KHuiwLcE8vgUX1oOf8",
  authDomain: "pos-sanskriti.firebaseapp.com",
  databaseURL: "https://pos-sanskriti-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pos-sanskriti",
  storageBucket: "pos-sanskriti.firebasestorage.app",
  messagingSenderId: "249116187571",
  appId: "1:249116187571:web:d4d63de8e8b37baccbc9c6",
  measurementId: "G-KLRDN822QM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);