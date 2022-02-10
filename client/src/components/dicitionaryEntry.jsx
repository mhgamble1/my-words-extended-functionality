import Player from '../utils/useAudio';

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
							{/* <p>{element.audio}</p> */}
							<Player url={element.audio} word={data.word}/>
							<p>{element.text}</p>
						</li>
					)
				})}
			</ol>

			{/* display origin */}
			<p>origin: {origin}</p>

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
											{/* map over synonyms */}
											<ul>
												{element["synonyms"].map((element, index) => {
													<li key={index}>{element}</li>
												})}
											</ul>
											{/* map over antonyms */}
											<ul>
												{element["antonyms"].map((element, index) => {
													<li key={index}>{element}</li>
												})}
											</ul>
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