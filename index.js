import * as readline from 'readline';
// A function that takes a target date and returns the remaining time as a string
function getRemainingTime(targetDate) {
    const currentDate = new Date();
    const milliseconds = targetDate.getTime() - currentDate.getTime();
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    return `${days} days, ${hours % 24} hours, ${minutes % 60} minutes, ${seconds % 60} seconds`;
}
// A function that prints the remaining time every second until the target date is reached
async function countdown(targetDate) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    while (true) {
        const remainingTime = getRemainingTime(targetDate);
        console.log(remainingTime);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (remainingTime === '0 days, 0 hours, 0 minutes, 0 seconds') {
            console.log('Countdown complete!');
            rl.close();
            break;
        }
    }
}
// Set the target date for the countdown
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 7); // Set the target date to 7 days from now
// Start the countdown
countdown(targetDate);
