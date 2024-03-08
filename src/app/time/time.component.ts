import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { from, of } from 'rxjs';
import {
  first,
  mergeMap,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { ArrayService } from '../services/array.service';
import { timeLongDifferenceFromNow } from '../services/time-difference';
import { TimeHelper } from '../services/time.helper';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
})
export class TimeComponent implements OnInit {
  private numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  /*   
private timeSpans = [
    '33.03:42:55',
    '03:42:55',
    '3:42:55',
    '03:42:',
    '03:42',
    '03:',
    '03',
    '3:::',
    '::9',
    '1:0:0:0',
    ':::',
    '100',
    '100.1:1:1',
  ]; 
  */

  private timeSpans = [
    /*
    '80',
    '80.',
    '80.11:58:',
    '80.11:',
    '11:',
    '11:58',
    */
    '11:58:46',
  ];

  constructor() {}

  ngOnInit() {}

  test(event: Event) {
    console.log('--------------');
    console.log(this.timeSpans);

    //this.testTimeSpanLongToDHms();
    this.testTimeSpanLongToSeconds();
    //this.testTimeSpanLongDifference();
  }

  testTimeSpanLongToDHms() {
    this.timeSpans.forEach((x) => {
      const r = TimeHelper.timespanLongToDHms(x);
      console.log(r);
    });
  }
  testTimeSpanLongToSeconds() {
    this.timeSpans.forEach((x) => {
      const r = TimeHelper.timespanLongToTotalSeconds(x);
      console.log(r);
    });
  }
  testTimeSpanLongDifference() {
    const r = timeLongDifferenceFromNow(new Date('2024-03-02'));
    console.log(r);
  }
}
