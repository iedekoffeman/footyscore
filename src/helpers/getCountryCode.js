function getCountryCode(countryArray, countryName) {

    const country = countryArray.find(country => country.country === countryName );

    return country.code;

}

export default getCountryCode;