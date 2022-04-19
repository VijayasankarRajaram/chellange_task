import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { history } from '../Helper';
import './App.css';
import { HistoryPage } from './Components/History';
import { Launches } from './Components/Launches';
import { Rockets } from './Components/Rockets';
import { Detailspage } from './Components/Detailspage';
import { LauncheDetails } from './Components/LauncheDetails';
import { RocketsDetails } from './Components/RocketsDetails';

function App() {
	return (
		<div className="container-fuild">
			<Router>
				<Switch>
					<Route exact path="/" component={HistoryPage} />
					<Route path="/Launches" component={Launches} />
					<Route path="/Rockets" component={Rockets} />
					<Route path="/DetailsPage/:id" component={Detailspage} />
					<Route path="/LauncheDetails/:id" component={LauncheDetails} />
					<Route path="/RocketsDetails/:id" component={RocketsDetails} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
