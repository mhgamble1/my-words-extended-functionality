import Player from '../utils/useAudio';
import { ListGroup } from 'react-bootstrap';

export default function DictionaryEntry(props) {
	let data = props.data[0];
	let currentword = props.currentword;

	// if data contains phonetics fields
	let { word, phonetic, phonetics, origin, meanings } = data;

	return (
		<ListGroup variant="flush">
			{/* let's return the word and just hide the word from the passed location data */}
			<ListGroup.Item key={"word"}>{word}</ListGroup.Item>
			{/* return phonetic for now */}
			{/* <p>{phonetic}</p> */}

			{/* map over phonetics */}

			{phonetics.length != 0 && 
				<ListGroup.Item key={"phonetics"}>
					<Player url={phonetics[0].audio} word={phonetics[0].text}>
					</Player>
				</ListGroup.Item>}

			{/* display origin */}
			{origin != null && <ListGroup.Item key={"origin"}>origin: {origin}</ListGroup.Item>}

			{/* map over meanings*/}
			{/* <ListGroup.Item>meanings:</ListGroup.Item> */}
			<ListGroup.Item key={"meanings"}>
				{meanings.map((element, index) => {
					return (
						<ListGroup key={index} variant="flush">
							<ListGroup.Item key={"part of speech:"}><em>part of speech:</em> {element["partOfSpeech"]}</ListGroup.Item>
							{/* map over definitions */}
							<ListGroup as="ol" numbered variant="flush">
								{element["definitions"].map((element, index) => {
									return (
										<ListGroup.Item key={index} as="li">
											<ListGroup variant="flush">
												<ListGroup.Item key={index + "definition"}><em>definition:</em> {element["definition"]}</ListGroup.Item>
												<ListGroup.Item key={index + "example"}><em>example:</em> {element["example"]}</ListGroup.Item>
											</ListGroup>
										</ListGroup.Item>
									)
								})}
							</ListGroup>
						</ListGroup>
					)
				})}
			</ListGroup.Item>
			<ListGroup.Item>Added to my words on {currentword.Date} at {currentword.Time}</ListGroup.Item>
			<ListGroup.Item>From "{currentword.Title}"" by {currentword.Author}</ListGroup.Item>
		</ListGroup>
	)
};