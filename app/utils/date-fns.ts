export function getDifferenceInSeconds(
  dateLeft: Date,
  dateRight: Date
): number {
  const millisecondsDifference = Math.abs(
    dateLeft.getTime() - dateRight.getTime()
  );
  const secondsDifference = millisecondsDifference / 1000;
  return secondsDifference;
}

/** Prepares a date to be passed as default value for input with type `datetime-local` */
export const dateForDateTimeInputValue = (date: Date) => {
  const localDate = new Date(
    date.getTime() - date.getTimezoneOffset() * 60 * 1000
  );
  return localDate.toISOString().slice(0, 19);
};

export function calcTimeDifference(
  date1: Date,
  date2: Date
): { hours: number; minutes: number } {
  // Calculate the time difference in milliseconds
  const diffInMs = Math.abs(date2.getTime() - date1.getTime());

  // Convert milliseconds to minutes and hours
  let minutes = Math.floor(diffInMs / (1000 * 60));
  let hours = Math.floor(minutes / 60);

  if (minutes >= 58) {
    hours++; //just to round it to hours
    minutes = 0;
  }

  return { hours, minutes };
}

export function getTimeRemainingMessage(date1: Date, date2: Date): string {
  // console.log("date1", date1);
  // console.log("date2", date2);
  const { hours, minutes } = calcTimeDifference(date1, date2);
  // console.log("hours", hours);
  // console.log("minutes", minutes);

  if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""}`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""}`;
  } else {
    return ""; //this should not happen
  }
}
