import Player from '../utils/useAudio';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default function DictionaryEntry(props) {
	let data = props.data[0];
	let currentword = props.currentword;

	// if data contains phonetics fields
	let { word, phonetic, phonetics, origin, meanings } = data;

	return (
		<ListGroup variant="flush">
			{/* let's return the word and just hide the word from the passed location data */}
			<ListGroup.Item>{word}</ListGroup.Item>
			{/* return phonetic for now */}
			{/* <p>{phonetic}</p> */}

			{/* map over phonetics */}

			<ListGroup.Item>
				<Player url={phonetics[0].audio} word={phonetics[0].text}>
				</Player>
			</ListGroup.Item>

			{/* display origin */}
			{origin != null && <ListGroup.Item>origin: {origin}</ListGroup.Item>}

			{/* map over meanings*/}
			{/* <ListGroup.Item>meanings:</ListGroup.Item> */}
			<ListGroup.Item>
				{meanings.map((element, index) => {
					return (
						<ListGroup key={index} variant="flush">
							<ListGroup.Item><em>part of speech:</em> {element["partOfSpeech"]}</ListGroup.Item>
							{/* map over definitions */}
							<ListGroup as="ol" numbered variant="flush">
								{element["definitions"].map((element, index) => {
									return (
										<ListGroup.Item as="li">
											<ListGroup key={index} variant="flush">
												<ListGroup.Item><em>definition:</em> {element["definition"]}</ListGroup.Item>
												<ListGroup.Item><em>example:</em> {element["example"]}</ListGroup.Item>
												{/* map over synonyms */}
												<ListGroup variant="flush">
													{element["synonyms"].map((element, index) => {
														<ListGroup.Item key={index}>{element}</ListGroup.Item>
													})}
												</ListGroup>
												{/* map over antonyms */}
												<ListGroup variant="flush">
													{element["antonyms"].map((element, index) => {
														<ListGroup.Item key={index}>{element}</ListGroup.Item>
													})}
												</ListGroup>
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