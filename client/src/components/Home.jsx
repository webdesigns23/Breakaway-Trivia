import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<>
			<img src="src/assets/logo3.png" alt="hockey player"/> 
			<h2>Take a breakaway from work and test your hockey knowledge</h2>
			<p>
				Think you know your team inside and out? From legendary players and iconic moments to stats, trades, and championship runs. 
			</p>
			<p>
				Breakaway Trivia puts your hockey knowledge to the ultimate test.
			</p>
			<p>
				Whether you're a lifelong fan or bleed your team's colors, this is your chance to step away from the daily grind, lace up, and prove you know the game better than anyone in the room. No skates required, just passion for the sport and a head full of hockey history.
			</p>
			<Link to={'/trivia_game'}>
				<button>Start Trivia</button>
			</Link>
			
		</>
	)
}