// Selecting the elements from the HTML
const startButton = document.getElementById('start-btn');
const resetButton = document.getElementById('reset-btn');
const displayMinutes = document.getElementById('display-minutes');
const displaySeconds = document.getElementById('display-seconds');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');

let timer;
let totalTimeInSeconds = 0;

// Function to start the countdown timer
function startTimer() {
    // Get the values from the inputs
    let minutes = parseInt(minutesInput.value) || 0;
    let seconds = parseInt(secondsInput.value) || 0;

    // Calculate total time in seconds
    totalTimeInSeconds = minutes * 60 + seconds;

    // Check if there's time to count down
    if (totalTimeInSeconds <= 0) {
        alert("Please enter a valid time.");
        return;
    }

    // Disable input fields during the countdown
    minutesInput.disabled = true;
    secondsInput.disabled = true;
    startButton.disabled = true;

    // Start the countdown
    timer = setInterval(function() {
        if (totalTimeInSeconds <= 0) {
            clearInterval(timer);
            alert("Time's up!");
            resetTimer();
        } else {
            totalTimeInSeconds--;
            let min = Math.floor(totalTimeInSeconds / 60);
            let sec = totalTimeInSeconds % 60;

            // Update the display
            displayMinutes.textContent = min < 10 ? '0' + min : min;
            displaySeconds.textContent = sec < 10 ? '0' + sec : sec;
        }
    }, 1000);
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timer);
    minutesInput.disabled = false;
    secondsInput.disabled = false;
    startButton.disabled = false;

    minutesInput.value = '';
    secondsInput.value = '';
    displayMinutes.textContent = '00';
    displaySeconds.textContent = '00';
}

// Event listeners for the buttons
startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);
