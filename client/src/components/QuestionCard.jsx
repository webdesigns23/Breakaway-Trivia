import React, { useState, useEffect } from 'react';

export default function QuestionCard({question, checkAnswer, teamSelection, total}) {
	const [ answers, setAnswers ] = useState([]);
	const [ selected, setSelected ] = useState(null);
	
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

		// reset selection
		setSelected(null);

	}, [question]);

	// handle selection clicked
	function handleClick(answer){
		if (selected) return;

		setSelected(answer);
		// check answer
		checkAnswer(answer === question.correct);
	}



	return (
		<div className='trivia-card'>

			<div className='question-card'>
			<img src={teamSelection.logo} 
				style={{width: '45%'}} 
				alt={teamSelection.name} />
			<h2 style={{
				color:teamSelection.primary_color, 
				fontSize: '3vw', 
				background: 'none'}}>
				{question.question}</h2>
			</div>

			<div className='answers'>
				{answers.map((answer, index ) => (
					<button className='question-button' 
						style={{
							color:teamSelection.accent_color, 
							background: teamSelection.primary_color,
							borderColor: teamSelection.secondary_color,
							borderWidth: '6px',
							borderStyle: 'ridge'
						}}
						key={index} onClick={()=> handleClick(answer)}>
						{answer}
					</button>
				))}
			</div>	

		</div>
	)
}