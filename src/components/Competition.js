import React from 'react';

function Competition(props) {
    return (
        <>
            <article className="competition-content">
                <p className="country">{props.country}</p>
                <section className="match">
                    <section className="team">
                        <p className="home-team">{props.home_team}</p>
                        <p className="away-team">{props.away_team}</p>
                    </section>
                    <section className="score">
                        <p className="home-team-score">{props.home_team_score}</p>
                        <p className="away-team-score">{props.away_team_score}</p>
                    </section>
                    <section className="match-info-options">
                        <p className="competition-name">{props.competition}</p>
                    </section>
                </section>
            </article>
        </>
    )
}

export default Competition;