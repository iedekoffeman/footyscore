import React, {useState, useEffect} from 'react';
import {
    addDays,
    format,
    startOfWeek,
    sub,

} from 'date-fns'

function FavoritesPage() {

    const [date, setDate] = useState(null);

    useEffect(() => {

        getWeekDayArray(date);

    }, [date]);



    function getWeekDayArray(date) {
        let dayOfWeek;

        !date ? dayOfWeek = new Date() : dayOfWeek = sub(date, {months: 1,})

        const firstDOW = startOfWeek(dayOfWeek);
        console.log("Datum", firstDOW);
        const shortWeekDaysArray = Array.from(Array(7)).map((e, i) => addDays(firstDOW, i));
        console.log(shortWeekDaysArray);
        const day = format(shortWeekDaysArray[0], 'MMM d');
        console.log(day);
    }

    return (
        <>
            <h2>Favorites</h2>
            <button

                onClick={() => setDate(new Date(2021, 5, 14))}
            >
                Click Me
            </button>

        </>
    )
}

export default FavoritesPage;