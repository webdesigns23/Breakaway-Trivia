import React from 'react';
import { useState, useEffect } from 'react';
import teams from '../data/teams';
import TeamSelector from './TeamSelector';
import QuestionCard from './QuestionCard';


export default function TriviaGame() {
		const [ teamSelection, setTeamSelection ] = useState(null)
		const [ loading, setLoading ] = useState(false);
		const [ questions, setQuestions ] = useState([]);
		const [ currentIndex, setCurrentIndex ] = useState(0);
		const [ score, setScore ] = useState(0);
		const [ gameOver, setGameOver ] = useState(false);


		// fetch questions	
		useEffect(() => {
			if (!teamSelection) return;
	
			async function fetchQuestions () {
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


	return (
		<>
			{!teamSelection && (
				<div>
					<TeamSelector teams={teams} onSelect={setTeamSelection}/>
				</div>
			)}
			
			{teamSelection && loading && (<p>Loading Questions...</p>)}

			{teamSelection && !loading && questions?.length > 0 && (
				<div>
					<QuestionCard 
						question={questions[currentIndex]}
						checkAnswer={checkAnswer}/>
				</div>
			)}
			
		</>
	)
}