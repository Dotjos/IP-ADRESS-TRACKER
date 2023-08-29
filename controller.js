import { fetchLocationData, titLayer, FetchuserIp } from "./model.js";
import {
  displayIspDetails,
  displayLocationDetails,
  displayipAdressDetails,
  displayTimeZoneDetails,
} from "./view.js";
const seachArr = document.querySelector(".seachArr");
const errMsg = document.querySelector(".errMsg");
const ispSect = document.querySelector(".isp");
const timeZoneSect = document.querySelector(".timeZone");
const locationSect = document.querySelector(".locationText");
const adresSect = document.querySelector(".adressText");
const ipInput = document.querySelector(".ipValue");
// Initializing map
const map = L.map("map").setView([0, 0], 13);
const myIcon = L.icon({
  iconUrl: "./images/icon-location.svg",
  iconSize: [30, 30],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94],
});
async function initialPage() {
  const userIp = await FetchuserIp();
  const userInfo = await fetchLocationData(userIp);
  renderSearchresult(userInfo);
}

let ipVal;
function renderSearchresult(data) {
  const { ip, isp, location } = data;
  const { country, region, timezone, lat, lng } = location;
  //Set the mapview to this location
  map.setView([lat, lng], 13);
  //Set the marker to the view and add it to the map
  L.marker([lat, lng], { icon: myIcon }).addTo(map);
  displayIspDetails(ispSect, isp);
  displayLocationDetails(locationSect, region, country);
  displayTimeZoneDetails(timeZoneSect, timezone);
  displayipAdressDetails(adresSect, ip);
}

function inputValidity(ipValue) {
  const ipAddressRegex = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
  const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (ipAddressRegex.test(ipValue) || domainRegex.test(ipValue)) {
    errMsg.classList.add("hidden");
    return true;
  } else {
    errMsg.classList.remove("hidden");
    return false;
  }
}

seachArr.addEventListener("click", () => {
  ipVal = ipInput.value;
  inputValidity(ipVal);
  fetchLocationData(ipVal).then((data) => {
    renderSearchresult(data);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  titLayer(L, map);
  initialPage();
});
