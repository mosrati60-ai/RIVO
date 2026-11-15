
importScripts("https://www.gstatic.com/firebasejs/12.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.0.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDktgkcprfcndIW1CFRVjhvPr5bf0AHIVM",
  authDomain: "taxi-motor-120b3.firebaseapp.com",
  projectId: "taxi-motor-120b3",
  storageBucket: "taxi-motor-120b3.firebasestorage.app",
  messagingSenderId: "965740197595",
  appId: "1:965740197595:web:86acdfb12f44850d1d3efe"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Taxi Moto Tunisia";

  self.registration.showNotification(title, {
    body: payload.notification?.body || "عندك طلب جديد من حريف",
    icon: "/icon.png"
  });
});
