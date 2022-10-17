import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { links } from "../../data/SideBarDummyData";
import { useStateContext } from "../../contexts/ContextProvider";

const SideBar = () => {
  const {activeMenu} = useStateContext();

  const activeLink =
    "flex items-center pl-4 pt-3 pb-3 rounded-lg text-white text-md gap-5 m-2";
  const normalLink =
    "flex items-center pl-4 pt-3 pb-3 rounded-lg text-gray-700 text-md gap-5 m-2 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen md:overflow-auto overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex items-center justify-between">
            <Link
              to={"/"}
              onClick={() => {}}
              className="items-center gap-3 ml-3 flex mt-4 text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware /> <span>Shoppy</span>
            </Link>
            <button
              type="button"
              className="text-white text-2xl rounded-full p-3 mt-4 block md:hidden hover:bg-light-gray"
              onClick={() => {}}
            >
              <MdOutlineCancel />
            </button>
          </div>
          <div className="mt-10 ">
            {links.map((link) => (
              <div key={link.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase flex flex-col gap-2">
                  {link.title}
                </p>
                {link.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={() => {}}
                    className={({ isActive }) => {
                      return isActive ? activeLink : normalLink;
                    }}
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;
