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

// Select the dark/light mode button from the HTML
const themeButton = document.querySelector(".theme-button");

// Check if the user already saved a theme before
const savedTheme = localStorage.getItem("theme");

// When the page loads, apply the saved theme
if (savedTheme === "dark") {
    // Add dark mode class to the body
    document.body.classList.add("dark-mode");

    // Change the button icon to sun because clicking it will switch back to light mode
    themeButton.textContent = "☀️";

    // Accessibility label for screen readers
    themeButton.setAttribute("aria-label", "Switch to light mode");
} else {
    // If no saved theme exists, or the saved theme is light, use light mode
    document.body.classList.remove("dark-mode");

    // Change the button icon to moon because clicking it will switch to dark mode
    themeButton.textContent = "🌙";

    // Accessibility label for screen readers
    themeButton.setAttribute("aria-label", "Switch to dark mode");
}

// When the user clicks the theme button
themeButton.addEventListener("click", function () {
    // Toggle dark-mode class on the body
    document.body.classList.toggle("dark-mode");

    // Check if dark mode is currently active
    if (document.body.classList.contains("dark-mode")) {
        // Update button icon
        themeButton.textContent = "☀️";

        // Update accessibility label
        themeButton.setAttribute("aria-label", "Switch to light mode");

        // Save the user's choice in the browser
        localStorage.setItem("theme", "dark");
    } else {
        // Update button icon
        themeButton.textContent = "🌙";

        // Update accessibility label
        themeButton.setAttribute("aria-label", "Switch to dark mode");

        // Save the user's choice in the browser
        localStorage.setItem("theme", "light");
    }
});
