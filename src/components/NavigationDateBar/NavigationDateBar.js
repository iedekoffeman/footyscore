import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {format, addWeeks, subWeeks, isSameDay} from 'date-fns'
import getWeekDayArray from "../../helpers/getWeekDayArray";
import getDateFormat from "../../helpers/getDateFormat";
import styles from './NavigationDateBar.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'


function NavigationDateBar() {

    const [date, setDate] = useState(null)
    const [weekArray, setWeekArray] = useState([])
    const [disabledChevronLeft, setDisabledChevronLeft] = useState(false)
    const [disabledChevronRight, setDisabledChevronRight] = useState(false)

    useEffect(() => {

        setWeekArray(getWeekDayArray(date))

    }, [date]);

    useEffect(() => {

        enableOrDisableChevron(weekArray)

    }, [weekArray]);


    function enableOrDisableChevron(weekDaysArray) {

        const isDayOfWeekNow = weekDaysArray.find(
            element => isSameDay(element, new Date())
        );

        const isDayOfWeekBeforeJanuary2021 = weekDaysArray.find(
            element => element < new Date(2020, 12, 1)
        );

        isDayOfWeekNow ? setDisabledChevronRight(true) : setDisabledChevronRight(false)
        isDayOfWeekBeforeJanuary2021 ? setDisabledChevronLeft(true) : setDisabledChevronLeft(false)

    }


    return (
        <>
            <ul className={styles['nav-date']}>

                <li><FontAwesomeIcon
                    className={styles.chevronIcon}
                    icon={faChevronLeft}
                    disabled={disabledChevronLeft}
                    onClick={() =>
                        setDate(
                            subWeeks(new Date(weekArray[0]), 1)
                        )}
                /><
                /li>

                {weekArray ? (weekArray.map((day) => {

                    const dayFormatted = getDateFormat(day);

                    return <li key={day}>
                        <NavLink
                            to={`/results/${dayFormatted}`}
                            className={styles['date-bar']}
                            activeClassName={styles['date-bar-active']}
                        >
                            {format(day, `MMM dd`)}
                        </NavLink>
                    </li>

                })) : (

                    <p>Sorry, there are no dates available</p>
                )}

                <li><FontAwesomeIcon
                    className={styles.chevronIcon}
                    icon={faChevronRight}
                    disabled={disabledChevronRight}
                    onClick={() =>
                        setDate(
                            addWeeks(new Date(weekArray[6]), 1)
                        )}
                />
                </li>

            </ul>
        </>

    )
}

export default NavigationDateBar;
