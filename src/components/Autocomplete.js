import React, {useState} from 'react';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Autocomplete(props) {

    const {suggestions, userInput, setUserInput, toggleSubmitted} = props;
    const [activeSuggestion, setActiveSuggestion] = useState(0)
    const [filteredSuggestions, setFilteredSuggestions] = useState([])
    const [showSuggestions, toggleShowSuggestions] = useState(false)



    let suggestionListComponent = null;

    //Will be fired when a user changes his search input in the inputbox
    function handleOnChange(e) {

        const userInput = e.currentTarget.value;

        const filteredSuggestionsT = suggestions.filter(function (el) {

                return el.country.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        })


        setActiveSuggestion(0)
        setFilteredSuggestions(filteredSuggestionsT)
        toggleShowSuggestions(true)
        setUserInput(e.currentTarget.value)


    }

    //Will be fired when user clicks a suggested value
    function handleOnClick(e) {

        setActiveSuggestion(0)
        setFilteredSuggestions([])
        toggleShowSuggestions(false)
        setUserInput(e.currentTarget.innerText)

    }

    //Will be fired when a user goes down by the arrow key
    function handleOnKeyDown(e) {


        if (e.keyCode === 13) {

            setActiveSuggestion(0)
            toggleShowSuggestions(false)
            setUserInput(filteredSuggestions[activeSuggestion])

        } else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
                return;
            }

            setActiveSuggestion(activeSuggestion - 1)

        }

        // When user pressed the down arrow, increment index

        else if (e.keyCode === 40) {

            if (activeSuggestion - 1 === filteredSuggestions.length) {
                return;
            }
            setActiveSuggestion(activeSuggestion + 1)
        }
    }

    function handleOnSubmit() {
        console.log(userInput)
        toggleSubmitted(true)
    }

    return (
        <>
            {(() => {
                if (showSuggestions && userInput) {

                    filteredSuggestions.length ? (

                        suggestionListComponent = (
                            <ul className="suggestions">
                                {filteredSuggestions.map((suggestion, index) => {
                                    let className;

                                    // Flag the active suggestion with a class
                                    if (index === activeSuggestion) {
                                        className = "suggestion-active";
                                    }
                                    return (
                                        <li className={className} key={suggestion.id} onClick={handleOnClick}>
                                            {suggestion.country}
                                        </li>
                                    );
                                })}
                            </ul>
                        )
                    ) : (

                        suggestionListComponent = (
                            <div className="no-suggestions">
                                <em>No suggestions available.</em>
                            </div>
                        )
                    )
                }
            })()}

            <div className={"search-wrapper"}>
                < input
                    type="text"
                    placeholder="Search country name..."
                    onChange={(event) =>
                        handleOnChange(event)
                    }
                    onKeyDown={(event) =>
                        handleOnKeyDown(event)
                    }
                    value={userInput}
                />

                <button
                    onClick={handleOnSubmit}
                >
                    <FontAwesomeIcon icon={faSearch}/>

                </button>

                {suggestionListComponent}

            </div>
        </>
    )
}

export default Autocomplete;