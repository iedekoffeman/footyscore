import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFutbol} from '@fortawesome/free-solid-svg-icons'
import {faUserCircle} from '@fortawesome/free-solid-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

function App() {
    return (
        <div className="flexbox-wrapper">
            <header className="header">
                <span><FontAwesomeIcon icon={faFutbol} className="header-football"/><h1>footyScore</h1></span>
                <nav>
                    <ul>
                        {/*Dit wordt later vervangen door link to*/}

                        <li><a href="/">Results</a></li>
                        <li><a href="/">Favorites</a></li>
                        <li><a href="/">Live scores</a></li>
                    </ul>
                </nav>
                <a href="/" className="search"><FontAwesomeIcon icon={faSearch}/></a>
                <a href="/"><FontAwesomeIcon icon={faUserCircle}/></a>
            </header>
            <aside className="sidebar-left">Sidebar</aside>
            <main className="main">
                <article className="competition-content">
                    <p className="country">Holland</p>
                    <section className="match">
                        <section className="team">
                            <p className="home-team">Feyenoord</p>
                            <p className="away-team">Ajax</p>
                        </section>
                        <section className="score">
                            <p className="home-team-score">3</p>
                            <p className="away-team-score">0</p>
                        </section>
                        <section className="match-info-options">
                            <p className="competition-name">Eredivisie</p>
                        </section>
                    </section>
                </article>
                <article className="competition-content">
                    <p className="country">England</p>
                    <section className="match">
                        <section className="team">
                            <p className="home-team">Feyenoord</p>
                            <p className="away-team">Ajax</p>
                        </section>
                        <section className="score">
                            <p className="home-team-score">3</p>
                            <p className="away-team-score">0</p>
                        </section>
                        <section className="match-info-options">
                            <p className="competition-name">Eredivisie</p>
                        </section>
                    </section>
                </article>

            </main>
            <aside className="sidebar-right">Sidebar</aside>
            <footer className="footer">Footer</footer>
        </div>
    );
}

export default App;
