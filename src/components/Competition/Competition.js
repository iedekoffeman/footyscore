import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";
import getDateFormat from "../../helpers/getDateFormat";
import Match from '../Match/Match'
import styles from './Competition.module.css';

const apikey = 'ddabb8b4425f4870ac199dc2b69b8b57';

function Competition(props) {

    const [matchData, setMatchData] = useState(null);
    const {fromToDate = `${getDateFormat(new Date())}`} = useParams();
    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState();

    console.log("date in competition", fromToDate)


    useEffect(() => {

        //console.log("isDate", isThisADate)

        async function fetchCompetitionMatches() {

            setError(false);
            toggleLoading(true);

            try {

                const result = await
                    axios.get(`https://api.football-data.org/v2/matches?competitions=${props.competitionID}&status=${props.status}&dateFrom=${fromToDate}&dateTo=${fromToDate}`, {
                        headers: {
                            "X-Auth-Token": `${apikey}`,
                        }
                    });
                console.log('Matches:', result.data);
                setMatchData(result.data);


            } catch (e) {
                console.error(e);
                setError(true);
                toggleLoading(false);
            }


        }



        if(props.competitionID || fromToDate || props.status) {
             fetchCompetitionMatches()
        }

    }, [props.competitionID, fromToDate, props.status])




    console.log("matchesDD", matchData);

    return (
        <>
            {
                matchData && matchData.matches.length ? (

                    <article className={styles['competition-content']}>

                        <p className={styles.country}>{props.countryName}</p>

                        {matchData.matches.map((match) => {
                                console.log('Match', match)
                                return <Match key={match.id} matchID={match.id} match={match}
                                              competitionName={match.competition.name}/>


                            }
                        )}

                    </article>

                ) : matchData && !matchData.matches.length ? (

                    <></>

                ) : error ? (

                    <p>Er is iets misgegaan met het ophalen van de data.</p>

                ) : loading && (

                    <p>Loading...</p>
                )}

        </>
    )
}

export default Competition;
