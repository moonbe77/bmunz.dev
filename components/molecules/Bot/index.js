import { useState, useEffect, useRef } from 'react';
import { useAskToBot } from '../../../utils/askToBot';
import styles from './bot.module.scss';

const Bot = () => {
  const [response, setResponse] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const messagesRef = useRef();

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputValue) {
      const data = await useAskToBot(inputValue); // useAskToBot returns a promise
      setInputValue('');
      console.log(data);
    }
  };

  return (
    <div className={styles.botContainer}>
      <h1>BotMunz</h1>
      <ul className={styles.messages} ref={messagesRef}>
        <li className={styles.incomingMessage}>text 1</li>
        <li className={styles.myMessage}>text 2</li>
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
