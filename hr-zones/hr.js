function calculateZones() {
    let maxHR = document.getElementById("max-hr").value;
    let hr50 = Math.round(maxHR * 0.5);
    let hr60 = Math.round(maxHR * 0.6);
    let hr70 = Math.round(maxHR * 0.7);
    let hr80 = Math.round(maxHR * 0.8);
    let hr90 = Math.round(maxHR * 0.9);
    let zone1 = document.getElementById("zone1");
    let zone2 = document.getElementById("zone2");
    let zone3 = document.getElementById("zone3");
    let zone4 = document.getElementById("zone4");
    let zone5 = document.getElementById("zone5");

    zone1.textContent = `${hr50}-${hr60}bpm`;
    zone2.textContent = `${hr60}-${hr70}bpm`;
    zone3.textContent = `${hr70}-${hr80}bpm`;
    zone4.textContent = `${hr80}-${hr90}bpm`;
    zone5.textContent = `${hr90}-${maxHR}bpm`;
}

let calcButton = document.getElementById("hr-submit");
calcButton.addEventListener('click', calculateZones);