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