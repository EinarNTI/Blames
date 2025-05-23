function displayMenu() {
    var element = document.getElementById("glider");
    element.classList.toggle("glide1");
    element.classList.toggle("glide2");
}

document.getElementById("burgerButton").addEventListener("click", displayMenu);
document.getElementById("close").addEventListener("click", displayMenu);