function Match(props) {
    return (
<>
        {
            props.match && props.match.status === "FINISHED" ? (


                    <section className="match">
                        <section className="team">
                            <p className="home-team">{props.match.homeTeam.name}</p>
                            <p className="away-team">{props.match.awayTeam.name}</p>
                        </section>
                        <section className="score">
                            <p className="home-team-score">{props.match.score.fullTime.homeTeam}</p>
                            <p className="away-team-score">{props.match.score.fullTime.awayTeam}</p>
                        </section>
                        <section className="match-info-options">
                            <p className="competition-name">{props.competitionName}</p>
                        </section>
                    </section>


            ) : (

           <></>
)}
</>

)
}

export default Match;