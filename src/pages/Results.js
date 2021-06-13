import React from 'react';

function ResultsPage() {
    return (
        <>
            <h2>Results</h2>
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
        </>
    )
        ;
}

export default ResultsPage;