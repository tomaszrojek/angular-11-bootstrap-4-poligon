import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  public getDate(): Date {
    return new Date();
  }

  public getCurrentHour(): number {
    return this.getDate().getHours();
  }
}
