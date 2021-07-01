import getDateFormat from "./helpers/getDateFormat";
import getWeekDayArray from "./helpers/getWeekDayArray";

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