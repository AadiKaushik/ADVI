// Get the specific time from the user (in milliseconds)
var specificTime = new Date("June 5, 2023 11:43:00").getTime();

// Update the timer every 10 milliseconds
setInterval(updateTimer, 10);

function updateTimer() {
    // Get the current time
    var currentTime = new Date().getTime();

    // Calculate the difference between the specific time and the current time
    var difference = specificTime - currentTime;

    // Calculate the days, hours, minutes, seconds, and milliseconds
    var days = Math.abs(Math.floor(difference / (1000 * 60 * 60 * 24)));
    var hours = Math.abs(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    var minutes = Math.abs(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
    var seconds = Math.abs(Math.floor((difference % (1000 * 60)) / 1000));
    var milliseconds = Math.abs(difference % 1000);

    // Display the timer in the HTML
    document.getElementById("timer").innerHTML = days + ' days ' + hours + ' hours ' + minutes + ' mins ' + seconds +' seconds '+ milliseconds + ' milliseconds '
}
