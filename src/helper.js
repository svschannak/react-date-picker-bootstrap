import { daysInMonth } from "./constants";

export function isLeapYear(year) {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

export function getDaysForMonth(month, year) {
    let monthLength = daysInMonth[month];
    if (month == 1 && isLeapYear(year)) {
        monthLength = 29;
    }
    return monthLength;
}
