import React, {useState, useEffect} from 'react';
import axios from "axios";
import Competition from '../components/Competition'


const apikey = 'ddabb8b4425f4870ac199dc2b69b8b57';

function ResultsPage() {

    const [competitionData, setCompetitionData] = useState(null);
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await
                    axios.get(`https://api.football-data.org/v2/competitions/?plan=TIER_ONE`, {
                        headers: {
                            "X-Auth-Token": `${apikey}`,
                        }
                    });
                console.log(result.data);
                setCompetitionData(result.data);


            } catch (e) {
                console.error(e);
            }


        }

        fetchData();

    }, []);

    console.log(competitionData);

    return (
        <>
            <h2>Results</h2>

            {competitionData ? (
                <>
                    {competitionData.competitions.map((competition) => {

                        return <Competition key={competition.competitionID} competitionID={competition.id}
                                            countryName={competition.area.name}/>

                    })}
                </>

            ) : (

                <h3>Loading....</h3>

            )}
        </>
    )

}

export default ResultsPage;