interface OperationUsage {
    index: number;
}
interface PriorityList {
    'NOT': OperationUsage[];
    'AND': OperationUsage[];
}

interface PriorityTreeNode {
    operation: string;
    left: PriorityTreeNode;
    right: PriorityTreeNode;
}

interface PriorityTree {
    root: PriorityTreeNode;
}

type Operation = 'NOT' | 'AND' | 'OR';

export class BooleanCalculator {
    private static operationsByPriorityAsc: Operation[] = ['OR', 'AND', 'NOT'];

    private static groupByOperations(expression: string[]) {
        const priorityList: Record<Operation, OperationUsage[]> = {
            'AND': [],
            'NOT': [],
            'OR': [],
        };
        return expression.reduce((acc, word, index) => {
            if (acc[word as Operation]) {
                acc[word as Operation].push({ index });
            }
            return acc;
        }, priorityList);
    }

    private static findLowestPriorityOperationIndex(expression: string[]): number {
        const operationsByPriority = BooleanCalculator.groupByOperations(expression);
        for (const operationName of BooleanCalculator.operationsByPriorityAsc) {
            if (operationsByPriority[operationName as Operation].length > 0) {
                const lastFoundOperation = operationsByPriority[operationName as keyof PriorityList].slice(-1)[0];
                return lastFoundOperation.index;
            }
        }
        throw new Error('Invalid expression');
    }


    private static evaluate(expression: string[]): boolean {
        if (expression.length === 1) {
            if (expression[0] === 'TRUE') {
                return true;
            }
            if (expression[0] === 'FALSE') {
                return false;
            }
            throw new Error('Invalid expression');
        }

        const operationIndex = this.findLowestPriorityOperationIndex(expression);
        const operation = expression[operationIndex];
        const left = expression.slice(0, operationIndex);
        const right = expression.slice(operationIndex + 1);

        switch (operation) {
            case 'NOT':
                const output = !BooleanCalculator.evaluate(right);
                return BooleanCalculator.evaluate([...left, output ? 'TRUE' : 'FALSE']);
            case 'AND':
                return BooleanCalculator.evaluate(left) && BooleanCalculator.evaluate(right);
            case 'OR':
                return BooleanCalculator.evaluate(left) || BooleanCalculator.evaluate(right);
            default:
                throw new Error('Invalid operation');
        }
    }

    public static calculate(expression: string) {
        return this.evaluate(expression.split(' '));
    }
}