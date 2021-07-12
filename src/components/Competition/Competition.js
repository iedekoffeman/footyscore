import React, {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import * as rax from 'retry-axios';
import {CountryContext} from '../../contexts/CountryContext';
import getCountryCode from '../../helpers/getCountryCode';
import getDateFormat from '../../helpers/getDateFormat';
import Match from '../Match/Match';
import styles from './Competition.module.css';
import Flag from 'react-world-flags';

const apikey = 'ddabb8b4425f4870ac199dc2b69b8b57';

function Competition({competitionID, status, countryName}) {

    const {
        countryArray

    } = useContext(CountryContext);

    const [matchData, setMatchData] = useState(null);
    const {fromToDate = `${getDateFormat(new Date())}`} = useParams();
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState();


    useEffect(() => {


        async function fetchCompetitionMatches() {

            toggleLoading(true);

            try {
                rax.attach();
                const result = await
                    axios.get(`https://api.football-data.org/v2/matches?competitions=${competitionID}&status=${status}&dateFrom=${fromToDate}&dateTo=${fromToDate}`, {
                        headers: {
                            "X-Auth-Token": `${apikey}`,
                        },
                        raxConfig: {
                            statusCodesToRetry: [[429, 429]],
                            backoffType: 'static',
                            retryDelay: 60000,
                            onRetryAttempt: error => {
                                //const cfg = rax.getConfig(error);
                                //console.log(`Retry attempt #${cfg.currentRetryAttempt}`);
                                setError('We use a free API, there were too many requests it refreshes automatically after 60 seconds');
                            }
                        }
                    });
                setMatchData(result.data);
                setError('');


            } catch (error) {

                if (error.response.status === 429) {
                    setError(error.response.data.message);
                }

                toggleLoading(false);

            }

        }

        fetchCompetitionMatches();


    }, [competitionID, fromToDate, status])


    return (
        <>
            {
                matchData && matchData.matches.length ? (

                    <article className={styles['competition-content']}>
                        <div className={styles['country-info-wrapper']}>
                            <figure>
                                <Flag code={getCountryCode(countryArray, countryName)}
                                      height='16'
                                      fallback={<span>flag</span>}
                                />
                            </figure>
                            <p className={styles.country}>{countryName}</p>
                        </div>
                        {matchData.matches.map((match) => {

                                return <Match
                                    key={match.id}
                                    matchID={match.id}
                                    match={match}
                                    competitionName={match.competition.name}
                                />

                            }
                        )}

                    </article>

                ) : error ? (
                    <>
                        <p>{error}</p>

                    </>

                ) : matchData && !matchData.matches.length && !error ? (

                    <p>No games for {countryName}</p>

                ) : loading && (

                    <p>Loading games for {countryName}...</p>
                )}


        </>
    )
}

export default Competition;