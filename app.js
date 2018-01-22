var Rx = require('rxjs/Rx')

// let source1 = Rx.Observable.interval(100).map(val => 'source1 ' + val).take(5)
// let source2 = Rx.Observable.interval(50).map(val => 'source2 ' + val).take(2)

// let stream$ = Rx.Observable.combineLatest(
//   source1,
//   source2
// )

// stream$.subscribe(data => console.log(data))

let merged$ = Rx.Observable.merge(
  Rx.Observable.of(1).delay(500),
  Rx.Observable.of(3, 2, 5)
)

let observer = {
  next: data => console.log(data)
}

merged$.subscribe(observer)
