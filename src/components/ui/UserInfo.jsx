import CrossImage from "../../../public/images/cross.png";
import { MdAlternateEmail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";

const UserInfo = ({ currentChat, setShowAbout, displayWidth }) => {
  const [NotiON, setNotiON] = useState(false);

  const toggleMode = () => {
    setNotiON((prev) => !prev);
  };
  const onClose = () => {
    setShowAbout((prev) => !prev);
  };

  return (
    <div
      className={`bg-white w-[400px] h-screen  overflow-y-auto  overflow-x-hidden border-l-[1px] border-[#0000004f]
    ${displayWidth < 600 ? "w-screen" : "w-[400px]"}
    `}
    >
      <div className="flex justify-start items-center ml-4 mt-3">
        <button
          className="hover:scale-110 hover:bg-[#ffffff0d] rounded-full p-2 max-h-[40px] max-w-[40px] ml-4"
          onClick={onClose}
        >
          <img src={CrossImage} alt="Close" />
        </button>
        <p className="ml-3 text-[1.5rem] text-black font-bold">User Info</p>
      </div>
      <div className="ml-4 mt-5 p-10">
        <img
          src={currentChat.imageUrl}
          alt=""
          className="mx-auto mt-5 rounded-full w-[60%] transition-all ease-in-out duration-[400ms]  hover:scale-150 hover:rounded-none hover:w-[100em] hover:border hover:mb-10"
        />
      </div>
      {console.log(currentChat)}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-black text-2xl font-bold">
          {currentChat.creator.name || "Deleted User"}
        </h1>
        <h1 className="text-black text-lg">last seen</h1>
      </div>
      <div>
        <div className="flex flex-row justify-start items-center p-5">
          <MdAlternateEmail className="w-[40px] h-[40px]" />
          <div className="flex flex-col ml-2">
            <h1 className="text-black text-lg font-semibold">
              {currentChat.creator.email || "Unknown"}
            </h1>
            <h1 className="text-slate-600 text-md">Username</h1>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center p-5">
          <FaRegBell className="w-[60px] h-[50px]" />
          <h1 className="text-black text-m mr-48 ml-2">Notifications</h1>
          <ToggleSwitch checked={NotiON} onChange={toggleMode} />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
