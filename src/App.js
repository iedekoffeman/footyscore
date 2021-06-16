import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from 'react-router-dom';
import ResultsPage from './pages/Results';
import FavoritesPage from './pages/Favorites';
import LiveScoresPage from "./pages/Live-scores";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFutbol} from '@fortawesome/free-solid-svg-icons'
import {faUserCircle} from '@fortawesome/free-solid-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const apikey = 'ddabb8b4425f4870ac199dc2b69b8b57';

function App() {

    const [matchData, setMatchData] = useState(null);
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await
                    axios.get(`https://api.football-data.org/v2/matches`, {
                        headers: {
                            "X-Auth-Token": `${apikey}`,
                        }
                    });
                console.log(result.data);
                setMatchData(result.data);


            } catch (e) {
                console.error(e);
            }


        }

        fetchData();

    }, []);

    console.log(matchData);

    return (
        <Router>
            <div className="flexbox-wrapper">
                <header className="header">
                    <span><FontAwesomeIcon icon={faFutbol} className="header-football"/><h1>footyScore</h1></span>
                    <nav>
                        <ul>
                            {/*Dit wordt later vervangen door link to*/}

                            <li><NavLink to="/" exact={true} className="main-nav"
                                         activeClassName="main-nav-active">Results</NavLink></li>
                            <li><NavLink to="/favorites" className="main-nav"
                                         activeClassName="main-nav-active">Favorites</NavLink></li>
                            <li><NavLink to="/live-scores" className="main-nav" activeClassName="main-nav-active">Live
                                scores</NavLink></li>
                        </ul>
                    </nav>
                    <a href="/" className="search"><FontAwesomeIcon icon={faSearch}/></a>
                    <a href="/"><FontAwesomeIcon icon={faUserCircle}/></a>
                </header>

                <aside className="sidebar-left">Sidebar</aside>
                <main className="main">
                    <Switch>
                        <Route exact path="/">
                            <ResultsPage/>
                        </Route>
                        <Route path="/favorites">
                            <FavoritesPage/>
                        </Route>
                        <Route path="/live-scores">
                            <LiveScoresPage/>
                        </Route>
                    </Switch>
                </main>
                <aside className="sidebar-right">Sidebar</aside>
                <footer className="footer">Footer</footer>
            </div>
        </Router>
    );
}

export default App;
