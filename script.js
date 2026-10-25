gsap.registerPlugin(ScrollTrigger);

// Dark mode toggle with persistence
const darkModeToggle = document.getElementById("darkModeToggle");
const rootElement = document.documentElement;

const storedTheme = localStorage.getItem("kwkc-theme");
if (storedTheme === "dark") rootElement.classList.add("dark");

darkModeToggle.addEventListener("click", () => {
  rootElement.classList.toggle("dark");
  localStorage.setItem(
    "kwkc-theme",
    rootElement.classList.contains("dark") ? "dark" : "light"
  );
});