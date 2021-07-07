/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import { askToBot } from '../../../utils/askToBot';
import styles from './bot.module.scss';
import CardMessage from './CardMessage';
import TextMessage from './TextMessage';
import SuggestionsBox from './SuggestionsBox';
import { useBotDispatch, useBotContext } from '../../../store/botContext';
import { useStateDispatch, useStateContext } from '../../../store/store';

const Bot = () => {
  // const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  // const [ask, setAsk] = useState('hello');
  const [suggestions, setSuggestions] = useState(null);
  const [isWaitingAnswer, setIsWaitingAnswer] = useState(false);
  const messagesContainer = useRef();
  const isWaiting = isWaitingAnswer ? styles.waiting : '';

  const botDispatch = useBotDispatch();
  const dispatch = useStateDispatch();
  const botContext = useBotContext();
  const { showBot } = useStateContext();

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
            // setMessages((prev) => [
            //   ...prev,
            //   {
            //     id: Date.now(),
            //     text: txt,
            //     component: <TextMessage message={txt} sender={sender} />,
            //     sender,
            //     type: 'text',
            //   },
            // ]);
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
          // setMessages((prev) => [
          //   ...prev,
          //   {
          //     id: Date.now(),
          //     text: 'card',
          //     component: (
          //       <CardMessage
          //         key={message.id}
          //         data={fulfillmentMessage}
          //         sender={sender}
          //       />
          //     ),
          //     sender: 'bot',
          //     type: 'card',
          //   },
          // ]);
        }

        if (fulfillmentMessage.message === 'quickReplies') {
          // console.log(type);
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

      // setMessages((prev) => [
      //   ...prev,
      //   {
      //     id: Date.now(),
      //     text: typeof message === 'object' ? message.fulfillmentText : message,
      //     component: (
      //       <TextMessage key={message.id} message={message} sender={sender} />
      //     ),
      //     sender,
      //   },
      // ]);
    }
  };

  useEffect(() => {
    messagesContainer.current.scrollTop =
      messagesContainer.current.scrollHeight + 35;
  }, [botContext.messages]);

  function askToBotHandler(query) {
    askToBot(query).then((data) => {
      setIsWaitingAnswer(false);
      messageParser(data, 'bot');
    });
  }

  function addUserQueryToChat(message, sender) {
    setIsWaitingAnswer(true);
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
    setIsWaitingAnswer(true);
    botDispatch({
      type: 'IS_WAITING',
      payload: true,
    });
    const value = e.target.innerText.toLowerCase();
    addUserQueryToChat(value, 'user');
  };

  const handleShowBot = () => {
    dispatch({
      type: 'SHOW_BOT',
      payload: !showBot,
    });
  };

  return (
    <div className={styles.botContainer}>
      <div className={styles.header}>
        <h1>Munz_Bot</h1>
        <div on onClick={handleShowBot}>
          ❌
        </div>
      </div>
      <div className={styles.messagesContainer} ref={messagesContainer}>
        {botContext.messages.length > 0
          ? botContext.messages.map((message) => (
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
    </div>
  );
};

export default Bot;
