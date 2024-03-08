export class TimeHelper {
  /** Converts timespan in format "hh:mm:ss" to total number of seconds.
   * Each of the values can be omitted, then it will be treated as "00"
   * @example "03:42:55", "3:42:55", "03:42:", "03:42", "03:", "03", "3::" , "::9", ":1:9", "::"
   * */
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
    if (timespanArr.some((it) => it.length > 6)) {
      return null;
    }

    const result =
      TimeHelper.parseIntOrZero(timespanArr[0]) * 3600 +
      TimeHelper.parseIntOrZero(timespanArr[1]) * 60 +
      TimeHelper.parseIntOrZero(timespanArr[2]);

    return result;
  }

  /** Converts long timespan in format "dd:hh:mm:ss" to total number of seconds.
   * Each of the values can be omitted, then it will be treated as "00"
   * @example "33:03:42:55", "03:42:55", "3:42:55", "03:42:", "03:42", "03:", "03", "3::" , "::9", ":1:9", "::"
   * */
  public static timespanLongToTotalSeconds(timespanStr: string): number | null {
    if (timespanStr == null) {
      return null;
    }
    const timespanFullArr = timespanStr.split('.');
    if (timespanFullArr.length < 1 || timespanFullArr.length > 3) {
      return null;
    }

    let day = timespanFullArr[0];
    let hms = '::';

    if (timespanFullArr[0].split(':').length > 1) {
      day = '';
      hms = timespanFullArr[0];
    } else {
      if (timespanFullArr.length > 1) {
        hms = timespanFullArr[1];
      }
    }

    const hmsArr = hms.split(':');
    if (hmsArr.length > 3) {
      return null;
    }
    if (hmsArr.some((it) => it.length > 2)) {
      return null;
    }
    console.log(day, hmsArr);

    const result =
      TimeHelper.parseIntOrZero(day) * 86400 +
      TimeHelper.parseIntOrZero(hmsArr[0]) * 3600 +
      TimeHelper.parseIntOrZero(hmsArr[1]) * 60 +
      TimeHelper.parseIntOrZero(hmsArr[2]);

    return result;
  }

  /** Converts timespan in format "hh:mm:ss" to separate values of hour, minute, second
   * Each of the values can be omitted, then it will contain null.
   * @example "03:42:55", "3:42:55", "03:42:", "03:42", "03:", "03", "3::" , "::9", ":1:9", "::"
   * */
  public static timespanToHms(timespanStr: string): {
    hour: number | null;
    minute: number | null;
    second: number | null;
  } | null {
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
    if (timespanArr.some((it) => it.length > 6)) {
      return null;
    }

    const result = {
      hour: TimeHelper.parseIntOrNull(timespanArr[0]),
      minute: TimeHelper.parseIntOrNull(timespanArr[1]),
      second: TimeHelper.parseIntOrNull(timespanArr[2]),
    };

    return result;
  }

  /** Converts timespan in format "hh:mm:ss" to separate values of hour, minute, second
   * Each of the values can be omitted, then it will contain null.
   * @example "33:03:42:55", "3:42:55", "03:42:", "03:42", "03:", "03", "3::" , "::9", ":1:9", "::"
   * */
  public static timespanLongToHmsOld(timespanStr: string): {
    day: number | null;
    hour: number | null;
    minute: number | null;
    second: number | null;
  } | null {
    if (timespanStr == null) {
      return null;
    }
    const timespanFullArr = timespanStr.split('.');
    if (timespanFullArr.length < 1) {
      return null;
    }
    const timespanArr = timespanFullArr[0].split(':');
    if (timespanArr.length > 4) {
      return null;
    }
    if (timespanArr.some((it) => it.length > 6)) {
      return null;
    }

    const result = {
      day: TimeHelper.parseIntOrNull(timespanArr[0]),
      hour: TimeHelper.parseIntOrNull(timespanArr[1]),
      minute: TimeHelper.parseIntOrNull(timespanArr[2]),
      second: TimeHelper.parseIntOrNull(timespanArr[3]),
    };

    return result;
  }

  public static timespanLongToDHms(timespanStr: string): {
    day: number | null;
    hour: number | null;
    minute: number | null;
    second: number | null;
  } | null {
    if (timespanStr == null) {
      return null;
    }
    const timespanFullArr = timespanStr.split('.');
    if (timespanFullArr.length < 1 || timespanFullArr.length > 3) {
      return null;
    }

    let day = timespanFullArr[0];
    let hms = '::';

    if (timespanFullArr[0].split(':').length > 1) {
      day = '';
      hms = timespanFullArr[0];
    } else {
      if (timespanFullArr.length > 1) {
        hms = timespanFullArr[1];
      }
    }

    const hmsArr = hms.split(':');
    if (hmsArr.length > 3) {
      return null;
    }
    if (hmsArr.some((it) => it.length > 2)) {
      return null;
    }

    const result = {
      day: TimeHelper.parseIntOrNull(day),
      hour: TimeHelper.parseIntOrNull(hmsArr[0]),
      minute: TimeHelper.parseIntOrNull(hmsArr[1]),
      second: TimeHelper.parseIntOrNull(hmsArr[2]),
    };

    return result;
  }

  public static timerStart(log = false, eventName = ''): number {
    if (log) {
      console.log(`Started ${eventName}..`);
    }
    return new Date().getTime();
  }

  public static timerStop(
    beginning: number,
    log = false,
    eventName = ''
  ): number {
    const duration = new Date().getTime() - beginning;
    if (log) {
      console.log(`Stopped ${eventName}.. ${duration / 1000}s`);
    }
    return duration;
  }

  private static parseIntOrZero(numberStr: string): number {
    if (numberStr == null || numberStr.length == 0) {
      return 0;
    }
    const number = parseInt(numberStr);
    if (Number.isNaN(number)) {
      return 0;
    }
    return number;
  }

  private static parseIntOrNull(numberStr: string): number | null {
    if (numberStr == null || numberStr.length == 0) {
      return null;
    }
    const number = parseInt(numberStr);
    if (Number.isNaN(number)) {
      return null;
    }
    return number;
  }
}
