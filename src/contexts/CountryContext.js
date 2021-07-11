import { useState, createContext } from 'react';

export const CountryContext = createContext({});

function CountryContextProvider({children}) {

    const [countryArray, setCountryArray] = useState([
        {
            "id": 2021,
            "country": "England",
            "code": "uk",
        },
        {
            "id": 2015,
            "country": "France",
            "code": "fr",
        },
        {
            "id": 2002,
            "country": "Germany",
            "code": "de",
        },
        {
            "id": 2018,
            "country": "Europe",
            "code": "EU",
        },
        {
            "id": 2019,
            "country": "Italy",
            "code": "it",
        },
        {
            "id": 2003,
            "country": "Holland",
            "code": "nl",
        },
        {
            "id": 2014,
            "country": "Spain",
            "code": "es",
        },
    ]);


    const data = {countryArray: countryArray, setCountry: setCountryArray};

    return (

        <CountryContext.Provider value={data}>
            {/* Rest of app*/}
            {children}
        </CountryContext.Provider>
    );
}

export default CountryContextProvider;