class Calculator {
    constructor(value) {
        this.value = value
    }
    Plus(number) {
        this.value += number;
        return this;
    }
    Minus(number) {
        this.value -= number;
        return this;
    }
    Multiply(number) {
        this.value *= number;
        return this;
    }
    Divide(number) {
        this.value /= number;
        return this;
    }
}

const result = new Calculator(50).Plus(6).Minus(30).Multiply(3).Divide(2)
console.log(result);
