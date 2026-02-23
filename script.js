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

const checkbox = document.getElementById("agree");
const button = document.getElementById("enterBtn");

checkbox.addEventListener("change", function() {
  if (checkbox.checked) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});
