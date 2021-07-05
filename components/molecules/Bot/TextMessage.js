import PropTypes from 'prop-types';
import MessageBubble from './MessageBubble';
// import styles from './textMessage.module.scss';

const TextMessage = ({ message, sender }) => (
  <MessageBubble sender={sender}>{message}</MessageBubble>
);

export default TextMessage;

TextMessage.propTypes = {
  sender: PropTypes.oneOf(['user', 'bot']).isRequired,
  message: PropTypes.node,
};
