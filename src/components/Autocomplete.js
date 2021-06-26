import React, {useState} from 'react';


function Autocomplete(props) {

    const suggestions = [];
    const [activeSuggestions, setActiveSuggestions] = useState(0)
    const [filteredSuggestions, setFilteredSuggestions] = useState([])
    const [showSuggestions, toggleShowSuggestions] = useState(false)
    const [userInput, setUserInput] = useState("")


    let suggestionListComponent = null;

    console.log("array", suggestions)

    function handleOnChange(e) {

        const suggestions = props.suggestions;
        const userInput = e.currentTarget.value;
        console.log("userInput", userInput)

        const filteredSuggestionsT = suggestions.filter(
            suggestion =>
                suggestion.toLowerCase().indexOf(userInput) > -1

        )

        setActiveSuggestions(0)
        setFilteredSuggestions(filteredSuggestionsT)
        toggleShowSuggestions(true)
        setUserInput(e.currentTarget.value)

        console.log("filteredSuggestions", filteredSuggestionsT)

    }

    function handleOnClick(e) {

        setActiveSuggestions(0)
        setFilteredSuggestions([])
        toggleShowSuggestions(false)
        setUserInput(e.currentTarget.innerText)

    }


    return (
        <>
            {(() => {
                if(showSuggestions && userInput) {

                    filteredSuggestions.length ? (

                        suggestionListComponent = (
                            <ul className="suggestions">
                                {filteredSuggestions.map((suggestion, index) => {
                                    let className;

                                    // Flag the active suggestion with a class
                                    if (index === activeSuggestions) {
                                        className = "suggestion-active";
                                    }
                                    return (
                                        <li className={className} key={suggestion} onClick={handleOnClick}>
                                            {suggestion}
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


        < input
            type="text"
            onChange={(event) =>
                handleOnChange(event)
            }
            value={userInput}
        />


            {suggestionListComponent}


        <button
            onClick={handleOnClick}
        >
            Zoek
        </button>

            </>
)
}

export default Autocomplete;