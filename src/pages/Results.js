import React, {useState, useEffect} from 'react';
import axios from "axios";
import Competition from '../components/Competition'
import NavigationDateBar from "../components/NavigationDateBar";

const apikey = 'ddabb8b4425f4870ac199dc2b69b8b57';

function ResultsPage() {

    const [competitionData, setCompetitionData] = useState(null);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await
                    axios.get(`https://api.football-data.org/v2/competitions?plan=TIER_ONE`, {
                        headers: {
                            "X-Auth-Token": `${apikey}`,
                        }
                    });
                console.log(response.data);

                const result = response.data.competitions.filter(response =>

                    response.id === 2018 ||
                    response.id === 2003 ||
                    response.id === 2021 ||
                    response.id === 2015 ||
                    response.id === 2002 ||
                    response.id === 2019 ||
                    response.id === 2014
                );

                result.sort(function (a, b) {
                    return a.id - b.id;
                });

                setCompetitionData(result);


            } catch (e) {
                console.error(e);
            }


        }

        fetchData();

    }, []);

    console.log('competition', competitionData);


    return (

        <>
            <h2>Results</h2>

            <NavigationDateBar />

            {competitionData ? (
                <>
                    {competitionData.map((competition) => {

                        return <Competition key={competition.id} competitionID={competition.id}
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