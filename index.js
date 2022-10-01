let fullTimeDialog = document.getElementById("full-time-desc");
let internDialog = document.getElementById("intern-desc");

function readCurrCompDesc() {
    fullTimeDialog.style.display = "block";
}

function readInternDesc() {
    internDialog.style.display = "block";
}

window.onclick = function(event) {
    if (event.target === fullTimeDialog) {
        fullTimeDialog.style.display = "none";
    }
    if (event.target === internDialog) {
        internDialog.style.display = "none";
    }
}

function closeFullTimePopup() {
    fullTimeDialog.style.display = "none";
}

function closeInternPopup() {
    internDialog.style.display = "none";
}