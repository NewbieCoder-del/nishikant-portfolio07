// grabbing stuff from the html (don’t mess this up)
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

// checking if the user likes bright screens or dark vibes 😎
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  themeIcon.setAttribute("name", "sunny-outline"); // let there be light 🌞
}

// when i click the little moon/sun thingy
themeToggle.addEventListener("click", () => {
  // switch between light and dark like a boss
  body.classList.toggle("light");
  const isLight = body.classList.contains("light");

  // change the icon so we know what’s going on
  themeIcon.setAttribute("name", isLight ? "sunny-outline" : "moon-outline");

  // remember my mood for next time (thanks localStorage ❤️)
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// mobile menu because small screens are a pain 📱
document.getElementById("menu-toggle").addEventListener("click", () => {
  // open and close the burger menu 🍔
  document.getElementById("nav-links").classList.toggle("active");
});
