import React from 'react';
import TeamGallery  from './TeamGallery';

export default function TeamSelector({teams, onSelect}) {

	return (
		<>
			<h1>Select a Team to Begin!</h1>
			<TeamGallery teams={teams} onSelect={onSelect}/>
		</>
	)
}