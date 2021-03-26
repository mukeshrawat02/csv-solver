type Operations = "+" | "-" | "/" | "*";

export class Result {
  private _leftNumbers: number[] = [];
  private _rightNumbers: number[] = [];
  constructor(
    public readonly result: number,
    public readonly leftExpression: NumberResult | Result,
    public readonly rightExpression: NumberResult | Result,
    public readonly operation: Operations
  ) { }

  get Formula(): string {
    let leftFormula = this.leftExpression.Formula;
    let rightFormula = this.rightExpression.Formula;
    if (typeof leftFormula === "string") {
      leftFormula = `(${leftFormula})`;
    }
    if (typeof rightFormula === "string") {
      rightFormula = `(${rightFormula})`;
    }

    return `${leftFormula} ${this.operation} ${rightFormula}`;
  }

  set LeftNumbers(val: number[]) {
    this._leftNumbers = val;
  }

  get LeftNumbers(): number[] {
    return this._leftNumbers;
  }

  set RightNumbers(val: number[]) {
    this._rightNumbers = val;
  }

  get RightNumbers(): number[] {
    return this._rightNumbers;
  }

  get Numbers(): number[] {
    return [...this.LeftNumbers, ...this.RightNumbers];
  }

  get Value(): number {
    return this.result;
  }
}

export class NumberResult {
  constructor(public value: number) { }

  get Value(): number {
    return this.value;
  }

  get Numbers(): number[] {
    return [this.value];
  }

  get Formula(): number {
    return this.value;
  }
}
