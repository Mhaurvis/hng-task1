// Get the current date
const currentDate = new Date();

// Get the day of the week (0 = Sunday, 1 = Monday..........)
const daysOfWeek = ["sunday", "Monday", "tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayOfWeek = daysOfWeek[currentDate.getDay()];

// Display the current date
const currentDateElement = document.querySelector('.currentDate');
currentDateElement.innerText = `Date: ${dayOfWeek}`;


const currentTime = Date.now();
const currentTimeElement = document.querySelector('.currentTime');
currentTimeElement.innerHTML = `Time: ${currentTime}`;