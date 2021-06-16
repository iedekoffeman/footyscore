import React, {useState, useEffect} from 'react';
import axios from "axios";
import Match from '../components/Match'

const apikey = 'ddabb8b4425f4870ac199dc2b69b8b57';

function Competition(props) {

    const [matchData, setMatchData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await
                    axios.get(`http://api.football-data.org/v2/competitions/${props.competitionID}/matches?matchday=1`, {
                        headers: {
                            "X-Auth-Token": `${apikey}`,
                        }
                    });
                console.log(result.data);
                setMatchData(result.data);


            } catch (e) {
                console.error(e);
            }


        }

        fetchData();

    }, [props.competitionID]);

    console.log(matchData);

    return (
        <>
            {
                matchData ? (

                    <article className="competition-content">
                        <p className="country">{props.countryName}</p>

                        {matchData.matches.map((match) => {
                                console.log(match)
                                return <Match match={match} competitionName={matchData.competition.name}/>


                            }
                        )}

                    </article>


                ) : (

                    <h3>Loading</h3>

                )}
        </>
    )
}

export default Competition;