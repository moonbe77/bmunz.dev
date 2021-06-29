/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import { askToBot } from '../../../utils/askToBot';
import styles from './bot.module.scss';
import Button from '../../atoms/Button';

const TextMessage = (props) => {
  const { className, message } = props;
  return <div className={`${styles.message} ${className}`}>{message}</div>;
};

const CardMessage = (props) => {
  const { className, data } = props;
  const { title, subtitle, imageUri } = data.card;
  return (
    <div className={`${styles.message} ${className}`}>
      <div>{title}</div>
      <div>{subtitle}</div>
      <img src={imageUri} alt={title} />
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
      message.fulfillmentMessages.map((fulfillmentMessage) => {
        if (fulfillmentMessage.message === 'text') {
          fulfillmentMessage.text.text.map((txt) => {
            setMessages((prev) => [
              ...prev,
              {
                id: Date.now(),
                text: txt,
                component: (
                  <TextMessage
                    message={txt}
                    className={`                  
                      ${
                        sender === 'bot'
                          ? styles.botMessage
                          : styles.userMessage
                      }
                    `}
                  />
                ),
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
                  className={`                  
                ${sender === 'bot' ? styles.botMessage : styles.userMessage}
              `}
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
          component: (
            <TextMessage
              key={message.id}
              message={message}
              className={
                sender === 'bot' ? styles.botMessage : styles.userMessage
              }
            />
          ),
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
      <h1>Munz_Bot</h1>
      <ul className={styles.messagesContainer} ref={messagesContainer}>
        {messages &&
          messages.map((message) => (
            <li key={message.id} className={`${styles.messageWrapper}`}>
              {message.component}
            </li>
          ))}
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
      {/* <div>
        <h1>test</h1>
        <ul>
          {messageComponent.map((mess) => {
            console.log(mess);
            return mess;
          })}
        </ul>
      </div> */}
    </div>
  );
};

export default Bot;
