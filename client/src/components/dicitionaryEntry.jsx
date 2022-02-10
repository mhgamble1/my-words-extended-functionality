export default function DictionaryEntry(props) {
	// if (props == null) {
	// 	return null;
	// }

	let data = props.data[0];

	// if data contains phonetics fields
	let { word, phonetic, phonetics, origin, meanings } = data;

	return (
		<>
			{/* let's return the word and just hide the word from the passed location data */}
			<p>{data.word}</p>

			{/* return phonetic for now */}
			<p>{data.phonetic}</p>

			{/* now we will map over phonetics */}

			<p>phonetics: </p>
			<ol>
				{phonetics.map((element, index) => {
					return (
						<li key={index}>
							<p>{element.text}</p>
							<p>{element.audio}</p>
						</li>
					)
				})}
			</ol>
		</>
	)
};