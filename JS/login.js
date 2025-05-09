document.getElementById("continueLogin").addEventListener("click", function() {
    if ((document.getElementById("username1").value == localStorage.getItem("validUser")) && (document.getElementById("password1").value == localStorage.getItem("validPassword"))) {
        localStorage.setItem("activeUser", localStorage.getItem("validUser"));
        window.location.href = "../HTML/Main.html";
    }
    else {
        alert("Invalid username or password");
    }
});

document.getElementById("continueNew").addEventListener("click", function () {
    localStorage.setItem("validUser", document.getElementById("username2").value);
    localStorage.setItem("validPassword", document.getElementById("password2").value);
    document.getElementById("boxNew").style.visibility = "collapse";
    document.getElementById("boxLogin").style.visibility = "visible";
});

document.getElementById("newAccount").addEventListener("click", function () {
    document.getElementById("boxLogin").style.visibility = "collapse";
    document.getElementById("boxNew").style.visibility = "visible";
    inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
});

document.getElementById("login").addEventListener("click", function () {
    document.getElementById("boxNew").style.visibility = "collapse";
    document.getElementById("boxLogin").style.visibility = "visible";
    inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
});

document.getElementById("redirNew").addEventListener("click", function () {
    document.getElementById("boxWelcome").style.visibility = "collapse";
    document.getElementById("boxNew").style.visibility = "visible";
});

document.getElementById("redirLogIn").addEventListener("click", function () {
    document.getElementById("boxWelcome").style.visibility = "collapse";
    document.getElementById("boxLogin").style.visibility = "visible";
});

document.getElementById("redirMain").addEventListener("click", function () {
    localStorage.setItem("activeUser", "Guest");
    window.location.href = "../HTML/Main.html";
});