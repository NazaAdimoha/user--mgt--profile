import React, { createContext, useContext, useState } from 'react';

interface StateContextProps {
    children: React.ReactNode,
}

export const StateContext = createContext({});

const initialState = {
    userProfile: false,
    user: null,
}


export const StateProvider = ({ children }: StateContextProps) => {
    const [activeMenu, setActiveMenu] = useState(true);
    return (
        <StateContext.Provider value={{
            activeMenu: activeMenu,
            setActiveMenu: setActiveMenu
        }}>
            {children}
        </StateContext.Provider>    
    )
}

export const useStateContext = () => useContext(StateContext);