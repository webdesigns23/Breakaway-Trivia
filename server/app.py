from flask import Flask, request, jsonify
from dotenv import load_dotenv
from flask_cors import CORS
import os
from anthropic import Anthropic
import json

load_dotenv()

app = Flask(__name__)
CORS(app)

# Claude API
client = Anthropic(api_key= os.getenv("ANTHROPIC_API_KEY")) 

@app.route("/get-questions", methods=["POST"])
def get_questions():
	team = request.json.get("team")

	# claude API call
	message = client.messages.create(
		model="claude-sonnet-4-6",
		max_tokens=1024,
		messages=[
			{
				"role": "user",
				"content": f"""Generate 5 trivia questions about the NHL team {team}.
				Return JSON only, no extra text, no markdown, no backticks, in this format:
				[
				{{
				"question": "...",
				"correct": "...",
				"wrong": ["...", "...", "..."]
				}}]"""
			}
		]
	)

	questions = json.loads(message.content[0].text)
	return jsonify(questions)

if __name__ == "__main__":
	app.run(debug=True)