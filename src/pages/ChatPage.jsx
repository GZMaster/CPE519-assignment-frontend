import React, { useState, useRef } from "react";
import "../styles/ChatPage.scss";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const inputRef = useRef(null);

  // Function to handle sending a message
  const sendMessage = () => {
    if (inputText.trim() === "") return;
    setMessages([...messages, { text: inputText, sender: "user" }]);
    setInputText("");
    // Add logic here to send inputText to your AI chatbot backend
  };

  // Function to handle voice recognition
  const startVoiceRecognition = () => {
    // Add logic here to start voice recognition
  };

  // Function to handle face recognition
  const startFaceRecognition = () => {
    // Add logic here to start face recognition
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          ref={inputRef}
        />
        <button onClick={sendMessage}>Send</button>
        <button onClick={startVoiceRecognition}>Start Voice</button>
        <button onClick={startFaceRecognition}>Start Face</button>
      </div>
    </div>
  );
};

export default ChatPage;
