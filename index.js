// Common interactions: mobile menu toggle + set year + highlight current nav item
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  const yearEls = document.querySelectorAll('#year');

  yearEls.forEach(e => e.textContent = new Date().getFullYear());

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      if (nav.style.display === 'flex') {
        nav.style.display = '';
      } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.gap = '8px';
        nav.style.background = 'rgba(20,25,24,0.9)';
        nav.style.padding = '12px';
        nav.style.borderRadius = '10px';
      }
    });
  }

  // set active nav link based on current pathname
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    const file = href.split('/').pop();
    if (file === path || (file === 'index.html' && (path === '' || path === 'index.html'))) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
});
const form = document.getElementById("contactForm");
const popup = document.getElementById("successPopup");
const closePopup = document.getElementById("closePopup");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop real submit

  const name = document.getElementById("userName").value.trim();
  const email = document.getElementById("userEmail").value.trim();
  const msg = document.getElementById("message").value.trim();

  if (name === "" || email === "" || msg === "") {
    alert("Please fill all fields.");
    return;
  }

  // Show popup
  popup.style.display = "flex";

  // Reset form
  form.reset();
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});
