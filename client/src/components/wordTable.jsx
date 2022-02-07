export default function WordTable(props) {
	const { words } = props;
	return (
		<div>
			<h3>Word List</h3>
			<table>
				<thead>
					<tr>
						<th>Text</th>
						<th>Title</th>
						<th>Author</th>
						<th>Date</th>
						<th>Time</th>
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