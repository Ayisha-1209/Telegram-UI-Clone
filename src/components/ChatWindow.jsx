import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import MessageBubble from './ui/MessageBubble';
import MicrophoneSvg from '../../public/images/microphone.svg';
import downArrow from '../../public/images/downArrow.svg';
import TitleBar from './ui/TitleBar';
import { convertDate, getTimeFromDate, sortAndGroupMessagesByDate } from '../../utils';
import "./ChatWindow.css"

const ChatWindow = ({ chat , setShowSideBar , displayWidth , setShowAbout}) => {
  const currentChat = chat.id;
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [inputMessage, setInputMessage] = useState('');
  const chatContainerRef = useRef(null);
  const bottomRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [floatingDate, setFloatingDate] = useState('');

  useEffect(() => {
    setMessages([]);
    setPage(1);
  }, [currentChat]);

  useEffect(() => {
    if (!currentChat) {
      setMessages([]);
      return;
    }

    const fetchMessages = async (chatId, pageNum) => {
      setLoading(true);
      try {
        const response = await axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`);
        const message = sortAndGroupMessagesByDate(response.data.data);
        setMessages(() => [...message]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching messages:', error);
        setLoading(false);
      }
    };

    fetchMessages(currentChat, page);
  }, [currentChat, page]);

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages]);

  useEffect(() => {
    const handleScroll = () => {
      if (chatContainerRef.current) {
        const { scrollTop } = chatContainerRef.current;
        let floatingDate = '';

        for (let group of messages) {
          const element = document.getElementById(`date-${group.date}`);
          if (element && element.offsetTop <= scrollTop + 50) {
            floatingDate = group.date;
          }
        }

        setFloatingDate(floatingDate);
      }
    };

    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.addEventListener('scroll', handleScroll);
      return () => {
        chatContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, [messages]);

  const scrollToBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      message: inputMessage,
      sender: { name: 'BeyondChat' },
      sender_id: 1,
    };

    setMessages(prevMessages => [...prevMessages, newMessage]);
    setInputMessage('');
    scrollToBottom();
  };

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  if (!currentChat) {
    return null;
  }

  return (
    <div className="flex flex-col h-full w-full overflow-hidden">
      <TitleBar chat={chat} setShowAbout={setShowAbout} setShowSideBar={setShowSideBar} displayWidth={displayWidth}/>
      <div
        ref={chatContainerRef}
        className="flex-1 p-4 overflow-y-auto bg-cover bg-center relative"
        style={{ background: "none" }}
      >
        <div className="floating-date mx-auto">{convertDate(floatingDate)}</div> 
        {/* Floating date could not resolve because of time constraints */}

        {messages.map((group, index) => (
          <div key={index} className="message-group lg:max-w-[60%] md:max-w-[90%] mx-auto" id={`date-${group.date}`}>
            <div className="text-white text-center my-4"><p>{convertDate(group.date)}</p></div>
            <div>
              {group.messages.map(message => (
                <MessageBubble
                  key={message.id}
                  date={getTimeFromDate(message.updated_at)}
                  message={message.message}
                  sender={message.sender.name || 'Deleted User'}
                  isOwnMessage={message.sender_id === 1}
                />
              ))}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
        {loading && <div className="text-center">Loading...</div>}
      </div>
      {showScrollButton && (
        <button
          onClick={scrollToBottom}
          className="fixed bottom-16 right-4 mb-5 bg-slate-400 text-white rounded-full p-2 shadow-lg mr-10"
        >
          <img src={downArrow} alt="Scroll to bottom" />
        </button>
      )}
      <div className="flex justify-center px-[8px] py-[5px] min-h-[44px] mb-5 border-gray-800">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full focus:outline-none lg:max-w-[60%] md:max-w-[90%] p-4 border rounded-xl"
          value={inputMessage}
          onChange={handleInputChange}
          onKeyPress={handleInputKeyPress}
        />
        <div className="text-sm font-semibold bg-blue-500 text-white rounded-full w-[54px] h-[54px] p-4 ml-3 flex items-center justify-center">
          <img src={MicrophoneSvg} alt="Microphone" />
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
