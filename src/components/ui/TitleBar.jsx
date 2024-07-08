import { useState } from "react";
import { FiSearch, FiMoreVertical, FiPhone } from "react-icons/fi";
import backArrow from "../../../public/images/backArrow.svg";
import { FiBellOff } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { IoVideocamOutline } from "react-icons/io5";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { FaGift } from "react-icons/fa6";
import { TbLockCheck } from "react-icons/tb";
import { IoTrashBin } from "react-icons/io5";

const TitleBar = ({ chat, setShowSideBar, displayWidth, setShowAbout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex h-[60px] items-center justify-between p-4 bg-white border-b border-gray-200">
      <div className="flex items-center">
        <div
          className={`w-12 h-12 ml-3 hover:bg-slate-300 hover:cursor-pointer rounded-full ${
            displayWidth > 900 ? "hidden" : ""
          }`}
          onClick={() => {
            setShowSideBar((prev) => !prev);
          }}
        >
          <img
            src={backArrow}
            alt="Back Button"
            className="rounded-full w-12 h-12 opacity-80"
          />
        </div>
        <div
          className="flex flex-row items-center cursor-pointer"
          onClick={() => setShowAbout(true)}
        >
          <div className="w-12 h-12 ml-3">
            <img src={chat.imageUrl} alt="profile" className="rounded-full" />
          </div>
          <div className="font-bold text-lg ml-5">
            {chat.creator.name || "Deleted User"}
          </div>
        </div>
      </div>
      <div className="flex items-center ml-auto space-x-2">
        <button className="p-2 text-gray-500" aria-label="Phone Call">
          <FiPhone size={24} />
        </button>
        <button className="p-2 text-gray-500" aria-label="Search">
          <FiSearch size={24} />
        </button>
        <div className="relative">
          <button className="p-2 text-gray-500" onClick={toggleDropdown} aria-label="More Options">
            <FiMoreVertical size={24} />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg w-48 z-20 shadow-xl px-2">
              <ul className="py-2">
                <li className="flex items-center text-gray-800 px-4 py-1 hover:bg-gray-300 hover:rounded-md cursor-pointer text-nowrap text-sm font-bold"><FiBellOff className="mr-4"/>
                  Mute
                </li>
                <li className="flex items-center text-gray-800 px-4 py-1 hover:bg-gray-300 hover:rounded-md cursor-pointer text-nowrap text-sm font-bold"><IoCallOutline className="mr-4"/>
                  Call
                </li>
                <li className="flex items-center text-gray-800 px-4 py-1 hover:bg-gray-300 hover:rounded-md cursor-pointer text-nowrap text-sm font-bold"><IoVideocamOutline className="mr-4"/>
                  Video Call
                </li>
                <li className="flex items-center text-gray-800 px-4 py-1 hover:bg-gray-300 hover:rounded-md cursor-pointer text-nowrap text-sm font-bold"><IoCheckmarkDoneCircle className="mr-4"/>
                  Select Messages
                </li>
                <li className="flex items-center text-gray-800 px-4 py-1 hover:bg-gray-300 hover:rounded-md cursor-pointer text-nowrap text-sm font-bold"><MdPeopleAlt className="mr-4"/>
                  Add to Contacts
                </li>
                <li className="flex items-center text-gray-800 px-4 py-1 hover:bg-gray-300 hover:rounded-md cursor-pointer text-nowrap text-sm font-bold"><FaGift className="mr-4"/>
                  Gift Premium
                </li>
                <li className="flex items-center text-gray-800 px-4 py-1 hover:bg-gray-300 hover:rounded-md cursor-pointer text-nowrap text-sm font-bold"><TbLockCheck className="mr-4"/>
                  Block User
                </li>
                <li className="flex items-center px-4 py-1 hover:bg-gray-300 cursor-pointer hover:rounded-md text-nowrap text-sm text-red-600 font-bold"><IoTrashBin className="mr-4"/>
                  Delete Chat
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
