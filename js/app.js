/**
 * REVITALIZE ROSTO E CORPO — APLICAÇÃO PRINCIPAL
 * Interatividade de agendamento, navegação, acordion acessível e WhatsApp.
 */

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initMobileMenu();
  initWhatsAppBindings();
  initFaqAccordion();
  initBookingModal();
  initScrollAnimations();
});

/**
 * Controle de scroll do Header
 */
function initHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/**
 * Menu Mobile com Acessibilidade e Trava de Scroll
 */
function initMobileMenu() {
  const toggleBtn = document.querySelector(".mobile-menu-btn");
  const nav = document.querySelector(".site-nav");
  const navLinks = document.querySelectorAll(".site-nav .nav-link");

  if (!toggleBtn || !nav) return;

  const toggleMenu = (open) => {
    const isOpen = open !== undefined ? open : !nav.classList.contains("open");
    toggleBtn.classList.toggle("active", isOpen);
    nav.classList.toggle("open", isOpen);
    toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.style.overflow = isOpen ? "hidden" : "";
  };

  toggleBtn.addEventListener("click", () => toggleMenu());

  navLinks.forEach(link => {
    link.addEventListener("click", () => toggleMenu(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("open")) {
      toggleMenu(false);
    }
  });
}

/**
 * Conexão de todos os botões com o WhatsApp oficial
 */
function initWhatsAppBindings() {
  const whatsappElements = document.querySelectorAll("[data-whatsapp-context]");

  whatsappElements.forEach(el => {
    const context = el.getAttribute("data-whatsapp-context");
    
    // Se for link direto para o WhatsApp
    if (el.tagName === "A" && !el.classList.contains("trigger-modal")) {
      el.href = window.clinicConfig.getWhatsAppLink(context);
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    }
  });

  // Atualiza também os botões de rodapé e botão flutuante
  const floatBtn = document.querySelector(".whatsapp-float");
  if (floatBtn) {
    floatBtn.href = window.clinicConfig.getWhatsAppLink("general");
    floatBtn.target = "_blank";
    floatBtn.rel = "noopener noreferrer";
  }
}

/**
 * Acordeão do FAQ com Acessibilidade (WAI-ARIA)
 */
function initFaqAccordion() {
  const items = document.querySelectorAll(".faq-item");

  items.forEach(item => {
    const trigger = item.querySelector(".faq-trigger");
    const content = item.querySelector(".faq-content");

    if (!trigger || !content) return;

    trigger.addEventListener("click", () => {
      const isExpanded = trigger.getAttribute("aria-expanded") === "true";

      // Fecha outros itens para foco editorial limpo
      items.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          const otherTrigger = otherItem.querySelector(".faq-trigger");
          const otherContent = otherItem.querySelector(".faq-content");
          if (otherTrigger) otherTrigger.setAttribute("aria-expanded", "false");
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      // Alterna estado atual
      if (isExpanded) {
        item.classList.remove("active");
        trigger.setAttribute("aria-expanded", "false");
        content.style.maxHeight = null;
      } else {
        item.classList.add("active");
        trigger.setAttribute("aria-expanded", "true");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
}

/**
 * Modal de Agendamento Inteligente com Redirecionamento Contextualizado
 */
function initBookingModal() {
  const modalBackdrop = document.querySelector(".modal-backdrop");
  const modalTriggers = document.querySelectorAll(".trigger-modal");
  const closeBtn = document.querySelector(".modal-close");
  const bookingForm = document.querySelector("#booking-form");
  const treatmentSelect = document.querySelector("#modal-treatment");

  if (!modalBackdrop) return;

  const openModal = (defaultTreatment = "") => {
    if (treatmentSelect && defaultTreatment) {
      let matchedIndex = -1;
      for (let i = 0; i < treatmentSelect.options.length; i++) {
        const optVal = treatmentSelect.options[i].value.toLowerCase();
        const searchVal = defaultTreatment.toLowerCase();
        if (optVal === searchVal || optVal.includes(searchVal) || searchVal.includes(optVal)) {
          matchedIndex = i;
          break;
        }
      }
      if (matchedIndex !== -1) {
        treatmentSelect.selectedIndex = matchedIndex;
      } else {
        const newOpt = document.createElement("option");
        newOpt.value = defaultTreatment;
        newOpt.textContent = defaultTreatment;
        treatmentSelect.appendChild(newOpt);
        treatmentSelect.value = defaultTreatment;
      }
    }
    modalBackdrop.classList.add("is-open");
    modalBackdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modalBackdrop.classList.remove("is-open");
    modalBackdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  modalTriggers.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const treatment = btn.getAttribute("data-treatment") || "";
      openModal(treatment);
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop.classList.contains("is-open")) {
      closeModal();
    }
  });

  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nome = document.querySelector("#modal-name")?.value.trim() || "";
      const tratamento = document.querySelector("#modal-treatment")?.value || "Avaliação Personalizada";
      const turno = document.querySelector("#modal-period")?.value || "Qualquer horário";
      const mensagemExtra = document.querySelector("#modal-notes")?.value.trim() || "";

      let textoWhatsApp = `Olá! Gostaria de agendar uma avaliação na Revitalize Rosto e Corpo.`;
      if (nome) textoWhatsApp += `\nMeu nome é *${nome}*.`;
      textoWhatsApp += `\nTratamento de interesse: *${tratamento}*.`;
      textoWhatsApp += `\nMelhor período: *${turno}*.`;
      if (mensagemExtra) textoWhatsApp += `\nObservação: ${mensagemExtra}`;

      const url = window.clinicConfig.getWhatsAppLink(textoWhatsApp);
      window.open(url, "_blank", "noopener,noreferrer");
      closeModal();
    });
  }
}

/**
 * Animações de entrada discretas com IntersectionObserver
 */
function initScrollAnimations() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const animElements = document.querySelectorAll(
    ".section-header, .card-treatment, .editorial-card-featured, .spec-box, .gallery-item, .testimonial-card"
  );

  animElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    el.style.transition = "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px"
  });

  animElements.forEach(el => observer.observe(el));
}
