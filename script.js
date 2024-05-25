
const menuLinks = document.querySelectorAll('nav a');

menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSection = document.getElementById(event.target.getAttribute('href').slice(1));
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});