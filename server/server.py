from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from openai import OpenAI
import requests
import os
import json
import json

load_dotenv()
client = OpenAI()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
client.api_key = OPENAI_API_KEY  # Set the API key here
WHISPER_API_URL = 'https://api.openai.com/v1/audio/transcriptions'

app = Flask(__name__)

# Enable CORS for all origins
app.config['CORS_HEADERS'] = ['Content-Type']

# Configura CORS con origini specifiche
CORS(app)

@app.route('/get-feedback', methods=['POST'])
def get_feedback():
    user_response = request.json.get('userResponse')
    current_question = request.json.get('currentQuestion')
    open_ai_answer = request.json.get('openAIAnswer')


if __name__ == "__main__":
    app.run(port=8080)