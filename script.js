gsap.registerPlugin(ScrollTrigger);


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

const introTimeline = gsap.timeline({
  defaults: { duration: 0.55, ease: "power2.out" }, 
});

introTimeline
  .from("header", { y: -40, opacity: 0 })
  
  .from(
    "#hero [data-intro]:not(div)",
    { y: 30, opacity: 0, stagger: 0.1 },
    "-=0.25"
  )
 
  .from(
    "#hero div[data-intro]",
    { y: 20, opacity: 0, stagger: 0.06, ease: "power1.out" }, 
    "<"
  )
  
  .from(
    "#hero .aspect-\\[4\\/5\\]",
    { scale: 0.94, opacity: 0, duration: 0.65, ease: "power3.out" }, 
    "-=0.15"
  );


document.getElementById("replayBtn").addEventListener("click", () => {
  introTimeline.restart();
});