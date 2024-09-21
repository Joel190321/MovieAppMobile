import React, { createContext, useState, useEffect, useContext } from 'react';
import { firebaseAuth } from '../FirebaseConfig'; 
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
      if (user) {
        setUser(user);
        await AsyncStorage.setItem('user', JSON.stringify(user));
      } else {
        setUser(null);
        await AsyncStorage.removeItem('user');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const register = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(firebaseAuth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
