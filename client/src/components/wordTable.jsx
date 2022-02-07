import React from "react";
export default function WordTable(props) {
	const { words } = props;
	const [sortedField, setSortedField] = React.useState(null);
	let sortedWords = [...words];
	if (sortedField != null) {
		sortedWords.sort((a, b) => {
			// if (a[sortedField] < b[sortedField]) {
			// 	return -1;
			// }
			// if (a[sortedField] > b[sortedField]) {
			// 	return 1;
			// }
			// return 0;
			return a[sortedField].localeCompare(b[sortedField], 'en', {'sensitivity': 'base'});
		})
	}
	return (
		<div>
			<h3>Word List</h3>
			<table>
				<thead>
					<tr>
						<th>
							<button type="button" onClick={() => setSortedField('Text')}>
								Text
							</button>
						</th>
						<th><button type="button" onClick={() => setSortedField('Title')}>
							Title
						</button></th>
						<th><button type="button" onClick={() => setSortedField('Author')}>
							Author
						</button></th>
						<th><button type="button" onClick={() => setSortedField('Date')}>
							Date
						</button></th>
						<th><button type="button" onClick={() => setSortedField('Time')}>
							Time
						</button></th>
					</tr>
				</thead>
				<tbody>
					{console.log(sortedWords)}
					{sortedWords.map(currentword => {
						return (
							<tr key={currentword._id}>
								<td>{currentword.Text}</td>
								<td>{currentword.Title}</td>
								<td>{currentword.Author}</td>
								<td>{currentword.Date}</td>
								<td>{currentword.Time}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}