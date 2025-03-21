document.getElementById("postButton").addEventListener("click", function () {
    if (sessionStorage.getItem("post1Title") === null) {
        sessionStorage.setItem("post1Title", document.getElementById("postTitle").value)
        sessionStorage.setItem("post1Content", document.getElementById("postContent").value)
        sessionStorage.setItem("post1politics", document.getElementById("politics").checked)
        sessionStorage.setItem("post1memes", document.getElementById("memes").checked)
        sessionStorage.setItem("post1technology", document.getElementById("technology").checked)
    } else if (sessionStorage.getItem("post2Title") === null) {
        sessionStorage.setItem("post2Title", document.getElementById("postTitle").value)
        sessionStorage.setItem("post2Content", document.getElementById("postContent").value)
        sessionStorage.setItem("post2politics", document.getElementById("politics").checked)
        sessionStorage.setItem("post2memes", document.getElementById("memes").checked)
        sessionStorage.setItem("post2technology", document.getElementById("technology").checked)
    } else if (sessionStorage.getItem("post3Title") === null) {
        sessionStorage.setItem("post3Title", document.getElementById("postTitle").value)
        sessionStorage.setItem("post3Content", document.getElementById("postContent").value)
        sessionStorage.setItem("post3politics", document.getElementById("politics").checked)
        sessionStorage.setItem("post3memes", document.getElementById("memes").checked)
        sessionStorage.setItem("post3technology", document.getElementById("technology").checked)
    } else {
        sessionStorage.setItem("post1Title", document.getElementById("postTitle").value)
        sessionStorage.setItem("post1Content", document.getElementById("postContent").value)
        sessionStorage.setItem("post1politics", document.getElementById("politics").checked)
        sessionStorage.setItem("post1memes", document.getElementById("memes").checked)
        sessionStorage.setItem("post1technology", document.getElementById("technology").checked)
    }
});