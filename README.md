# Breakaway-Trivia
Take a breakaway from work and test your hockey knowledge

## Overview:
Breakaway Trivia is a hockey trivia application that delivers a personalized quiz experience based on the user’s favorite NHL team. Players select their team and are challenged with trivia questions covering team history, players, statistics, trades, and iconic moments.
I am a huge hockey fan, so the idea behind the app was to create something fun for hockey fans to play between periods. Whether their team is dominating the game or trying to mount a comeback, a little break from the stress of watching the playoffs is always needed. With the Stanley Cup Playoffs currently deep into Round Two, I themed the app around the eight remaining playoff teams.
Rather than manually writing every trivia question, I integrated Claude API to dynamically generate questions, so that each session would feel unique and keep the gameplay fresh for friends competing against one another.

# Application Flow:
1.	From homepage click "Play" on nav bar or “Drop the Puck” button to start the game
2.	Select your team to test your knowledge
3.	5 minutes to complete trivia game, 30 sec each question
4.  1 point per answer, max 10/10
5.	Game ends, Score displayed and button to start a new game

# Tools and Resources Featured in this Project:
- [GitHub Repo](https://github.com/webdesigns23/Breakaway-Trivia)
- Python 3.8.13+
- Flask
- VS Code
- Git + GitHub
- Virtualenv
- Python Packages listed in requirements.txt
- Vite
- React
- React-Router
- Node.js
- [Claude API for Questions](https://platform.claude.com/docs/en/home)

# Set Up and Installation:
1. Getting Started:
* Fork and clone the GitHub Repo
```bash
git clone <repo_url>
cd <project-directory>

```
2. Set up Backend 
* Set up your virtual environment of choice (virtualenv prefered)
```bash
cd server
virtualenv env1
source env1/bin/activate
```
* Install PyPi dependencies in to the server directory using requiements.txt
```bash
pip install -r requirements.txt
```
3. Set up .env or .env.local file
* Copy .env.example to your .env or .env.local file and add your key

4. Set Up Frontend
* Install necessary dependencies
```bash
npm install
```
# Running Back-end of Application
Should run on port 5555 to match proxy in package.json, you can run the Flask server with:
```bash
cd server
python app.py
```
# Running Front-end of Application
To run the React application:
```bash
npm run dev
```

# API Endpoints and Functionality:
`POST /get-questions`
* Generates an array of question objects based on team selected by user

# Application Files
## Server:
I used Python and Flask to build a lightweight backend for the application, primarily to handle requests to the Claude Anthropic API for dynamically generating trivia questions and multiple-choice answers. The backend only required a single POST request, /get-questions, which generates personalized trivia questions based on the selected NHL team.

Originally, I also considered adding a PostgreSQL database to track high scores on the Scores page. I also explored the idea of implementing user authentication or just allowing players to enter their names before selecting a team. However, since this is intended to be a casual trivia app, I’m not sure that level of functionality is necessary yet. My plan is to test the app with friends during playoff games and decide later whether features like accounts and score tracking would improve the experience, or if it is fun as is.

Setting up the API integration was straightforward thanks to the Claude API documentation. I mainly just needed to paste in the provided Python template and customize the messages array to generate the type of trivia content I wanted. Since the API requires a secret key, I stored it securely in a .env file and updated my .gitignore to ensure sensitive credentials weren’t pushed to GitHub during commits.

## Client:
### src/components
I created the React application using Vite as the build tool. After removing the default boilerplate code, I set up the main parent components and routes that would be used in App.jsx. I used React Router to manage navigation throughout the application, and to keep the project modular and organized, I also created separate child components to handle specific pieces of functionality. Since the app is relatively small, I chose to keep all components within the same folder structure for simplicity and easier navigation. Below is an outline of the parent and child components used throughout the application.

* NavBar.jsx (Used { NavLink } from react-router-dom)
* Home.jsx (Used { Link } for button to go to trivia game or can use nav bar)
* TriviaGame.jsx
 	- Teams.js
	- TeamSelector.jsx
		- TeamGallery.jsx
		- TeamCard.jsx
	- QuestionsCard.jsx
	- GameOver.jsx
* Score.jsx (For future top scores updated if needed)


### src/data/teams.js:
For team information, I created a teams.js file containing an array of team objects. Each team object contains the following information:

-	id: “1”
-	name: “Team name”
-	primary_color: “hex color”
-	secondary_color: "hex color”
-	accent_color: "hex color"
-   conference: "western"
-	logo: “link to team logo”

This data is used to dynamically generate team cards on the Trivia Game page, giving users a visual way to select their favorite team through team names and logos. Also added functionality to filter teams with radio buttons by conference. The selected team name is then passed into the Claude Anthropic API call to generate trivia questions tailored specifically to that team.
Once the trivia game begins, I use each team’s color palette to dynamically style the trivia question cards, allowing the interface to visually reflect the branding and identity of the selected team throughout the game experience.

### src/styles  
I debated using Tailwind or Bootstrap to style the application, but I had a very specific visual direction in mind and decided that writing the CSS myself would give me the most flexibility and control over the design. Since I’m highly visual, my workflow usually involves creating rough initial styles and then refining them using the browser’s inspector tools. This allows me to see changes in real time, experiment with layouts and colors, and then copy the finalized CSS directly into my project from the inspect tools.

I used external style sheets for the app’s static styling and relied on inline styling for dynamic visual changes, such as updating team colors throughout the interface and visually indicating to the user whether their trivia selected answer was correct or incorrect.

### src/assets
For the app’s visual design, I created several custom images that I stored in the assets folder, including the Breakaway Trivia logo, hockey player graphics, and title text using Canva. I also added a loading animation featuring a Zamboni driving across the screen, which I animated using the CSS transform property.

Originally, I experimented with using a short video clip of a puck drop as the loading screen. However, I ran into performance issues because the browser was already handling the API request to generate trivia questions, and loading the video at the same time caused delays and inconsistent playback. Realizing that most loading screens rely on lightweight animations or spinners for efficiency, I decided to replace the video with the animated Zamboni. It kept the hockey theme intact while providing a smoother and more reliable user experience during loading states.

# Author and Project Context
* Created by: Sharmaine Perea
* edX: slp3md
* Project Created for CS50 Intro to Compuer Science Final Project