const greetBtn = document.getElementById("greetBtn");

greetBtn.addEventListener("click", () => {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning!" : hour < 18 ? "Good afternoon!" : "Good evening!";
  alert(greeting + " Thanks for visiting my site.");
});
