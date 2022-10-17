import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';


const NavBar = () => {
    const { activeMenu, setActiveMenu } = useStateContext()
  return (
    <div>
        hello
    </div>
  )
}

export default NavBar