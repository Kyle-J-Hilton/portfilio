import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kylehilton18@gmail.com', 
        pass: 'Astronaut123!', 
      },
    });

    // Define the email options
    const mailOptions = {
      from: 'kylehilton18@gmail.com', 
      to: 'kylehilton18@gmail.com', 
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nQuestion1: ${q1}\nQeustion2: ${q2}\nMessage: ${message}`,
    };
    
    
    // Send the email
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
