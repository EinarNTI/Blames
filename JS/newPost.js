if (localStorage.getItem("activeUser") == null) {
    alert("You are not logged in. Redirecting to login page.");
    window.location.href = "index.html";
}

document.getElementById("postButton").addEventListener("click", function () {
    if (sessionStorage.getItem("post1Title") === null) {
        sessionStorage.setItem("post1Title", document.getElementById("postTitle").value)
        sessionStorage.setItem("post1Content", document.getElementById("postContent").value)
        sessionStorage.setItem("post1politics", document.getElementById("politics").checked)
        sessionStorage.setItem("post1memes", document.getElementById("memes").checked)
        sessionStorage.setItem("post1technology", document.getElementById("technology").checked)
        sessionStorage.setItem("post1User", localStorage.getItem("activeUser"))
    } else if (sessionStorage.getItem("post2Title") === null) {
        sessionStorage.setItem("post2Title", document.getElementById("postTitle").value)
        sessionStorage.setItem("post2Content", document.getElementById("postContent").value)
        sessionStorage.setItem("post2politics", document.getElementById("politics").checked)
        sessionStorage.setItem("post2memes", document.getElementById("memes").checked)
        sessionStorage.setItem("post2technology", document.getElementById("technology").checked)
        sessionStorage.setItem("post2User", localStorage.getItem("activeUser"))
    } else if (sessionStorage.getItem("post3Title") === null) {
        sessionStorage.setItem("post3Title", document.getElementById("postTitle").value)
        sessionStorage.setItem("post3Content", document.getElementById("postContent").value)
        sessionStorage.setItem("post3politics", document.getElementById("politics").checked)
        sessionStorage.setItem("post3memes", document.getElementById("memes").checked)
        sessionStorage.setItem("post3technology", document.getElementById("technology").checked)
        sessionStorage.setItem("post3User", localStorage.getItem("activeUser"))
    } else {
        sessionStorage.setItem("post1Title", document.getElementById("postTitle").value)
        sessionStorage.setItem("post1Content", document.getElementById("postContent").value)
        sessionStorage.setItem("post1politics", document.getElementById("politics").checked)
        sessionStorage.setItem("post1memes", document.getElementById("memes").checked)
        sessionStorage.setItem("post1technology", document.getElementById("technology").checked)
        sessionStorage.setItem("post1User", localStorage.getItem("activeUser"))
    }
    window.location.href = "Main.html";
});

document.body.addEventListener("click", handleDarkMode);
handleDarkMode();

function handleDarkMode() {
    if (localStorage.getItem("theme") == "true") {
        document.body.style.backgroundColor = "#1a1a1a";
        document.querySelectorAll("h3").forEach(h3 => {
            h3.style.color = "white";
        });
        document.querySelectorAll("h2").forEach(p => {
            p.style.color = "white";
        });
        document.querySelectorAll("p").forEach(p => {
            p.style.color = "white";
        });
        document.getElementById("burgerButton").style.color = "white";
        document.getElementsByTagName("footer")[0].style.backgroundColor = "black";
        document.querySelectorAll("footer a").forEach(a => {
            a.style.color = "white";
        });
    }
}