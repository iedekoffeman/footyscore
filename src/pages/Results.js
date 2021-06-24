import React from 'react';
import Competition from '../components/Competition'
import NavigationDateBar from "../components/NavigationDateBar";


function ResultsPage(props) {


    return (

        <>
            <h2>Results</h2>

            <NavigationDateBar/>


            {props.competitions ? (
                <>
                    {props.competitions.map((competition) => {
                        return <Competition key={competition.id} status={"FINISHED"} competitionID={competition.id}
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

export default ResultsPage;