import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import Button from '../../atoms/Button';
import styles from './form.module.css';

const Spinner = ({ toggle }) => {
  const [fade, set, stop] = useSpring(() => ({ opacity: 0 }));
  set({ opacity: toggle ? 1 : 0 });
  const pulse = '';
  return (
    <animated.span className={styles.spinner} style={fade}>
      🤩 Sending
    </animated.span>
  );
};

function Form({ isDarkTheme }) {
  const [isSent, setIsSent] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { target } = e;
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const send = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(form),
    });
    const resp = await send.json();

    if (resp.status === 200) {
      setIsSending(false);
      setIsSent(true);
      setSendError(false);
    } else {
      setIsSent(false);
      setSendError(true);
    }
  };

  return (
    <div className={styles.formWrapper} id="footer_form">
      <h3>Contact Me</h3>
      {sendError && (
        <div className={styles.error}>Error sending the message</div>
      )}
      {isSent && !isSending ? (
        <div className={styles.success}>
          Hey! Thanks for reaching me out {form.name}. <br /> I will contact you
          ASAP.
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form?.name}
            onChange={handleChange}
            required
          />
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form?.email}
            onChange={handleChange}
            required
          />
          <label className={styles.label} htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={form?.message}
            onChange={handleChange}
            required
          />
          <div>
            <Button
              type="submit"
              size="medium"
              isDarkTheme={isDarkTheme}
              disabled={isSending}
            >
              Submit Message
            </Button>
            <Spinner toggle={isSending} />
          </div>
        </form>
      )}
    </div>
  );
}

export default Form;
Form.propTypes = {
  isDarkTheme: PropTypes.bool,
};
