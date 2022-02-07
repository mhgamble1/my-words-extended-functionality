import React from "react";

// allows for sorting tables in ascending and descending order
const useSortableData = (items, config = null) => {
	const [sortConfig, setSortConfig] = React.useState(null);

	const sortedItems = React.useMemo(() => {
		let sortableItems = [...items];
		if (sortConfig != null) {
			sortableItems.sort((a, b) => {
				let sortPrelim = a[sortConfig.key].localeCompare(b[sortConfig.key], 'en', { 'sensitivity': 'base' });
				// if direction is ascending return normal compare. else return opposite
				return sortConfig.direction === 'ascending' ? sortPrelim : -1 * sortPrelim;
			})
		}
		return sortableItems;
	}, [items, sortConfig]);

	// button click calls this
	const requestSort = key => {
		let direction = 'ascending';
		if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
			direction = 'descending';
		}
		setSortConfig({ key, direction });
	}

	return { items: sortedItems, requestSort };
}

const showDefinition = Text => {

}

export default function WordTable(props) {
	const { words } = props;
	const { items, requestSort } = useSortableData(words);

	return (
		<div>
			<h3>Word List</h3>
			<table>
				<thead>
					<tr>
						<th>
							<button type="button" onClick={() => requestSort('Text')}>
								Text
							</button>
						</th>
						<th><button type="button" onClick={() => requestSort('Title')}>
							Title
						</button></th>
						<th><button type="button" onClick={() => requestSort('Author')}>
							Author
						</button></th>
						<th><button type="button" onClick={() => requestSort('Date')}>
							Date
						</button></th>
						<th><button type="button" onClick={() => requestSort('Time')}>
							Time
						</button></th>
					</tr>
				</thead>
				<tbody>
					{items.map(currentword => {
						return (
							<>
								<tr key={currentword._id}>
									<td>{currentword.Text}</td>
									{/* <td><button type="button" onClick={() => showDefinition(currentword.Text)}>
									</button></td> */}
									<td>{currentword.Title}</td>
									<td>{currentword.Author}</td>
									<td>{currentword.Date}</td>
									<td>{currentword.Time}</td>
								</tr>
								{/* <p>definition</p> */}
							</>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}