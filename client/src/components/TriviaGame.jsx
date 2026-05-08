import React from 'react';
import { useState, useEffect } from 'react';
import teams from '../data/teams';
import TeamSelector from './TeamSelector';
import QuestionCard from './QuestionCard';


export default function TriviaGame() {
		const [ teamSelection, setTeamSelection ] = useState(null)
		const [ loading, setLoading ] = useState(false);
		const [ questions, setQuestions ] = useState([]);
		const [ currentIndex, setCurrrentIndex ] = useState(0);

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
					<QuestionCard question={questions[currentIndex]}/>
				</div>
			)}
			
		</>
	)
}