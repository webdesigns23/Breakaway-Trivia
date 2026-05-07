import TeamCard from "./TeamCard";

export default function TeamGallery({teams}) {
	return(
		<div className="gallery">
			{teams.map((team) => (
				<div key={team.id} className="gallery-item">
					<TeamCard team={team}/>
				</div>
			))}
		</div>

	);
}