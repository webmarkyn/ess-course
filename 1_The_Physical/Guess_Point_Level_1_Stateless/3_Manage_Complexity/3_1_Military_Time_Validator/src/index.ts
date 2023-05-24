const VALID_TIME_RANGE_REGEX = /\d\d:\d\d - \d\d:\d\d/;
export const validateMilitaryTime = (input: string): boolean => {
    const isValid = VALID_TIME_RANGE_REGEX.test(input);
    if (!isValid) return false;
    const times = input.split(' - ');
    return times.every(time => {
        const [hours, minutes] = time.split(':').map(Number);
        return hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60;
    });
};