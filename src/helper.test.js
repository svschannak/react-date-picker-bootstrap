import { isLeapYear, getDaysForMonth } from "./helper";

test("test leap year correct", () => {
    expect(isLeapYear(2012)).toBe(true);
});
test("test leap year false", () => {
    expect(isLeapYear(2013)).toBe(false);
});

test("test leap year false", () => {
    expect(getDaysForMonth(1, 2012)).toBe(29);
});

test("test leap year false", () => {
    expect(getDaysForMonth(1, 2013)).toBe(28);
});
