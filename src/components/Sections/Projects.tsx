import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, Filter } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
  code: string;
};

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [showCode, setShowCode] = useState<Record<number, boolean>>({});
  const [showInstructions, setShowInstructions] = useState<Record<number, boolean>>({});

  const filters = ['All', 'Python', 'JavaScript', 'Docker', 'AI/ML', 'Web'];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Sheher Connect',
      description: 'Civic-tech platform connecting citizens with local government services',
      category: 'Web',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: '🏛️',
      github: '#',
      demo: '#',
      code: `// Sheher Connect - Civic Tech Platform
import React from 'react';
import { connectCitizens } from './api/civic';

const SheherConnect = () => {
  const handleServiceRequest = async (request) => {
    const response = await connectCitizens(request);
    return response;
  };

  return (
    <div className="civic-platform">
      <h1>Sheher Connect</h1>
      <ServiceRequestForm onSubmit={handleServiceRequest} />
    </div>
  );
};

export default SheherConnect;`
    },
    {
      id: 2,
      title: 'Skin Disease Detection',
      description: 'CNN-powered AI model for early-stage skin disease detection with 92% accuracy',
      category: 'AI/ML',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
      image: '🔬',
      github: '#',
      demo: '#',
      code: `# Skin Disease Detection Model
import tensorflow as tf
from tensorflow.keras import layers, models
import numpy as np

class SkinDiseaseDetector:
    def __init__(self):
        self.model = self.build_model()
    
    def build_model(self):
        model = models.Sequential([
            layers.Conv2D(32, (3, 3), activation='relu', input_shape=(224, 224, 3)),
            layers.MaxPooling2D((2, 2)),
            layers.Conv2D(64, (3, 3), activation='relu'),
            layers.MaxPooling2D((2, 2)),
            layers.Conv2D(128, (3, 3), activation='relu'),
            layers.Flatten(),
            layers.Dense(128, activation='relu'),
            layers.Dense(7, activation='softmax')  # 7 disease classes
        ])
        return model
    
    def predict(self, image):
        prediction = self.model.predict(image)
        return np.argmax(prediction, axis=1)`
    },
    {
      id: 3,
      title: 'WhatsApp Auto Bot',
      description: 'Automated messaging system with smart scheduling and contact management',
      category: 'Python',
      tech: ['Python', 'Selenium', 'Schedule', 'Pandas'],
      image: '📱',
      github: '#',
      demo: '#',
      code: `# WhatsApp Auto Bot
import schedule
import time
from selenium import webdriver
from selenium.webdriver.common.by import By

class WhatsAppBot:
    def __init__(self):
        self.driver = webdriver.Chrome()
        self.driver.get('https://web.whatsapp.com/')
    
    def send_message(self, contact, message):
        # Find contact
        search_box = self.driver.find_element(By.XPATH, '//div[@contenteditable="true"][@data-tab="3"]')
        search_box.clear()
        search_box.send_keys(contact)
        
        # Send message
        msg_box = self.driver.find_element(By.XPATH, '//div[@contenteditable="true"][@data-tab="1"]')
        msg_box.send_keys(message)
        msg_box.send_keys(Keys.ENTER)
    
    def schedule_message(self, contact, message, time_str):
        schedule.every().day.at(time_str).do(self.send_message, contact, message)

# Usage
bot = WhatsAppBot()
bot.schedule_message("John Doe", "Good morning!", "09:00")`
    },
    {
      id: 4,
      title: 'Blood Donor DBMS',
      description: 'Real-time blood donor management system with AI-powered matching',
      category: 'Python',
      tech: ['Python', 'MySQL', 'Flask', 'Geopy'],
      image: '🩸',
      github: '#',
      demo: '#',
      code: `# Blood Donor Database Management System
import mysql.connector
from geopy.distance import geodesic
import flask

class BloodDonorSystem:
    def __init__(self):
        self.conn = mysql.connector.connect(
            host='localhost',
            user='root',
            password='password',
            database='blood_donor'
        )
        self.cursor = self.conn.cursor()
    
    def find_nearest_donors(self, blood_type, location, radius=50):
        query = """
        SELECT donor_id, name, phone, latitude, longitude 
        FROM donors 
        WHERE blood_type = %s AND is_available = 1
        """
        self.cursor.execute(query, (blood_type,))
        donors = self.cursor.fetchall()
        
        nearby_donors = []
        for donor in donors:
            donor_location = (donor[3], donor[4])
            distance = geodesic(location, donor_location).kilometers
            if distance <= radius:
                nearby_donors.append({
                    'donor': donor,
                    'distance': distance
                })
        
        return sorted(nearby_donors, key=lambda x: x['distance'])
    
    def register_donor(self, name, blood_type, phone, location):
        query = """
        INSERT INTO donors (name, blood_type, phone, latitude, longitude, is_available)
        VALUES (%s, %s, %s, %s, %s, 1)
        """
        self.cursor.execute(query, (name, blood_type, phone, location[0], location[1]))
        self.conn.commit()`
    },
    {
      id: 5,
      title: 'Docker Menu Interface',
      description: 'Interactive CLI tool for Docker container management and monitoring',
      category: 'Docker',
      tech: ['Python', 'Docker', 'CLI', 'Monitoring'],
      image: '🐳',
      github: '#',
      demo: '#',
      code: `# Docker Menu Interface
import docker
import os
from tabulate import tabulate

class DockerMenu:
    def __init__(self):
        self.client = docker.from_env()
    
    def display_menu(self):
        print("\\n=== Docker Management Menu ===")
        print("1. List Containers")
        print("2. Start Container")
        print("3. Stop Container")
        print("4. Remove Container")
        print("5. Pull Image")
        print("6. System Info")
        print("7. Exit")
    
    def list_containers(self):
        containers = self.client.containers.list(all=True)
        data = []
        for container in containers:
            data.append([
                container.short_id,
                container.name,
                container.status,
                container.attrs['Config']['Image']
            ])
        print(tabulate(data, headers=['ID', 'Name', 'Status', 'Image']))
    
    def start_container(self, container_id):
        try:
            container = self.client.containers.get(container_id)
            container.start()
            print(f"Container {container_id} started successfully")
        except docker.errors.NotFound:
            print("Container not found")
    
    def run(self):
        while True:
            self.display_menu()
            choice = input("Enter your choice: ")
            
            if choice == '1':
                self.list_containers()
            elif choice == '2':
                container_id = input("Enter container ID: ")
                self.start_container(container_id)
            elif choice == '7':
                break

if __name__ == "__main__":
    menu = DockerMenu()
    menu.run()`
    },
    {
      id: 6,
      title: 'Life Span Predictor',
      description: 'ML model predicting life expectancy based on health and lifestyle factors',
      category: 'AI/ML',
      tech: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas'],
      image: '📊',
      github: '#',
      demo: '#',
      code: `# Life Span Predictor using Machine Learning
import streamlit as st
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error

class LifeSpanPredictor:
    def __init__(self):
        self.model = RandomForestRegressor(n_estimators=100, random_state=42)
        self.features = ['age', 'bmi', 'exercise_hours', 'sleep_hours', 
                        'smoking', 'alcohol_consumption', 'stress_level']
    
    def prepare_data(self, df):
        # Feature engineering
        df['health_score'] = (df['exercise_hours'] * 10 + 
                             df['sleep_hours'] * 5 - 
                             df['smoking'] * 15 - 
                             df['alcohol_consumption'] * 5 - 
                             df['stress_level'] * 3)
        return df
    
    def train(self, data):
        X = data[self.features]
        y = data['life_expectancy']
        
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=0.2, random_state=42
        )
        
        self.model.fit(X_train, y_train)
        predictions = self.model.predict(X_test)
        mae = mean_absolute_error(y_test, predictions)
        return mae
    
    def predict(self, features):
        prediction = self.model.predict([features])
        return prediction[0]

# Streamlit App
def main():
    st.title("Life Span Predictor")
    st.write("Enter your health and lifestyle information")
    
    predictor = LifeSpanPredictor()
    
    # Input fields
    age = st.slider("Age", 18, 100, 30)
    bmi = st.slider("BMI", 15.0, 50.0, 25.0)
    exercise = st.slider("Exercise Hours per Week", 0, 20, 3)
    sleep = st.slider("Sleep Hours per Night", 4, 12, 8)
    smoking = st.selectbox("Smoking", [0, 1])
    alcohol = st.slider("Alcohol Consumption (units/week)", 0, 50, 2)
    stress = st.slider("Stress Level (1-10)", 1, 10, 5)
    
    if st.button("Predict Life Span"):
        features = [age, bmi, exercise, sleep, smoking, alcohol, stress]
        prediction = predictor.predict(features)
        st.success(f"Predicted Life Span: {prediction:.1f} years")

if __name__ == "__main__":
    main()`
    },
    {
      id: 7,
      title: 'Linux Menu Automation',
      description: 'Automate Linux menu tasks using Python scripting.',
      category: 'Python',
      tech: ['Python', 'Automation'],
      image: '🐧',
      github: '',
      demo: '',
      code: `# linuxmenu.py\n# Automate Linux menu tasks\nimport os\ndef show_menu():\n    print('1. List files')\n    print('2. Show current directory')\n    print('3. Exit')\nwhile True:\n    show_menu()\n    choice = input('Enter choice: ')\n    if choice == '1':\n        os.system('ls')\n    elif choice == '2':\n        os.system('pwd')\n    elif choice == '3':\n        break\n    else:\n        print('Invalid choice')`
    },
    {
      id: 'js-emailread',
      title: '📧 Fetch Last Gmail Email',
      description: 'Sign in with Google and fetch your latest Gmail email using the Gmail API.',
      category: 'JavaScript',
      tech: ['HTML', 'JavaScript', 'Google API'],
      image: '📧',
      github: '',
      demo: '',
      code: `<!DOCTYPE html>\n<html>\n<head>\n  <title>📧 Fetch Last Gmail Email</title>\n  <script src=\"https://apis.google.com/js/api.js\"></script>\n</head>\n<body>\n  <h2>📬 Your Last Email</h2>\n  <button onclick=\"signIn()\">🔓 Sign in with Google</button>\n  <pre id=\"output\">Waiting for sign-in...</pre>\n  <script>\n    // ⛔ Replace with your real OAuth 2.0 Client ID\n    const CLIENT_ID = '***'; // ⭐\n    const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';\n    ...rest of code...\n  </script>\n</body>\n</html>`
    },
    {
      id: 'js-geolocation',
      title: '🌍 Show My Location',
      description: 'Get your current geolocation and display it on an embedded Google Map.',
      category: 'JavaScript',
      tech: ['HTML', 'JavaScript', 'Geolocation API'],
      image: '🌍',
      github: '',
      demo: '',
      code: `<!DOCTYPE html>\n<html>\n<head>\n  <title>🌍 Show My Location</title>\n  ...rest of code...\n</html>`
    },
    {
      id: 'js-email-photo',
      title: '📸 Capture & Send Photo via Email',
      description: 'Capture a photo from your webcam and send it via EmailJS.',
      category: 'JavaScript',
      tech: ['HTML', 'JavaScript', 'EmailJS'],
      image: '📸',
      github: '',
      demo: '',
      code: `<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Capture & Send Photo via Email</title>\n  ...rest of code...\n</html>`
    },
    {
      id: 'js-groceryshop',
      title: 'Nearby Grocery Shops',
      description: 'Find grocery stores near your current location using Google Maps Places API.',
      category: 'JavaScript',
      tech: ['HTML', 'JavaScript', 'Google Maps API'],
      image: '🛒',
      github: '',
      demo: '',
      code: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Nearby Grocery Shops</title>\n  ...rest of code...\n</html>`
    },
    {
      id: 'js-direction',
      title: 'Google Maps Route',
      description: 'Find and display driving directions between two locations using Google Maps.',
      category: 'JavaScript',
      tech: ['HTML', 'JavaScript', 'Google Maps API'],
      image: '🗺️',
      github: '',
      demo: '',
      code: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Google Maps Route</title>\n  ...rest of code...\n</html>`
    },
    {
      id: 'js-googlemap',
      title: 'Live Location Map',
      description: 'Track your live location on Google Maps.',
      category: 'JavaScript',
      tech: ['HTML', 'JavaScript', 'Google Maps API'],
      image: '📍',
      github: '',
      demo: '',
      code: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Live Location Map</title>\n  ...rest of code...\n</html>`
    },
    {
      id: 'js-sms-html',
      title: 'Send SMS (Device)',
      description: 'Send SMS using your device\'s SMS app from the browser.',
      category: 'JavaScript',
      tech: ['HTML', 'JavaScript'],
      image: '📲',
      github: '',
      demo: '',
      code: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Send SMS</title>\n  ...rest of code...\n</html>`
    },
    {
      id: 'js-whatsapp',
      title: 'Send WhatsApp Message',
      description: 'Send a WhatsApp message to any number using wa.me links.',
      category: 'JavaScript',
      tech: ['HTML', 'JavaScript'],
      image: '🟢',
      github: '',
      demo: '',
      code: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Send WhatsApp Message</title>\n  ...rest of code...\n</html>`
    },
    {
      id: 'js-video',
      title: 'Webcam Video Recorder',
      description: 'Record video from your webcam and save it locally.',
      category: 'JavaScript',
      tech: ['HTML', 'JavaScript'],
      image: '🎥',
      github: '',
      demo: '',
      code: `<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Video Recorder</title>\n  ...rest of code...\n</html>`
    },
    {
      id: 'js-photo',
      title: 'Webcam Photo Capture',
      description: 'Capture a photo from your webcam and save it locally.',
      category: 'JavaScript',
      tech: ['HTML', 'JavaScript'],
      image: '📷',
      github: '',
      demo: '',
      code: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Capture Photo</title>\n  ...rest of code...\n</html>`
    },
    {
      id: 'js-sms-node',
      title: 'Send SMS (Node.js + Twilio)',
      description: 'Send SMS using a Node.js backend and Twilio API.',
      category: 'JavaScript',
      tech: ['Node.js', 'Express', 'Twilio', 'HTML', 'JavaScript'],
      image: '📤',
      github: '',
      demo: '',
      code: `// sms.js\nconst express = require('express');\n...\nconst accountSid = '***'; // ⭐\nconst authToken = '***'; // ⭐\nconst twilioPhone = '***'; // ⭐\n...rest of code...`
    },
    {
      id: 'js-sms-node-html',
      title: 'Send SMS (Node.js Frontend)',
      description: 'Frontend for sending SMS via Node.js backend.',
      category: 'JavaScript',
      tech: ['HTML', 'JavaScript'],
      image: '💬',
      github: '',
      demo: '',
      code: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Send SMS</title>\n  ...rest of code...\n</html>`
    },
    {
      id: 'js-capture-mail-video',
      title: 'Record & Email Video (Node.js + Nodemailer)',
      description: 'Record a video in the browser and send it as an email attachment using a Node.js backend.',
      category: 'JavaScript',
      tech: ['Node.js', 'Express', 'Nodemailer', 'HTML', 'JavaScript'],
      image: '📧',
      github: '',
      demo: '',
      code: `// video.js\nconst express = require('express');\n...\nuser: '***', // ⭐\npass: '***', // ⭐\n...rest of code...`
    },
    {
      id: 'js-capture-mail-video-html',
      title: 'Record & Email Video (Frontend)',
      description: 'Frontend for recording and emailing video via Node.js backend.',
      category: 'JavaScript',
      tech: ['HTML', 'JavaScript'],
      image: '🎬',
      github: '',
      demo: '',
      code: `<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>🎥 Record & Email Video</title>\n  ...rest of code...\n</html>`
    },
    {
      id: 9,
      title: 'GenAI Notebook',
      description: 'Jupyter notebook for generative AI experiments.',
      category: 'AI/ML',
      tech: ['Python', 'Jupyter'],
      image: '🤖',
      github: '',
      demo: '',
      code: `# genai.ipynb\n# Generative AI experiments\n# (Open in Jupyter Notebook)`
    },
    {
      id: 10,
      title: 'Social Media Automation',
      description: 'Automate LinkedIn, Twitter, WhatsApp, and more with Python scripts.',
      category: 'Python',
      tech: ['Python', 'Automation', 'APIs'],
      image: '🔗',
      github: '',
      demo: '',
      code: `# linkedin_msg.py, twitter.py, whatsapp.py\n# Automate social media tasks\n# (Run with Python 3)`
    },
    {
      id: 11,
      title: 'Marks Prediction (ML)',
      description: 'Predict marks and lifespan using machine learning.',
      category: 'AI/ML',
      tech: ['Python', 'ML', 'Jupyter'],
      image: '📊',
      github: '',
      demo: '',
      code: `# marks.ipynb, lifespanprid.py\n# Predict marks/lifespan\n# (Open in Jupyter Notebook)`
    },
    {
      id: 12,
      title: 'JavaScript Utilities',
      description: 'Geolocation, Google Maps, SMS, WhatsApp, and more in JS/HTML.',
      category: 'JavaScript',
      tech: ['JavaScript', 'HTML'],
      image: '🗺️',
      github: '',
      demo: '',
      code: `// geolocation.html, googlemap.html, sms.html, whatsapp.html\n// Open in browser to use` 
    }
  ];

  // Add new projects from agenticai, machinelearning, and summer lw
  const extraProjects: Project[] = [
    {
      id: 1001,
      title: 'Gemini DuckDuckGo Agent',
      description: 'Gemini LLM agent with DuckDuckGo search using LangChain.',
      category: 'AI/ML',
      tech: ['Python', 'LangChain', 'Gemini', 'DuckDuckGo'],
      image: '🦆',
      github: '',
      demo: '',
      code: `from langgraph.prebuilt import create_react_agent\nfrom langchain_google_genai import ChatGoogleGenerativeAI\nfrom langchain.tools import DuckDuckGoSearchRun\n\nllm = ChatGoogleGenerativeAI(\n    model=\"gemini-2.0-flash\",\n    google_api_key=\"...\",\n    convert_system_message_to_human=True,\n    temperature=0.7\n)\nsearch_tool = DuckDuckGoSearchRun()\ntools = [search_tool]\nagent = create_react_agent(llm, tools)\nuser_query = input(\"Enter your search query: \")\ninput_message = {\n    \"role\": \"user\",\n    \"content\": user_query,\n}\nfor step in agent.stream({\"messages\": [input_message]}, stream_mode=\"values\"):\n    step[\"messages\"][-1].pretty_print()`
    },
    {
      id: 1002,
      title: 'Gemini ShellTool Agent',
      description: 'Gemini LLM agent with ShellTool for command execution (LangChain).',
      category: 'AI/ML',
      tech: ['Python', 'LangChain', 'Gemini', 'ShellTool'],
      image: '💻',
      github: '',
      demo: '',
      code: `from langgraph.prebuilt import create_react_agent\nfrom langchain_google_genai import ChatGoogleGenerativeAI\nfrom langchain.tools.shell.tool import ShellTool\n\nllm = ChatGoogleGenerativeAI(\n    model=\"gemini-2.0-flash\",\n    google_api_key=\"...\",\n    convert_system_message_to_human=True,\n    temperature=0.7\n)\nshell_tool = ShellTool()\ntools = [shell_tool]\nagent = create_react_agent(llm, tools)\ninput_message = {\n    \"role\": \"user\",\n    \"content\": (\n        \"Download the README here and identify the link for LangChain tutorials: https://raw.githubusercontent.com/langchain-ai/langchain/master/README.md\"\n    ),\n}\nfor step in agent.stream({\"messages\": [input_message]}, stream_mode=\"values\"):\n    step[\"messages\"][-1].pretty_print()`
    },
    {
      id: 1003,
      title: 'Lifespan Predictor',
      description: 'Predict your lifespan using ML and health data (Streamlit app).',
      category: 'AI/ML',
      tech: ['Python', 'Streamlit', 'ML'],
      image: '🧬',
      github: '',
      demo: '',
      code: `import streamlit as st\nimport pandas as pd\nimport numpy as np\nfrom sklearn.linear_model import LinearRegression\n...\n# (full code from lifespanprid.py)`
    },
    {
      id: 1004,
      title: 'Marks Prediction App',
      description: 'Predict marks based on study hours using ML (Streamlit app).',
      category: 'AI/ML',
      tech: ['Python', 'Streamlit', 'ML'],
      image: '📊',
      github: '',
      demo: '',
      code: `import streamlit as st\nimport pandas as pd\nfrom sklearn.linear_model import LinearRegression\nimport matplotlib.pyplot as plt\n...\n# (full code from marksprediction.py)`
    },
    {
      id: 1005,
      title: 'Linux Menu SSH Runner',
      description: 'Menu-based CLI tool to run Linux commands remotely via SSH.',
      category: 'Python',
      tech: ['Python', 'CLI', 'SSH'],
      image: '🐧',
      github: '',
      demo: '',
      code: `import os\nprint (\"Linux Menu based project - Run any command of linux\")\n...\n# (full code from linuxmenu.py)`
    }
  ];
  // Add Python LW tasks as extra projects, masking sensitive data with '***' and a star emoji (⭐)
  extraProjects.push(
    {
      id: 2001,
      title: 'Send Email Script',
      description: 'Send emails via Gmail SMTP. ⭐ Sensitive info masked.',
      category: 'Python',
      tech: ['Python', 'SMTP'],
      image: '✉️',
      github: '',
      demo: '',
      code: `import smtplib\nfrom email.message import EmailMessage\n\ndef send_email():\n    sender_email = input("Enter your email: ")\n    sender_password = input("Enter your email password or app password: ") # ⭐\n    receiver_email = input("Enter recipient's email: ")\n    subject = input("Enter subject: ")\n    body = input("Enter your message: ")\n    msg = EmailMessage()\n    msg['From'] = sender_email\n    msg['To'] = receiver_email\n    msg['Subject'] = subject\n    msg.set_content(body)\n    try:\n        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:\n            smtp.login(sender_email, '***') # ⭐\n            smtp.send_message(msg)\n            print("✅ Email sent successfully!")\n    except Exception as e:\n        print("❌ Failed to send email:", e)\nsend_email()`
    },
    {
      id: 2002,
      title: 'LinkedIn Message Bot',
      description: 'Send LinkedIn messages using Selenium. ⭐ Sensitive info masked.',
      category: 'Python',
      tech: ['Python', 'Selenium'],
      image: '💼',
      github: '',
      demo: '',
      code: `from selenium import webdriver\nfrom selenium.webdriver.common.by import By\nfrom selenium.webdriver.common.keys import Keys\nimport time\n# LinkedIn credentials\nemail = input("Enter your LinkedIn email: ") # ⭐\npassword = input("Enter your LinkedIn password: ") # ⭐\nrecipient_profile_url = input("Paste recipient's LinkedIn profile URL: ")\nmessage_text = input("Enter your message: ")\n...\n# (rest of code unchanged)`
    },
    {
      id: 2003,
      title: 'Google Search CLI',
      description: 'Fetch Google search results from the command line.',
      category: 'Python',
      tech: ['Python', 'googlesearch'],
      image: '🔍',
      github: '',
      demo: '',
      code: `from googlesearch import search\ndef fetch_results(query, num_results=10):\n    return list(search(query, num_results=num_results))\nif __name__ == "__main__":\n    q = input("Enter search query: ")\n    results = fetch_results(q, num_results=10)\n    print("\nTop results:")\n    for i, url in enumerate(results, 1):\n        print(f"{i}. {url}")`
    },
    {
      id: 2004,
      title: 'Twilio Call Script',
      description: 'Make automated calls using Twilio. ⭐ Sensitive info masked.',
      category: 'Python',
      tech: ['Python', 'Twilio'],
      image: '📞',
      github: '',
      demo: '',
      code: `from twilio.rest import Client\n# Twilio credentials\naccount_sid = '***' # ⭐\nauth_token = '***' # ⭐\ntwilio_number = '+13254530712' # ⭐\nclient = Client(account_sid, auth_token)\nto_number = input("Enter recipient phone number (e.g., +919812345678): ").strip()\ncall = client.calls.create(\n    to=to_number,\n    from_=twilio_number,\n    twiml='<Response><Say>Hello, this is an automated call from your Python app. Goodbye!</Say></Response>'\n)\nprint("Call initiated! SID:", call.sid)`
    },
    {
      id: 2005,
      title: 'Twilio SMS Script',
      description: 'Send SMS using Twilio. ⭐ Sensitive info masked.',
      category: 'Python',
      tech: ['Python', 'Twilio'],
      image: '💬',
      github: '',
      demo: '',
      code: `from twilio.rest import Client\ndef send_sms():\n    account_sid = '***' # ⭐\n    auth_token = '***' # ⭐\n    from_number = '+13254530712' # ⭐\n    to_number = input("Enter recipient phone number with country code (e.g. +91xxxxxxxxxx): ")\n    message_body = input("Enter message to send: ")\n    client = Client(account_sid, auth_token)\n    try:\n        message = client.messages.create(body=message_body, from_=from_number, to=to_number)\n        print(f"✅ Message sent! SID: {message.sid}")\n    except Exception as e:\n        print(f"❌ Failed to send message: {e}")\nsend_sms()`
    }
  );
  // Merge with existing projects
  const allProjects = [...projects, ...extraProjects];

  const filteredProjects = selectedFilter === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedFilter);

  const getRunInstructions = (project: Project) => {
    if (project.category === 'Python') return 'Run with: python <filename>.py';
    if (project.category === 'JavaScript') return 'Open in browser or run with: node <filename>.js';
    if (project.category === 'Docker') return 'Run with: docker-compose up or docker run ...';
    if (project.category === 'AI/ML') return 'Follow README or run with: python <filename>.py';
    if (project.category === 'Web') return 'Deploy or run with: npm start / npm run dev';
    return '';
  };

  return (
    <section id="projects" className="py-20 bg-vintage-dark relative overflow-hidden">
      {/* Animated, playful background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-16 w-80 h-80 bg-gradient-to-br from-vintage-gold/30 to-vintage-emerald/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-16 right-16 w-64 h-64 bg-gradient-to-br from-vintage-emerald/30 to-vintage-coral/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <svg className="absolute left-1/2 top-1/2 w-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="140" stroke="#ff00c8" strokeWidth="2" fill="none" opacity="0.06" />
          <circle cx="200" cy="200" r="80" stroke="#00ffe7" strokeWidth="2" fill="none" opacity="0.06" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-vintage-text mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-vintage-beige to-vintage-tan">Projects</span>
          </h2>
          <p className="text-xl text-vintage-subtext max-w-3xl mx-auto">
            A collection of innovative solutions spanning AI, web development, and automation
          </p>
        </motion.div>

        {/* Animated Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-bold border-2 transition-all duration-300 ${selectedFilter === filter ? 'bg-vintage-gold text-vintage-dark border-vintage-gold' : 'bg-transparent text-vintage-gold border-vintage-gold/40'}`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allProjects.filter((p: Project) => selectedFilter === 'All' || p.category === selectedFilter).map((project: Project) => (
              <motion.div
                key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-strong border-animated p-6 rounded-2xl shadow-xl flex flex-col items-center relative hover:scale-105 transition-transform duration-300 animate-float-glow"
            >
              <div className="text-4xl mb-2">{project.image}</div>
              <h3 className="text-2xl font-bold text-gaming-gold mb-2 font-gaming animate-glow">{project.title}</h3>
              <p className="text-gaming-subtext text-center mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-vintage-gold/20 text-vintage-gold text-xs font-bold border border-vintage-gold/30">{t}</span>
                  ))}
                </div>
              {/* Run Instructions Toggle */}
              <button
                className="mt-2 mb-2 px-4 py-1 rounded-full bg-vintage-coral/20 text-vintage-coral font-bold text-xs border border-vintage-coral/40 hover:bg-vintage-coral/40 transition-all duration-200"
                onClick={() => setShowInstructions((s) => ({ ...s, [project.id]: !s[project.id] }))}
              >
                {showInstructions[project.id] ? 'Hide Run Instructions' : 'Show Run Instructions'}
              </button>
              {showInstructions[project.id] && (
                <div className="w-full bg-vintage-dark/80 text-vintage-gold p-3 rounded-lg mb-2 text-xs font-mono border border-vintage-gold/20 animate-glow">
                  {getRunInstructions(project)}
                </div>
              )}
              {/* Show/Hide Code Toggle */}
              <button
                className="mt-2 px-4 py-1 rounded-full bg-vintage-emerald/20 text-vintage-emerald font-bold text-xs border border-vintage-emerald/40 hover:bg-vintage-emerald/40 transition-all duration-200"
                onClick={() => setShowCode((s) => ({ ...s, [project.id]: !s[project.id] }))}
              >
                {showCode[project.id] ? 'Hide Code' : 'Show Code'}
              </button>
                <AnimatePresence>
                {showCode[project.id] && (
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4 }}
                    className="w-full mt-4"
                  >
                    <SyntaxHighlighter language={project.category === 'Python' ? 'python' : project.category === 'JavaScript' ? 'javascript' : 'text'} style={vscDarkPlus} customStyle={{ borderRadius: '1rem', fontSize: '0.9em', background: '#18181b', padding: '1em' }}>
                      {project.code}
                    </SyntaxHighlighter>
                    </motion.div>
                  )}
                </AnimatePresence>
              {['Python', 'AI/ML'].includes(project.category) && (
                <a
                  href={
                    project.code.includes('streamlit') || project.code.includes('import')
                      ? `https://replit.com/new/python3?code=${encodeURIComponent(project.code)}`
                      : project.title.toLowerCase().includes('notebook') || project.title.toLowerCase().includes('agent')
                      ? `https://colab.research.google.com/`
                      : undefined
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 px-4 py-1 rounded-full bg-vintage-gold/20 text-vintage-gold font-bold text-xs border border-vintage-gold/40 hover:bg-vintage-gold/40 transition-all duration-200 block text-center"
                  style={{ pointerEvents: project.code ? 'auto' : 'none', opacity: project.code ? 1 : 0.5 }}
                  title="Run this project in a sandbox (if supported)"
                >
                  Run
                </a>
              )}
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;