import React from 'react';

export default function GameOver({score, total, resetGame}) {
	return(
		<>
		<h2>Game Over!</h2>
		<p>Score: {score}/{total} </p>
		<button onClick={resetGame}>Play Again</button>
		</>
	)
}