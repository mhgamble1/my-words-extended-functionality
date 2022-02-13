import { useEffect, useState } from "react";
import axios from "axios";
import Chart from "./chart";
import "../styles/chartDashboard.css"
import { Col, Container, Row } from "react-bootstrap";

export default function ChartDashboard() {
	return (
		<div height="100">
			<Row class="mw-100">
				<Col class="mh-100">
					<Chart height={"100%"} chartId={'4c48ab30-300e-4d2a-8754-021b2a4211ea'} />
				</Col>
			</Row>
			<Row>
				<Col class="mh-100">
					<Chart height={"100%"} chartId={'9c14967a-1b0c-4043-9304-282b642e0a14'} />
				</Col>
			</Row>
			<Row>
				<Col class="mh-100">
					<Chart height={"100%"} chartId={'1efd63bb-d116-4b76-a959-8744946857e0'} />
				</Col>
			</Row>
		</div>
	)
}