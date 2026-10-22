/*
  SETUP REQUIRED:
  1. Create a Firebase project at https://console.firebase.google.com/
  2. Add a Web App and copy its Firebase config into the object below.
  3. Enable Authentication > Sign-in method > Google.
  4. Add your GitHub Pages domain (for example: 7-cloud.github.io) under
     Authentication > Settings > Authorized domains.
  5. Create a Firestore database and publish firestore.rules from this ZIP.
  Never put a service-account/private admin key in this file.
*/
window.CQ_FIREBASE_CONFIG = {
  apiKey: "PASTE_YOUR_FIREBASE_WEB_API_KEY",
  authDomain: "PASTE_YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "PASTE_YOUR_MESSAGING_SENDER_ID",
  appId: "PASTE_YOUR_FIREBASE_APP_ID"
};
