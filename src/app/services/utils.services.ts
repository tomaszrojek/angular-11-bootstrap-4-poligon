export class UtilsService {
  constructor() {}

  public static timespanToTotalSeconds(timespanStr: string): number | null {
    if (timespanStr == null) {
      return null;
    }
    const timespanFullArr = timespanStr.split('.');
    if (timespanFullArr.length < 1) {
      return null;
    }
    const timespanArr = timespanFullArr[0].split(':');
    if (timespanArr.length > 3) {
      return null;
    }
    if (timespanArr.some((it) => it.length > 2)) {
      return null;
    }

    const result =
      this.parseIntOrZero(timespanArr[0]) * 3600 +
      this.parseIntOrZero(timespanArr[1]) * 60 +
      this.parseIntOrZero(timespanArr[2]);

    return result;
  }

  private static parseIntOrZero(numberStr: string): number {
    if (numberStr == null) {
      return 0;
    }
    if (numberStr.length == 0) {
      return 0;
    }
    const number = parseInt(numberStr);
    if (number == Number.NaN) {
      return 0;
    }
    return number;
  }
}
