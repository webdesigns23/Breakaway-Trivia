import React from 'react';
import TeamGallery  from './TeamGallery';

export default function TeamSelector({teams, onSelect}) {

	return (
		<>
			<h2>Select a Team to Begin!</h2>
			<TeamGallery teams={teams} onSelect={onSelect}/>
		</>
	)
}