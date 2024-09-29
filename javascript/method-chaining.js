function mathOperation(a) {

    let currentValue = a;
    this.sum = function (b) {
        currentValue = currentValue + b;
        return this;
    }
    this.sub = function (c) {
        currentValue = currentValue - c;

        return this;
    }
    this.getValue = function () {
        return currentValue;
    }
}

const operation = new mathOperation(10);
console.log(operation.sum(15).sub(25).getValue());
