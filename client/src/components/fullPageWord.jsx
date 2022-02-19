import * as React from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import DictionaryEntry from './dicitionaryEntry';
import NotFound from './notFound';

export default function FullPageWord() {
	const [data, setData] = React.useState(null);
	const [notFound, setNotFound] = React.useState(false);
	const { _id } = useParams();
	const location = useLocation();
	const { currentword } = location.state;

	React.useEffect(() => {
		axios
			.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${currentword.Text}`)
			.then((response) => {
				setData(response.data);
			})
			.catch(function (error) {
				if (error.response.status === 404) {
					setNotFound(true);
				}
				console.log(error);
			});
	}, []);


	if (notFound) {
		return <NotFound />
	}

	return (
		<div>
			{data != null &&
				<DictionaryEntry data={data} currentword={currentword} />
			}
		</div>
	)
} 