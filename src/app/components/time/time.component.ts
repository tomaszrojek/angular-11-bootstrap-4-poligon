import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.services';
import { timeLongDifferenceFromNow } from '../../services/time-difference';
import { TimeHelper } from '../../services/time.helper';

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

    //this.testTimespanParsing();
    //this.testTimespanRegexMatch();

    //this.testTimeSpanLongToDHms();
    this.testTimeSpanLongToSeconds();
    //this.testTimeSpanLongDifference();
  }

  testTimespanParsing() {
    //const timespanStr = '08:33:12.5625591';
    const timespanStr = '11:30:22.002';
    //const timespanStr = '11:30:22';
    //const timespanStr = '11:30:';
    //const timespanStr = '01';
    //const timespanStr = '';
    const result = UtilsService.timespanToTotalSeconds(timespanStr);

    console.log(`Total Sesond: ${result}`);
  }

  testTimespanRegexMatch() {
    //const timespanStr = '08:33:12.5625591';
    const timespanStr = '11:30:22.002';
    //const timespanStr = '11:30:22';
    //const timespanStr = '11:30:';
    //const timespanStr = '01';
    //const timespanStr = '';

    const foundInvalidCharakters = /[^0-9:.]/.test(timespanStr);
    console.log(`foundInvalidCharakters: ${foundInvalidCharakters}`);
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
