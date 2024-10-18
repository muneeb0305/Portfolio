import React, { useState } from "react";
import { menuItemsData } from "../../data/menuItemsData";
import MenuItem from "../Menu Item/menuItem";

export default function Sidebar({ children }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    console.log("clicked");
    setOpen((prev) => !prev);
  };
  return (
    <>
      <button
        onClick={() => handleOpen()}
        className="fixed z-50 inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500  rounded-lg md:hidden hover:bg-gray-100  "
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        className={`fixed top-0 left-0 z-40 w-52 p-4 h-screen 
        transition-transform 
        ${open ? "translate-x-2 bg-white" : "-translate-x-full"}
        md:translate-x-0 overflow-hidden`}
        aria-label="Sidebar"
      >
        <div className="h-full flex flex-col pl-5 py-4">
          {/* User Name at the Top */}
          <div className="text-start mb-8 pt-10">
            <h1 className="text-3xl font-extrabold text-gray-700 ">POOJA</h1>
            <h2 className="text-4xl font-extrabold text-gray-800 ">
              DANTEWADIA
            </h2>
          </div>

          {/* Menu Items in the Center */}
          <div className="pt-32 flex items-center">
            <ul className="space-y-2">
              {menuItemsData.map((item, index) => (
                <MenuItem
                  key={index}
                  href={item.href}
                  iconPath={item.iconPath}
                  label={item.label}
                  badge={item.badge}
                />
              ))}
            </ul>
          </div>
        </div>
      </aside>

      <div className="p-4 md:ml-52 lg:ml-10 xl:ml-40">
        <div className="px-0 pt-10 md:px-3 md:pt-0 lg:pr-20 lg:pl-52 xl:px-24 2xl:pr-16 2xl:pl-32">
          {children}
        </div>
      </div>
    </>
  );
}
