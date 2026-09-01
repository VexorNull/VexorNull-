document.addEventListener("DOMContentLoaded", () => {
    // Highlight Active Navigation Link Automatically
    const currentLocation = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll("nav ul li a, #navMenu a");

    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href");
        if (linkPath === currentLocation) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // Mobile Navigation Toggle Handler
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    // Scroll Reveal Intersection Observer for Cards
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll(".card").forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(card);
    });
});
