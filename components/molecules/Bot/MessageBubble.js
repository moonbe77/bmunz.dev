import PropTypes from 'prop-types';
import styles from './messageBubble.module.scss';

const MessageBubble = (props) => {
  const { sender, children } = props;
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
      {children}
    </div>
  );
};

export default MessageBubble;

MessageBubble.propTypes = {
  sender: PropTypes.oneOf(['user', 'bot']).isRequired,
  children: PropTypes.node,
};
