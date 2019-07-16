const { map } = require('rxjs/operators');
const { from, concat, of  } = require('rxjs');

concat(
    from([1, 2, 3]),
    from([4, 5, 6]),
    from([7, 8, 9])
    ).subscribe(console.log);
from([1, 2, 3])
    .pipe(
        map(x => x * 2)
    ).subscribe(console.log);
