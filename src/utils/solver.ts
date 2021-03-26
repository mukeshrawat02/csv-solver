import { Result, NumberResult } from "../models";

export function solve(
  numArray: number[],
  target: number,
  stopDepth: number = 2
) {
  let initial: number[] = numArray.slice();
  let completedPairs: any = {};
  let targetReached = false;
  const operationTypes = ["+", "-", "/", "*"];
  type Operations = "+" | "-" | "/" | "*";
  const allExpressions: (Result | NumberResult)[] = [];
  // if array includes the target
  if (initial.includes(target)) return target;
  // if the target is not in list but is smaller than any of the element in list
  const isNotButSmallerThanInitialList = initial.some((t) => target < t);
  // create initial expressions
  initial.forEach((val) => allExpressions.push(new NumberResult(val)));

  // create pairs
  function pairs(
    arr: Array<number>,
    currentPairs: Array<number[]> = []
  ): Array<number[]> {
    const first = arr.shift();
    if (!first) return currentPairs;
    if (!arr || arr.length === 0) return currentPairs;
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      currentPairs.push([first, num]);
    }
    return pairs(arr, currentPairs);
  }

  /**
   * gets all the unique numbers in current exprssions array
   * @returns
   */
  function getCalculated(): number[] {
    const set = new Set<number>();
    for (let i = 0; i < allExpressions.length; i++) {
      set.add(allExpressions[i].Value);
    }
    return Array.from(set);
  }

  // all operations on a pair
  function allOperations(pair: number[]) {
    operationTypes.forEach((operationType) =>
      calculate(operationType as Operations, pair)
    );
  }

  function calculate(operation: Operations, numbers: number[]) {
    const [number1, number2] = numbers;
    switch (operation) {
      case "*":
        addExpression(number1 * number2, number1, number2, operation);
        break;
      case "+":
        addExpression(number1 + number2, number1, number2, operation);
        break;
      case "-":
        addExpression(
          number1 > number2 ? number1 - number2 : number2 - number1,
          number1,
          number2,
          operation
        );
        break;
      case "/":
        const result =
          number1 > number2 ? number1 / number2 : number2 / number1;
        if (Number.isInteger(result)) {
          addExpression(result, number1, number2, operation);
        }
    }
  }

  function addExpression(
    result: number,
    left: number,
    right: number,
    operation: Operations
  ) {
    //skip in these cases
    if (initial.includes(result)) return;
    if (result === 0) return;
    if (!isNotButSmallerThanInitialList)
      if (result > target || left > target || right > target) return;
    if (left === right) return;

    //keeping larger value to left, else it causes negative results ex: 123

    if (left < right) {
      [left, right] = [right, left];
    }
    const leftExpression = allExpressions.filter((exp) => exp.Value === left);
    const rightExpression = allExpressions.filter((exp) => exp.Value === right);

    // from all left and right expressions find the one which has no repeat numbers
    for (let i = 0; i < leftExpression.length; i++) {
      for (let j = 0; j < rightExpression.length; j++) {
        if (!hasCommon(leftExpression[i], rightExpression[j])) {
          if (!targetReached) {
            const res = new Result(
              result,
              leftExpression[i],
              rightExpression[j],
              operation
            );
            res.LeftNumbers = leftExpression[i].Numbers;
            res.RightNumbers = rightExpression[j].Numbers;
            allExpressions.push(res);
            if (result === target) {
              targetReached = true;
            }
            break;
          }
        }
      }
    }
  }

  /**
   * Finds the expressions which do not have any common numbers
   * @param leftExpression
   * @param rightExpression
   * @returns
   */
  function hasCommon(
    leftExpression: Result | NumberResult,
    rightExpression: Result | NumberResult
  ): boolean {
    const leftNumbers = leftExpression.Numbers;
    const rightNumbers = rightExpression.Numbers;
    return leftNumbers.some((num: any) => rightNumbers.includes(num));
  }

  function findSolution(depth = 0) {
    const calculatedvalues = getCalculated();
    const allPairs = pairs(calculatedvalues);
    for (let i = 0; i < allPairs.length; i++) {
      const currentPair = allPairs[i];
      if (currentPair[0] === currentPair[1]) continue;
      if (!completedPairs[`${currentPair[0]}_${currentPair[1]}`]) {
        completedPairs[`${currentPair[0]}_${currentPair[1]}`] = 1;
        allOperations(currentPair);
      }
    }
    if (depth === stopDepth) return;
    if (!targetReached) findSolution(++depth);
  }

  findSolution();

  return allExpressions.find((exp) => exp.Value === target)?.Formula;
}