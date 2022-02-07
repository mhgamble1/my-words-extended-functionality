import React from "react";
export default function WordTable(props) {
	const { words } = props;
	const [sortedField, setSortedField] = React.useState(null);
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
					{words.map(currentword => {
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