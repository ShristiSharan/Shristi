// components/CustomChatbot.jsx
import React, { useState, useEffect } from 'react';
import "./botstyles.css";

const CustomChatbot = () => {
  const [botResponse, setBotResponse] = useState('Hello There!!..');
  const [chatbotVisible, setChatbotVisible] = useState(false);
  const [userInput, setUserInput] = useState('');


  const reset = () => {
    setBotResponse('Hello There!!..');

  };


 const sendMessage = () => {
    setBotResponse(userInput);
    setUserInput('');
 };
 const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };
  const handleQuickMessage = (message) => {
    setUserInput(message);
    sendMessage();
  };

  const toggleChatbot = () => {
    setChatbotVisible(prevVisible => !prevVisible);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = './chatbot.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

 return (
    <div>
      <button onClick={toggleChatbot}>Toggle Chatbot</button>

      {chatbotVisible && (
        <div id="custom-chatbot-container">
              <button onClick={reset}>Reset</button>

          <div className="botbody">
          <div className="card">
      <div id="botheader">
        <h1>Shris Robo!</h1>
        <button className="send" onClick={reset}>
          <div className="circle refresh">
            <i className="zmdi zmdi-refresh-sync" style={{ fontSize: '1.5rem', marginLeft: '0.2rem' }}></i>
          </div>
        </button>
      </div>
      <hr />
      <div id="message-section">
        <div className="message" id="bot">
          <span id="bot-response">{botResponse}</span>
        </div>
      </div>
      <div className="quickbtns">
        <button tabIndex="1" className="quickmessage" data-message="Report a Bug 🐞" onClick={() => handleQuickMessage('Report a Bug 🐞')}>
          Report a Bug 🐞
        </button>
      </div>
      <div id="input-section">
        <input
          id="user-input"
          type="text"
          placeholder="Type a message..."
          autoComplete="on"
          autoFocus={true}
          tabIndex="3"
          value={userInput}
          onChange={handleInputChange}
        />
        <button type="submit" className="send sendmessage" onClick={sendMessage} tabIndex="3">
          <div className="circle">
            <i className="zmdi zmdi-mail-send" style={{ fontSize: '1.5rem', marginLeft: '0.2rem' }}></i>
          </div>
        </button>
      </div>
    </div>
          </div>
        </div>
      )}
    </div>
  );
      }


export default CustomChatbot;
