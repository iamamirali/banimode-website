export class CountDown {
    now: number | undefined
    hours: number | undefined
    minutes: number | undefined
    seconds: number | undefined
    timeLeft: number | undefined
    constructor(
    ) { }

    setTime() {
        if (this.timeLeft) {
            this.hours = Math.floor((this.timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.minutes = Math.floor((this.timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            this.seconds = Math.floor((this.timeLeft % (1000 * 60)) / 1000);
        }
    }
}