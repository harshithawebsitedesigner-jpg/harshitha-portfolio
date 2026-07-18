// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Close mobile menu after clicking nav link
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
// Contact Form
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been received.");
    contactForm.reset();
  });
}
// Footer Year
const footerYear = document.querySelector("#footerYear");

if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}
// Resume Download Modal
const resumeBtn = document.getElementById("resumeBtn");
const resumeModal = document.getElementById("resumeModal");
const resumeClose = document.getElementById("resumeClose");
const resumeForm = document.getElementById("resumeForm");

if (resumeBtn && resumeModal) {
  resumeBtn.onclick = function () {
    resumeModal.classList.add("active");
  };
}

if (resumeClose && resumeModal) {
  resumeClose.onclick = function () {
    resumeModal.classList.remove("active");
  };
}

if (resumeForm) {
  resumeForm.onsubmit = function (e) {
    e.preventDefault();

    window.open("Harshitha CV 2026.pdf", "_blank");

    resumeForm.reset();
    resumeModal.classList.remove("active");
  };
}
// Service Read More Popup
const readMoreBtns = document.querySelectorAll(".read-more-btn");
const servicePopup = document.querySelector("#servicePopup");
const servicePopupClose = document.querySelector("#servicePopupClose");
const servicePopupTitle = document.querySelector("#servicePopupTitle");
const servicePopupList = document.querySelector("#servicePopupList");

readMoreBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const title = btn.getAttribute("data-title");
    const points = btn.getAttribute("data-points").split("|");

    servicePopupTitle.textContent = title;
    servicePopupList.innerHTML = "";

    points.forEach((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      servicePopupList.appendChild(li);
    });

    servicePopup.classList.add("active");
  });
});

if (servicePopupClose) {
  servicePopupClose.addEventListener("click", () => {
    servicePopup.classList.remove("active");
  });
}

if (servicePopup) {
  servicePopup.addEventListener("click", (e) => {
    if (e.target === servicePopup) {
      servicePopup.classList.remove("active");
    }
  });
}
