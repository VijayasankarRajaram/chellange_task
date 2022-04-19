import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import Axios from 'axios';
const API_PATH = process.env.REACT_APP_API_URL;

function Detailspage(props) {
	const [ detailsList, setDetailsLists ] = useState(null);
	var id = props.match.params.id;
	console.log('----------->', '------->', id);

	useEffect(() => {
		const timer = setTimeout(() => {
			console.log('This will run after 3 second!');
			// getHistroyDetailsList();
			Axios.get(`https://api.spacexdata.com/v3/history/${id}`)
				.then((res) => {
					setDetailsLists(res);
					console.log('--Details res', res);
				})
				.catch((err) => console.log(err));
		}, 1000);
		return () => clearTimeout(timer);
	}, []);

	// const getHistroyDetailsList = async () => {
	// 	setDetailsLists(await fetch(`https://api.spacexdata.com/v3/history/${id}`).then((response) => response.json()));
	console.log('Vijayaaa--->', detailsList);
	// };
	return (
		<div>
			<Header />
			<p>Details page</p>
			<div class="row">
				{detailsList &&
					detailsList.map((row) => (
						<div class="col-sm-4 col-md-4 col-lg-4">
							<div className="card mt-4">
								<div className="card-body">
									{/* <h5 className="card-title">{row.title}</h5> */}
									<h3>Flight Number:{row.flight_number}</h3>
									<p className="card-text">{row.event_date_unix}</p>
									<p className="card-text">{row.event_date_utc || 'dd/MM/yyyy'}</p>
									<p>Details:{row.details}</p>
								</div>
							</div>
						</div>
					))}
			</div>
			<Footer />
		</div>
	);
}
export { Detailspage };
