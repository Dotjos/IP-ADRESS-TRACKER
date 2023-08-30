import { fetchLocationData, titLayer, FetchuserIp } from "./model.js";
import {
  displayIspDetails,
  displayLocationDetails,
  displayipAdressDetails,
  displayTimeZoneDetails,
  clearInitVal,
  errDataFetch,
  errUserDataFetch,
  errMapDisp,
} from "./view.js";
const seachArr = document.querySelector(".seachArr");
const errMsg = document.querySelector(".errMsg");
const ispSect = document.querySelector(".isp");
const timeZoneSect = document.querySelector(".timeZone");
const locationSect = document.querySelector(".locationText");
const adresSect = document.querySelector(".adressText");
const ipInput = document.querySelector(".ipValue");
const mapSect = document.querySelector("#map");
const locInfo = document.querySelector(".locInfo");
const spinner = document.querySelector(".spinner");
const detailInfo = document.querySelector(".detailInfo");
const spinContainer = document.querySelector(".spinContainer");

const map = L.map("map", {
  center: [0, 0],
  zoom: 2,
  zoomControl: false, // Disable default zoom control
});
const myIcon = L.icon({
  iconUrl: "./images/icon-location.svg",
  iconSize: [30, 30],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94],
});

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

async function initialPage() {
  try {
    spinner.classList.remove("hidden");
    const userIp = await FetchuserIp();
    const userInfo = await fetchLocationData(userIp);
    renderSearchresult(userInfo);
  } catch (err) {
    errDataFetch(locInfo, err);
    errUserDataFetch(locInfo, err);
  } finally {
    console.log("not Showing spin");
    spinner.classList.add("hidden");
    spinContainer.classList.add("hidden");
    detailInfo.classList.remove("hidden");
  }
}

initialPage();

seachArr.addEventListener("click", async () => {
  ipVal = ipInput.value;

  try {
    if (inputValidity(ipVal)) {
      detailInfo.classList.toggle("hidden");
      spinner.classList.remove("hidden");
      spinContainer.classList.remove("hidden");
      const resp = await fetchLocationData(ipVal);
      renderSearchresult(resp);
    }
  } catch (err) {
    // Handle errors if needed
  } finally {
    // Hide the spinner regardless of success or failure
    spinContainer.classList.add("hidden");
    detailInfo.classList.toggle("hidden");
    spinner.classList.add("hidden");
  }
});

document.addEventListener("DOMContentLoaded", async () => {
  try {
    titLayer(L, map);
  } catch (err) {
    errMapDisp(err);
  }
});
