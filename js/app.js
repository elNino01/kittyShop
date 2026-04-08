/* =====================================================
   KittyShop – Application JavaScript
   ===================================================== */

'use strict';

/* ===== DATA ===== */
const KITTENS = {
  buy: [
    {
      id: 'b1', name: 'Luna', breed: 'persian', age: '3 months',
      price: 850, currency: '$', emoji: '😺',
      desc: 'Sweet Persian princess with fluffy white fur and bright blue eyes. Loves cuddles.',
    },
    {
      id: 'b2', name: 'Simba', breed: 'maine-coon', age: '4 months',
      price: 1200, currency: '$', emoji: '🦁',
      desc: 'Majestic Maine Coon with a luxurious mane. Playful, intelligent, and very affectionate.',
    },
    {
      id: 'b3', name: 'Mochi', breed: 'siamese', age: '2 months',
      price: 700, currency: '$', emoji: '😸',
      desc: 'Energetic Siamese with striking blue eyes and a very vocal personality.',
    },
    {
      id: 'b4', name: 'Zara', breed: 'bengal', age: '3 months',
      price: 1500, currency: '$', emoji: '🐯',
      desc: 'Stunning Bengal with wild rosette markings. Highly curious and loves to climb.',
    },
    {
      id: 'b5', name: 'Cleo', breed: 'persian', age: '5 months',
      price: 900, currency: '$', emoji: '👑',
      desc: 'Elegant Persian diva with silver tabby markings. Enjoys lounging in sunbeams.',
    },
    {
      id: 'b6', name: 'Orion', breed: 'maine-coon', age: '3 months',
      price: 1100, currency: '$', emoji: '⭐',
      desc: 'Gentle giant Maine Coon kitten who loves water and will fetch like a dog.',
    },
    {
      id: 'b7', name: 'Nala', breed: 'siamese', age: '4 months',
      price: 750, currency: '$', emoji: '🌸',
      desc: 'Gorgeous Siamese with a cream coat and chocolate points. Very social and talkative.',
    },
    {
      id: 'b8', name: 'Blaze', breed: 'bengal', age: '2 months',
      price: 1600, currency: '$', emoji: '🔥',
      desc: 'High-contrast Bengal with bold marble patterns. Athletic, playful, endlessly entertaining.',
    },
  ],

  trade: [
    {
      id: 't1', name: 'Oliver', breed: 'siamese', age: '6 months',
      tradeFor: 'Persian or Maine Coon', emoji: '🔄',
      desc: 'Friendly Siamese looking for a new family. Owner relocating internationally. Trade for similar age kitten.',
    },
    {
      id: 't2', name: 'Bella', breed: 'persian', age: '5 months',
      tradeFor: 'Bengal or Siamese', emoji: '🌺',
      desc: 'Beautiful white Persian kitten, well-socialised with other cats. Open to trade offers.',
    },
    {
      id: 't3', name: 'Titan', breed: 'maine-coon', age: '8 months',
      tradeFor: 'Any breed', emoji: '💪',
      desc: 'Large Maine Coon with a thick tabby coat. Very gentle with kids. Owner has allergies.',
    },
    {
      id: 't4', name: 'Nova', breed: 'bengal', age: '4 months',
      tradeFor: 'Persian or Ragdoll', emoji: '✨',
      desc: 'Spotted Bengal kitten, very active. Looking to trade for a calmer breed to suit apartment living.',
    },
    {
      id: 't5', name: 'Pixel', breed: 'siamese', age: '7 months',
      tradeFor: 'Bengal or Maine Coon', emoji: '🎮',
      desc: 'Playful Siamese who loves interactive toys. Trade preferred but open to a good home.',
    },
    {
      id: 't6', name: 'Duchess', breed: 'persian', age: '3 months',
      tradeFor: 'Siamese kitten', emoji: '🎀',
      desc: 'Regal silver Persian kitten from a champion bloodline. Open to trade with papers.',
    },
  ],

  rent: [
    {
      id: 'r1', name: 'Pumpkin', breed: 'persian', duration: 'day',
      price: 45, currency: '$', perUnit: '/day', emoji: '🎃',
      desc: 'Adorable fluffy Persian, perfect for photoshoots, events, or just a cozy day in.',
    },
    {
      id: 'r2', name: 'Cosmo', breed: 'maine-coon', duration: 'week',
      price: 180, currency: '$', perUnit: '/week', emoji: '🌙',
      desc: 'Gentle Maine Coon ideal for a week-long companionship or pet therapy visit.',
    },
    {
      id: 'r3', name: 'Daisy', breed: 'siamese', duration: 'day',
      price: 35, currency: '$', perUnit: '/day', emoji: '🌼',
      desc: 'Sociable Siamese who loves to entertain guests. Great for parties and events.',
    },
    {
      id: 'r4', name: 'Ranger', breed: 'bengal', duration: 'week',
      price: 220, currency: '$', perUnit: '/week', emoji: '🏕️',
      desc: 'Energetic Bengal for an active week. Great for kids and families looking for a trial.',
    },
    {
      id: 'r5', name: 'Pearl', breed: 'persian', duration: 'month',
      price: 600, currency: '$', perUnit: '/month', emoji: '🦢',
      desc: 'Elegant Persian for a full month rental — ideal for long-term foster or a trial adoption.',
    },
    {
      id: 'r6', name: 'Storm', breed: 'maine-coon', duration: 'month',
      price: 700, currency: '$', perUnit: '/month', emoji: '⛈️',
      desc: 'Big, beautiful Maine Coon for a month-long rental. Perfect for remote workers.',
    },
  ],
};

/* ===== HELPERS ===== */
function qs(sel, ctx = document) { return ctx.querySelector(sel); }
function qsa(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }

function scrollTo(selector) {
  const el = qs(selector);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ===== CARD RENDERERS ===== */
function createBuyCard(kitten) {
  const card = document.createElement('div');
  card.className = 'kitten-card';
  card.dataset.breed = kitten.breed;
  card.innerHTML = `
    <div class="card-img" role="img" aria-label="${kitten.name}">${kitten.emoji}</div>
    <div class="card-body">
      <div class="card-badges">
        <span class="badge badge-breed">${kitten.breed.replace('-', ' ')}</span>
        <span class="badge badge-age">${kitten.age}</span>
      </div>
      <h3>${kitten.name}</h3>
      <p class="card-desc">${kitten.desc}</p>
    </div>
    <div class="card-footer">
      <span class="card-price">${kitten.currency}${kitten.price.toLocaleString()}</span>
      <button class="btn btn-primary" data-id="${kitten.id}" data-action="buy">Inquire 🐾</button>
    </div>
  `;
  qs('[data-action="buy"]', card).addEventListener('click', () => openInquireModal(kitten, 'buy'));
  return card;
}

function createTradeCard(kitten) {
  const card = document.createElement('div');
  card.className = 'kitten-card';
  card.dataset.breed = kitten.breed;
  card.innerHTML = `
    <div class="card-img" role="img" aria-label="${kitten.name}">${kitten.emoji}</div>
    <div class="card-body">
      <div class="card-badges">
        <span class="badge badge-breed">${kitten.breed.replace('-', ' ')}</span>
        <span class="badge badge-age">${kitten.age}</span>
        <span class="badge badge-trade">Trade</span>
      </div>
      <h3>${kitten.name}</h3>
      <p class="card-desc">${kitten.desc}</p>
      <p style="font-size:.85rem;color:#8e44ad;font-weight:600;margin-top:4px;">Wants: ${kitten.tradeFor}</p>
    </div>
    <div class="card-footer">
      <span class="card-price" style="font-size:1rem;color:#8e44ad;">Swap offer</span>
      <button class="btn btn-secondary" data-id="${kitten.id}" data-action="trade">Propose Trade</button>
    </div>
  `;
  qs('[data-action="trade"]', card).addEventListener('click', () => openInquireModal(kitten, 'trade'));
  return card;
}

function createRentCard(kitten) {
  const card = document.createElement('div');
  card.className = 'kitten-card';
  card.dataset.duration = kitten.duration;
  card.innerHTML = `
    <div class="card-img" role="img" aria-label="${kitten.name}">${kitten.emoji}</div>
    <div class="card-body">
      <div class="card-badges">
        <span class="badge badge-breed">${kitten.breed.replace('-', ' ')}</span>
        <span class="badge badge-rent">${kitten.duration}</span>
      </div>
      <h3>${kitten.name}</h3>
      <p class="card-desc">${kitten.desc}</p>
    </div>
    <div class="card-footer">
      <span class="card-price">${kitten.currency}${kitten.price}<small>${kitten.perUnit}</small></span>
      <button class="btn btn-primary" data-id="${kitten.id}" data-action="rent">Book Now 📅</button>
    </div>
  `;
  qs('[data-action="rent"]', card).addEventListener('click', () => openInquireModal(kitten, 'rent'));
  return card;
}

/* ===== RENDER GRIDS ===== */
function renderGrid(section, filter) {
  const grid = qs(`#${section}-grid`);
  if (!grid) return;
  grid.innerHTML = '';

  const items = KITTENS[section];
  const filtered = filter === 'all'
    ? items
    : items.filter(k => (section === 'rent' ? k.duration : k.breed) === filter);

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="text-align:center;color:#999;grid-column:1/-1;padding:40px 0;">No kittens found for this filter.</p>';
    return;
  }

  filtered.forEach(kitten => {
    let card;
    if (section === 'buy')   card = createBuyCard(kitten);
    if (section === 'trade') card = createTradeCard(kitten);
    if (section === 'rent')  card = createRentCard(kitten);
    if (card) grid.appendChild(card);
  });
}

/* ===== FILTER BUTTONS ===== */
function initFilters() {
  qsa('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.dataset.section;
      const filter  = btn.dataset.filter;

      // Deactivate sibling buttons
      qsa(`.filter-btn[data-section="${section}"]`).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      renderGrid(section, filter);
    });
  });
}

/* ===== MODAL ===== */
const overlay   = qs('#modalOverlay');
const modalBody = qs('#modalBody');
const modalClose = qs('#modalClose');

function openModal(type) {
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  if (type === 'buy') {
    modalBody.innerHTML = `
      <h2>🐾 Browse Kittens</h2>
      <p>Use the sections below to explore kittens available for purchase, trading, or renting.</p>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <button class="btn btn-primary" onclick="closeModal();scrollTo('#buy')">Shop Kittens for Sale</button>
        <button class="btn btn-secondary" onclick="closeModal();scrollTo('#trade')">Browse Trade Board</button>
        <button class="btn btn-outline" style="color:#333;border-color:#ccc;" onclick="closeModal();scrollTo('#rent')">Rent a Kitten</button>
      </div>
    `;
  } else if (type === 'trade-list') {
    modalBody.innerHTML = buildTradeListForm();
    qs('#tradeListForm', modalBody).addEventListener('submit', handleTradeListSubmit);
  }
}

function openInquireModal(kitten, action) {
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  const actionLabels = { buy: 'Purchase', trade: 'Propose Trade', rent: 'Book' };
  const label = actionLabels[action] || 'Inquire';

  modalBody.innerHTML = `
    <h2>${kitten.emoji} ${kitten.name}</h2>
    <p>${kitten.desc}</p>
    <form class="contact-form" id="inquireForm" novalidate>
      <div class="form-group">
        <label for="inq-name">Your Name</label>
        <input type="text" id="inq-name" placeholder="Your full name" required />
        <span class="field-error" id="inq-name-error"></span>
      </div>
      <div class="form-group">
        <label for="inq-email">Email</label>
        <input type="email" id="inq-email" placeholder="you@example.com" required />
        <span class="field-error" id="inq-email-error"></span>
      </div>
      <div class="form-group">
        <label for="inq-msg">Message</label>
        <textarea id="inq-msg" rows="4" placeholder="Tell us more about yourself...">${action === 'rent' ? `I'd like to rent ${kitten.name}. ` : ''}${action === 'trade' ? `I'd like to propose a trade for ${kitten.name}. ` : ''}</textarea>
      </div>
      <button type="submit" class="btn btn-primary">${label} – ${kitten.currency || ''}${kitten.price ? kitten.price.toLocaleString() + (kitten.perUnit || '') : 'Contact us'}</button>
      <p class="form-success" id="inq-success" aria-live="polite"></p>
    </form>
  `;
  qs('#inquireForm', modalBody).addEventListener('submit', handleInquireSubmit);
}

function buildTradeListForm() {
  return `
    <h2>🔄 List Your Kitten for Trade</h2>
    <p>Fill in the details below and we'll publish your listing on the trade board within 24 hours.</p>
    <form class="contact-form" id="tradeListForm" novalidate>
      <div class="form-group">
        <label for="tl-name">Your Name</label>
        <input type="text" id="tl-name" placeholder="Your full name" required />
        <span class="field-error" id="tl-name-error"></span>
      </div>
      <div class="form-group">
        <label for="tl-email">Email</label>
        <input type="email" id="tl-email" placeholder="you@example.com" required />
        <span class="field-error" id="tl-email-error"></span>
      </div>
      <div class="form-group">
        <label for="tl-kitten">Kitten Name &amp; Breed</label>
        <input type="text" id="tl-kitten" placeholder="e.g. Fluffy, Persian, 4 months" required />
        <span class="field-error" id="tl-kitten-error"></span>
      </div>
      <div class="form-group">
        <label for="tl-wants">What breed would you like in return?</label>
        <input type="text" id="tl-wants" placeholder="e.g. Siamese, Bengal, any" required />
        <span class="field-error" id="tl-wants-error"></span>
      </div>
      <div class="form-group">
        <label for="tl-desc">Description</label>
        <textarea id="tl-desc" rows="3" placeholder="Describe your kitten..."></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit Listing 🐾</button>
      <p class="form-success" id="tl-success" aria-live="polite"></p>
    </form>
  `;
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ===== FORM VALIDATION HELPERS ===== */
function validateField(input, errorEl, message) {
  if (!input || !input.value.trim()) {
    if (errorEl) errorEl.textContent = message;
    return false;
  }
  if (errorEl) errorEl.textContent = '';
  return true;
}

function validateEmail(input, errorEl) {
  const val = input ? input.value.trim() : '';
  if (!val) {
    if (errorEl) errorEl.textContent = 'Email is required.';
    return false;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
    if (errorEl) errorEl.textContent = 'Please enter a valid email.';
    return false;
  }
  if (errorEl) errorEl.textContent = '';
  return true;
}

/* ===== FORM HANDLERS ===== */
function handleInquireSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const nameOk  = validateField(qs('#inq-name', form), qs('#inq-name-error', form), 'Name is required.');
  const emailOk = validateEmail(qs('#inq-email', form), qs('#inq-email-error', form));
  if (!nameOk || !emailOk) return;
  qs('#inq-success', form).textContent = '✅ Request sent! We\'ll be in touch within 24 hours.';
  setTimeout(closeModal, 2200);
}

function handleTradeListSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const nameOk   = validateField(qs('#tl-name', form), qs('#tl-name-error', form), 'Name is required.');
  const emailOk  = validateEmail(qs('#tl-email', form), qs('#tl-email-error', form));
  const kittenOk = validateField(qs('#tl-kitten', form), qs('#tl-kitten-error', form), 'Kitten details are required.');
  const wantsOk  = validateField(qs('#tl-wants', form), qs('#tl-wants-error', form), 'Please specify what breed you want.');
  if (!nameOk || !emailOk || !kittenOk || !wantsOk) return;
  qs('#tl-success', form).textContent = '✅ Listing submitted! It will appear on the trade board within 24 hours.';
  setTimeout(closeModal, 2500);
}

/* ===== CONTACT FORM ===== */
qs('#contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const nameOk    = validateField(qs('#name'), qs('#name-error'), 'Name is required.');
  const emailOk   = validateEmail(qs('#email'), qs('#email-error'));
  const msgOk     = validateField(qs('#message'), qs('#message-error'), 'Message is required.');
  if (!nameOk || !emailOk || !msgOk) return;
  qs('#formSuccess').textContent = '✅ Message sent! We\'ll reply within 24 hours.';
  this.reset();
  setTimeout(() => { qs('#formSuccess').textContent = ''; }, 4000);
});

/* ===== STATS COUNTER ANIMATION ===== */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1600;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current).toLocaleString();
  }, 16);
}

function initStats() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  qsa('.stat-number').forEach(el => observer.observe(el));
}

/* ===== MOBILE NAV ===== */
function initMobileNav() {
  const hamburger = qs('#hamburger');
  const mobileNav = qs('#mobileNav');
  const closeBtn  = qs('#mobileNavClose');

  hamburger.addEventListener('click', () => mobileNav.classList.add('open'));
  closeBtn.addEventListener('click', () => mobileNav.classList.remove('open'));
  qsa('.mobile-link').forEach(link => {
    link.addEventListener('click', () => mobileNav.classList.remove('open'));
  });
}

/* ===== INIT ===== */
(function init() {
  // Render all grids with default "all" filter
  ['buy', 'trade', 'rent'].forEach(section => renderGrid(section, 'all'));

  initFilters();
  initStats();
  initMobileNav();
})();
