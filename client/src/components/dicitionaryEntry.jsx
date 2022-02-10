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

			{/* map over phonetics */}

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

			{/* map over meanings*/}
			<p>meanings:</p>
			<ol>
				{meanings.map((element, index) => {
					return (
						<li key={index}>
							<p>{element["partOfSpeech"]}</p>
							{/* map over definitions */}
							<ol>
							{element["definitions"].map((element, index) => {
								return (
									<li key={index}>
										<p>{element["definition"]}</p>
										<p>example: {element["example"]}</p>
									</li>	
								)
							})}
							</ol>
						</li>
					)
				})}
			</ol>
		</>
	)
};