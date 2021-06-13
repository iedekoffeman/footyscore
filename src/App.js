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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum aliquet eros, a suscipit turpis
                posuere
                sed. Nullam eros urna, dapibus at pretium sed, congue vitae velit. Ut dictum, sem sed dictum convallis,
                dui elit
                luctus risus, ut ullamcorper lacus risus nec est. Phasellus sed sollicitudin nisi, ut lobortis arcu.
                Mauris
                gravida, felis nec eleifend convallis, elit felis dignissim orci, nec congue erat ligula eget nunc.
                Quisque
                imperdiet rhoncus ultrices. Suspendisse volutpat ex non lectus auctor consequat. Mauris in lorem purus.
                Pellentesque gravida risus lacus, a elementum mi venenatis ut. In efficitur sapien vitae venenatis
                consectetur.
                Phasellus accumsan, elit eget porta sodales, arcu neque interdum odio, vel posuere leo ante vel felis.

                Phasellus augue leo, viverra vitae mauris eget, fermentum scelerisque lacus. Pellentesque velit tortor,
                blandit
                ut ante a, vulputate tempor leo. Pellentesque porttitor sodales orci, non posuere turpis suscipit vel.
                Pellentesque sollicitudin et velit nec sollicitudin. Nulla porta congue sem vitae iaculis. Lorem ipsum
                dolor sit
                amet, consectetur adipiscing elit. Nulla mi velit, malesuada sed mollis at, vulputate eget metus.
                Quisque
                maximus tellus sit amet mauris mattis ultrices.

                Mauris diam mauris, vestibulum ac hendrerit quis, volutpat vitae nisl. Maecenas diam erat, viverra non
                lorem et,
                mollis dictum massa. Suspendisse eget tellus lobortis, faucibus turpis vitae, imperdiet enim. Maecenas
                condimentum mauris semper justo blandit sodales. Phasellus non cursus augue. Morbi posuere, metus eget
                aliquet
                viverra, nulla dolor malesuada diam, sit amet tincidunt augue augue vitae nisi. In consequat tristique
                sollicitudin.

                Donec id egestas arcu, sed condimentum risus. Orci varius natoque penatibus et magnis dis parturient
                montes,
                nascetur ridiculus mus. Sed rutrum turpis a nunc bibendum, ut lacinia nisl venenatis. In maximus est ut
                justo
                pellentesque volutpat eu quis mauris. Nunc vitae vestibulum sapien. Suspendisse tincidunt semper
                pretium.
                Vivamus congue ac nulla id tempus. Donec rhoncus a tellus quis elementum. Sed varius augue ipsum, sit
                amet
                facilisis tortor congue at. Nulla vestibulum enim neque, ut auctor diam eleifend eget. Vestibulum nulla
                massa,
                hendrerit ac odio et, tempus sollicitudin mi. Sed eget tempor mi. Proin a consectetur libero. Fusce sit
                amet
                tortor tristique, tempus elit sit amet, semper leo.

                Integer placerat elementum tristique. Integer dapibus tellus at lectus tempor, eu accumsan ante
                molestie. Mauris
                varius eros urna, at vestibulum ante placerat id. Etiam mattis magna lacinia ligula rhoncus mollis. Sed
                sit amet
                quam ut augue suscipit ultrices. Vestibulum at porttitor nisi. Vivamus vitae auctor urna, id consectetur
                massa.
                Etiam ornare elit quis turpis lacinia, eget interdum lacus gravida. Pellentesque sed dui nec dui
                placerat
                consectetur. Pellentesque lacinia dui at ligula convallis consectetur. Duis sit amet lorem dapibus,
                luctus elit
                non, placerat lacus.

            </main>
            <aside className="sidebar-right">Sidebar</aside>
            <footer className="footer">Footer</footer>
        </div>
    );
}

export default App;
