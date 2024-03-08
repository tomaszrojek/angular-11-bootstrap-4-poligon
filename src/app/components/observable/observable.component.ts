import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, of } from 'rxjs';
import {
  first,
  mergeMap,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { ArrayService } from '../../services/array.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  private numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  private daysOfWeek = [
    'Poniedziałek',
    'Wtorek',
    'Środa',
    'Czwartek',
    'Piątek',
    'Sobota',
    'Niedziela',
  ];

  private address1 = {
    city: 'Warsav',
    street: 'Kopernika',
    number: 50,
    dateOfBirth: new Date(1981, 10, 20),
  };

  private person1 = {
    firstName: 'Tomasz',
    lastName: 'Rojek',
    age: 42,
    dateOfBirth: new Date(1981, 10, 20),
    address: this.address1,
  };
  private person2 = {
    firstName: 'Aleksander',
    lastName: 'Kwasniewski',
    age: 62,
    dateOfBirth: new Date(1951, 10, 20),
  };
  private person3 = {
    firstName: 'Lech',
    lastName: 'Walesa',
    age: 65,
    dateOfBirth: new Date(1949, 11, 22),
  };
  private person4 = {
    firstName: 'Andrzej',
    lastName: 'Duda',
    age: 60,
    dateOfBirth: new Date(1960, 8, 21),
  };
  private person5 = {
    firstName: 'Mikołaj',
    lastName: 'Kopernik',
    age: 42,
    dateOfBirth: new Date(1700, 1, 1),
  };
  private persons = [this.person1, this.person2, this.person3, this.person4];

  private dictionaryFlags: {
    locks: { [key: string]: boolean };
  };

  constructor() {}

  ngOnInit() {}

  test(event: Event) {
    console.log('--------------');
    //this.testConstructDeconstruct();
    //this.testCombining();
    //this.testArrayOperations();
    //this.testObservable();
    this.testObservableSwitchMap();
  }

  testConstructDeconstruct() {
    let { lastName, firstName } = this.person1;
    //console.log(lastName);
    //console.log(this.person);
    //console.log({ ...this.person1 });
    //console.log({ ...this.daysOfWeek });
    this.dictionaryFlags = { locks: {} };

    this.dictionaryFlags.locks.ala = true;
    this.dictionaryFlags.locks.bela = false;
    this.dictionaryFlags.locks.cela = true;
    console.log({ ...this.dictionaryFlags });

    //this.dictionaryFlags.locks = { ...this.dictionaryFlags.locks, dela: false };

    let flag = { dela: false };
    this.dictionaryFlags = {
      locks: { ...this.dictionaryFlags.locks, ...flag },
    };

    console.log({ ...this.dictionaryFlags });
  }

  testCombining() {
    console.log(this.person1);

    let p1 = {
      ...this.person1,
      ...{
        address: {
          city: 'Poznan',
        },
      },
    };

    console.log(p1);
  }

  testObservable() {
    // let o = from(this.daysOfWeek)
    //   .pipe(
    //     tap((d) => console.log(d)),
    //     mergeMap((x) => from(this.numbers)),
    //     tap((n) => console.log(n))
    //   )
    //   .subscribe();

    // let o = of()
    //   .pipe(tap((d) => console.log('Item:', d)))
    //   .subscribe();

    // let o = from(this.daysOfWeek)
    //   .pipe(
    //     first(),
    //     tap((d) => console.log('Item:', d))
    //   )
    //   .subscribe();

    // let o = from(this.daysOfWeek)
    //   .pipe(
    //     tap((d) => console.log('Before: ', d)),
    //     withLatestFrom(this.persons, (d, p) => ({ days: d, persons: p })),
    //     tap((x) => console.log('After', x))
    //   )
    //   .subscribe();

    // let o = from(this.daysOfWeek)
    //   .pipe(
    //     tap((d) => console.log('Before: ', d)),
    //     withLatestFrom(this.persons, (d, p) => ({ day: d, person: p })),
    //     tap((x) => console.log('In', x)),
    //     switchMap(({ person, day }) => {
    //       // return of({ person, day });
    //       return of(person, day);
    //     }),
    //     tap((x) => console.log('After', x))
    //   )
    //   .subscribe();

    // let o = from(this.daysOfWeek)
    //   .pipe(
    //     tap((d) => console.log('Before: ', d)),
    //     switchMap((day) => {
    //       return from(this.persons).pipe(first());
    //     }),
    //     tap((x) => console.log('After', x))
    //   )
    //   .subscribe();

    let o = from(this.daysOfWeek)
      .pipe(
        tap((d) => console.log('Before: ', d)),
        switchMap((day) => {
          return from(this.persons).pipe(
            switchMap((x) => {
              return of(x);
            })
          );
        }),
        tap((x) => console.log('After', x))
      )
      .subscribe();
  }
  testObservableSwitchMap() {
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(
      //tap((x) => console.log('cc', x)),
      switchMap(() => interval(1000))
    );
    result.subscribe((x) => console.log(x));
  }

  testArrayOperations() {
    console.log(this.persons);

    var newPersons = ArrayService.updateOrInsertItemWithArrayCopy(
      this.persons,
      (p) => p.age == 42,
      this.person5
    );
    console.log('old:\n ', this.persons);
    console.log('new:\n ', newPersons);

    var newPersons2 = ArrayService.forEachExistingTargetItems(
      [...this.persons],
      newPersons,
      (si, ti) => si.age == ti.age,
      (si, ti) => {
        ti.lastName = si.lastName;
        console.log(si, ti);
        return ti;
      }
    );

    console.log('new2:\n ', newPersons2);
  }
}
