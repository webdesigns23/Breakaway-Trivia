import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<>				
			<img style={{width: '400px'}} src="src/assets/logo1.png" alt="hockey player"/> 			
			
			<h2>
				Take a breakaway from work and test your hockey knowledge
			</h2>
			<h3>Drop the Puck!</h3>
			<Link to={'/trivia_game'}>
				<button style={{width:'300px', height:'80px', borderRadius:'25px'}} className='button'>Play Now</button>
			</Link>
			<p>
				Think you know your team inside and out? From legendary players and iconic moments to stats, trades, and championship runs. 
			</p>
			<p>
				Breakaway Trivia puts your hockey knowledge to the ultimate test.
			</p>
			<p>
				Whether you're a lifelong fan or bleed your team's colors, this is your chance to step away from the daily grind, lace up, and prove you know the game better than anyone in the room. No skates required, just passion for the sport and a head full of hockey history.
			</p>
			<hr></hr>

			<div style={{fontWeight: 'bold'}}>
				<p>10 Questions | 30 Sec. to Answer | Round Two 2026 Playoff Teams</p>
			</div>		
			
		</>
	)
}