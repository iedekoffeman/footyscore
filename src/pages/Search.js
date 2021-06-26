import React from 'react';
import Autocomplete from "../components/Autocomplete";


function SearchPage() {

    const suggestions =  [
        {
            "id": 2021,
            "country": "England",
        },
        {
            "id": 2015,
            "country": "France",
        },
        {
            "id": 2002,
            "country": "Germany",
        },
        {
            "id": 2018,
            "country": "Euro 2020",
        },
        {
            "id": 2019,
            "country": "Italy",
        },
        {
            "id": 2003,
            "country": "Holland",
        },
    ]

    return (

        <>
            <h2>Search</h2>
            <Autocomplete suggestions={suggestions} />
            <p className={"search-p"}>The search query applies to matches played in the 2021 season</p>
            <p className={"search-p"}>For now, available options are England, France, Italy, Holland, Euro 2020 and Germany</p>


        </>
    )

}

export default SearchPage;