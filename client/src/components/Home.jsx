import React from 'react';

export default function Home() {
	return (
		<>
		<h1>Breakaway Trivia</h1>
			<h2>Take a breakaway from work and test your hockey knowledge</h2>
			<p>
				Think you know your team inside and out? From legendary players and iconic moments to stats, trades, and championship runs. 
			</p>
			<p>
				Breakaway Trivia puts your hockey knowledge to the ultimate test.
				Whether you're a lifelong fan or bleed your team's colors, this is your chance to step away from the daily grind, lace up, and prove you know the game better than anyone in the room. No skates required, just passion for the sport and a head full of hockey history.
			</p>
			<form>
				<label>What is your favorite team?</label>
				<input type="text" placeholder="Pick an Team" />
				<button>Drop the Puck</button>
			</form>
		</>
	)
}