if (localStorage.getItem("activeUser") == null || localStorage.getItem("activeUser") == "") {
    alert("You are not logged in. Redirecting to login page.");
    window.location.href = "index.html";
}

function switchGrid() {
    var element = document.getElementById("Main")
    element.classList.remove("mainGrid1")
    element.classList.add("mainGrid2")
}

function switchGridBack() {
    var element = document.getElementById("Main")
    element.classList.add("mainGrid1")
    element.classList.remove("mainGrid2")
}

if (window.innerWidth > 768) {
    switchGrid();
}
else {
    switchGridBack();
}

window.onresize = () => {
    if (window.innerWidth > 768) {
        switchGrid();
    }
    else {
        switchGridBack();
    }
}

document.getElementById("title1").innerHTML = sessionStorage.getItem("post1Title")
document.getElementById("text1").innerHTML = sessionStorage.getItem("post1Content")
document.getElementById("user1").innerHTML = sessionStorage.getItem("post1User")
document.getElementById("title2").innerHTML = sessionStorage.getItem("post2Title")
document.getElementById("text2").innerHTML = sessionStorage.getItem("post2Content")
document.getElementById("user2").innerHTML = sessionStorage.getItem("post2User")
document.getElementById("title3").innerHTML = sessionStorage.getItem("post3Title")
document.getElementById("text3").innerHTML = sessionStorage.getItem("post3Content")
document.getElementById("user3").innerHTML = sessionStorage.getItem("post3User")

if (sessionStorage.getItem("post1Content") == "" || sessionStorage.getItem("post1Content") == null) {
    document.getElementById("article1").style.display = "none";
}
if (sessionStorage.getItem("post2Content") == "" || sessionStorage.getItem("post2Content") == null) {
    document.getElementById("article2").style.display = "none";
}
if (sessionStorage.getItem("post3Content") == "" || sessionStorage.getItem("post3Content") == null) {
    document.getElementById("article3").style.display = "none";
}

var togglePolitics = false;
var toggleMemes = false;
var toggleTechnology = false;

document.getElementById("politics").addEventListener("click", function () {
    togglePolitics = !togglePolitics
    toggleMemes = false
    toggleTechnology = false
    if (togglePolitics) {
        if (sessionStorage.getItem("post1politics") != "true") {
            document.getElementById("article1").style.display = "none";
        } else {
            document.getElementById("article1").style.display = "block";
        }
        if (sessionStorage.getItem("post2politics") != "true") {
            document.getElementById("article2").style.display = "none";
        } else {
            document.getElementById("article2").style.display = "block";
        }
        if (sessionStorage.getItem("post3politics") != "true") {
            document.getElementById("article3").style.display = "none";
        } else {
            document.getElementById("article3").style.display = "block";
        }
    } else {
        if (sessionStorage.getItem("post1Content") != "" && sessionStorage.getItem("post1Content") != null) {
            document.getElementById("article1").style.display = "block";
        }
        if (sessionStorage.getItem("post2Content") != "" && sessionStorage.getItem("post2Content") != null) {
            document.getElementById("article2").style.display = "block";
        }
        if (sessionStorage.getItem("post3Content") != "" && sessionStorage.getItem("post3Content") != null) {
            document.getElementById("article3").style.display = "block";
        }
    }
});

document.getElementById("memes").addEventListener("click", function () {
    toggleMemes = !toggleMemes
    toggleTechnology = false
    togglePolitics = false
    if (toggleMemes) {
        if (sessionStorage.getItem("post1memes") != "true") {
            document.getElementById("article1").style.display = "none";
        } else {
            document.getElementById("article1").style.display = "block";
        }
        if (sessionStorage.getItem("post2memes") != "true") {
            document.getElementById("article2").style.display = "none";
        } else {
            document.getElementById("article2").style.display = "block";
        }
        if (sessionStorage.getItem("post3memes") != "true") {
            document.getElementById("article3").style.display = "none";
        } else {
            document.getElementById("article3").style.display = "block";
        }
    } else {
        if (sessionStorage.getItem("post1Content") != "" && sessionStorage.getItem("post1Content") != null) {
            document.getElementById("article1").style.display = "block";
        }
        if (sessionStorage.getItem("post2Content") != "" && sessionStorage.getItem("post2Content") != null) {
            document.getElementById("article2").style.display = "block";
        }
        if (sessionStorage.getItem("post3Content") != "" && sessionStorage.getItem("post3Content") != null) {
            document.getElementById("article3").style.display = "block";
        }
    }
});

document.getElementById("technology").addEventListener("click", function () {
    toggleTechnology = !toggleTechnology
    toggleMemes = false
    togglePolitics = false
    if (toggleTechnology) {
        if (sessionStorage.getItem("post1technology") != "true") {
            document.getElementById("article1").style.display = "none";
        } else {
            document.getElementById("article1").style.display = "block";
        }
        if (sessionStorage.getItem("post2technology") != "true") {
            document.getElementById("article2").style.display = "none";
        } else {
            document.getElementById("article2").style.display = "block";
        }
        if (sessionStorage.getItem("post3technology") != "true") {
            document.getElementById("article3").style.display = "none";
        } else {
            document.getElementById("article3").style.display = "block";
        }
    }
    else {
        if (sessionStorage.getItem("post1Content") != "" && sessionStorage.getItem("post1Content") != null) {
            document.getElementById("article1").style.display = "block";
        }
        if (sessionStorage.getItem("post2Content") != "" && sessionStorage.getItem("post2Content") != null) {
            document.getElementById("article2").style.display = "block";
        }
        if (sessionStorage.getItem("post3Content") != "" && sessionStorage.getItem("post3Content") != null) {
            document.getElementById("article3").style.display = "block";
        }
    }
});

function handleDarkMode() {
    if (localStorage.getItem("theme") == "true") {
        document.body.style.backgroundColor = "#1a1a1a";
        document.getElementById("article1").style.backgroundColor = "black";
        document.getElementById("article2").style.backgroundColor = "black";
        document.getElementById("article3").style.backgroundColor = "black";
        document.getElementById("article1").style.color = "white";
        document.getElementById("article2").style.color = "white";
        document.getElementById("article3").style.color = "white";
        document.querySelectorAll("h3").forEach(h3 => {
            h3.style.color = "white";
        });
        document.getElementById("burgerButton").style.color = "white";
        document.getElementsByTagName("footer")[0].style.backgroundColor = "black";
        document.querySelectorAll("footer a").forEach(a => {
            a.style.color = "white";
        });
        document.getElementById("noPosts").style.color = "white";
    }
}
handleDarkMode();

if (sessionStorage.getItem("post1Content") == null && sessionStorage.getItem("post2Content") == null && sessionStorage.getItem("post3Content") == null) {
    document.getElementById("noPosts").style.display = "flex";
}