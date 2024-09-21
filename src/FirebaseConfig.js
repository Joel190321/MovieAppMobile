
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlrIv6YPph_K0xMy-S8745sZ7i9yOxGvE",
  authDomain: "app-movie19.firebaseapp.com",
  projectId: "app-movie19",
  storageBucket: "app-movie19.appspot.com",
  messagingSenderId: "684941877611",
  appId: "1:684941877611:web:d46966f5304d904b422c2e"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar la autenticación de Firebase
const firebaseAuth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

const googleProvider = new GoogleAuthProvider();

export { firebaseAuth , googleProvider, };