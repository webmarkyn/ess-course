interface OperatorArguments {
    left: string | null;
    right: string| null;
}

export default class BooleanCalculator {
    private static isTrue(token: string): boolean {
        return token === 'true'
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
        const lowerCaseInput = input.toLowerCase();
        const inputWithCalculatedParenthesis = 
            lowerCaseInput
            .replace(
                /\(([^)]+)\)/, 
                (substr) => this.calculate(substr.slice(1, -1)).toString()
            )

        const andArguments = this.getArgumentsForOperator('and', inputWithCalculatedParenthesis);
        if (andArguments.left && andArguments.right) 
            return this.calculate(andArguments.left) && this.calculate(andArguments.right);

        const orArguments = this.getArgumentsForOperator('or', inputWithCalculatedParenthesis);
        if (orArguments.left && orArguments.right) 
            return this.calculate(orArguments.left) || this.calculate(orArguments.right)

        const notArguments = this.getArgumentsForOperator('not', inputWithCalculatedParenthesis);
        if (notArguments.right)
            return !this.isTrue(notArguments.right);

        return this.isTrue(inputWithCalculatedParenthesis);
    }
}