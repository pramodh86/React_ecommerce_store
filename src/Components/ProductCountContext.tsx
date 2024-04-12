import React, { createContext, useState } from 'react';




type productCountProviderProps = {
    children:React.ReactNode
}

type productCountContextType = {

    count:number
    setCount:React.Dispatch<React.SetStateAction<number>> 
}

export const ProductCount = createContext<productCountContextType>({} as productCountContextType);

export const ProductCountProvider = ({children}:productCountProviderProps)=>{

    let [ count,setCount] = useState<number>(0)
    return <ProductCount.Provider value={{count,setCount}}>{children}</ProductCount.Provider>
}

