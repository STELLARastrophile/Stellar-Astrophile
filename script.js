function updateTime() {
  const now = new Date();
  document.getElementById("time").innerText =
    now.toLocaleTimeString() + " // UAM-TIME";
}

setInterval(updateTime, 1000);
updateTime();
