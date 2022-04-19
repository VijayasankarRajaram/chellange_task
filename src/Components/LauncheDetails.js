import React, { useState, useEffect } from 'react';
// import Image1 from '../../src/assets/images/r2.png';
// import Image2 from '../../src/assets/images/rocket2.jpg';
// import Image3 from '../../src/assets/images/rocket1.jpg';
import { Header } from './Header';
import { Footer } from './Footer';
import Axios from 'axios';

const API_PATH = process.env.REACT_APP_API_URL;

function LauncheDetails(props) {
	var flight_number = props.match.params.id;
	console.log('----------->', '------->', flight_number);
	const [ detailsList, setDetailsLists ] = useState(null);

	useEffect(() => {
		getHistroyDetailsList();
	}, []);
	const getHistroyDetailsList = async () => {
		setDetailsLists(
			await fetch(`https://api.spacexdata.com/v3/launches/${flight_number}`).then((response) => response.json())
		);
		console.log('----------->', detailsList);
		// Axios.get(`https://api.spacexdata.com/v3/launches/${flight_number}`)
		// 	.then((res) => {
		// 		setDetailsLists(res);
		// 		console.log('--Details res', res);
		// 	})
		// 	.catch((err) => console.log(err));
	};
	console.log('--Details', detailsList);
	return (
		<div>
			<Header />
			<p>LauncheDetails page</p>
			{detailsList &&
				detailsList.map((row) => (
					<div class="col-sm-4 col-md-4 col-lg-4">
						<div className="card mt-4">
							<div className="card-body">
								<h5 className="card-title">Mission Name:{row.mission_name}</h5>
								<h4>Flight Number:{row.flight_number}</h4>
								<p className="card-text">Launch Date:{row.launch_date_unix}</p>
								<p className="card-text">Launch UTC:{row.launch_date_utc || 'dd/MM/yyyy'}</p>

								<p>Launch Date:{row.launch_year}</p>
								<p>Tentative_max_precision:{row.tentative_max_precision}</p>
								<p>Rocket Name:{row.rocket.rocket_name}</p>
								<p>Rocket Type:{row.rocket.rocket_type}</p>
								<p>Rocket Type:{row.rocket.first_stage.cores}</p>
								<p>Rocket Type:{row.rocket.rocket_type}</p>
								<p>Rocket Type:{row.rocket.rocket_type}</p>
								<p>Rocket Type:{row.rocket.rocket_type}</p>
							</div>
						</div>
					</div>
				))}
			<Footer />
		</div>
	);
}
export { LauncheDetails };
