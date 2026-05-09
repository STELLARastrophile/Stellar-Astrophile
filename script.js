function enterPortal() {
  const gate = document.getElementById("gate");
  const container = document.querySelector(".container");

  container.style.opacity = "1"; 
  gate.classList.add("fade-out");

  setTimeout(function() {
    gate.style.display = "none";
  }, 500);
}
function updateTime() {
  const now = new Date();
  document.getElementById("time").innerText =
    now.toLocaleTimeString() + " // Time";
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
