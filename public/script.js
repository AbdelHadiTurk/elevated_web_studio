/* =========================================================
   ELEVATED WEB STUDIO — script.js
   ---------------------------------------------------------
   EDIT YOUR CONTENT HERE:
   - CONTACT   : email / whatsapp / instagram links
   - SERVICES  : service cards
   - PROJECTS  : portfolio items
   - SOCIALS   : social media accounts
   ========================================================= */

/* ---------------------------------------------------------
   1. CONTACT DETAILS  (replace the placeholders)
--------------------------------------------------------- */
const CONTACT = {
  email: "your.digital.web.creator@gmail.com",          // TODO: replace with your email
  whatsapp: "+961 81 107 890",                   // TODO: replace with your number
  whatsappUrl: "https://wa.me/96181107890",      // TODO: replace with your wa.me link
  instagram: "@elevated_web_studio",
  instagramUrl: "https://www.instagram.com/elevated_web_studio/",
};

/* ---------------------------------------------------------
   2. SERVICES
--------------------------------------------------------- */
const SERVICES = [
  { icon: "layout",  title: "Web Design",           text: "Modern interfaces designed around your brand and goals." },
  { icon: "code",    title: "Web Development",      text: "Fast, responsive, and functional websites." },
  { icon: "cart",    title: "E-Commerce",           text: "Modern online stores designed for a smooth customer experience." },
  { icon: "spark",   title: "UI/UX",                text: "Simple and intuitive interfaces that are easy to use." },
  { icon: "briefcase", title: "Business Websites",  text: "Professional websites that establish credibility and help businesses grow online." },
  { icon: "puzzle",  title: "Custom Web Solutions", text: "Digital solutions built around specific business requirements." },
];

/* ---------------------------------------------------------
   3. PROJECTS
   category must be one of: "Websites" | "E-Commerce" | "Web Apps"
--------------------------------------------------------- */
const PROJECTS = [
  {
    name: "Florentino",
    category: "E-Commerce",
    label: "E-Commerce",
    description: "A modern women's fashion e-commerce website designed to showcase products and simplify online ordering.",
    technologies: ["HTML", "CSS", "JavaScript", "react"],
    image: "public/florentino.PNG",
    website: "https://abdelhaditurk.github.io/florentino-shop",
  },
  {
    name: "Varietes",
    category: "E-Commerce",
    label: "E-Commerce",
    description: "A modern e-commerce website designed to showcase products and simplify online ordering.",
    technologies: ["HTML", "CSS", "JavaScript", "react"],
    image: "public/varietes.jpg",
    website: "https://maison-variete.vercel.app",
  },
  
  {
    name: "BKcandle",
    category: "E-Commerce",
    label: "E-Commerce",
    description: "A modern e-commerce website designed to showcase products and simplify online ordering.",
    technologies: ["HTML", "CSS", "JavaScript", "react"],
    image: "public/bkcandle.jpg",
    website: "https://www.bkcandles.org",
  },
  {
    name: "Road Compass",
    category: "Websites",
    label: "Website",
    description: "A modern portfolio website designed to showcase projects, services, skills, and professional work in a clean and engaging way.",
    technologies: ["React", "JavaScript"],
    image: "public/roadcompass.PNG",
    website: "https://roadcompass.org",

  },

  
];

const FILTERS = ["All", "Websites", "E-Commerce", "Web Apps"];

/* ---------------------------------------------------------
   4. SOCIAL ACCOUNTS
--------------------------------------------------------- */
const SOCIALS = [
  {
    icon: "instagram",
    name: "Instagram",
    handle: "@elevated_web_studio",
    url: "https://www.instagram.com/elevated_web_studio/",
    text: "Follow us for our latest projects, web design inspiration, updates, and behind-the-scenes content.",
    featured: true,
  },
  {
    icon: "tiktok",
    name: "TikTok",
    handle: "@elevated_web_studio",
    url: "https://www.tiktok.com/@elevated_web_studio", // TODO: replace with your TikTok URL
    text: "Web development, design, digital tips, and short-form content.",
  },
  {
    icon: "facebook",
    name: "Facebook",
    handle: "Elevated Web Studio",
    url: "https://www.facebook.com/share/1CrN1ma9qk/?mibextid=wwXIfr", // TODO: replace with your Facebook URL
    text: "Connect with us for updates, events, and community discussions.",
  },
  
  
];

/* ---------------------------------------------------------
   5. ICONS (inline SVG, stroke-based)
--------------------------------------------------------- */
const ICONS = {
  layout: '<path d="M3 4h18v16H3z"/><path d="M3 9h18M9 9v11"/>',
  code: '<path d="m8 6-6 6 6 6"/><path d="m16 6 6 6-6 6"/>',
  cart: '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.7 12.1a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 7H6"/>',
  spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  puzzle: '<path d="M10 3h4v3a2 2 0 1 0 4 0V3h3v4a2 2 0 1 1 0 4v6H3v-6a2 2 0 1 0 0-4V3h3v3a2 2 0 1 0 4 0z"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>',
  tiktok: '<path d="M15 4c.6 2.4 2.2 3.8 4.5 4v3c-1.7 0-3.3-.5-4.5-1.4V15a5.5 5.5 0 1 1-5.5-5.5c.3 0 .7 0 1 .1v3.1a2.5 2.5 0 1 0 1.5 2.3V4z"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4"/>',
  github: '<path d="M9 19c-4 1.4-4-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.8 2.8 5.8 3.1 5.8 3.1a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/>',
  whatsapp: '<path d="M21 12a9 9 0 0 1-13.3 7.9L3 21l1.2-4.5A9 9 0 1 1 21 12z"/><path d="M9 9c0 4 2 6 6 6"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
};

/** Return an inline SVG string for an icon key. */
function icon(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"
    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;
}

/* =========================================================
   RENDERING
   ========================================================= */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/** Services grid */
function renderServices() {
  const grid = $("#servicesGrid");
  if (!grid) return;
  grid.innerHTML = SERVICES.map(
    (s) => `
    <article class="card reveal">
      <div class="card__icon">${icon(s.icon)}</div>
      <h3>${s.title}</h3>
      <p>${s.text}</p>
    </article>`
  ).join("");
}

/** Project cards (optionally filtered by category) */
function renderProjects(filter = "All") {
  const grid = $("#projectsGrid");
  if (!grid) return;
  const items = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  grid.innerHTML = items
    .map((p) => {
      const index = PROJECTS.indexOf(p);
      return `
      <article class="project reveal" tabindex="0" role="button" data-index="${index}"
               aria-label="View project ${p.name}">
        <div class="project__media">
          <img src="${p.image}" alt="${p.name} project preview" loading="lazy" />
        </div>
        <div class="project__body">
          <span class="tag">${p.label || p.category}</span>
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <div class="tech">${p.technologies.map((t) => `<span>${t}</span>`).join("")}</div>
          <span class="project__link">View Project →</span>
        </div>
      </article>`;
    })
    .join("");

  observeReveals();
}

/** Filter buttons */
function renderFilters() {
  const wrap = $("#filters");
  if (!wrap) return;
  wrap.innerHTML = FILTERS.map(
    (f, i) => `<button class="filter${i === 0 ? " is-active" : ""}" data-filter="${f}">${f}</button>`
  ).join("");

  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter");
    if (!btn) return;
    $$(".filter", wrap).forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderProjects(btn.dataset.filter);
  });
}

/** Social cards + footer social links */
function renderSocials() {
  const grid = $("#socialsGrid");
  if (grid) {
    grid.innerHTML = SOCIALS.map((s) =>
      s.featured
        ? `<a class="social social--featured reveal" href="${s.url}" target="_blank" rel="noopener">
             <span class="social__icon">${icon(s.icon)}</span>
             <span class="social__featured-copy">
               <h3>${s.name}</h3>
               <span class="social__handle">${s.handle}</span>
               <p>${s.text}</p>
             </span>
           </a>`
        : `<a class="social reveal" href="${s.url}" target="_blank" rel="noopener">
             <span class="social__icon">${icon(s.icon)}</span>
             <h3>${s.name}</h3>
             <span class="social__handle">${s.handle}</span>
             <p>${s.text}</p>
           </a>`
    ).join("");
  }

  const footer = $("#footerSocials");
  if (footer) {
    footer.insertAdjacentHTML(
      "beforeend",
      SOCIALS.map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${s.name}</a>`).join("")
    );
  }
}

/** Direct contact methods */
function renderDirectContact() {
  const list = $("#directContact");
  if (!list) return;
  const methods = [
    { icon: "instagram", label: "Instagram", value: CONTACT.instagram, url: CONTACT.instagramUrl },
    { icon: "whatsapp", label: "WhatsApp", value: CONTACT.whatsapp, url: CONTACT.whatsappUrl },
    { icon: "mail", label: "Email", value: CONTACT.email, url: `mailto:${CONTACT.email}` },
  ];
  list.innerHTML = methods
    .map(
      (m) => `<li>
        <a href="${m.url}" target="_blank" rel="noopener">
          <span class="social__icon">${icon(m.icon)}</span>
          <span><strong>${m.label}</strong><span>${m.value}</span></span>
        </a>
      </li>`
    )
    .join("");
}

/* =========================================================
   INTERACTIONS
   ========================================================= */

/** Navbar: scrolled state + mobile menu */
function initNav() {
  const nav = $("#nav");
  const burger = $("#navBurger");
  const links = $("#navLinks");

  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 10);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const closeMenu = () => {
    links.classList.remove("is-open");
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  };

  burger.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  $$("a", links).forEach((a) => a.addEventListener("click", closeMenu));
  window.addEventListener("resize", () => { if (window.innerWidth > 860) closeMenu(); });
}

/** Scroll reveal via IntersectionObserver */
let revealObserver;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" }
    );
  }
  $$(".reveal:not(.is-visible)").forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i, 6) * 60}ms`;
    revealObserver.observe(el);
  });
}

/** Project modal */
function initModal() {
  const modal = $("#projectModal");
  let lastFocused = null;

  const open = (project) => {
    lastFocused = document.activeElement;
    $("#modalImage").src = project.image;
    $("#modalImage").alt = `${project.name} project preview`;
    $("#modalCategory").textContent = project.label || project.category;
    $("#modalTitle").textContent = project.name;
    $("#modalDesc").textContent = project.description;
    $("#modalTech").innerHTML = project.technologies.map((t) => `<span>${t}</span>`).join("");
    $("#modalLive").href = project.website || "#";
    $("#modalGithub").href = project.github || "#";
    modal.hidden = false;
    document.body.classList.add("no-scroll");
    $(".modal__close", modal).focus();
  };

  const close = () => {
    modal.hidden = true;
    document.body.classList.remove("no-scroll");
    if (lastFocused) lastFocused.focus();
  };

  document.addEventListener("click", (e) => {
    const card = e.target.closest(".project");
    if (card) { open(PROJECTS[Number(card.dataset.index)]); return; }
    if (e.target.closest("[data-close]")) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) close();
    const card = e.target.closest?.(".project");
    if (card && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      open(PROJECTS[Number(card.dataset.index)]);
    }
  });
}

/** Contact form with client-side validation */
function initForm() {
  const form = $("#contactForm");
  if (!form) return;
  const success = $("#formSuccess");

  const setError = (name, message) => {
    const field = form.querySelector(`[name="${name}"]`)?.closest(".field");
    const slot = form.querySelector(`[data-error-for="${name}"]`);
    if (field) field.classList.toggle("has-error", Boolean(message));
    if (slot) slot.textContent = message || "";
  };

  const validate = () => {
    const data = Object.fromEntries(new FormData(form).entries());
    let valid = true;

    if (!data.name?.trim() || data.name.trim().length < 2) { setError("name", "Please enter your name."); valid = false; }
    else setError("name", "");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email || "")) { setError("email", "Please enter a valid email address."); valid = false; }
    else setError("email", "");

    if (!data.projectType) { setError("projectType", "Please select a project type."); valid = false; }
    else setError("projectType", "");

    if (!data.message?.trim() || data.message.trim().length < 10) { setError("message", "Please tell us a little more (10+ characters)."); valid = false; }
    else setError("message", "");

    return valid;
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validate()) {
      form.querySelector(".has-error input, .has-error select, .has-error textarea")?.focus();
      return;
    }
    // No backend/email service is connected — we only confirm locally.
    form.reset();
    success.hidden = false;
    success.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  form.addEventListener("input", (e) => {
    if (e.target.closest(".field.has-error")) validate();
  });
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  renderFilters();
  renderProjects();
  renderSocials();
  renderDirectContact();
  initNav();
  initModal();
  initForm();
  observeReveals();
});
