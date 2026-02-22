function enterPortal() {
  document.getElementById("gate").style.display = "none";
  document.querySelector(".container").style.display = "block";
}
function updateTime() {
  const now = new Date();
  document.getElementById("time").innerText =
    now.toLocaleTimeString() + " // UAM-TIME";
}

setInterval(updateTime, 1000);
updateTime();
