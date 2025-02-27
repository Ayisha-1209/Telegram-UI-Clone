import React, { useState } from 'react';
import { MdOutlineSaveAlt } from "react-icons/md";
import { MdDataSaverOff } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { GiFireworkRocket } from "react-icons/gi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoBug } from "react-icons/io5";
import { IoMdSwitch } from "react-icons/io";
import { LuBadgePlus } from "react-icons/lu";


const ToggleSwitch = ({checked, onChange}) => {
  return (
    <label className="relative inline-block w-10 h-6 bg-gray-200 rounded-full cursor-pointer ml-10">
      <input
        type="checkbox"
        className="absolute appearance-none cursor-pointer w-full h-full rounded-full bg-gray-400 border-2 border-gray-200 outline-none checked:bg-Primary checked:border-transparent checked:right-0 transition-all duration-300"
        checked={checked}
        onChange={onChange}
      />
      <span
        className={`absolute inline-block w-4 h-4 bg-white rounded-full border-2 border-gray-200 transform duration-300 ${checked ? 'translate-x-4' : ''}`}
      />
    </label>
  );
};

const SidebarHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hasAnimations, setHasAnimations] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleAnimations = () => {
    setHasAnimations(!hasAnimations);
  };

  return (
    <div className="flex items-center gap-2 bg-white px-4 py-2 relative">
      <button
        className="w-10 h-10 flex justify-center items-center bg-white rounded-full hover:bg-slate-100 focus:outline-none"
        onClick={toggleDropdown}
      >
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 8h16M4 12h16M4 16h16"></path>
        </svg>
      </button>

      {isDropdownOpen && (
        <div className="absolute top-full shadow-2xl left-10 mt-2 bg-white border border-gray-200 rounded-lg w-56">
          <ul className="p-2">
            <li className="flex items-center text-gray-800 px-4 py-1 hover:bg-gray-300 hover:rounded-md cursor-pointer text-nowrap text-sm font-bold">
            <MdOutlineSaveAlt className='mr-2'/>
              Saved Messages
            </li>
            <li className="flex items-center text-gray-800 px-4 py-1 hover:bg-gray-300 hover:rounded-md cursor-pointer text-nowrap text-sm font-bold">
            <MdDataSaverOff className='mr-2'/>
              My Story
            </li>
            <li className="flex items-center text-gray-800 px-4 py-1 hover:bg-gray-300 hover:rounded-md cursor-pointer text-nowrap text-sm font-bold">
            <IoMdPerson className='mr-2'/>
              Contacts
            </li>
            <li className="flex items-center text-gray-800 px-4 py-1 hover:bg-gray-300 hover:rounded-md cursor-pointer text-nowrap text-sm font-bold">
            <MdOutlineSettings className='mr-2'/>
              Settings
            </li>
            <li className="flex items-center text-gray-800 px-4 py-1 hover:bg-gray-300 hover:rounded-md cursor-pointer text-nowrap text-sm font-bold">
              <div className='flex'>
              <MdDarkMode className='mr-2'/>
              Dark Mode
              </div>
              <ToggleSwitch checked={isDarkMode} onChange={toggleDarkMode} />
            </li>
            <li className="flex items-center text-gray-800 px-4 py-1 hover:bg-gray-300 hover:rounded-md cursor-pointer text-nowrap text-sm font-bold">
              <div className='flex'>
              <GiFireworkRocket className='mr-2'/>
              Animations
              </div>
              <ToggleSwitch checked={hasAnimations} onChange={toggleAnimations} />
            </li>
            <li className="flex items-center text-gray-800 px-4 py-1 hover:bg-gray-300 hover:rounded-md cursor-pointer text-nowrap text-sm font-bold">
            <FaRegQuestionCircle className='mr-2'/>
              Telegram Features
            </li>
            <li className="flex items-center text-gray-800 px-4 py-1 hover:bg-gray-300 hover:rounded-md cursor-pointer text-nowrap text-sm font-bold">
            <IoBug className='mr-2'/>
              Report Bug
            </li>
            <li className="flex items-center text-gray-800 px-4 py-1 hover:bg-gray-300 hover:rounded-md cursor-pointer text-nowrap text-sm font-bold">
            <IoMdSwitch className='mr-2'/>
              Switch to a Version
            </li>
            <li className="flex items-center text-gray-800 px-4 py-1 hover:bg-gray-300 hover:rounded-md cursor-pointer text-nowrap text-sm font-bold">
            <LuBadgePlus className='mr-2'/>
              Install App
            </li>
          </ul>
        </div>
      )}

      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="p-2 pl-10 pr-4 border rounded-3xl focus:outline-1 focus:outline-blue-600 hover:outline-1 hover:outline-slate-200"
          style={{ width: '334px' }}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 20l-4.583-4.583M10 16a6 6 0 100-12 6 6 0 000 12z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SidebarHeader;
