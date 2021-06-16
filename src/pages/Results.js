import React from 'react';
import Competition from '../components/Competition'

function ResultsPage() {
    return (
        <>
            <h2>Results</h2>
            <Competition
                country="Holland"
                home_team="Feyenoord"
                away_team="Ajax"
                home_team_score="0"
                away_team_score="0"
                competition="Eredivisie"
                />
            <Competition
                country="England"
                home_team="Arsenal"
                away_team="Chelsea"
                home_team_score="3"
                away_team_score="1"
                competition="Premier League"
            />
        </>
    )

}

export default ResultsPage;