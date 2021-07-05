/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import { askToBot } from '../../../utils/askToBot';
import styles from './bot.module.scss';
import Button from '../../atoms/Button';

const TextMessage = (props) => {
  const { message, sender } = props;
  return (
    <div
      className={`${styles.message} ${
        sender === 'bot'
          ? styles.incomingTextMessage
          : styles.outgoingTextMessage
      }`}
    >
      <span className={styles.tail}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 8 13"
          width="8"
          height="13"
        >
          <path
            opacity=".13"
            // fill="#0000000"
            d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"
          />
          <path
            // fill="currentColor"
            d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
          />
        </svg>
      </span>
      {message}
    </div>
  );
};

const CardMessage = (props) => {
  const { sender, data } = props;
  const { title, subtitle, imageUri, buttons } = data.card;
  console.log(data);
  return (
    <div
      className={`${styles.message} ${
        sender === 'bot'
          ? styles.incomingTextMessage
          : styles.outgoingTextMessage
      }`}
    >
      <div className={styles.cardImage}>
        <img src={imageUri} alt={title} />
      </div>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.cardSubTitle}>{subtitle}</div>
      <div className={styles.cardButtons}>
        {buttons.forEach((btn) => (
          <button
            type="button"
            onClick={() => {
              console.log(btn.postback);
            }}
          >
            {btn.text}
          </button>
        ))}
      </div>
    </div>
  );
};

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

  // this function should create the message creator that is gonna be render in the chat
  const messageParser = (message, sender) => {
    // pareced of the message to be added in the chat
    if (message.fulfillmentMessages) {
      message.fulfillmentMessages.forEach((fulfillmentMessage) => {
        if (fulfillmentMessage.message === 'text') {
          fulfillmentMessage.text.text.forEach((txt) => {
            setMessages((prev) => [
              ...prev,
              {
                id: Date.now(),
                text: txt,
                component: <TextMessage message={txt} sender={sender} />,
                sender,
                type: 'text',
              },
            ]);
          });
          return;
        }

        if (fulfillmentMessage.message === 'card') {
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now(),
              text: 'card',
              component: (
                <CardMessage
                  key={message.id}
                  data={fulfillmentMessage}
                  sender={sender}
                />
              ),
              sender: 'bot',
              type: 'card',
            },
          ]);
        }

        if (fulfillmentMessage.message === 'quickReplies') {
          // console.log(type);
          setSuggestions(fulfillmentMessage.quickReplies.quickReplies);
        }
      });
    } else {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: typeof message === 'object' ? message.fulfillmentText : message,
          component: <TextMessage key={message.id} message={message} />,
          sender,
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

  function addUserQueryToChat(message, sender) {
    setIsWaitingAnswer(true);
    messageParser(message, sender);
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
      <div className="header">
        <h1>Munz_Bot</h1>
      </div>
      <div className={styles.messagesContainer} ref={messagesContainer}>
        {messages &&
          messages.map((message) => (
            <div
              key={message.id}
              className={`${styles.messageWrapper} ${
                message.sender === 'bot' ? styles.messageIn : styles.messageOut
              }`}
            >
              {message.component}
            </div>
          ))}
      </div>
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
          <button type="button">submit</button>
        </form>
      </div>
    </div>
  );
};

export default Bot;
