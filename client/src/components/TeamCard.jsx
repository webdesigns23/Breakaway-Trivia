import teams from "../data/teams";
import { useState } from "react";

export default function TeamCard({team, onSelect}) {
	
	return(
		<div className="gallery-info">
			<h4>{team.name}</h4>
			<img src={team.logo} style={{width: '70%'}} alt={team.name} />
			<button className="button" onClick={() => onSelect(team)} >
				Select Team
			</button>
		</div>
	);
}