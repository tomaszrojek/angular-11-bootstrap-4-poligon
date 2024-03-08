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
import { ArrayService } from '../../services/array.service';
import { timeLongDifferenceFromNow } from '../../services/time-difference';
import { TimeHelper } from '../../services/time.helper';

@Component({
  selector: 'app-utils',
  templateUrl: './time.component.html',
})
export class UtilsComponent implements OnInit {
  private numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  constructor() {}

  ngOnInit() {}

  test(event: Event) {
    console.log('--------------');
  }
}
