import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { initializeFirestore, persistentLocalCache } from 'firebase/firestore';

const firebaseConfig = {
  // development
  // apiKey: "AIzaSyC711DDHe3_VgCW7QOAr9tvjzHmBixpc2c",
  // authDomain: "blog-comments-c510f.firebaseapp.com",
  // projectId: "blog-comments-c510f",
  // storageBucket: "blog-comments-c510f.appspot.com",
  // messagingSenderId: "125588791219",
  // appId: "1:125588791219:web:b4d7de3e3227f7cda0b5c6",
  // measurementId: "G-GLJQY1PBQH"

  // production
  apiKey: "AIzaSyAuY0wMocjYuYEzJI8K2LyvstxRLI6naFs",
  authDomain: "personal-website-pd.firebaseapp.com",
  projectId: "personal-website-pd",
  storageBucket: "personal-website-pd.appspot.com",
  messagingSenderId: "1038785915433",
  appId: "1:1038785915433:web:757affb3903914ab718a38",
  measurementId: "G-B9W9YDSDS9"
};

const app = initializeApp(firebaseConfig);

// analytics only works in production
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
// init firestore with caching
const db = initializeFirestore(app, {
  localCache: persistentLocalCache(),
  // specify cache size around 2mb
  // cacheSizeBytes: 2 * 1024 * 1024,
})


export { app, provider, auth, db };