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
      `https://geo.ipify.org/api/v1?apiKey=at_Nw7x6J8cKePeGNjMO561KG4mEsE0R&ipAddress=${ipadress}`
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

export async function FetchuserIp() {
  try {
    const data = await fetch(`https://api.ipify.org?format=json`);
    if (data.ok) {
      const response = await data.json();
      return response.ip;
    } else {
      throw new error("WAhAHAHHAAHHA");
    }
  } catch (err) {
    console.error(err);
  }
}
