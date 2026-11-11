// The business number is supplied by the owner; verify WhatsApp access before publishing.
const WHATSAPP_NUMBER = "14372542622";
const translations = window.BOUNCELAND_TRANSLATIONS;
const packageNameKeys = {
  one: "packageOneName",
  two: "packageTwoName",
  three: "packageThreeName",
  four: "packageFourName",
  five: "packageFiveName",
  six: "packageSixName",
  custom: "customName"
};

const languageSelect = document.querySelector("#language-select");
const bookingForm = document.querySelector("#booking-form");
const formError = document.querySelector("#form-error");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");
const yearLabel = document.querySelector("#year");

let currentLanguage = "en";

// Update text, accessible labels, and placeholders using the selected translation.
function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = language === "es"
    ? "BOUNCELAND Playground | Alquiler de juegos blandos"
    : "BOUNCELAND Playground | Soft Play Rentals";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translation = translations[language][element.dataset.i18n];
    if (translation) element.textContent = translation;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const translation = translations[language][element.dataset.i18nHtml];
    if (translation) element.innerHTML = translation;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = translations[language][element.dataset.i18nPlaceholder];
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", translations[language][element.dataset.i18nAria]);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.alt = translations[language][element.dataset.i18nAlt];
  });

  document.querySelectorAll("[data-whatsapp-package]").forEach((link) => {
    const packageName = translations[language][packageNameKeys[link.dataset.whatsappPackage]];
    const message = `${translations[language].availabilityMessage}: ${packageName}.`;
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    link.setAttribute("aria-label", `${translations[language].availabilityButton}: ${packageName}`);
  });
}

languageSelect.addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.textContent = isExpanded ? translations[currentLanguage].menuOpen : translations[currentLanguage].menuClose;
  mainNav.classList.toggle("is-open", !isExpanded);
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = translations[currentLanguage].menuOpen;
  });
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formError.hidden = true;

  const requiredFields = ["name", "date", "city", "postal", "package", "time"];
  const missingField = requiredFields.find((field) => !String(bookingForm.elements[field].value).trim());
  if (missingField) {
    formError.textContent = translations[currentLanguage].errorRequired;
    formError.hidden = false;
    bookingForm.elements[missingField].focus();
    return;
  }

  if (!bookingForm.checkValidity()) {
    formError.textContent = translations[currentLanguage].errorInvalid;
    formError.hidden = false;
    requiredFields.find((field) => {
      if (bookingForm.elements[field].checkValidity()) return false;
      bookingForm.elements[field].focus();
      return true;
    });
    return;
  }

  const formData = new FormData(bookingForm);
  const eventDate = String(formData.get("date"));
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (new Date(`${eventDate}T00:00:00`) < today) {
    formError.textContent = translations[currentLanguage].errorPastDate;
    formError.hidden = false;
    bookingForm.elements.date.focus();
    return;
  }

  const messages = currentLanguage === "es"
    ? [
        "Hola, quisiera consultar sobre un alquiler de juegos blandos.",
        `Nombre: ${formData.get("name")}`,
        `Fecha del evento: ${eventDate}`,
        `Ciudad: ${formData.get("city")}`,
        `Código postal: ${formData.get("postal")}`,
        `Paquete: ${bookingForm.elements.package.selectedOptions[0].textContent}`,
        `Hora de inicio del evento: ${formData.get("time")}`,
        `Notas: ${formData.get("notes") || "Ninguna"}`,
        "Entiendo que este mensaje es una consulta y no una reserva confirmada."
      ]
    : [
        "Hello, I’d like to ask about a soft play rental.",
        `Name: ${formData.get("name")}`,
        `Event date: ${eventDate}`,
        `City: ${formData.get("city")}`,
        `Postal code: ${formData.get("postal")}`,
        `Package: ${bookingForm.elements.package.selectedOptions[0].textContent}`,
        `Event start time: ${formData.get("time")}`,
        `Notes: ${formData.get("notes") || "None"}`,
        "I understand this is an inquiry and not a confirmed booking."
      ];

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messages.join("\n"))}`;
  const whatsappWindow = window.open(whatsappUrl, "_blank");

  if (!whatsappWindow) {
    formError.textContent = translations[currentLanguage].errorWhatsApp;
    formError.hidden = false;
  } else {
    whatsappWindow.opener = null;
  }
});

yearLabel.textContent = new Date().getFullYear();
setLanguage("en");
