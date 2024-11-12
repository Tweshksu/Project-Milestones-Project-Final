const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from 'public' directory

// Submission handling
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // Setup Nodemailer to handle form submissions
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Replace with your email 
        auth: {
            user: 'your-email@gmail.com', // Your email
            pass: 'your-email-password' // Your password (use variables in production)
        }
    });

    const mailOptions = {
        from: email,
        to: 'your-email@gmail.com', // your email will receive a submission 
        subject: `New message from ${name}`,
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error while sending the email.');
        }
        res.send('Message sent successfully!');
    });
});

// Server listening
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
