let d;

// Get today's date and time
d = new Date();

// Set to a string
d = d.toString();

// Get a specific date
// Important: the month is 0-based, so 0 is January and 11 is December
// year, month, day, hour, miutes, seconds
d = new Date(2023, 2, 10, 14, 30, 0);

// Pass in a string
d = new Date('2023-08-12T12:30:00');
d = new Date('08/12/2023 12:30:00');
d = new Date('2023-08-12');
d = new Date('08-12-2023');

// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

// Get current timestamp
d = Date.now();

// Get the timestamp of a specific date
d = new Date();
d = d.getTime();
d = d.valueOf();

// Create a date from a timestamp
d = new Date(1666962049745);

// Convert from milliseconds to seconds
d = Math.floor(Date.now() / 1000);

console.log(d);