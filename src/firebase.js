import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuiGtccHRqNJ35z2lhIVyWvzwT9sH8rU4",
  authDomain: "firbase-auth-a68d6.firebaseapp.com",
  projectId: "firbase-auth-a68d6",
  storageBucket: "firbase-auth-a68d6.appspot.com",
  messagingSenderId: "547425066233",
  appId: "1:547425066233:web:a38ac17f677b5634975628"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;

