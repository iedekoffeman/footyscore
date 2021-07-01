import {format} from "date-fns";

function getDateFormat(date) {

    return format(date, 'yyyy-MM-dd');

}

export default getDateFormat;