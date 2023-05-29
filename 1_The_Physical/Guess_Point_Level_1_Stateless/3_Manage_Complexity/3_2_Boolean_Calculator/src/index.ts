export default class BooleanCalculator {
    static calculate(input: string): boolean {
        if (input.indexOf('NOT') >= 0)
            return !(input.slice(4) === 'TRUE');
        if (input.indexOf('AND') >= 0) 
            return false
        return input === 'TRUE';
    }
}