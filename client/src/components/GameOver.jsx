

export default function GameOver({score, total}) {
	return(
		<>
		<h2>Game Over!</h2>
		<p>Score: {score}/{total} </p>
		<button>Play Again</button>
		</>
	)
}