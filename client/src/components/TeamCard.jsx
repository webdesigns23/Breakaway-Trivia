import teams from "../data/teams";
import { useState } from "react";

export default function TeamCard({team}) {
	const [ selectedTeam, setSelectedTeam ] = useState('');
	
	return(
		<div className="gallery-info">
			<h4>{team.name}</h4>
			<img src={team.logo} style={{width: '50%'}} alt={team.name} />
		</div>
	);
}