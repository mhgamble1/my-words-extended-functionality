import * as React from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import DictionaryEntry from './dicitionaryEntry';

export default function FullPageWord() {
	// const [ID, setID] = React.useState();
	const [data, setData] = React.useState(null);
	const { _id } = useParams();
	const location = useLocation();
	const { currentword } = location.state;

	React.useEffect(() => {
		// setID(_id);
		axios // still need to deal with a "not found" response
			.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${currentword.Text}`)
			.then((response) => {
				console.log(response.data)
				setData(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);


	return (
		<div>
			{/* <p>{_id}</p>
			<p>{currentword.Text}</p>
			<p>{currentword.Title}</p>
			<p>{currentword.Author}</p>
			<p>{currentword.Date}</p>
			<p>{currentword.Time}</p> */}
			{/* here we return a dictionary entry object whose props are: */}
			{data != null &&
				<DictionaryEntry data={data} />
			}
			
			{/* {data != null &&
				<>
					<p>{data[0].word}</p>
					<p>{data[0].phonetic}</p>
					<p>{data[0].origin}</p>
					<p>{data[0].meanings[0].partOfSpeech}</p>
					<p>{data[0].meanings[0].definitions[0].definition}</p>
				</>
			} */}
		</div>
	)
} 