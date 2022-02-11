import React, {useEffect, useRef, useState} from 'react';
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const Chart = ({chartId, height, width}) => {
	const sdk = new ChartsEmbedSDK({baseUrl: 'https://charts.mongodb.com/charts-vocabulary-laawj'})
	const chartDiv = useRef(null);
	const [rendered, setRendered] = useState(false);
	const [chart] = useState(sdk.createChart({chartId: chartId, height: height, width: width, theme: "light"}))

	useEffect(() => {
		chart.render(chartDiv.current).then(() => setRendered(true)).catch(err => console.log("Error during Charts rendering.", err));

	}, [chart]);

	return <div className="chart" ref={chartDiv}/>;
}

export default Chart;