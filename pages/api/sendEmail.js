require('dotenv').config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, q1, q2, message } = req.body;

    // Compose email
    const mailOptions = {
      from: '"Your Name" <' + process.env.EMAIL_USER + '>', 
      to: process.env.EMAIL_MINE,
      subject: 'New message from contact form',
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Question 1: ${q1}</p>
        <p>Question 2: ${q2}</p>
        <p>Message: ${message}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send message.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}