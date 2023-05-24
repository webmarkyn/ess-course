export class BooleanCalculator {
    private static hasToBeInverted(expression: string, invertorsCount=0): boolean {
        if (expression.indexOf('NOT') === 0) {
            return BooleanCalculator.hasToBeInverted(expression.slice(4), invertorsCount + 1);
        } else {
            return invertorsCount % 2 === 1;
        }
    }

    public static calculate(expression: string) {
        const hasToBeInverted = BooleanCalculator.hasToBeInverted(expression);
        if (expression.indexOf('TRUE') >= 0) {
            return hasToBeInverted ? false : true;
        }
        return  hasToBeInverted ? true : false;
    }
}