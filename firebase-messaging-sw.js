System.register("frontend/firebase-messaging-sw", [], function($__export) {
  "use strict";
  var firebaseMessaging;
  return {
    setters: [],
    execute: function() {
      importScripts('https://www.gstatic.com/firebasejs/4.1.2/firebase-app.js');
      importScripts('https://www.gstatic.com/firebasejs/4.1.2/firebase-messaging.js');
      firebase.initializeApp({messagingSenderId: '754727428178'});
      firebaseMessaging = firebase.messaging();
    }
  };
});
