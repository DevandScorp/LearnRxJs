const { Observable, interval, timer } = require('rxjs');
const { skip, take, map, tap, timeInterval, delay } = require('rxjs/operators');
const Money = function (currency, val) {
    return {
        value: () => {
            return val;
        },
        currency: () => {
            return currency;
        },
        toString: () => {
            return `${currency} ${JSON.stringify(val)}`;
        }
    }
}
interval(1000)
    .pipe(
        skip(1),
        take(5),
        map(num => new Money('USD', num).toString())
    ).subscribe(console.log);
interval(2000)
    .pipe(
        timeInterval(),// докидывает в объект поле интервал
        skip(1),
        take(5),
        tap(int => console.log(`${int.interval}`)),// как do, юзается для логирования
        map(num => new Money('USD', num).toString())
    ).subscribe(console.log);
timer(1000)
    .pipe(
        delay(2000),
        timeInterval(),
        map(int => Math.floor(int.interval / 1000))
    ).subscribe(console.log);