if (localStorage.getItem("activeUser") == null) {
    alert("You are not logged in. Redirecting to login page.");
    window.location.href = "index.html";
}

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

document.getElementById("wipe").addEventListener("click", function () {
    localStorage.setItem("theme", false);
    document.getElementById("theme").checked = false;
    console.log("Wiped");
    sessionStorage.clear();
    console.log("Session storage cleared");
});

window.addEventListener("resize", adjustProfile);

function adjustProfile() {
    if (window.innerWidth > 768) {
        document.getElementById("settings1").style.flexDirection = "row";
        document.getElementById("profilePicdiv").style.margin = "2em";
    }
    else {
        document.getElementById("settings1").style.flexDirection = "column";
    }
};

document.getElementById("theme").addEventListener("click", function () {
    localStorage.setItem("theme", document.getElementById("theme").checked);
});

if (localStorage.getItem("theme") != "true") {
    document.getElementById("theme").checked = false;
} else {
    document.getElementById("theme").checked = true;
}

adjustProfile();

document.getElementById("yesButton").addEventListener("click", function () {
    localStorage.removeItem("activeUser");
    window.location.href = "index.html";
});

document.body.addEventListener("click", handleDarkMode);
handleDarkMode();

function handleDarkMode() {
    if (localStorage.getItem("theme") == "true") {
        document.body.style.backgroundColor = "#1a1a1a";
        document.getElementsByTagName("main")[0].style.backgroundColor = "#1a1a1a";
        document.getElementById("settings1").style.backgroundColor = "#1a1a1a";
        document.getElementById("settings2").style.backgroundColor = "#1a1a1a";
        document.getElementById("settings3").style.backgroundColor = "#1a1a1a";
        document.getElementById("settings4").style.backgroundColor = "#1a1a1a";
        document.querySelectorAll("h3").forEach(h3 => {
            h3.style.color = "white";
        });
        document.getElementById("burgerButton").style.color = "white";
        document.getElementsByTagName("aside")[0].style.backgroundColor = "#8c0000";
        document.getElementsByTagName("footer")[0].style.backgroundColor = "black";
        document.querySelectorAll("footer a").forEach(a => {
            a.style.color = "white";
        });
        document.getElementsByTagName("html")[0].style.backgroundColor = "#1a1a1a";
    } else {
        document.body.style.backgroundColor = "white";
        document.getElementsByTagName("main")[0].style.backgroundColor = "white";
        document.getElementById("settings1").style.backgroundColor = "white";
        document.getElementById("settings2").style.backgroundColor = "white";
        document.getElementById("settings3").style.backgroundColor = "white";
        document.getElementById("settings4").style.backgroundColor = "white";
        document.querySelectorAll("h3").forEach(h3 => {
            h3.style.color = "black";
        });
        document.getElementById("burgerButton").style.color = "black";
        document.getElementsByTagName("aside")[0].style.backgroundColor = "red";
        document.getElementsByTagName("footer")[0].style.backgroundColor = "white";
        document.querySelectorAll("footer a").forEach(a => {
            a.style.color = "black";
        });
        document.getElementsByTagName("html")[0].style.backgroundColor = "white";
    }
}

document.getElementById("saveButton").addEventListener("click", function () {
    if (document.getElementById("username").value != "" && document.getElementById("username").value != localStorage.getItem("activeUser")) {
        localStorage.setItem("activeUser", document.getElementById("username").value);
        localStorage.setItem("validUser", document.getElementById("username").value);
        document.getElementById("username").placeholder = localStorage.getItem("activeUser");
    }
    if (document.getElementById("description").value != "" && document.getElementById("description").value != localStorage.getItem("description")) {
        localStorage.setItem("description", document.getElementById("description").value);
        document.getElementById("description").placeholder = localStorage.getItem("description");
    }
});

document.getElementById("username").placeholder = localStorage.getItem("activeUser");
document.getElementById("description").placeholder = localStorage.getItem("description");

document.getElementById("delete").addEventListener("click", function () {
    localStorage.removeItem("activeUser");
    localStorage.removeItem("validUser");
    localStorage.removeItem("validPassword");
    window.location.href = "index.html";
});