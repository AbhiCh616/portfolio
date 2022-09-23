function readCurrComp() {
    let moreText = document.getElementById("p-read-current-company");
    var btn = document.getElementById("btn-read-current-company");

    if(moreText.style.display === "none") {
        moreText.style.display = "block";
        btn.innerHTML = "Read Less";
    } else {
        moreText.style.display = "none";
        btn.innerHTML = "Read More";
    }
}

function readInternComp() {
    let moreText = document.getElementById("p-read-intern-company");
    var btn = document.getElementById("btn-read-intern-company");

    if(moreText.style.display === "none") {
        moreText.style.display = "block";
        btn.innerHTML = "Read Less";
    } else {
        moreText.style.display = "none";
        btn.innerHTML = "Read More";
    }
}