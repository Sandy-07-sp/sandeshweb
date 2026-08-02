// =========================
// Typing Animation
// =========================

const words = [
  "IT Engineering Student",
  "Cyber Security Enthusiast",
  "Web Developer",
  "Python Programmer",
  "AI Enthusiast",
  "Networking Learner"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingElement.textContent = currentWord.substring(0, charIndex++);
        
        if (charIndex > currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typingElement.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);

}

typeEffect();


// =========================
// Smooth Scrolling
// =========================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// =========================
// Active Navigation
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// =========================
// Scroll Reveal
// =========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


// =========================
// Hero Parallax Effect
// =========================

const profile = document.querySelector(".profile-ring");

window.addEventListener("mousemove", e => {

    if (!profile) return;

    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    profile.style.transform =
        `translate(${x}px, ${y}px)`;

});


// =========================
// Button Glow Effect
// =========================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.boxShadow =
            "0 0 30px rgba(76,201,240,.7)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.boxShadow =
            "0 10px 25px rgba(76,201,240,.25)";

    });

});


// =========================
// Profile Tilt Effect
// =========================

if (profile) {

    profile.addEventListener("mousemove", e => {

        const rect = profile.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        profile.style.transform =

        `rotateY(${(x - rect.width / 2) / 15}deg)
         rotateX(${-(y - rect.height / 2) / 15}deg)`;

    });

    profile.addEventListener("mouseleave", () => {

        profile.style.transform =
            "rotateY(0deg) rotateX(0deg)";

    });

}