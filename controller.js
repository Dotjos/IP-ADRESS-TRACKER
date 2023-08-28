import { titLayer } from "./model.js";

const map = L.map("map").setView([51.505, -0.09], 13);
const marker = L.marker([51.5, -0.09]).addTo(map);
document.addEventListener("DOMContentLoaded", () => {
  titLayer(L, map);
});
