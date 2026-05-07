import React from 'react';
import { useState } from 'react';
import teams from '../data/teams';
import TeamGallery  from './TeamGallery';

export default function TeamSelector() {
	const [ selectTeam, setSelectTeam ] = useState('');


	return (
		<>
			<h3>What is your favorite team?</h3>
			<TeamGallery teams={teams}/>
		</>
	)
}