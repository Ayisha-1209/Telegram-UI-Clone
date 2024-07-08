import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import BackgroundImage from "../public/images/BackGroundImage.png";
import UserInfo from "./components/ui/UserInfo";

function App() {
  const [currentChat, setCurrentChat] = useState(null);
  const [showSideBar, setShowSideBar] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [displayWidth, setDisplayWidth] = useState(window.innerWidth);

  useEffect(() => {
    setShowSideBar(true);
    const handleResize = () => {
      setDisplayWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleChatItemClick = (chat) => {
    setCurrentChat(chat);
    if (displayWidth <= 600) {
      setShowSideBar(false);
    }
  };

  const handleShowAbout = () => {
    setShowAbout(true);
  };

  const handleHideAbout = () => {
    setShowAbout(false);
  };

  return (
    <>
      <div className="flex flex-row h-screen">
        <div
          className={`flex flex-col h-full ${
            displayWidth < 600 && showSideBar ? "w-full" : ""
          } ${displayWidth < 900 && !showSideBar ? "hidden" : ""}`}
        >
          <Sidebar
            setCurrentChat={handleChatItemClick}
            currentChat={currentChat}
          />
        </div>
        <div
          className={`flex flex-col h-full w-full overflow-hidden ${
            displayWidth < 600 && showSideBar ? "hidden" : ""
          }`}
          style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {currentChat && (
            <ChatWindow
              className="flex-1"
              chat={currentChat}
              setShowSideBar={setShowSideBar}
              displayWidth={displayWidth}
              setShowAbout={setShowAbout}
            />
          )}
        </div>
      </div>
      {showAbout && currentChat && (
          <div className="fixed top-0 right-0 z-20 transition-transform transform translate-x-0 bg-none">
            <UserInfo currentChat={currentChat} setShowAbout={setShowAbout} displayWidth={displayWidth}/>
          </div>
      )}
    </>
  );
}

export default App;
