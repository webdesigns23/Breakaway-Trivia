import React from 'react';
import { useState, useEffect } from 'react';
import teams from '../data/teams';
import TeamSelector from './TeamSelector';


export default function TriviaGame() {
		const [ teamSelection, setTeamSelection ] = useState(null)
		const [ loading, setLoading ] = useState(false);
		const [ questions, setQuestions ] = useState([]);
	
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

	return (
		<>
			<TeamSelector teams={teams} onSelect={setTeamSelection}/>

			{!teamSelection && <p>Select a Team to Begin Trivia Game</p>}

			{loading && <p>Loading Questions...</p>}

			{!loading && questions?.length > 0 && (
				<div>
					{questions.map((q , id) => (
						<div key={id}>
							<h3>{q.question}</h3>
							<button>{q.wrong[0]}</button>
							<button>{q.wrong[1]}</button>
							<button>{q.wrong[2]}</button>
							<button>{q.correct}</button>
						</div>
					))}
				</div>
			)}
			
		</>
	)
}