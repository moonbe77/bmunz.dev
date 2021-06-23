import { useState, useEffect, useRef } from 'react';
import { askToBot } from '../../../utils/askToBot';
import styles from './bot.module.scss';

const MyMessage = (message) => <li className={styles.myMessage}>{message}</li>;

const Bot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesContainer = useRef();

  useEffect(() => {
    messagesContainer.current.scrollTop =
      messagesContainer.current.scrollHeight + 35;
  }, [messages]);

  const addMessage = (message, origin) => {
    console.log(message);
    if (message.fulfillmentMessages) {
      message.fulfillmentMessages.map((type) => {
        if (type.message === 'text') {
          console.log(type);
        }
        if (type.message === 'card') {
          console.log(type);
        }
        if (type.message === 'quickReplies') {
          console.log(type);
        }
      });
    }

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: typeof message === 'object' ? message.fulfillmentText : message,
        sender: origin,
      },
    ]);
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue) {
      addMessage(inputValue);
      setInputValue('');

      // useAskToBot returns a promise
      askToBot(inputValue).then((data) => {
        addMessage(data, 'bot');
      });
    }
  };

  return (
    <div className={styles.botContainer}>
      <h1>BotMunz</h1>
      <ul className={styles.messagesContainer} ref={messagesContainer}>
        {messages &&
          messages.map((message) => (
            <li
              key={message.id}
              className={
                message.sender === 'bot'
                  ? styles.botMessage
                  : styles.userMessage
              }
            >
              {message.text}
            </li>
          ))}
        {/* <li style={{ float: 'left', clear: 'both' }}  /> */}
      </ul>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          name="queryValue"
          type="text"
          onChange={handleInput}
          value={inputValue}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Bot;
