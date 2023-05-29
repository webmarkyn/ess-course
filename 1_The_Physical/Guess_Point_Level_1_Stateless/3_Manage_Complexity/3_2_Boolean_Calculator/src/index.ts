export default class BooleanCalculator {
    static calculate(input: string): boolean {
        if (input.indexOf('NOT') >= 0)
            return !(input.slice(4) === 'TRUE');
        return input === 'TRUE';
    }
}