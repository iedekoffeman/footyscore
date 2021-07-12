import getDateFormat from "./helpers/getDateFormat";
import getWeekDayArray from "./helpers/getWeekDayArray";
import getCountryCode from "./helpers/getCountryCode";
import getClassNameResult from "./helpers/getClassNameResult";

test('The getDateFormat receives a date and returns the formatted day to yyyy-MM-dd', () => {

    //Arrange
    const date = new Date('2021-07-01');

    //Act
    const dateFormatted = getDateFormat(date);

    //Assert
    expect(dateFormatted).toBe('2021-07-01');

})

test('The getWeekDayArray receives a date and returns an array of all dates that are in the week of the given date', () => {

    //Arrange
    const date = new Date('2021-07-01');

    //Act
    const weekDayArray = getWeekDayArray(date);

    //Assert
    expect(weekDayArray).toEqual(
        [
            new Date('2021-06-26T22:00:00.000Z'),
            new Date('2021-06-27T22:00:00.000Z'),
            new Date('2021-06-28T22:00:00.000Z'),
            new Date('2021-06-29T22:00:00.000Z'),
            new Date('2021-06-30T22:00:00.000Z'),
            new Date('2021-07-01T22:00:00.000Z'),
            new Date('2021-07-02T22:00:00.000Z'),
        ]
    );

})

test('The getCountryCode receives an array of countries and a countryName, it returns a countryCode if it finds the countryname', () => {

    //Arrange
    const countryArray = [
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
    ]

    const countryName = 'England';

    //Act
    const countryCode = getCountryCode(countryArray, countryName);

    //Assert
    expect(countryCode).toBe('uk');

})

test('The getClassNameResult gets 2 numbers as input and returns a win,lose, tie based on condition', () => {

    //Arrange
    const homeTeamScore = 2;
    const awayTeamScore = 3;

    //Act
    const classNameResult = getClassNameResult(homeTeamScore, awayTeamScore);

    //Assert
    expect(classNameResult).toBe('lose');

})