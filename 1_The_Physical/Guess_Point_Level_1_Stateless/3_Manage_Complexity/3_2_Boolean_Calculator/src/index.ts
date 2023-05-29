interface OperatorArguments {
    left: string | null;
    right: string| null;
}

export default class BooleanCalculator {
    private static isTrue(token: string): boolean {
        return token === 'TRUE'
    }

    static getArgumentsForOperator(operator: string, expression: string): OperatorArguments {
        const result: OperatorArguments = {
            left: null,
            right: null,
        }
        const operatorIndex = expression.indexOf(operator);
        if (operatorIndex >= 0) {
            result.left = expression.slice(0, operatorIndex - 1);
            result.right = expression.slice(operatorIndex + operator.length + 1);
        }
        return result;
    }

    static calculate(input: string): boolean {
        const notArguments = this.getArgumentsForOperator('NOT', input);
        if (notArguments.right)
            return !this.isTrue(input.slice(4));

        const andArguments = this.getArgumentsForOperator('AND', input);
        if (andArguments.left && andArguments.right) 
            return this.calculate(andArguments.left) && this.calculate(andArguments.right);

        const orArguments = this.getArgumentsForOperator('OR', input);
        if (orArguments.left && orArguments.right) 
            return this.isTrue(orArguments.left) || this.isTrue(orArguments.right)

        return this.isTrue(input);
    }
}