import React from 'react';
import { useState, useRef } from 'react';
import './Chatbot.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';
// import env from "react-dotenv";
// require('dotenv').config();

// import dotenv from 'dotenv';
// dotenv.config();

// const API_KEY = process.env.REACT_APP_API_KEY;

const systemMessage = {
  role: 'system',
  content:
        "Explain things like you're talking to a software professional with 2 years of experience.",
};

// const API_KEY = process.env.API_KEY;
// console.log(API_KEY)

const Chatbot = () => {
  const [chatBtn, setChatBtn] = useState(false);
  const chatBox = useRef();
  const [messages, setMessages] = useState([
    {
      message: 'Hello, Welcome to MedEx, ask your query!',
      sentTime: 'just now',
      sender: 'ChatGPT',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: 'user',
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    const apiMessages = chatMessages.map((messageObject) => {
      let role = '';
      if (messageObject.sender === 'ChatGPT') {
        role = 'assistant';
      } else {
        role = 'user';
      }
      return { role, content: messageObject.message };
    });

    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to'
    // determine how we want chatGPT to act.
    const apiRequestBody = {
      model: 'gpt-3.5-turbo',
      messages: [
        systemMessage, // The system message DEFINES the logic of our chatGPT
        ...apiMessages, // The messages from our chat with ChatGPT
      ],
    };

    await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: 'ChatGPT',
          },
        ]);
        setIsTyping(false);
      });
  }

  function msgTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    const time = `${hours}:${minutes}`;
    console.log(time);
    return time;
  }

  const handleOnChat = () => {
    if (!chatBtn) {
      chatBox.current.style.display = 'block';
      setTimeout(() => {
        chatBox.current.style.transform = 'scale(1)';
      }, 50);
      chatBox.current.style.transition = 'all 0.2s ease-out';
      chatBox.current.style.display = 'all 0.2s ease-out';
      setChatBtn(true);
    } else {
      chatBox.current.style.transform = 'scale(0)';
      setTimeout(() => {
        chatBox.current.style.display = 'none';
      }, 50);
      setChatBtn(false);
    }
  };

  return (
    <div className="Chatbot">
      <div onClick={handleOnChat} className="wholeOpener"><button><i className="fa-solid fa-message" /></button></div>

      <div className="inDiv" ref={chatBox} style={{ position: 'relative', height: '500px', width: '400px' }}>
        <MainContainer className="mainContainer">
          <ChatContainer className="chatContainer">
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={
                                isTyping ? (
                                  <TypingIndicator content="" />
                                ) : null
                            }
            >
              {messages.map((message, i) => {
                console.log(message);

                return <Message key={i} model={message} />;
              })}

              {/* <span>{msgTime()}</span> */}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
};

export default Chatbot;
