import * as React from 'react'
import { useParams } from 'react-router-dom'

export default function FullPageWord() {
	const [word, setWord] = React.useState(null);
	const {Text} = useParams();

	React.useEffect(() => {
		setWord(Text);
	})

	return (
		<h1>{word}</h1>
	)
}