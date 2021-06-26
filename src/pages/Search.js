import React from 'react';
import Autocomplete from "../components/Autocomplete";


function SearchPage() {


    return (

        <>
            <h2>Search</h2>
            <Autocomplete suggestions={["England", "Holland", "Germany", "Euro 2020", "Italy", "France"]} />
            <p className={"search-p"}>The search query applies to matches played in the 2021 season</p>
            <p className={"search-p"}>For now, available options are England, France, Italy, Holland, Euro 2020 and Germany</p>
        </>
    )

}

export default SearchPage;