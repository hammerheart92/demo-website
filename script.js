const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

function closeMenu() {
    navLinks.classList.remove("active");
    menuButton.textContent = "☰";
    menuButton.setAttribute("aria-label", "Open navigation menu");
}

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuButton.textContent = "✕";
        menuButton.setAttribute("aria-label", "Close navigation menu");
    } else {
        closeMenu();
    }
});

navItems.forEach(function (link) {
    link.addEventListener("click", function () {
        closeMenu();
    });
});

const nameInput = document.querySelector("#nameInput");
const emailInput = document.querySelector("#emailInput");
const messageInput = document.querySelector("#messageInput");
const formMessage = document.querySelector("#formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "Thank you! Your message has been received.";
    formMessage.style.color = "green";

    contactForm.reset();
});

const themeButton = document.querySelector(".theme-button");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️";
        themeButton.setAttribute("aria-label", "Switch to light mode");
    } else {
        themeButton.textContent = "🌙";
        themeButton.setAttribute("aria-label", "Switch to dark mode");
    }
});
