import Chart from "./chart";
import "../styles/chartDashboard.css"

export default function ChartDashboard() {
	return (
		<div>
			<Chart height={"100vh"} width={"100vw"} chartId={'4c48ab30-300e-4d2a-8754-021b2a4211ea'} />
			<Chart height={"100vh"} width={"100vw"} chartId={'9c14967a-1b0c-4043-9304-282b642e0a14'} />
			<Chart height={"100vh"} width={"100vw"} chartId={'1efd63bb-d116-4b76-a959-8744946857e0'} />
		</div>
	)
}