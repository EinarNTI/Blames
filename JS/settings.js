document.getElementById("aboutButton").addEventListener("click", switchAbout)
document.getElementById("settingsButton").addEventListener("click", switchSettings)
document.getElementById("dangerButton").addEventListener("click", switchDanger)
document.getElementById("logOutButton").addEventListener("click", switchLogOut)

var settings1 = document.getElementById("settings1")
var settings2 = document.getElementById("settings2")
var settings3 = document.getElementById("settings3")
var settings4 = document.getElementById("settings4")

function switchAbout() {
    settings1.style.visibility = "visible";
    settings2.style.visibility = "collapse";
    settings3.style.visibility = "collapse";
    settings4.style.visibility = "collapse";
}

function switchSettings() {
    settings1.style.visibility = "collapse";
    settings2.style.visibility = "visible";
    settings3.style.visibility = "collapse";
    settings4.style.visibility = "collapse";
}

function switchDanger() {
    settings1.style.visibility = "collapse";
    settings2.style.visibility = "collapse";
    settings3.style.visibility = "visible";
    settings4.style.visibility = "collapse";
}

function switchLogOut() {
    settings1.style.visibility = "collapse";
    settings2.style.visibility = "collapse";
    settings3.style.visibility = "collapse";
    settings4.style.visibility = "visible";
}