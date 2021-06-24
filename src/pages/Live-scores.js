import React from 'react';
import Competition from "../components/Competition";

function LiveScoresPage(props) {


    return (

        <>
            <h2>Live scores</h2>

            {props.competitions ? (
                <>
                    {props.competitions.map((competition) => {
                        return <Competition key={competition.id} status={"LIVE"} competitionID={competition.id}
                                            countryName={competition.area.name}/>

                    })}
                </>

            ) : props.error ? (

                <p>Er is iets misgegaan met het ophalen van de data.</p>

            ) : props.loading && (

                <p>Loading....</p>

            )}
        </>
    )
}

export default LiveScoresPage;