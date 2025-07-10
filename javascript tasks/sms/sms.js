const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const twilio = require('twilio');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const accountSid = '************************';  // Replace with your actual Twilio Account SID
const authToken = '************************';   // Replace with your actual Twilio Auth Token
const twilioPhone = '+13254530712';            // Replace with your actual Twilio phone number
const client = twilio(accountSid, authToken);

// Serve sms.html at "/"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'sms.html'));
});

app.post('/send-sms', async (req, res) => {
  const { to, message } = req.body;

  try {
    await client.messages.create({
      body: message,
      from: twilioPhone,
      to: to
    });

    res.send(" SMS sent successfully!");
  } catch (err) {
    res.status(500).send("Failed to send SMS: " + err.message);
  }
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
