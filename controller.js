import { fetchLocationData, titLayer } from "./model.js";
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
const map = L.map("map").setView([51.505, -0.09], 13);
const marker = L.marker([51.5, -0.09]).addTo(map);
let ipVal;
function renderSearchresult(data) {
  const { ip, isp, location } = data;
  const { country, region, timezone } = location;
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
  } else {
    errMsg.classList.remove("hidden");
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
  // fetchLocationData(ipVal);
});
