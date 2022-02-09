// import * as React from 'react'
// import axios from 'axios';
// import { useParams } from 'react-router-dom'

// export default function FullPageWord() {
// 	// const [word, setWord] = React.useState(null);
// 	// const {Text} = useParams();

// 	// React.useEffect(() => {
// 		// setWord(Text);
// 	// })

// 	// return (
// 	// 	<h1>{word}</h1>
// 	// )
// 	const { _id } = useParams();
// 	// const [ID, setID] = React.useState();
// 	const [data, setData] = React.useState({words: []});

// 	React.useEffect(() => {
// 		// setID(_id);
// 		axios
// 			.get(`http://localhost:5000/word/${_id}`)
// 			.then((response) => {
// 				console.log(response.data)
// 				setData(response.data);
// 			})
// 			.catch(function (error) {
// 				console.log(error);
// 			});
// 	}, []);

// 	if (data == null) {
// 		return null;
// 	}

// 	return (
// 		<h1>{_id}</h1>
// 	)
// }

import * as React from 'react'
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom'

export default function FullPageWord() {
	const [ID, setID] = React.useState();
	const [data, setData] = React.useState(null);
	const { _id } = useParams();
	const location = useLocation();
	const { currentword } = location.state;

	React.useEffect(() => {
		setID(_id);
	});
	// 	axios
	// 		.get(`http://localhost:5000/word/${_id}`)
	// 		.then((response) => {
	// 			console.log(response.data)
	// 			setData(response.data);
	// 		})
	// 		.catch(function (error) {
	// 			console.log(error);
	// 		});
	// }, []);

	return (
		<div>
			<p>{_id}</p>
			<p>{currentword.Text}</p>
			<p>{currentword.Title}</p>
			<p>{currentword.Author}</p>
			<p>{currentword.Date}</p>
			<p>{currentword.Time}</p>
		</div>
	)
} 