const clock = document.getElementById("clock");

const toggleBtn = document.getElementById("toggleMode");

const body = document.body;

// Update clock every second

function updateClock() {

  const now = new Date();

  let hours = now.getHours().toString().padStart(2, "0");

  let minutes = now.getMinutes().toString().padStart(2, "0");

  let seconds = now.getSeconds().toString().padStart(2, "0");

  clock.textContent = `${hours}:${minutes}:${seconds}`;

}

setInterval(updateClock, 1000);

updateClock(); // Run immediately

// Toggle Dark/Light Mode

toggleBtn.addEventListener("click", () => {

  if (body.classList.contains("light")) {

    body.classList.replace("light", "dark");

    toggleBtn.textContent = "☀️ Light Mode";

  } else {

    body.classList.replace("dark", "light");

    toggleBtn.textContent = "🌙 Dark Mode";

  }

});

// Default theme

body.classList.add("light");