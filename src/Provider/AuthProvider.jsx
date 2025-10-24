import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        name: 'Habu Mia',
        email: 'habu@mia.com',
        photo: 'https://i.ibb.co.com/nNbBbftF/Dr-Emily-Rodriguez.webp'
    });



    const authData = {
         user, 
         setUser
    }

    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;