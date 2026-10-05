const initializer = () => {
  const pcTitle = document.getElementById("pc-title");
  const pcItems = document.getElementById("pc-items");
  const tecladoTitle = document.getElementById("teclado-title");
  const tecladoItems = document.getElementById("teclado-items");
  const mouseTitle = document.getElementById("mouse-title");
  const mouseItems = document.getElementById("mouse-items");

  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  if (category == "pc") {
    tecladoTitle.style.display = "none";
    tecladoItems.style.display = "none";
    mouseTitle.style.display = "none";
    mouseItems.style.display = "none";
  }
  if (category == "teclado") {
    pcTitle.style.display = "none";
    pcItems.style.display = "none";
    mouseTitle.style.display = "none";
    mouseItems.style.display = "none";
  }
  if (category == "mouse") {
    tecladoTitle.style.display = "none";
    tecladoItems.style.display = "none";
    pcTitle.style.display = "none";
    pcItems.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", initializer)