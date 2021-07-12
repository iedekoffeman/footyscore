import React, {useEffect, useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {authContext} from '../../contexts/AuthContext';
import {CountryContext} from '../../contexts/CountryContext';
import Autocomplete from '../../components/Autocomplete/Autocomplete';
import Competition from '../../components/Competition/Competition';
import ColoredLine from '../../components/ColoredLine/ColoredLine';
import styles from './Search.module.css';


function SearchPage({competitions, error, loading}) {

    const competitionData = competitions;
    const [userInput, setUserInput] = useState("");
    const [competition, setCompetition] = useState();
    const [inputSubmit, toggleInputSubmit] = useState(false);
    const {
        authState: {user},

    } = useContext(authContext);
    const {
        countryArray

    } = useContext(CountryContext);

    const suggestions = countryArray;

    useEffect(() => {

        if (inputSubmit && competitionData) {

            const userInputCompID = suggestions.find(({country}) => country === userInput);

            const comp = competitionData.find(({id}) => id === userInputCompID.id);

            setCompetition(comp);
            toggleInputSubmit(false);


        }


    }, [inputSubmit, competitionData]);


    return (

        <>
            <h2>Search</h2>

            {user ? (
                <>
                    <Autocomplete suggestions={suggestions} userInput={userInput} setUserInput={setUserInput}
                                  toggleSubmit={toggleInputSubmit}/>
                    <p className={styles['search-p']}>The search query applies to matches played at this moment
                        (live)</p>
                    <p className={styles['search-p-last']}>For now, available options are Euro 2020, England, France,
                        Italy, Holland, spain and Germany</p>
                    <ColoredLine/>

                </>

            ) : (

                <p>You are not signed in, sign in <Link to='/signin'>here</Link></p>
            )
            }

            {competition ? (
                <>

                    <Competition key={competition.id} status={'LIVE'} competitionID={competition.id}
                                 countryName={competition.area.name}/>

                </>

            ) : error ? (

                <p>Er is iets misgegaan met het ophalen van de data.</p>

            ) : loading && (

                <p>Loading....</p>

            )}

        </>
    )

}

export default SearchPage;