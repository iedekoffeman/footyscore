import styles from './Match.module.css';
import getClassNameResult from "../../helpers/getClassNameResult";

function Match(props) {

    const homeTeamScore = props.match.score.fullTime.homeTeam;
    const awayTeamScore = props.match.score.fullTime.awayTeam;

    return (
        <>
            {
                props.match ? (


                    <section className={styles.match}>
                        <section className={styles.team}>
                            <p className={styles['home-team']}>{props.match.homeTeam.name}</p>
                            <p className={styles['away-team']}>{props.match.awayTeam.name}</p>
                        </section>
                        <section className={styles.score}>
                            <p className={`${styles['home-team-score']} ${styles[getClassNameResult(homeTeamScore, awayTeamScore)]}`}>{props.match.score.fullTime.homeTeam}</p>
                            <p className={`${styles['away-team-score']} ${styles[getClassNameResult(awayTeamScore, homeTeamScore)]}`}>{props.match.score.fullTime.awayTeam}</p>
                        </section>
                        <section className={styles['match-info-options']}>
                            <p className={styles['competition-name']}>{props.competitionName}</p>
                        </section>
                    </section>


                ) : (

                    <></>
                )}
        </>

    )
}

export default Match;
