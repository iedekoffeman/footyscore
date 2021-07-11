import React, {useEffect, useState} from 'react';
import {
    Switch,
    Route,
    Redirect,
    useLocation,
    useHistory
} from 'react-router-dom';
import axios from "axios";
import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import getDateFormat from './helpers/getDateFormat';
import ResultsPage from './pages/Results/Results';
import FavoritesPage from './pages/Favorites/Favorites';
import LiveScoresPage from './pages/LiveScores/Live-scores';
import SearchPage from './pages/Search/Search';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import MyProfile from './pages/MyProfile/MyProfile';
import AccountMenu from './components/AccountMenu/AccountMenu';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './App.css';
import {faFutbol} from '@fortawesome/free-solid-svg-icons'
import {faUserCircle} from '@fortawesome/free-solid-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faCopyright} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'


const apikey = 'ddabb8b4425f4870ac199dc2b69b8b57';

function App() {

    const {pathname} = useLocation();
    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState();
    const [isActive, setActive] = useState(false);
    const history = useHistory();
    const [competitionData, setCompetitionData] = useState(null);


    function toggleClass() {
        setActive(!isActive);
    }


    useEffect(() => {
        async function fetchData() {

            setError(false);
            toggleLoading(true);

            try {
                const response = await
                    axios.get('https://api.football-data.org/v2/competitions?plan=TIER_ONE', {
                        headers: {
                            'X-Auth-Token': `${apikey}`,
                        }
                    });
                console.log(response.data);

                const result = response.data.competitions.filter(response =>

                    response.id === 2018 ||
                    response.id === 2003 ||
                    response.id === 2021 ||
                    response.id === 2015 ||
                    response.id === 2002 ||
                    response.id === 2019 ||
                    response.id === 2014
                );

                result.sort(function (a, b) {
                    return a.id - b.id;
                });

                setCompetitionData(result);


            } catch (e) {
                console.error(e);
                setError(true);
                toggleLoading(false);
            }


        }

        fetchData();

    }, []);

    console.log('competition', competitionData);

    console.log(['results'].includes(pathname.split('/')[1]));
    return (

        <div className='flexbox-wrapper'>
            <header className='header'>
                <span>
                    <FontAwesomeIcon
                        icon={faFutbol}
                        className='header-football'
                    />
                    <h1>footyScore</h1>
                </span>

                <NavigationMenu pathname={pathname}/>

                <div className={'menu-buttons'}>
                    <button
                        className={'click'}
                        onClick={() => history.push('/search')}
                    >
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                    <button
                        className={'click account'}
                        onMouseEnter={toggleClass}
                        onMouseLeave={toggleClass}
                    >
                        <FontAwesomeIcon icon={faUserCircle}/>
                        <AccountMenu show={isActive}/>
                    </button>
                </div>

            </header>

            <aside className='sidebar-left'>Sidebar</aside>
            <main className='main'>
                <Switch>
                    <Route exact path='/'>
                        <Redirect
                            to={{
                                pathname: `/results/${getDateFormat(new Date())}`,
                            }}
                        />
                    </Route>
                    <Route path='/results/:fromToDate'>
                        <ResultsPage competitions={competitionData} error={error} loading={loading}/>
                    </Route>
                    <Route path='/favorites'>
                        <FavoritesPage/>
                    </Route>
                    <Route path='/live-scores'>
                        <LiveScoresPage competitions={competitionData} error={error} loading={loading}/>
                    </Route>
                    <Route path='/search'>
                        <SearchPage competitions={competitionData}/>
                    </Route>
                    <Route path='/signin'>
                        <SignIn/>
                    </Route>
                    <Route path='/signup'>
                        <SignUp/>
                    </Route>
                    <Route path='/myprofile'>
                        <MyProfile/>
                    </Route>
                    <Route path='/signout'>
                        <Redirect
                            to={{
                                pathname: `/results/${getDateFormat(new Date())}`,
                            }}
                        />
                    </Route>
                    <Route path='/'>
                        <h1>404 page not found, sorry...</h1>
                    </Route>
                </Switch>
            </main>
            <aside className='sidebar-right'>Sidebar</aside>
            <footer className='footer'>

                <p><FontAwesomeIcon icon={faCopyright}/> FootyScore</p>

                <p><FontAwesomeIcon icon={faEnvelope}/> i.koffeman@gmail.com</p>
            </footer>
        </div>

    );
}

export default App;
