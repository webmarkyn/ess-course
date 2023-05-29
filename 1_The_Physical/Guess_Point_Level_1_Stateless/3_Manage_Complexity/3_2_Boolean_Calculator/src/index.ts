export default class BooleanCalculator {
    private static isTrue(token: string): boolean {
        return token === 'TRUE'
    }

    static calculate(input: string): boolean {
        const andOperatorIndex = input.indexOf('AND');
        const orOperatorIndex = input.indexOf('OR');
        if (input.indexOf('NOT') >= 0)
            return !this.isTrue(input.slice(4));
        if (andOperatorIndex >= 0) 
            return this.isTrue(input.slice(0, andOperatorIndex - 1)) && this.isTrue(input.slice(andOperatorIndex + 4));
        if (orOperatorIndex >= 0) 
            return this.isTrue(input.slice(0, orOperatorIndex - 1)) || this.isTrue(input.slice(orOperatorIndex+ 3))
        return this.isTrue(input);
    }
}