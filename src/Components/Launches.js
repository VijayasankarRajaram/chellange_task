import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_PATH = process.env.REACT_APP_API_URL;
function Launches() {
	const [ LaunchesLists, setLaunchesLists ] = useState(null);
	const [ searchLists, setSearchLists ] = useState(null);

	useEffect(() => {
		getHistroyList();
	}, []);

	const getHistroyList = async () => {
		setLaunchesLists(await fetch(`https://api.spacexdata.com/v3/launches`).then((response) => response.json()));
		console.log('----------->', LaunchesLists);
	};
	function handleClick(e) {
		console.log('The link has been  clicked.', e);
	}
	// const requestSearch = async (searchedVal) => {
	// 	console.log('searchedVal', searchedVal);
	// 	const flight_number = searchedVal;
	// 	console.log('----->', flight_number);

	// 	setLaunchesLists(
	// 		await axios
	// 			.post(`https://api.spacexdata.com/v3/launches/{{flight_number}}`)
	// 			.then((response) => response.data)
	// 	);
	// 	console.log('Search Value', LaunchesLists);
	// };

	return (
		<div>
			<Header />
			<div class="container-fluid">
				{/* <input
					name="filtername"
					placeholder="Profile Search"
					type="text"
					// value={searched}
					onChange={(e) => requestSearch(e.target.value)}
					// onCancelSearch={() => cancelSearch()}
					className={'form-control'}
				/> */}
				<div class="row" style={{ bgcolor: 'background.paper' }}>
					{LaunchesLists &&
						LaunchesLists.map((row) => (
							<div class="col-sm-4 col-md-4 col-lg-4">
								<div className="card mt-4">
									<div className="card-body">
										<h5 className="card-title">Mission Name:{row.mission_name}</h5>
										<h4>Flight Number:{row.flight_number}</h4>
										<p className="card-text">Launch Date:{row.launch_date_unix}</p>
										<p className="card-text">Launch UTC:{row.launch_date_utc || 'dd/MM/yyyy'}</p>
										<p>Rocket Name:{row.rocket.rocket_name}</p>
										<p>Rocket Type:{row.rocket.rocket_type}</p>
										{/* <button onClick={this.handleClick(row.id)}>Detail</button> */}
										{/* <a href="#" onClick={handleClick(row.id)}>
											Click this link
										</a> */}
										<Link
											to={{ pathname: `/LauncheDetails/${row.flight_number}` }}
											className="btn btn-primary"
										>
											Show Details
										</Link>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
			<Footer />
		</div>
	);
}
export { Launches };
