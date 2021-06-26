import React, {useState} from 'react';
import Autocomplete from "../components/Autocomplete";


function SearchPage(props) {


    return (

        <>
            <h2>Search</h2>

            <Autocomplete suggestions={["England", "Holland", "Germany", "Euro 2020", "Italy", "France"]} />

        </>
    )

}

export default SearchPage;