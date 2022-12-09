import React,{useState,useEffect} from "react";
import ImageSearch from "./imageSearch"

const NavBar = () => {
   
    
    
  return (
    <div className="fixed top-0 shadow-lg flex  gap-3 bg-white w-full p-1 mx-auto ">
      <span className="h-8 w-16 p-2 mb-4">
      <img src="/assets/img/Test.png" alt=".logo" />
      </span>
      
      
      <select className="cursor-pointer hover:bg-gray-200 p-1 rounded-full md:hidden ">
        <option >Home</option>
        <option >Create</option>
      </select>
      <span className="cursor-pointer hidden md:block px-2 py-1 my-auto rounded-full bg-black text-white">
        Home
      </span>
      <select className="cursor-pointer hidden md:block w-20">
        <option disabled selected value>Create</option>
        <option value="">Create Idea Pin</option>
        <option value="">Create Pin</option>
      </select>
      {/* <input
        type="text"
        placeholder="@ Search"
        className="bg-gray-200 rounded-full px-4 w-[100%]"
      /> */}
      <div className="w-full"></div>
      <span className="hover:bg-gray-300 rounded-full flex justify-center pt-1 w-[50px] cursor-pointer"> 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
      </span>
      <span className="hover:bg-gray-300 rounded-full flex justify-center pt-1 w-[50px] cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
          />
        </svg>
      </span>
      <span className="hover:bg-gray-300 rounded-full flex justify-center pt-1 w-[50px] cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      </span>
    </div>
  );
};

export default NavBar;
