import React, { useState } from 'react';
import ConferenceFilter from "./ConferenceFilter";
import TeamCard from "./TeamCard";


export default function TeamGallery({teams, onSelect}) {
	// conference filter functionality
	const [ conFilter, setConFilter ] = useState('all');

	const filteredCon = teams.filter((c) => {
		const conference = conFilter === 'all' ||
		(conFilter === 'western' && c.conference === 'western') ||
		(conFilter === 'eastern' && c.conference === 'eastern');

		return conference;
	})

	return(
		<>
		<ConferenceFilter conFilter={conFilter} onChange={setConFilter}/>
		
			<div className="gallery">
				{filteredCon.map((team) => (
					<div key={team.id} className="gallery-item">
						<TeamCard team={team} onSelect={onSelect}/>
					</div>
				))}
			</div>
		</>
	);
}