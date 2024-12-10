class ScoreController {
    constructor() {
        this.score = 0;
        this.count = 0;
    }

    incrementScore() {
        this.score += 1;
        this.count += 1;
        alert("You are correct!");
    }

    dontIncrementScore() {
        this.count += 1;
        alert("Sorry - not correct");
    }

    getScore() {
        return { score: this.score, count: this.count };
    }
}

export default new ScoreController();
