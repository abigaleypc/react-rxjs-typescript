import * as Rx from 'rxjs';

let merged$ = Rx.Observable.merge(
  Rx.Observable.of(1).delay(500),
  Rx.Observable.of(3, 2, 5)
)

let observer = {
  next: data => console.log(data)
}

merged$.subscribe(observer)
