import React, { createContext, useState } from 'react';
import { auth } from '../FireBase/FireBase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }



    const authData = {
         user, 
         setUser,
         createUser
    }

    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;