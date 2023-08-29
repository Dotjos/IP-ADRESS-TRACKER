import { apiKey } from "./key.js";

export async function titLayer(L, map) {
  try {
    await L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap",
    }).addTo(map);
  } catch (err) {
    console.error(err);
  }
}

export async function fetchLocationData(ipadress) {
  try {
    const fetchData = await fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${ipadress}`
    );

    if (!fetchData.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await fetchData.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

// fetchLocationData();
