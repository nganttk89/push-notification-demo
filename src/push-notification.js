import firebase from 'firebase';
export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: "693657651637"
  });
  navigator.serviceWorker
  .register('https://nganttk89.github.io/push-notification-demo/firebase-messaging-sw.js')
  .then((registration) => {
    firebase.messaging().useServiceWorker(registration);
  });
}

export const askForPermissionToReceiveNotifications = async () => {
  try {

    const messaging = firebase.messaging();

    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('user token: ', token);

    return token;
  } catch (error) {
    console.error(error);
  }
}
