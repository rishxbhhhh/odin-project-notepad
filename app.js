const menu = document.getElementById("menu");
const navbar = document.querySelector("#mynavbar.navbar");
menu.style.cursor = "pointer";
navbar.classList.add("dnone");
function hideShowMenu(x) {
    if (x.className=="navbar") {
        x.className+=" dnone";
      } else {
        x.className="navbar";
      }
}
menu.addEventListener("click", () => {
  toggle(menu);
  hideShowMenu(navbar);
});

function toggle(x) {
  if (x.classList.contains("rotate")) {
    x.classList.remove("rotate");
  } else {
    x.classList.add("rotate");
  }
}