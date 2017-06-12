System.register("frontend/firebase-messaging-sw", [], function($__export) {
  "use strict";
  var messaging;
  return {
    setters: [],
    execute: function() {
      importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-app.js');
      importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-messaging.js');
      firebase.initializeApp({messagingSenderId: '754727428178'});
      messaging = firebase.messaging();
    }
  };
});
