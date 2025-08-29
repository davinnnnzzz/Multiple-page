// === Smooth Scroll untuk link nav ===
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // kalau link menuju halaman lain (misal about.html), jangan override
    if (this.getAttribute('href').includes(".html")) return;

    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// === Efek reveal pas scroll ===
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}
window.addEventListener('scroll', revealOnScroll);
// jalankan sekali di awal
revealOnScroll();

// === Toggle Menu Hamburger ===
const toggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("#nav-menu");

if (toggle) {
  toggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}
