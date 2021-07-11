import {addDays, startOfWeek} from 'date-fns';

function getWeekDayArray(date) {

    console.log("THEDATE",date);

    let dayOfWeek;
    let weekDaysArray;
    let firstDOW;

    !date ? dayOfWeek = new Date() : dayOfWeek = date

    firstDOW = startOfWeek(dayOfWeek)

    weekDaysArray = Array.from(Array(7)).map((element, i) => addDays(firstDOW, i))

    console.log("THEWEEKARRAY",weekDaysArray);

    return weekDaysArray;

}

export default getWeekDayArray;