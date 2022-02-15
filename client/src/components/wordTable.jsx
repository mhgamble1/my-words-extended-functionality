import React from "react";
import { Link } from 'react-router-dom';
import { Button, Table } from "react-bootstrap";

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

export default function WordTable(props) {
	const { words } = props;
	const { items, requestSort } = useSortableData(words);

	return (
		<div>
			<h1>select a word for dictionary entry</h1>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>
							<Button variant="primary" onClick={() => requestSort('Text')}>
								Text
							</Button>
						</th>
						<th><Button variant="primary" onClick={() => requestSort('Title')}>
							Title
						</Button></th>
						<th><Button variant="primary" onClick={() => requestSort('Author')}>
							Author
						</Button></th>
						<th><Button variant="primary" onClick={() => requestSort('Date')}>
							Date
						</Button></th>
						<th><Button variant="primary" onClick={() => requestSort('Time')}>
							Time
						</Button></th>
					</tr>
				</thead>
				<tbody>
					{items.map(currentword => {
						return (
							<tr key={currentword._id}>
								{/* make the text one a link */}
								{/* <td>{currentword.Text}</td> */}
								<td> <Link to={{ pathname: `/word/${currentword._id}`, state: { currentword } }}>{currentword.Text}</Link> </td>
								<td>{currentword.Title}</td>
								<td>{currentword.Author}</td>
								<td>{currentword.Date}</td>
								<td>{currentword.Time}</td>
							</tr>
						)
					})}
				</tbody>
			</Table>
		</div>
	)
}