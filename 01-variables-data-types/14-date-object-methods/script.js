let x;
let d = new Date();

// Date methods

x = d.toString();

//timestamp
x = d.getTime();
x = d.valueOf();

//Get the year
x = d.getFullYear();

//Get the month, remember months start from 0
x = d.getMonth();
x = d.getMonth() + 1;

// Get the day of the month
x = d.getDate();

// Get the day of the week
x = d.getDay();

x = d.getHours();

x = d.getMinutes();

x = d.getSeconds();

x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

// Intl.DateTimeFormat API (locale specific)
x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default').format(d);

// Call the API and pass in the date. Show the month with it's full name
x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);

x = d.toLocaleString('default', { month: 'short' });

x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/New_York',
});

console.log(x);