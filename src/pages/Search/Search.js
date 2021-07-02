import React, {useEffect, useState, useContext} from 'react';
import Autocomplete from "../../components/Autocomplete/Autocomplete";
import Competition from "../../components/Competition/Competition";
import styles from './Search.module.css';
import { CountryContext} from "../../contexts/CountryContext";


function SearchPage(props) {
    const competitionData = props.competitions;
    const [userInput, setUserInput] = useState("")
    const [competition, setCompetition] = useState()
    const [inputSubmitted, toggleInputSubmitted] = useState(false)
    const {
        countryArray

    } = useContext(CountryContext);
    console.log("context", countryArray);

    const suggestions =  countryArray;
    console.log("what is comp data", competitionData)
    useEffect(() => {

        if(inputSubmitted && competitionData) {
            const userInputCompID = suggestions.find( ({ country }) => country === userInput );
            console.log("test", userInputCompID.id)
            //competitionData.find( ({id}) => competitionData.id === userInputCompID.id))
            const comp = competitionData.find(({id}) => id === userInputCompID.id )
            console.log("what is competition", comp)

                setCompetition(comp)
                toggleInputSubmitted(false)



        }


    }, [inputSubmitted, competitionData]);


    return (

        <>
            <h2>Search</h2>
            <Autocomplete suggestions={suggestions} userInput={userInput} setUserInput={setUserInput} toggleSubmitted={toggleInputSubmitted} />
            <p className={styles['search-p']}>The search query applies to matches played at this moment (live)</p>
            <p className={styles['search-p']}>For now, available options are Euro 2020, England, France, Italy, Holland, spain and Germany</p>

            { competition ? (
                <>

                    <Competition key={competition.id} status={"LIVE"} competitionID={competition.id}
                                            countryName={competition.area.name}/>

                </>

            ) : props.error ? (

                <p>Er is iets misgegaan met het ophalen van de data.</p>

            ) : props.loading && (

                <p>Loading....</p>

            )}
        </>
    )

}

export default SearchPage;