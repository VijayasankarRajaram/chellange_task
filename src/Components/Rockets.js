import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import axios from 'axios';

const API_PATH = process.env.REACT_APP_API_URL;
function Rockets() {
	const [ rocketsLists, setRocketsLists ] = useState(null);
	const [ searchLists, setSearchLists ] = useState(null);

	useEffect(() => {
		getHistroyList();
	}, []);

	const getHistroyList = async () => {
		setRocketsLists(await fetch(`https://api.spacexdata.com/v3/rockets`).then((response) => response.json()));
		console.log('----------->', rocketsLists);
	};

	function handleClick(e) {
		console.log('The link has been  clicked.', e);
	}
	// const requestSearch = async (searchedVal) => {
	// 	console.log('searchedVal', searchedVal);
	// 	const flight_number = searchedVal;
	// 	console.log('----->', flight_number);

	// 	setRocketsLists(
	// 		await axios
	// 			.post(`https://api.spacexdata.com/v3/launches/{{flight_number}}`)
	// 			.then((response) => response.data)
	// 	);
	// 	console.log('Search Value', rocketsLists);
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
				<div class="row">
					{rocketsLists &&
						rocketsLists.map((row) => (
							<div class="col-sm-4 col-md-4 col-lg-4">
								<div className="card mt-4">
									<div className="card-body">
										<h5 className="card-text">Flight:{row.first_flight}</h5>
										<h4>Country:{row.country}</h4>
										<p className="card-text">Company:{row.company}</p>
										<p>Name:{row.payload_weights.name}</p>
										<p>Height:{row.height.meters} meters</p>

										{/* <button onClick={this.handleClick(row.id)}>Detail</button> */}
										<Link
											to={{ pathname: `/RocketsDetails/${row.id}` }}
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
export { Rockets };
