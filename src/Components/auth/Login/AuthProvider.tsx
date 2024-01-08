import React, { useState } from 'react'
import { useContext, createContext } from "react";
import { ReactNode } from 'react';
import { useNavigate, } from 'react-router-dom';
import axios from 'axios';
import { Info } from '../../../Utils/validationSchemas';
interface childrenProps{
    children:ReactNode
}
const AuthContext = createContext();
const AuthProvider = ({children}:childrenProps) => {
    const [user, setUser] = useState(null)
    const [access_token, setToken] = useState(localStorage.getItem("authToken") || "")
    const [error, setError] = useState(null)

    const loginAction = async (data:{email:string,  password:string}) => {
        try {
          const response = await axios.post("https://mainsite-yqoe.onrender.com/api/auth/login",data);
          const res =response.data;
          console.log('the res info is given as >>>', res)
            if(res && res.access_token){
              console.log('Access Token:', res.access_token)
              setUser(res.user);
              setToken(res.access_token);
              localStorage.setItem("authToken", res.access_token);
              console.log('access_token is >>>',res.access_token )
              return;
            }
          else{
            if(res && res.message === 'Invalid password'){
              throw new Error('Invalid password')
            } 
            else if (res && res.message === 'User not found') {
              throw new Error('User not found');
            }
            else{
              throw new Error('An error occurred during login')
            }
          }
        } catch (err){
          console.error(err);
          setError(err.message || 'An error occured')
        }
    };

  return (
    <AuthContext.Provider value={{ access_token, user, loginAction, error}}>
         {children}
    </AuthContext.Provider>

  );
    
  
}

export default AuthProvider

export const useAuth = ()=>{
    return useContext(AuthContext)
}