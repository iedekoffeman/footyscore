import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {authContext} from '../../contexts/AuthContext';
import Competition from '../../components/Competition/Competition';
import ColoredLine from '../../components/ColoredLine/ColoredLine';


function LiveScoresPage({competitions, error, loading}) {

    const {
        authState: {user},

    } = useContext(authContext);

    return (

        <>
            <h2>Live scores</h2>
            <ColoredLine/>

            {user ? (
                competitions ? (
                    <>
                        {competitions.map((competition) => {
                            return <Competition key={competition.id} status={"LIVE"} competitionID={competition.id}
                                                countryName={competition.area.name}/>

                        })}
                    </>

                ) : error ? (

                    <p>Er is iets misgegaan met het ophalen van de data.</p>

                ) : loading && (

                    <p>Loading....</p>

                )
            ) : (

                <p>You are not signed in, sign in <Link to='/signin'>here</Link></p>

            )
            }

        </>
    )
}

export default LiveScoresPage;