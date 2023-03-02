"use strict";

/**
 * Config module which defines Firebase URL.
 * @module myApp/config
 */
var app = angular.module("myApp.config", []);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkz9BW1wPvIkQDFFFGuj6dDxIeVA7I-uo",
  authDomain: "club-list-87d47.firebaseapp.com",
  projectId: "club-list-87d47",
  storageBucket: "club-list-87d47.appspot.com",
  messagingSenderId: "1026274058430",
  appId: "1:1026274058430:web:eaf42f260b1ce152727eef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
