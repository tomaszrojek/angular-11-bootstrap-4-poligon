import { Injectable } from '@angular/core';
import { TimeHelper } from './time.helper';
import { TimeService } from './time.service';

@Injectable({
  providedIn: 'root',
})
export class ComparatorService {
  constructor(private readonly timeService: TimeService) {}

  timespanComparator(
    valueA: any,
    valueB: any,
    nodeA: any,
    nodeB: any,
    isDescending: boolean
  ): number {
    if (valueA == valueB) {
      return 0;
    }
    const valueANumber = TimeHelper.timespanToTotalSeconds(valueA) ?? 0;
    const valueBNumber = TimeHelper.timespanToTotalSeconds(valueB) ?? 0;
    return valueANumber - valueBNumber;
  }

  timespanLongComparator(
    valueA: any,
    valueB: any,
    nodeA: any,
    nodeB: any,
    isDescending: boolean
  ): number {
    if (valueA == valueB) {
      return 0;
    }
    const valueANumber = TimeHelper.timespanLongToTotalSeconds(valueA) ?? 0;
    const valueBNumber = TimeHelper.timespanLongToTotalSeconds(valueB) ?? 0;
    return valueANumber - valueBNumber;
  }
}
