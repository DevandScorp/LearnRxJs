const { from } = require('rxjs');
const { pluck } = require('rxjs/operators');

const source = from([{ name: 'Joe', age: 30 }, { name: 'Sarah', age: 35 }]);

source
    .pipe(
        pluck('name')
    ).subscribe(console.log);