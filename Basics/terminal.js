function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`${hours}:${minutes}:${seconds}`);
}

setInterval(updateClock, 1000);
