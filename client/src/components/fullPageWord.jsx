import * as React from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import DictionaryEntry from './dicitionaryEntry';

export default function FullPageWord() {
	const [data, setData] = React.useState(null);
	const { _id } = useParams();
	const location = useLocation();
	const { currentword } = location.state;

	React.useEffect(() => {
		axios // still need to deal with a "not found" response
			.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${currentword.Text}`)
			.then((response) => {
				setData(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);


	return (
		<div>
			{data != null &&
				<DictionaryEntry data={data} currentword={currentword}/>
			}
		</div>
	)
} 