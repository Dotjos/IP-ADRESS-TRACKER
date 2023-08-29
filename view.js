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

export function errMapDisp(map) {
  const mapErrHi = document.createElement("h1");
  mapErrHi.classList.add(
    "text-lg",
    "font-bold",
    "text-DarkGray",
    "text-center",
    "mt-52",
    "lg:text-4xl"
  );
  mapErrHi.textContent = "Sorry,Couldn't load map,try again.";
  // while (map.firstChild) {
  //   map.removeChild(map.firstChild);
  // }
  map.appendChild(mapErrHi);
}

export function errDataFetch(errSect, errText) {
  const errHi = document.createElement("h1");
  errHi.textContent = errText;
  errSect.appendChild(errHi);
}

export function errUserDataFetch(errSect, errText) {
  const errHi = document.createElement("h1");
  errHi.textContent = errText;
  errSect.appendChild(errHi);
}
