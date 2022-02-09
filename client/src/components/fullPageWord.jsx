import * as React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'

export default function FullPageWord() {
	// const [word, setWord] = React.useState(null);
	// const {Text} = useParams();

	// React.useEffect(() => {
	// 	setWord(Text);
	// })

	// return (
	// 	<h1>{word}</h1>
	// )
	const { _id } = useParams();
	const [data, setData] = React.useState({words: []});

	React.useEffect(() => {
		axios
			.get(`http://localhost:5000/word/${_id}`)
			.then((response) => {
				console.log(response.data)
				setData(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	if (data == null) {
		return null;
	}

	return (
		<h1>test</h1>
	)
}