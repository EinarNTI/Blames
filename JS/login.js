document.documentElement.setAttribute('data-theme', localStorage.getItem("theme") === "true" ? "dark" : "light");

function handleDarkMode() {
    const theme = localStorage.getItem("theme") === "true" ? "dark" : "light";
    document.documentElement.setAttribute('data-theme', theme);
}

handleDarkMode();

document.getElementById("continueLogin").addEventListener("click", function () {
    if ((document.getElementById("username1").value == localStorage.getItem("validUser")) && (document.getElementById("password1").value == localStorage.getItem("validPassword"))) {
        localStorage.setItem("activeUser", localStorage.getItem("validUser"));
        window.location.href = "../HTML/Main.html";
    }
    else {
        alert("Invalid username or password. Try another password or username, or create a new account if you do not already have one. Sometimes accounts are not saved correctly, and a new account may be needed.");
    }
});

document.getElementById("continueNew").addEventListener("click", function () {
    localStorage.setItem("validUser", document.getElementById("username2").value);
    localStorage.setItem("validPassword", document.getElementById("password2").value);
    localStorage.setItem("activeUser", localStorage.getItem("validUser"));
    window.location.href = "../HTML/Main.html";
});

document.getElementById("newAccount").addEventListener("click", function () {
    document.getElementById("boxLogin").style.display = "none";
    document.getElementById("boxNew").style.display = "block";
    inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
});

document.getElementById("login").addEventListener("click", function () {
    document.getElementById("boxNew").style.display = "none";
    document.getElementById("boxLogin").style.display = "block";
    inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
});

document.getElementById("redirNew").addEventListener("click", function () {
    document.getElementById("boxWelcome").style.display = "none";
    document.getElementById("boxNew").style.display = "block";
});

document.getElementById("redirLogIn").addEventListener("click", function () {
    document.getElementById("boxWelcome").style.display = "none";
    document.getElementById("boxLogin").style.display = "block";
});

document.getElementById("redirMain").addEventListener("click", function () {
    localStorage.setItem("activeUser", "Guest");
    window.location.href = "../HTML/Main.html";
});

document.querySelector("#logo").addEventListener("click", function () {
    if ((localStorage.getItem("activeUser") == "") || (localStorage.getItem("activeUser") == null)) {
        alert("You are not logged in. Please log in, create a new account, or continue as a guest.");
    } else {
        window.location.href = "../HTML/Main.html";
    }
});