import styles from './Match.module.css';
import getClassNameResult from '../../helpers/getClassNameResult';

function Match({match, competitionName}) {

    const homeTeam = match.homeTeam.name;
    const awayTeam = match.awayTeam.name;
    const homeTeamScore = match.score.fullTime.homeTeam;
    const awayTeamScore = match.score.fullTime.awayTeam;

    return (
        <>
            {
                match ? (


                    <section className={styles.match}>
                        <section className={styles.team}>
                            <p className={styles['home-team']}>
                                {homeTeam}
                            </p>
                            <p className={styles['away-team']}>
                                {awayTeam}
                            </p>
                        </section>
                        <section className={styles.score}>
                            <p className={`${styles['home-team-score']} ${styles[getClassNameResult(homeTeamScore, awayTeamScore)]}`}>
                                {homeTeamScore}
                            </p>
                            <p className={`${styles['away-team-score']} ${styles[getClassNameResult(awayTeamScore, homeTeamScore)]}`}>
                                {awayTeamScore}
                            </p>
                        </section>
                        <section className={styles['match-info-options']}>
                            <p className={styles['competition-name']}>
                                {competitionName}</p>
                        </section>
                    </section>

                ) : (

                    <></>
                )}
        </>

    )
}

export default Match;
