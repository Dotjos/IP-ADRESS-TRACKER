export async function titLayer(L, map, errFunc) {
  try {
    await L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap",
    }).addTo(map);
  } catch (err) {
    errFunc();
  }
}

export async function fetchLocationData(ipadress) {
  try {
    const fetchData = await fetch(
      `https://geo.ipify.org/api/v1?apiKey=at_Nw7x6J8cKePeGNjMO561KG4mEsE0R&ipAddress=${ipadress}`
    );

    if (!fetchData.ok) {
      throw new Error("Kindly check your network and try again");
    }
    const data = await fetchData.json();
    return data;
  } catch (err) {
    // throw err;
  }
}

export async function FetchuserIp() {
  try {
    const data = await fetch(`https://api.ipify.org?format=json`);
    if (data.ok) {
      const response = await data.json();
      return response.ip;
    } else {
      // throw new error("Failed to fetch user IP");
    }
  } catch (err) {
    // throw err;
  }
}
