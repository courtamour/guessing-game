class GuessingGame {
    result;
    minD;
    maxD;
    constructor() { }

    setRange(min, max) {
        this.minD = min;
        this.maxD = max;
    }

    guess() {
        this.result = Math.ceil((this.minD + this.maxD) / 2);
        console.log(this.result);
        return this.result;
    }

    lower() {
        this.maxD = this.result;
    }

    greater() {
        this.minD = this.result;
    }
}

module.exports = GuessingGame;
