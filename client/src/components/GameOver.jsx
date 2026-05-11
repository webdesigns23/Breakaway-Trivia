import React from 'react';

export default function GameOver({score, total, resetGame, teamSelection}) {
	const messageStyle = {
		color: teamSelection.accent_color,
		fontSize: '3vw',
		background: teamSelection.primary_color
	}

	return(
		<div className='trivia-card'>
			<h1 style={{color:teamSelection.primary_color}}>Game Over</h1>
			<h2 style={{
					color:teamSelection.secondary_color, 
					fontSize: '3vw', 
					background: 'none'}}>Score: {score}/{total} 
			</h2>
			<div className='question-card'>
				<img src={teamSelection.logo} 
					style={{width: '45%'}} 
					alt={teamSelection.name} />
				{score <= 2 && (
					<h3 style={messageStyle}>"Sent to the AHL. Come back when you know your team better!"</h3>
				)}
				{score > 2 && score <= 4 && (
					<h3 style={messageStyle}>"Not quite playoff material..."</h3>
				)}
				{score === 5 && (
					<h3 style={messageStyle}>"Presidents Trophy Winner!"</h3>
				)}
				
			</div>
		<button className='question-button' 
			onClick={resetGame}>Play Again</button>
		</div>
	)
}