import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {
    format,
    isDate,
    isValid,
} from 'date-fns'
import axios from "axios";
import Match from '../components/Match'

const apikey = 'ddabb8b4425f4870ac199dc2b69b8b57';

function Competition(props) {

    const [matchData, setMatchData] = useState(null);
    const {fromToDate = `${format(new Date(), 'yyyy-MM-dd')}`} = useParams();
    //const isThisADate = isDate(new Date(fromToDate));
    const[error, setError] = useState("");
   console.log("date in competition", fromToDate)

    useEffect(() => {

        //console.log("isDate", isThisADate)

        async function fetchData() {
            try {

                const result = await
                    axios.get(`https://api.football-data.org/v2/matches?competitions=${props.competitionID}&status=FINISHED&dateFrom=${fromToDate}&dateTo=${fromToDate}`, {
                        headers: {
                            "X-Auth-Token": `${apikey}`,
                        }
                    });
                console.log('Matches:', result.data);
                setMatchData(result.data);


            } catch (e) {
                console.error(e);
            }


        }

        fetchData()

    }, [props.competitionID, fromToDate]);

    console.log("matchesDD", matchData);

    return (
        <>
            {
                matchData && matchData.matches.length ? (

                    <article className="competition-content">

                        <p className="country">{props.countryName}</p>

                        {matchData.matches.map((match) => {
                                console.log('Match', match)
                                return <Match key={match.id} matchID={match.id} match={match}
                                              competitionName={match.competition.name}/>


                            }
                        )}

                    </article>


                ) : matchData && !matchData.matches.length ? (

                    <p>There are no matches for this date</p>

                ) : (
                    <>Loading</>
                )}
        </>
    )
}

export default Competition;
