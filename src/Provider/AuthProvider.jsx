import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../FireBase/FireBase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userLoading, setUserLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }
    const signUpWithGoogle = () => {
        setUserLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };
    const loginUser = (email, password)=> {
        setUserLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
     const signOutUser = () => {
        return signOut(auth)
    }
    const resetPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setUserLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, []);



    const authData = {
        user,
        setUser,
        createUser,
        updateUser,
        signUpWithGoogle,
        loginUser,
        signOutUser,
        userLoading,
        resetPassword,
    }

    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;