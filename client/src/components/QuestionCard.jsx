import React, { useState, useEffect } from 'react';

export default function QuestionCard({question}) {
	const [ answers, setAnswers ] = useState([]);
	
	// shuffle all answers
	useEffect(() => {
		const allAnswers = [question.correct, ...question.wrong]
		// Fisher-Yates Shuffle Algorithm
		function shuffleAnswers(array) {
			for (let i = array.length - 1; i > 0; i--) {
				// for unbiased shuffle
				const j = Math.floor(Math.random() * (i + 1));
				// unpack array
				[array[i], array[j]] = [array[j], array[i]];
			}
		return array;
		}

		const shuffled = shuffleAnswers(allAnswers);
		setAnswers(shuffled)

	}, [question]);

	return (
		<div className='question-card'>
			<h2>{question.question}</h2>
			<div className='answers'>
				{answers.map((answer, i ) => (
					<button key={i}>
						{answer}
					</button>
				))}
			</div>			
		</div>
	)
}