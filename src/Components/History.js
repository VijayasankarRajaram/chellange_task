import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import Axios from 'axios';

const API_PATH = process.env.REACT_APP_API_URL;

function HistoryPage() {
	const [ histroyLists, setHistryLists ] = useState(null);
	const [ searchLists, setSearchLists ] = useState(null);

	useEffect(() => {
		getHistroyList();
	}, []);

	const getHistroyList = async () => {
		setHistryLists(await fetch(`https://api.spacexdata.com/v3/history`).then((response) => response.json()));
		
	};

	let textInput = React.createRef(); // React use ref to get input value

	let onOnclickHandler = (e) => {
		var sid = 1;
		const id = textInput.current.value;
		
		// setSearchLists(fetch(`https://api.spacexdata.com/v3/history/${id}`).then((response) => response.data));
		
		Axios.get(`https://api.spacexdata.com/v3/history/${id}`)
				.then((res) => {
					setSearchLists(res);
					console.log('setSearchLists', res);
				})
				.catch((err) => console.log(err));
	};

	return (
		<div>
			<Header />
			<div class="container-fluid">
				<div className="App">
					<input ref={textInput} type="text" />
					<button className="btn btn-primary ml-1" onClick={onOnclickHandler}>Search</button>
				</div>
				<div class="row">
					{searchLists==null?<>
					{histroyLists &&
						histroyLists.map((row) => (
							<div class="col-sm-4 col-md-4 col-lg-4">
								<div className="card mt-4">
									<div className="card-body">
										<h4 className="card-title">Title:{row.title}</h4>
										<h6>Flight Number:{row.flight_number}</h6>
										<h6 className="card-text">Event:{row.event_date_unix}</h6>
										<p className="card-text">UTC:{row.event_date_utc || 'dd/MM/yyyy'}</p>
										<Link to={{ pathname: `/DetailsPage/${row.id}` }} className="btn btn-primary">
											Show Detail
										</Link>
									</div>
								</div>
							</div>
						))}</>:<>{searchLists &&
							searchLists.map((row) => (
								<div class="col-sm-4 col-md-4 col-lg-4">
									<div className="card mt-4">
										<div className="card-body">
											<h4 className="card-title">Title:{row.title}</h4>
											<h6>Flight Number:{row.flight_number}</h6>
											<h6 className="card-text">Event:{row.event_date_unix}</h6>
											<p className="card-text">UTC:{row.event_date_utc || 'dd/MM/yyyy'}</p>
											<Link to={{ pathname: `/DetailsPage/${row.id}` }} className="btn btn-primary">
												Show Detail
											</Link>
										</div>
									</div>
								</div>
							))}</>
							}
				</div>
			</div>
			<Footer />
		</div>
	);
}
export { HistoryPage };
