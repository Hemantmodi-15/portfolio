const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create messages directory if it doesn't exist
const messagesDir = path.join(__dirname, 'messages');
if (!fs.existsSync(messagesDir)) {
  fs.mkdirSync(messagesDir);
}

// File to store messages
const messagesFile = path.join(messagesDir, 'contact-messages.json');

// Initialize messages file if it doesn't exist
if (!fs.existsSync(messagesFile)) {
  fs.writeFileSync(messagesFile, JSON.stringify([], null, 2));
}

// API endpoint to handle contact form submissions
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'All fields are required' 
      });
    }
    
    // Create message object
    const newMessage = {
      id: Date.now().toString(),
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      read: false
    };
    
    // Read existing messages
    const existingMessages = JSON.parse(fs.readFileSync(messagesFile, 'utf8'));
    
    // Add new message
    existingMessages.push(newMessage);
    
    // Write back to file
    fs.writeFileSync(messagesFile, JSON.stringify(existingMessages, null, 2));
    
    console.log('New message received:', newMessage);
    
    res.json({ 
      success: true, 
      message: 'Message sent successfully!',
      data: newMessage
    });
    
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to save message' 
    });
  }
});

// API endpoint to get all messages (for admin purposes)
app.get('/api/messages', (req, res) => {
  try {
    const messages = JSON.parse(fs.readFileSync(messagesFile, 'utf8'));
    res.json({ 
      success: true, 
      data: messages 
    });
  } catch (error) {
    console.error('Error reading messages:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to read messages' 
    });
  }
});

// API endpoint to mark message as read
app.put('/api/messages/:id/read', (req, res) => {
  try {
    const { id } = req.params;
    const messages = JSON.parse(fs.readFileSync(messagesFile, 'utf8'));
    
    const messageIndex = messages.findIndex(msg => msg.id === id);
    if (messageIndex === -1) {
      return res.status(404).json({ 
        success: false, 
        error: 'Message not found' 
      });
    }
    
    messages[messageIndex].read = true;
    fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2));
    
    res.json({ 
      success: true, 
      message: 'Message marked as read' 
    });
    
  } catch (error) {
    console.error('Error updating message:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to update message' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Contact API: http://localhost:${PORT}/api/contact`);
  console.log(`📋 Messages API: http://localhost:${PORT}/api/messages`);
  console.log(`💚 Health Check: http://localhost:${PORT}/api/health`);
}); 