import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext();

const UserContext = ({children}) => {
    const [user,setUser] = useState({});
    const [userLoading,setUserLoading] = useState(true)

    const createUser = (email,password) => {
        setUserLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    };
    const signInUser = (email,password) => {
        setUserLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    };

    //update user
    const updataUser = (userInfo)=>{
        return updateProfile(auth.currentUser,userInfo)
    }

    const logOut =()=>{
        setUserLoading(true)
        return signOut(auth)
    }

    // tracking
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setUserLoading(false)
        });
        return ()=> unSubscribe();
    },[])
    const userInfo = {
        createUser,
        signInUser,
        updataUser,
        logOut,
        userLoading,
        user
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default UserContext;