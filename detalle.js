const detalleInitializer = () => {
  document.addEventListener("shown.bs.collapse", bajarAlDetalle);
}

const bajarAlDetalle = (event) => {
  event.target.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.addEventListener("DOMContentLoaded", detalleInitializer)
