import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {initializeApp} from "firebase/app";

// Inicia Firebase con mis settings
const firebaseConfig = {
    apiKey: "AIzaSyA0gr2gNVfKHL3IJ9aHizSx4RsntxVjt_0",
    authDomain: "coderhouse-corebuilds.firebaseapp.com",
    projectId: "coderhouse-corebuilds",
    storageBucket: "coderhouse-corebuilds.appspot.com",
    messagingSenderId: "1040362795722",
    appId: "1:1040362795722:web:44a43e68b4282380653a33"
  };

  initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


