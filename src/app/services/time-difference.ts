const format = (value: number): string =>
  value < 10 ? `0${value}` : `${value}`;

export const timeDifference = (start: Date, end: Date): string => {
  const miliseconds = end.getTime() - start.getTime();
  // 1- Convert to seconds:
  let seconds = miliseconds / 1000;
  // 2- Extract hours:
  const hours = Math.trunc(seconds / 3600);
  seconds = seconds % 3600; // seconds remaining after extracting hours
  // 3- Extract minutes:
  const minutes = Math.trunc(seconds / 60);
  // 4- Keep only seconds not extracted to minutes:
  seconds = Math.trunc(seconds % 60);

  seconds = seconds < 0 ? 0 : seconds;

  return `${format(hours)}:${format(minutes)}:${format(seconds)}`;
};

export const timeLongDifference = (start: Date, end: Date): string => {
  const miliseconds = end.getTime() - start.getTime();
  // 1- Convert to seconds:
  let seconds = miliseconds / 1000;
  // 2- Extract days:
  const days = Math.trunc(seconds / 86400);
  seconds = seconds % 86400; // seconds remaining after extracting days
  // 3- Extract hours:
  const hours = Math.trunc(seconds / 3600);
  seconds = seconds % 3600; // seconds remaining after extracting hours
  // 4- Extract minutes:
  const minutes = Math.trunc(seconds / 60);
  // 5- Keep only seconds not extracted to minutes:
  seconds = Math.trunc(seconds % 60);

  seconds = seconds < 0 ? 0 : seconds;

  return `${format(days)}:${format(hours)}:${format(minutes)}:${format(
    seconds
  )}`;
};

export const timeDifferenceFromNow = (date: Date): string =>
  timeDifference(date, new Date());
export const timeLongDifferenceFromNow = (date: Date): string =>
  timeLongDifference(date, new Date());
