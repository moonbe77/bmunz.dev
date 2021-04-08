import AbortController from 'node-abort-controller';

global.AbortController = AbortController;
const Mailgun = require('mailgun.js');
const formData = require('form-data');

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY,
  public_key: process.env.MAILGUN_PUBLIC_KEY,
});

export default async function (req, res) {
  const { name, email, message } = JSON.parse(req.body);
  const msgText = `Name: ${name} \n Email: ${email} \n Message: ${message}`;
  const msgHtml = `
    <h1>Message from bmunz.dev</h1>
    <ul>
      <li>Name: ${name}</li>
      <li>Email: ${email}</li>
      <li>Message: ${message}</li>
    </ul>
  `;
  return new Promise((resolve, reject) => {
    mg.messages
      .create(process.env.MAILGUN_DOMAIN_NAME, {
        from: 'bMunz.dev <munz@gmail.com>',
        to: ['munzbe@gmail.com'],
        subject: 'Message from bMunz.dev',
        text: msgText,
        html: msgHtml,
      })
      .then((msg) => {
        res.status(200).json({ status: 200, ...msg });
        resolve();
      })
      .catch((err) => {
        res.status(500).json({ status: err.status, ...err });
        return resolve();
      });
  });
}
