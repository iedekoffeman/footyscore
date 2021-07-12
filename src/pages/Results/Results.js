import React from 'react';
import Competition from '../../components/Competition/Competition';
import NavigationDateBar from "../../components/NavigationDateBar/NavigationDateBar";


function ResultsPage({competitions, error, loading}) {

    return (

        <>
            <h2>Results</h2>

            <NavigationDateBar/>


            {competitions ? (
                <>
                    {competitions.map((competition) => {
                        return <Competition
                            key={competition.id}
                            status={'FINISHED'}
                            competitionID={competition.id}
                            countryName={competition.area.name}
                        />

                    })}
                </>

            ) : error ? (

                <p>Er is iets misgegaan met het ophalen van de data.</p>

            ) : loading && (

                <p>Loading....</p>

            )}
        </>
    )

}

export default ResultsPage;