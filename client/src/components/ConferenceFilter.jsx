
export default function ConferenceFilter({conFilter, onChange}) {
	return (
		<>
		<label>
			<input
				type='radio'
				name= 'filter-con'
				value= 'all'
				checked= {conFilter === 'all'}
				onChange= {(e) => onChange(e.target.value)}/> All Teams
		</label>
		<label>
			<input
				type='radio'
				name= 'filter-con'
				value= 'eastern'
				checked= {conFilter === 'eastern'}
				onChange= {(e) => onChange(e.target.value)}/> Eastern Conference
		</label>
		<label>
			<input
				type='radio'
				name= 'filter-con'
				value= 'western'
				checked= {conFilter === 'western'}
				onChange= {(e) => onChange(e.target.value)}/> Western Conference
		</label>
		</>
	)
}