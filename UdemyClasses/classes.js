class Player {
    static totalPlayers = 0;

    constructor(login, firstName, lastName, score = 100) {
        this.login = login;
        this._score = score;
        this.firstName = firstName;
        this.lastName = lastName;
        Player.totalPlayers++;
    }

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    set fullName(name) {
        const [f, l] = name.split(' ');
        this.firstName = f;
        this.lastName = l;
    }

    get score() {
        return this._score;
    }

    set score(num) {
        this.increaseScore(num);
    }

    increaseScore(num = 10) {
        this._score += num;
    }

    decreaseScore(num = 10) {
        this._score -= num;
    }

    static create(login) {
        return new Player(login, 250);
    }

    static sortByScore(a, b) {
        return a._score - b._score;
    }
}

class PaidPlayer extends Player {
    static totalPlayers = 0;

    constructor(login, score = 10, accBalance = 1000) {
        super(login, score);
        this.accBalance = accBalance;
        PaidPlayer.totalPlayers++;
    }

    increaseBalance(amount = 0) {
        this.accBalance += amount;
    }

    static create(login) {
        return PaidPlayer(login, 250, 12000);
    }
}