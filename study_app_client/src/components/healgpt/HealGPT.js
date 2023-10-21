import React, { Component } from 'react';
import './HealGPT.css'; 
import userAvatar from './profile.png'; 
import botAvatar from './Mascot.png'; 

class HealGPT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [], // Store chat messages
      userInput: '', // Store user input
    };
  }

  // Function to handle user input
  handleUserInput = (e) => {
    this.setState({ userInput: e.target.value });
  };

  // Function to send a message
  sendMessage = () => {
    const { userInput, messages } = this.state;

    // Add user message to the messages array
    if (userInput.trim() !== '') {
      messages.push({ text: userInput, sender: 'user', avatar: userAvatar });
      this.setState({ messages, userInput: '' });

      // Simulate a response from the chatbot (you can replace this with actual API calls)
      setTimeout(() => {
        messages.push({ text: 'Hello ! How can I assist you today ?', sender: 'bot', avatar: botAvatar });
        this.setState({ messages });
      }, 1000);
    }
  };

  render() {
    const { messages, userInput } = this.state;

    return (
      <div className="chatbot-container">
        <h1>Chat with HealGPT</h1>
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}
            >
              {message.avatar && (
                <div className="avatar">
                  <img src={message.avatar} alt={`${message.sender} avatar`} />
                </div>
              )}
              <div className="message-content">
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <div className="user-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={userInput}
            onChange={this.handleUserInput}
          />
          <button onClick={this.sendMessage}>Send</button>
        </div>
      </div>
    );
  }
}

export default HealGPT;