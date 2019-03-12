importScripts('https://www.gstatic.com/firebasejs/5.8.61/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.8.61/firebase-messaging.js');

firebase.initializeApp({
  messagingSenderId: '693657651637' // troque pelo seu sender id
});

const messaging = firebase.messaging();
