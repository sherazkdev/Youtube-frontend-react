import React, { createContext, useEffect, useState } from 'react';
import {handleGetCurrentUser} from "../api/AxiosInstance";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    
    // state for error and userInfo
    const [error,setError] = useState(null);
    const [loggedInUser,setLoggedInUser] = useState(null);

    useEffect( () => {

        // verify user with api calling backend
        const verifyUserByCookie = async () => {
            try {
                
                // verify user by axios
                const findUser = await handleGetCurrentUser();
                // check user is exist with else if
                if(findUser?.data?.statusCode == 200 && findUser?.data?.success == true){
                    setLoggedInUser(findUser?.data?.data)
                    return;
                }else {
                    setLoggedInUser(null);
                    return;
                }
            } catch (error) {
                setError(error?.response?.data || error?.response || error)
            }
        }

        const timer = setTimeout(verifyUserByCookie,100);
        return () => { clearTimeout(timer)}

    },[])

    // if(error){
    //     return (<>Some thing wrong</>)
    // }

    // Checking user is logged in 
    const isLoggedInUser = () => {

        // user is note avaible if null
        if(!loggedInUser) return false;
        // available user
        return true
    }

    return (
        <AuthContext.Provider value={{loggedInUser,setLoggedInUser,isLoggedInUser}}>
            {children}
        </AuthContext.Provider>
    )
}
