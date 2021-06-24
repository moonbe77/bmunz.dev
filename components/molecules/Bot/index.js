import { useState, useEffect, useRef } from 'react';
import { askToBot } from '../../../utils/askToBot';
import styles from './bot.module.scss';
import Button from '../../atoms/Button';

const TextMessage = (message) => (
  <li className={styles.myMessage}>{message}</li>
);

const Suggestions = ({ data, action }) => {
  if (!data) return 'loading..';

  return (
    <div className={styles.suggestions}>
      {data.map((slug, i) => (
        <Button key={i} onClick={action} role="button">
          {slug}
        </Button>
      ))}
    </div>
  );
};

const Bot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  // const [ask, setAsk] = useState('hello');
  const [suggestions, setSuggestions] = useState(null);
  const [isWaitingAnswer, setIsWaitingAnswer] = useState(false);
  const messagesContainer = useRef();
  const isWaiting = isWaitingAnswer ? styles.waiting : '';

  const messageParser = (message, origin) => {
    // pareced of the message to be added in the chat
    console.log(message);
    if (message.fulfillmentMessages) {
      message.fulfillmentMessages.map((type) => {
        if (type.message === 'text') {
          type.text.text.map((txt) => {
            setMessages((prev) => [
              ...prev,
              {
                id: Date.now(),
                text: txt,
                sender: 'bot',
              },
            ]);
          });
          return;
        }

        if (type.message === 'card') {
          console.log(type);
        }

        if (type.message === 'quickReplies') {
          console.log(type);
          setSuggestions(type.quickReplies.quickReplies);
        }
      });
    } else {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: typeof message === 'object' ? message.fulfillmentText : message,
          sender: origin,
        },
      ]);
    }
  };

  useEffect(() => {
    messagesContainer.current.scrollTop =
      messagesContainer.current.scrollHeight + 35;
  }, [messages]);

  function askToBotHandler(query) {
    askToBot(query).then((data) => {
      setIsWaitingAnswer(false);
      messageParser(data, 'bot');
    });
  }

  function addUserQueryToChat(message) {
    setIsWaitingAnswer(true);
    messageParser(message, origin);
    askToBotHandler(message);
  }

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      addUserQueryToChat(inputValue, 'user');
    }
    setInputValue('');
  };

  const handleClickSuggestion = (e) => {
    setIsWaitingAnswer(true);
    const value = e.target.innerText.toLowerCase();
    addUserQueryToChat(value, 'user');
  };

  return (
    <div className={styles.botContainer}>
      <h1>Munz_Bot</h1>
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
      <div className={`${styles.formWrapper} ${isWaiting}`}>
        <div>
          {suggestions && (
            <Suggestions data={suggestions} action={handleClickSuggestion} />
          )}
        </div>
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
    </div>
  );
};

export default Bot;
