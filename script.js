// --- Configuration ---
// Set the date we're counting down to.
// Format: "Month Day, Year Hour:Minute:Second"
const launchDate = new Date("December 31, 2026 00:00:00").getTime();

// --- Elements ---
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const countdownContainer = document.getElementById("countdown-timer");
const headline = document.querySelector("h1");

// --- Timer Function ---
function updateCountdown() {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the launch date
    const distance = launchDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the respective HTML elements
    // We use String().padStart(2, '0') to add a leading zero if the number is less than 10 (e.g., "05" instead of "5")
    daysElement.innerHTML = String(days).padStart(2, '0');
    hoursElement.innerHTML = String(hours).padStart(2, '0');
    minutesElement.innerHTML = String(minutes).padStart(2, '0');
    secondsElement.innerHTML = String(seconds).padStart(2, '0');

    // If the countdown is finished, change the text and hide the timer
    if (distance < 0) {
        clearInterval(countdownInterval); // Stop the timer
        headline.innerText = "We Are Live!";
        countdownContainer.style.display = "none"; // Hide the timer elements
    }
}

// --- Initialization ---
// Update the countdown every 1 second (1000 milliseconds)
const countdownInterval = setInterval(updateCountdown, 1000);

// Run the function immediately to avoid a 1-second delay on page load
updateCountdown();