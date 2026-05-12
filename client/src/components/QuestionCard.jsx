import React, { useState, useEffect } from 'react';

export default function QuestionCard({question, checkAnswer, teamSelection, total}) {
	const [ answers, setAnswers ] = useState([]);
	const [ selected, setSelected ] = useState(null);
	const [ timeLeft, setTimeLeft ] = useState(30);
	const [ result, setResult ] = useState(null);
	
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

		// reset selection & timer
		setSelected(null);
		setTimeLeft(30);
		setResult(null);

	}, [question]);

	// question timer 10 seconds
	useEffect(() => {
		if (selected) return;

		if (timeLeft === 0) {
			checkAnswer(false);
			return;
		}

		const timer = setTimeout(() => {
			setTimeLeft(timeLeft - 1);
		}, 1000);

		return () => clearTimeout(timer);

	},[timeLeft, selected]);

	// handle selection clicked
	function handleClick(answer){
		if (selected) return;
		setSelected(answer);

		const isCorrect = (answer === question.correct);
		setResult(isCorrect ? 'correct' : 'wrong');
		
		// check answer and wait for css result update
		setTimeout(() => {
			checkAnswer(isCorrect);
		}, 2000);
		
	}


	return (
		<div className='trivia-card'>
			
			<div className='question-card'>
				
				<img src={teamSelection.logo} 
					style={{width: '45%'}} 
					alt={teamSelection.name} />
				<div>
					<h2 style={{
						color:teamSelection.secondary_color, 
						fontSize: '3vw', 
						background: 'none'}}>
						{question.question}
					</h2>
					<progress
						value={timeLeft}
						max={30}
						style={{width: '100%', 
						height: '50px',
						accentColor: teamSelection.accent_color}}>
					</progress>
					
				</div>
					
									
			</div>
			
			
			<div className='answers'>
				{answers.map((answer, index ) => (
					<button className='question-button' 
						style={{
							color:teamSelection.accent_color, 
							background: teamSelection.primary_color,
							borderColor: 
							selected === answer && result === 'correct' ? 'green' :
            				selected === answer && result === 'wrong' ? 'red' :
							teamSelection.secondary_color,
							borderWidth: '6px',
							borderStyle: 'ridge'
						}}
						key={index} 
						onClick={()=> handleClick(answer)}
						disabled={selected !== null}
						>
						{answer}
					</button>
				))}
			</div>	

		</div>
	)
}