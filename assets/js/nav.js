const MENU_ITEMS = [
  { name: "Home", href: "index.html" },
  { name: "Registration", href: "registration.html" },
  { name: "Events", href: "events.html" },
  { name: "Classes", href: "classes.html" },
  { name: "Instructors", href: "instructors.html" },
  { name: "Class Materials", href: "materials.html" },
  { name: "Booths", href: "booths.html" },
  { name: "Directions", href: "directions.html" },
  { name: "Building Map", href: "building-map.html" },
  { name: "Cool Videos", href: "cool-videos.html" }
];

function renderNav() {
  const navUl = document.querySelector(".main-nav ul");
  if (!navUl) return;

  const current = window.location.pathname.split("/").pop() || "index.html";

  MENU_ITEMS.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = item.name;
    a.href = item.href;
    if (item.href === current) {
      a.classList.add("is-active");
    }
    li.appendChild(a);
    navUl.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", renderNav);
