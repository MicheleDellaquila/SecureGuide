from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
from dotenv import load_dotenv
from openai import OpenAI
import requests
import os
import json
from helpers.generateCode import generateCode

load_dotenv()
client = OpenAI()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
client.api_key = OPENAI_API_KEY  # Set the API key here

# Initialize the Flask app
app = Flask(__name__)

# Enable CORS for all origins
app.config['CORS_HEADERS'] = ['Content-Type']

# Configura CORS con origini specifiche
CORS(app)

# Configurazione di Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'micheledellaquila2003@gmail.com'
app.config['MAIL_PASSWORD'] = ''
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

@app.route('/get-feedback', methods=['POST'])
def get_feedback():
    user_response = request.json.get('userResponse')
    current_question = request.json.get('currentQuestion')
    open_ai_answer = request.json.get('openAIAnswer')


if __name__ == "__main__":
    app.run(port=8080)