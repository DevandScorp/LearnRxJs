const { interval } = require('rxjs');
const { throttleTime } = require('rxjs/operators');

interval(1000)
    .pipe(
        throttleTime(5000)
    ).subscribe(console.log);