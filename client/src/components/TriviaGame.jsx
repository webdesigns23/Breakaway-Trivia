import React from 'react';
import { useState, useEffect } from 'react';
import teams from '../data/teams';
import TeamSelector from './TeamSelector';
import QuestionCard from './QuestionCard';
import GameOver from './GameOver';


export default function TriviaGame() {
	const [teamSelection, setTeamSelection] = useState(null)
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(false);


	// fetch questions	
	useEffect(() => {
		if (!teamSelection) return;

		async function fetchQuestions() {
			setLoading(true);
			try {
				const res = await fetch('http://localhost:5000/get-questions', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(
						{ team: teamSelection.name }
					)
				});
				const questions = await res.json();
				setQuestions(questions)

			} catch (error) {
				console.error('Error fetching question:', error);
			} finally {
				setLoading(false);
			}
		};
		fetchQuestions();
	}, [teamSelection]);

	// check answer add one to score
	function checkAnswer(correct) {
		correct && setScore(score + 1);
		// next question unless end of game
		if (currentIndex + 1 < questions.length) {
			setCurrentIndex(currentIndex + 1);
		} else {
			setGameOver(true);
		}
	}

	// reset game
	function resetGame() {
		setTeamSelection(null);
		setQuestions([])
		setCurrentIndex(0);
		setScore(0);
		setGameOver(false);
	}


	return (
		<>
			{!teamSelection && (
				<div>
					<TeamSelector teams={teams} onSelect={setTeamSelection} />
				</div>
			)}

			{teamSelection && loading && (
				<div className='loading'>
					<img style={{ width: '350px' }}
						src={teamSelection.logo} alt={teamSelection.name} />
					<img className='team-spinner'
						src='src/assets/zamboni.png'
						alt='zamboni'
					/>
					<h2 >Entering {teamSelection.name} Territory!</h2>
				</div>
			)}

			{teamSelection && !loading && questions?.length && !gameOver > 0 && (
				<div>
					<h1 style={{ 
						color: teamSelection.primary_color, 
						fontSize: '50px' }}
						>{teamSelection.name} Trivia
					</h1>

					<p>Question {currentIndex + 1}/{questions.length}</p>
					<QuestionCard
						question={questions[currentIndex]}
						checkAnswer={checkAnswer}
						teamSelection={teamSelection}
						total={questions.length} />
				</div>
			)}

			{gameOver && (
				<GameOver
					score={score}
					total={questions.length}
					teamSelection={teamSelection}
					resetGame={resetGame} />
			)}

		</>
	)
}