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
        localStorage.setItem("theme", "false");
        document.getElementById("theme").checked = "false";
        console.log("Wiped");
        sessionStorage.clear();
        console.log("Session storage cleared");
        handleDarkMode();
    });

    document.getElementById("theme").addEventListener("click", function () {
        localStorage.setItem("theme", document.getElementById("theme").checked);
        handleDarkMode();
    });

    if (localStorage.getItem("theme") != "true") {
        document.getElementById("theme").checked = "false";
    } else {
        document.getElementById("theme").checked = "true";
    }

    document.getElementById("yesButton").addEventListener("click", function () {
        localStorage.removeItem("activeUser");
        window.location.href = "index.html";
    });

    handleDarkMode();

    function handleDarkMode() {
        isDarkMode = localStorage.getItem("theme") === "true";

        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');

        document.getElementById("theme").checked = isDarkMode;
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