const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// April 12 2023 -> april-15-2023
export function convertDateToHyphen(date: string) {
  const dateParsed = new Date(date);

  return `${
    months[dateParsed.getMonth()]
  }-${dateParsed.getDate()}-${dateParsed.getFullYear()}`.toLowerCase();
}
