export class BooleanCalculator {
    public static calculate(expression: string) {
        const hasNotOperation = expression.indexOf('NOT') === 0
        const expressionWithoutOperation =  hasNotOperation ? expression.slice(4) : expression;
        if (expressionWithoutOperation === 'TRUE') {
            return hasNotOperation ? false : true;
        } else {
            return hasNotOperation ? true : false;
        }
    }
}