export default class BooleanCalculator {
    static calculate(input: string): boolean {
        const andOperatorIndex = input.indexOf('AND');
        if (input.indexOf('NOT') >= 0)
            return !(input.slice(4) === 'TRUE');
        if (andOperatorIndex >= 0) 
            return input.slice(0, andOperatorIndex - 1) === 'TRUE' && input.slice(andOperatorIndex + 4) === 'TRUE';
        return input === 'TRUE';
    }
}