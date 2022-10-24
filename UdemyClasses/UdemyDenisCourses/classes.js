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

class Clock {
    constructor({ template }) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

let clock = new Clock({template: 'h:m:s'});
clock.start();

class ExtendedClock extends Clock {
    constructor(options) {
        super(options);
        let { precision=1000 } = options;
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}