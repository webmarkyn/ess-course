const VALID_TIME_RANGE_REGEX = /\d\d:\d\d - \d\d:\d\d/;
export const validateMilitaryTime = (input: string): boolean => {
    return VALID_TIME_RANGE_REGEX.test(input);
};