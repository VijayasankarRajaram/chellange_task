import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import Axios from 'axios';

const API_PATH = process.env.REACT_APP_API_URL;

function RocketsDetails(props) {
	var rocket_id = props.match.params.id;
	console.log('----------->', '------->', rocket_id);
	const [ rocList, setRocLists ] = useState(null);

	useEffect(() => {
		getHistroyDetailsList();
	}, []);
	const getHistroyDetailsList = async () => {
		setRocLists(
			await fetch(`https://api.spacexdata.com/v3/rockets/${rocket_id}`).then((response) => response.json())
		);
		console.log('----------->', rocList);
		// Axios.get(`https://api.spacexdata.com/v3/launches/${flight_number}`)
		// 	.then((res) => {
		// 		setDetailsLists(res);
		// 		console.log('--Details res', res);
		// 	})
		// 	.catch((err) => console.log(err));
	};
	console.log('--Details', rocList);
	return (
		<div>
			<Header />
			<p>Rockets Details</p>
			{rocList &&
				rocList.map((row) => (
					<div class="col-sm-4 col-md-4 col-lg-4">
						<div className="card mt-4">
							<div className="card-body">
								<h5 className="card-text">Flight:{row.first_flight}</h5>
								<h4>Country:{row.country}</h4>
								<p className="card-text">Company:{row.company}</p>
								<p>Name:{row.payload_weights.name}</p>
								<p>Height:{row.height.meters} meters</p>
							</div>
						</div>
					</div>
				))}
			<ul>
				{rocList.diameter.map((item, i) => {
					return <li key={i}>{item}</li>;
				})}
			</ul>

			<h2>Payload_weights:</h2>
			<ul>
				{rocList.payload_weights.map((item, i) => {
					return <li key={i}>{item}</li>;
				})}
			</ul>

			<h2>Mass:</h2>
			<ul>
				{rocList.mass.map((item, i) => {
					return (
						<li key={i}>
							{item} - {item}
						</li>
					);
				})}
			</ul>
			<h2>First_stage:</h2>
			<ul>
				{rocList.first_stage.map((item, i) => {
					return (
						<li key={i}>
							{item} - {item}
						</li>
					);
				})}
			</ul>
			<h2>Second_stage:</h2>
			<ul>
				{rocList.mass.map((item, i) => {
					return (
						<li key={i}>
							{item} - {item}
						</li>
					);
				})}
			</ul>
			<Footer />
		</div>
	);
}
export { RocketsDetails };
