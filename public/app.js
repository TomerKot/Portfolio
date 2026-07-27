document.addEventListener("DOMContentLoaded", () => {
  // --- State Variables ---
  let currentLang = localStorage.getItem("language") || "en";
  const validLanguages = ["en", "uk", "de"];
  if (!validLanguages.includes(currentLang)) {
    currentLang = "en";
  }

  // --- DOM Elements ---
  const header = document.getElementById("header");
  const nav = document.getElementById("nav");
  const mobileToggle = document.getElementById("mobile-toggle");
  const navLinks = document.querySelectorAll(".nav-link");
  const langButtons = document.querySelectorAll(".lang-btn");
  const contactForm = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");
  const formSubmitBtn = document.getElementById("form-submit-btn");

  // --- Localization Engine ---
  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;

    // Update all elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.getAttribute("data-i18n");
      if (translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });

    // Update all input placeholders with data-i18n-placeholder attribute
    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
      const key = element.getAttribute("data-i18n-placeholder");
      if (translations[lang][key]) {
        element.setAttribute("placeholder", translations[lang][key]);
      }
    });

    // Update lang switcher active states
    langButtons.forEach(btn => {
      if (btn.getAttribute("data-lang") === lang) {
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");
      } else {
        btn.classList.remove("active");
        btn.setAttribute("aria-selected", "false");
      }
    });
  }

  // Add click listeners to language switch buttons
  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      setLanguage(selectedLang);
      
      // Close mobile menu if open
      if (nav.classList.contains("active")) {
        toggleMobileMenu();
      }
    });
  });

  // Initialize Language
  setLanguage(currentLang);

  // --- Mobile Navigation Menu ---
  function toggleMobileMenu() {
    nav.classList.toggle("active");
    mobileToggle.classList.toggle("active");
    const isExpanded = mobileToggle.classList.contains("active");
    mobileToggle.setAttribute("aria-expanded", isExpanded);
    document.body.style.overflow = isExpanded ? "hidden" : "";
  }

  mobileToggle.addEventListener("click", toggleMobileMenu);

  // Close mobile navigation when clicking links
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("active")) {
        toggleMobileMenu();
      }
    });
  });

  // --- Scroll Actions (Header & Active Links) ---
  window.addEventListener("scroll", () => {
    // 1. Sticky header style
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // 2. Nav link active highlight state on scroll
    let currentSectionId = "";
    const scrollPosition = window.scrollY + 120; // offset for sticky nav

    document.querySelectorAll("section[id]").forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  });

  // --- Scroll Reveal Animations Fallback (IntersectionObserver) ---
  const supportsScrollTimeline = CSS.supports('(animation-timeline: view()) and (animation-range: entry)');
  if (!supportsScrollTimeline) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            // Optional: Unobserve after revealing to prevent repeated triggering
            // revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px" // triggers slightly before entering view
      }
    );

    // Apply observer to target sections and cards
    document.querySelectorAll(".reveal-observed").forEach(element => {
      revealObserver.observe(element);
    });
  }

  // --- Contact Form Handling & Modern Validations ---
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      // Simple visual check
      const nameInput = document.getElementById("form-name");
      const emailInput = document.getElementById("form-email");
      const messageInput = document.getElementById("form-message-text");

      if (!nameInput.value || !emailInput.value || !messageInput.value) {
        showFormStatus("error", translations[currentLang]["contact-error"] || "Please check your inputs.");
        return;
      }

      // Visual sending state
      formSubmitBtn.disabled = true;
      const originalText = formSubmitBtn.innerHTML;
      formSubmitBtn.innerHTML = `<span class="logo-terminal">></span> Sending...`;

      // Mock API call delay
      setTimeout(() => {
        formSubmitBtn.disabled = false;
        formSubmitBtn.innerHTML = originalText;
        
        // Clear form values
        contactForm.reset();
        
        // Show success status toast
        showFormStatus("success", translations[currentLang]["contact-success"] || "Thank you! Your message has been sent.");
      }, 1200);
    });
  }

  function showFormStatus(status, text) {
    formMessage.className = `form-message ${status}`;
    formMessage.textContent = text;
    
    // Clear message after 5 seconds
    setTimeout(() => {
      formMessage.style.display = "none";
      formMessage.className = "form-message";
    }, 5000);
  }
});
