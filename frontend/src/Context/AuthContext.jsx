import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Utils/Firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext({currentUser:{}, setCurrentUser:()=>{}});

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });

        unsub();

        return () => {
            unsub();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserContext = () => useContext(AuthContext);