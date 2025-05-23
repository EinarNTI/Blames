document.documentElement.setAttribute('data-theme', localStorage.getItem("theme") === "true" ? "dark" : "light");

if (localStorage.getItem("activeUser") == null || localStorage.getItem("activeUser") == "") {
    alert("You are not logged in. Redirecting to login page.");
    window.location.href = "index.html";
}

function validateForm() {
    const title = document.getElementById("postTitle").value.trim();
    const content = document.getElementById("postContent").value.trim();
    const activeUser = localStorage.getItem("activeUser");

    if (activeUser === "guest" || activeUser === "Guest") {
        alert("You are logged in as a guest. You cannot create a post.");
        return false;
    }

    if (title === "" || content === "") {
        alert("Please fill in all fields.");
        return false;
    }

    return true;
}

document.getElementById("postButton").addEventListener("click", function () {
    if (!validateForm()) {
        return;
    }

    const button = this;
    const originalContent = button.innerHTML;
    button.innerHTML = '<span>Posting...</span><i class="material-icons">hourglass_empty</i>';
    button.disabled = true;

    setTimeout(() => {
        const title = document.getElementById("postTitle").value.trim();
        const content = document.getElementById("postContent").value.trim();
        const activeUser = localStorage.getItem("activeUser");

        let postSlot = null;
        for (let i = 1; i <= 3; i++) {
            if (sessionStorage.getItem(`post${i}Title`) === null) {
                postSlot = i;
                break;
            }
        }

        if (postSlot === null) {
            postSlot = 1;
        }

        sessionStorage.setItem(`post${postSlot}Title`, title);
        sessionStorage.setItem(`post${postSlot}Content`, content);
        sessionStorage.setItem(`post${postSlot}politics`, document.getElementById("politics").checked);
        sessionStorage.setItem(`post${postSlot}memes`, document.getElementById("memes").checked);
        sessionStorage.setItem(`post${postSlot}technology`, document.getElementById("technology").checked);
        sessionStorage.setItem(`post${postSlot}User`, activeUser);

        button.innerHTML = '<span>Posted!</span><i class="material-icons">check</i>';
        button.style.background = "linear-gradient(135deg, #10b981, #059669)";

        setTimeout(() => {
            window.location.href = "Main.html";
        }, 1000);

    }, 800);
});

document.addEventListener('DOMContentLoaded', function () {

    const textarea = document.getElementById("postContent");
    if (textarea) {
        textarea.addEventListener('input', function () {
            this.style.height = 'auto';
            this.style.height = Math.max(this.scrollHeight, 120) + 'px';
        });
    }

    const titleInput = document.getElementById("postTitle");
    if (titleInput) {
        titleInput.addEventListener('input', function () {
            const maxLength = 100;
            const currentLength = this.value.length;

            if (currentLength > maxLength * 0.8) {
                this.style.borderColor = currentLength > maxLength ? '#ef4444' : '#f59e0b';
            } else {
                this.style.borderColor = '';
            }
        });
    }

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const label = document.querySelector(`label[for="${this.id}"]`);
            if (label) {
                label.style.fontWeight = this.checked ? '600' : '500';
            }
        });
    });
});