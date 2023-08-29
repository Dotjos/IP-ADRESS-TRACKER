export function displayipAdressDetails(ipAdress, iptext) {
  const ipAddressh1 = document.createElement("h1");
  ipAddressh1.innerHTML = iptext;
  while (ipAdress.firstChild) {
    ipAdress.removeChild(ipAdress.firstChild);
  }

  ipAdress.appendChild(ipAddressh1);
}

export function displayLocationDetails(location, region, country) {
  const locationh1 = document.createElement("h1");
  locationh1.innerHTML = ` ${region},${country}`;
  while (location.firstChild) {
    location.removeChild(location.firstChild);
  }
  location.appendChild(locationh1);
}

export function displayTimeZoneDetails(timezone, timeZoneText) {
  const timeZoneh1 = document.createElement("h1");
  timeZoneh1.innerHTML = `UTC ${timeZoneText}`;
  while (timezone.firstChild) {
    timezone.removeChild(timezone.firstChild);
  }
  timezone.appendChild(timeZoneh1);
}

export function displayIspDetails(isp, ispText) {
  const isph1 = document.createElement("h1");
  isph1.innerHTML = ispText;
  while (isp.firstChild) {
    isp.removeChild(isp.firstChild);
  }
  isp.appendChild(isph1);
}
