// SMOOTH SCROLLING FOR NAV LINKS
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// FORM VALIDATION + FAKE SUBMIT
const form = document.getElementById('contactForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const userMessage = document.getElementById('message').value.trim();

    // SIMPLE VALIDATION
    if (name === "" || email === "" || userMessage === "") {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
        return;
    }

    // EMAIL FORMAT CHECK
    if (!email.includes("@")) {
        message.textContent = "Please enter a valid email.";
        message.style.color = "red";
        return;
    }

    // SUCCESS MESSAGE
    message.textContent = "Message sent successfully! 🎉";
    message.style.color = "green";

    // RESET FORM
    form.reset();
});