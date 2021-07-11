/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { askToBot } from '../../../utils/askToBot';
import styles from './botContainer.module.scss';
import CardMessage from './CardMessage';
import TextMessage from './TextMessage';
import SuggestionsBox from './SuggestionsBox';
import { useBotDispatch, useBotContext } from '../../../store/botContext';
import { useStateContext } from '../../../store/store';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.8,
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#887b7b"
    strokeLinecap="round"
    {...props}
  />
);

const Bot = ({ toggle }) => {
  const [inputValue, setInputValue] = useState(''); // TODO: move to component
  const [suggestions, setSuggestions] = useState(null); // TODO: move logic to component
  const messagesContainer = useRef();
  const botDispatch = useBotDispatch();
  const { messages, isWaitingAnswer } = useBotContext();
  const { isDarkTheme } = useStateContext();

  const darkTheme = isDarkTheme ? styles.dark : styles.light;

  const isWaiting = isWaitingAnswer ? styles.waiting : '';
  // this function should create the message creator that is gonna be render in the chat
  const messageParser = (message, sender) => {
    // parsing of the message to be added in the chat
    if (message.fulfillmentMessages) {
      message.fulfillmentMessages.forEach((fulfillmentMessage) => {
        if (fulfillmentMessage.message === 'text') {
          fulfillmentMessage.text.text.forEach((txt) => {
            botDispatch({
              type: 'ADD_MESSAGE',
              payload: {
                id: Date.now(),
                text: txt,
                component: <TextMessage message={txt} sender={sender} />,
                sender,
                type: 'text',
              },
            });
          });
          return;
        }

        if (fulfillmentMessage.message === 'card') {
          botDispatch({
            type: 'ADD_MESSAGE',
            payload: {
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
          });
        }

        if (fulfillmentMessage.message === 'quickReplies') {
          setSuggestions(fulfillmentMessage.quickReplies.quickReplies);
        }
      });
    } else {
      botDispatch({
        type: 'ADD_MESSAGE',
        payload: {
          id: Date.now(),
          text: typeof message === 'object' ? message.fulfillmentText : message,
          component: (
            <TextMessage key={message.id} message={message} sender={sender} />
          ),
          sender,
        },
      });
    }
  };

  useEffect(() => {
    messagesContainer.current.scrollTop =
      messagesContainer.current.scrollHeight + 35;
  }, [messages]);

  function askToBotHandler(query) {
    askToBot(query).then((data) => {
      messageParser(data, 'bot');
    });
  }

  function addUserQueryToChat(message, sender) {
    botDispatch({
      type: 'IS_WAITING',
      payload: true,
    });

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
    botDispatch({
      type: 'IS_WAITING',
      payload: true,
    });
    const value = e.target.innerText.toLowerCase();
    addUserQueryToChat(value, 'user');
  };

  // const handleShowBot = () => {
  //   dispatch({
  //     type: 'SHOW_BOT',
  //     payload: !showBot,
  //   });
  // };

  return (
    <motion.div
      variants={variants}
      className={`${styles.botContainer} ${darkTheme}`}
    >
      <div className={`${styles.header}`}>
        <h3>Munz_Bot</h3>
        <h5>Get to know Bernardo making question to this bot</h5>
        <motion.div onClick={toggle} className={styles.botCloseButton}>
          <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
              variants={{
                closed: { d: 'M 2 2.5 L 20 2.5' },
                open: { d: 'M 3 16.5 L 17 2.5' },
              }}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              variants={{
                closed: { d: 'M 2 16.346 L 20 16.346' },
                open: { d: 'M 3 2.5 L 17 16.346' },
              }}
            />
          </svg>
        </motion.div>
      </div>
      <div className={styles.messagesContainer} ref={messagesContainer}>
        {messages.length > 0
          ? messages.map((message) => (
              <div
                key={message.id}
                className={`${styles.messageWrapper} ${
                  message.sender === 'bot'
                    ? styles.messageIn
                    : styles.messageOut
                }`}
              >
                {message.component}
              </div>
            ))
          : 'Hey ask something to the bot'}
      </div>
      <div className={`${styles.formWrapper} ${isWaiting}`}>
        <div>
          {suggestions && (
            <SuggestionsBox data={suggestions} action={handleClickSuggestion} />
          )}
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            name="queryValue"
            type="text"
            onChange={handleInput}
            value={inputValue}
          />
          <button type="submit">send</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Bot;
