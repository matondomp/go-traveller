/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/prop-types */

import React, { createContext, useCallback, useState,useContext } from "react"
import { api } from "../service/api"

interface AuthTypes{
    password:string
    email:string
}
interface AuthContextData{
    user:object
    signIn(credential:AuthTypes):Promise<void> 
    logOut():void
}
interface AuthData{
    token:string
    user:object
}


export const AuthContext=createContext<AuthContextData>({} as AuthContextData)

export const Auth: React.FC=({ children })=>{
    
      const [data, setData]=useState<AuthData>(():AuthData =>{

        const token= localStorage.getItem("@go-troveller:token")
        const user= localStorage.getItem("@go-troveller:user")

        if(user && token){
            return { user:JSON.parse(String(user)), token}
        }else{
            return { } as AuthData
        }

      })
      
      const signIn=useCallback(async ({ email,password }:AuthTypes):Promise<void> =>{
         const respnse= await api.post("session",{
             email,
             password
         })
         const { token,user } =respnse.data.getValue
         
         localStorage.setItem("@go-troveller:token",token)
         localStorage.setItem("@go-troveller:user",JSON.stringify(user))
         setData({ token,user  })
     },[])

     const logOut=useCallback(()=>{
        localStorage.removeItem("@go-troveller:user")
        localStorage.removeItem("@go-troveller:token")
        setData({ } as AuthData)
     },[])

      return(
        <AuthContext.Provider value={{user:data.user, signIn,logOut }}>
           { children }
        </AuthContext.Provider>
      )
}

export function useAuth():AuthContextData{
     
    const context= useContext(AuthContext)

      if(!context){
          throw Error("useAuth mast be whthin an AuthProvider")
      }
     return context
}