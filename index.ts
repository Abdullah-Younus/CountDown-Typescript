import * as readline from 'readline';


const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 7); 

function getRemainingTime(targetDate: Date): string {
  const currentDate = new Date();
  const milliseconds = targetDate.getTime() - currentDate.getTime();
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  return `${days} days, ${hours % 24} hours, ${minutes % 60} minutes, ${seconds % 60} seconds`;
}

async function countdown(targetDate: Date): Promise<void> {
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

countdown(targetDate);
