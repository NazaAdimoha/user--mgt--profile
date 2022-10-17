import React from "react";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/sidebar/SideBar";
import { useStateContext } from "../../contexts/ContextProvider";

const UsersDashBoard = () => {
  const  activeMenu  = useStateContext();
  
  return (
    <div className="flex relative dark:bg-main-bg">
      {activeMenu ? (
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
          <SideBar />
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg">
          <SideBar />
        </div>
      )}
      <div
        className={
          activeMenu
            ? "dark:bg-main-dark-bg  bg-main-bg md:ml-72 min-h-screen w-full"
            : "min-h-screen w-full flex-2 bg-main-bg dark:bg-main-dark-bg"
        }
      >
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
          <NavBar />
        </div>
      </div>
    </div>
  );
};

export default UsersDashBoard;
