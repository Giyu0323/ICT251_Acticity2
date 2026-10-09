// ICT251 Activity 3 - Contact Form Validation

const contactForm = document.getElementById("contact-form");
console.log("Contact form found:", contactForm);

const formFeedback = document.getElementById("form-feedback");

console.log("Feedback element found:", formFeedback);
const formPreview = document.getElementById("form-preview");

console.log("Preview element found:", formPreview);
console.log("Registering submit listener...");


contactForm.addEventListener("submit", function (event) {
    console.log("Form submission detected!"); 
    event.preventDefault();

    formFeedback.textContent = "";
    formPreview.hidden = true;

    const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const topic = document.getElementById("topic").value;
const message = document.getElementById("message").value.trim();

if (name === "" || email === "" || message === "") {
    formFeedback.textContent = "Please fill in your name, email address, and message.";
    formPreview.hidden = true;
    return;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(email)) {
    formFeedback.textContent = "Please enter a valid email address.";
    formPreview.hidden = true;
    return;
}

document.getElementById("preview-name").textContent = name;
document.getElementById("preview-email").textContent = email;
document.getElementById("preview-topic").textContent =
    document.getElementById("topic").selectedOptions[0].textContent;
document.getElementById("preview-message").textContent = message;

formFeedback.textContent = "Your details have been validated successfully. Review your message below.";
formPreview.hidden = false;
});
console.log("JavaScript is working!");

// Theme Switch
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Switch to Light Mode";
    } else {
        themeToggle.textContent = "Switch to Dark Mode";
    }
});

/* Project Search and Filter */
const projectSearch = document.getElementById("project-search");
const projectCards = document.querySelectorAll(".project-card");
const projectSearchFeedback = document.getElementById(
    "project-search-feedback"
);

projectSearch.addEventListener("input", function () {
    const searchTerm = projectSearch.value.toLowerCase().trim();
    let visibleProjects = 0;

    projectCards.forEach(function (card) {
        const projectContent = card.textContent.toLowerCase();

        if (projectContent.includes(searchTerm)) {
            card.style.display = "";
            visibleProjects++;
        } else {
            card.style.display = "none";
        }
    });

    if (visibleProjects === 0) {
        projectSearchFeedback.textContent = "No projects found. Try another search.";
    } else {
        projectSearchFeedback.textContent =
            visibleProjects + (visibleProjects === 1
                ? " project found."
                : " projects found.");
    }
});

/* Photo Gallery Viewer */
const galleryButtons = document.querySelectorAll(".gallery-image-button");
const galleryViewer = document.getElementById("gallery-viewer");
const galleryLargeImage = document.getElementById("gallery-large-image");
const galleryCaption = document.getElementById("gallery-caption");
const galleryClose = document.getElementById("gallery-close");

galleryButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const image = button.querySelector("img");
        const figure = button.closest("figure");
        const caption = figure.querySelector("figcaption");

        galleryLargeImage.src = image.src;
        galleryLargeImage.alt = image.alt;
        galleryCaption.textContent = caption.textContent;

        galleryViewer.hidden = false;
        galleryClose.focus();
    });
});

galleryClose.addEventListener("click", function () {
    galleryViewer.hidden = true;
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !galleryViewer.hidden) {
        galleryViewer.hidden = true;
    }
});
