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
document.getElementById("title2").innerHTML = sessionStorage.getItem("post2Title")
document.getElementById("text2").innerHTML = sessionStorage.getItem("post2Content")
document.getElementById("title3").innerHTML = sessionStorage.getItem("post3Title")
document.getElementById("text3").innerHTML = sessionStorage.getItem("post3Content")