import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import styles from './form.module.css';

const Spinner = () => <div className={styles.spinner}>Sending...</div>;

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
    <div className={styles.formWrapper}>
      <h3>Contact Me</h3>
      {isSending && <Spinner />}
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
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={form?.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            value={form?.email}
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={form?.message}
            placeholder=""
            onChange={handleChange}
            required
          />
          <Button type="submit" size="large" isDarkTheme={isDarkTheme}>
            Submit
          </Button>
        </form>
      )}
    </div>
  );
}

export default Form;
Form.propTypes = {
  isDarkTheme: PropTypes.bool,
};
