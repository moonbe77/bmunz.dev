import PropTypes from 'prop-types';
import MessageBubble from './MessageBubble';
import styles from './cardMessage.module.scss';

const CardMessage = (props) => {
  const { sender, data } = props;
  const { title, subtitle, imageUri, buttons } = data.card;
  return (
    <MessageBubble sender={sender}>
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
    </MessageBubble>
  );
};

export default CardMessage;

CardMessage.propTypes = {
  sender: PropTypes.oneOf(['user', 'bot']).isRequired,
  data: PropTypes.object,
};
