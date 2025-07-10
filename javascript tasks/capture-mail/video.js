const express = require('express');
const cors = require('cors');
const multer = require('multer');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(cors());
app.use(express.static(__dirname));

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'video.html'));
});

app.post('/send-video', upload.single('video'), async (req, res) => {
  const { to_email } = req.body;
  const video = req.file;

  if (!to_email || !video) {
    return res.status(400).send("Missing recipient email or video.");
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hemantmodi152003@gmail.com',     // ✅ Your sender email
      pass: 'tfdskitvifxbboom'               // ✅ Use App Password
    }
  });

  const mailOptions = {
    from: 'hemantmodi152003@gmail.com',
    to: to_email,
    subject: '🎥 Your Video Recording',
    text: 'Please find the recorded video attached.',
    attachments: [
      {
        filename: 'recording.webm',
        content: video.buffer
      }
    ]
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send("✅ Email sent successfully!");
  } catch (error) {
    res.status(500).send("❌ Failed to send email: " + error.message);
  }
});

app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
