import React, { createContext, useState } from 'react';




type deleteCookieProviderProps = {
    children:React.ReactNode
}

type deleteCookieContextType = {

    cookieDelete:boolean
    setCookieDelete:React.Dispatch<React.SetStateAction<boolean>> 
}

export const CookieDelete = createContext<deleteCookieContextType>({} as deleteCookieContextType);

export const CookieDeleteProvider = ({children}:deleteCookieProviderProps)=>{

    let [ cookieDelete,setCookieDelete] = useState<boolean>(false)
    return <CookieDelete.Provider value={{cookieDelete,setCookieDelete}}>{children}</CookieDelete.Provider>
}

