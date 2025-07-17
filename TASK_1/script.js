function showAlert() {
  alert("👋 Hello! Welcome to Sasibhushan's Web Development Platform.\nExplore HTML, CSS, and JavaScript with joy!");
}

const toggle = document.getElementById("modeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
});
