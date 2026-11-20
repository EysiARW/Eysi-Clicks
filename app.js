/* ============================================================
   EYSI CLICKS — app.js
   Object-Oriented Luxury Portfolio Architecture
   Sections:
     0. PHOTO DATA — add or remove your photos here
     1. Domain Model & Value Objects (PhotoAsset, PortfolioRepository)
     2. ViewTransitionCoordinator (Same-Document View Transitions API)
     3. ThemeManager (Archival Daylight / Darkroom Obsidian)
     4. CursorLoupeController (Fine-Pointer Optical Reticle)
     5. LightboxController (Darkroom Loupe, Museum Mat)
     6. GalleryPresenter (Tabs, Orientation, Contact Sheet Proofs)
     7. TelemetryHudController (Scrollspy, Focal Continuum, Local Clock)
     8. Application Bootstrap
   ============================================================ */


/* ── 0. PHOTO DATA — JUST PASTE THE FILE PATH IN ── */

const CATS = ['predebut', 'events', 'institutional'];

const photoData = {

  predebut: {
    portrait: [
      { src: "predebut/portrait/EYSI-2-22.jpg", caption: "Avegail @18", alt: "Debutante in a pink satin gown and long gloves holding pink and white roses in front of a garden fountain" },
      { src: "predebut/portrait/EYSI-5-5.jpg", caption: "Trisha @20", alt: "Young woman in a black off-shoulder top seated outdoors, gazing past the camera with trees behind her" },
      { src: "predebut/portrait/EYSI-6-3.jpg", caption: "Anne @20", alt: "Young woman in a white dress holding a small bouquet against a stone wall beside a wooden door" },
      { src: "predebut/portrait/EYSI-7-3.jpg", caption: "Anne @20", alt: "Young woman in a white dress seated on garden rocks beside a weathered wooden fence" },
      { src: "predebut/portrait/EYSI-8-3.jpg", caption: "Anne @20", alt: "Candid outdoor portrait of a young woman bathed in soft daylight" }
    ],
    landscape: [
      { src: "predebut/landscape/EYSI-1-62.jpg", caption: "Avegail @18", alt: "Debutante in a pink satin gown and long gloves resting a hand on a railing among leafy trees" },
      { src: "predebut/landscape/EYSI-3-16.jpg", caption: "Avegail @18", alt: "Debutante in a pink satin dress spreading her gloved arms along a railing above a pool and garden" },
      { src: "predebut/landscape/EYSI-4-9.jpg", caption: "Trisha @20", alt: "Young woman in a black off-shoulder top framed by soft out-of-focus leaves" }
    ],
  },

  events: {
    portrait: [
      { src: "events/portrait/EYSI-7-3.jpg", caption: "Eddie @75", alt: "Eddie in a light blue shirt standing beside his blue birthday cake and the Eddie @75 sign" },
      { src: "events/portrait/EYSI-8-3.jpg", caption: "Eddie @75", alt: "Eddie embraced by a smiling woman in front of a gold, white and navy balloon wall" }
    ],
    landscape: [
      { src: "events/landscape/EYSI-1-62.jpg", caption: "Pulo Ati-Atihan", alt: "Young man with face paint and blackened hands touching a red-painted sign during the street festival" },
      { src: "events/landscape/EYSI-1.jpg", caption: "Khel Pangilinan", alt: "Singer in sunglasses and a denim jacket singing with a hand on his chest under pink and green stage lights" },
      { src: "events/landscape/EYSI-2-22.jpg", caption: "Pulo Ati-Atihan", alt: "Black-and-white street scene of smiling festival-goers with face paint as a Santo Niño statue is raised above the crowd" },
      { src: "events/landscape/EYSI-3-16.jpg", caption: "Pulo Ati-Atihan", alt: "Festival performer in white body paint with a black spider design and a fringed skirt walking through the crowd" },
      { src: "events/landscape/EYSI-4-9.jpg", caption: "Pulo Ati-Atihan", alt: "Woman in white photographing the procession with her phone while holding a Santo Niño statue in a green robe" },
      { src: "events/landscape/EYSI-5-5.jpg", caption: "Eddie @75", alt: "Three young women in light blue dresses posing on a tufted armchair before the Eddie @75 backdrop" },
      { src: "events/landscape/EYSI-5.jpg", caption: "Khel Pangilinan", alt: "Singer in a denim jacket and sunglasses performing beside a guitarist under bright stage lights" },
      { src: "events/landscape/EYSI-6-3.jpg", caption: "Eddie @75", alt: "Eddie seated in a tufted armchair in front of the glowing Eddie @75 sign" },
      { src: "events/landscape/EYSI-9.jpg", caption: "Khel Pangilinan", alt: "Singer in sunglasses and a denim jacket raising both arms to the crowd under bright yellow stage lights" },
      { src: "events/landscape/EYSI-12.jpg", caption: "Khel Pangilinan", alt: "Singer in sunglasses and a denim jacket performing into a microphone under purple and green stage lights" },
      { src: "events/landscape/EYSI-19.jpg", caption: "Eddie @75", alt: "Illuminated neon Happy Birthday sign behind a blue milestone cake with gold candles" },
      { src: "events/landscape/EYSI-5-e75.jpg", caption: "Eddie @75", alt: "Matriarch in white lace seated gracefully in a tufted armchair surrounded by balloons" },
      { src: "events/landscape/EYSI-45.jpg", caption: "Eddie @75", alt: "Celebrant Eddie waving joyfully to cheering guests upon his grand entrance" },
      { src: "events/landscape/EYSI-53.jpg", caption: "Eddie @75", alt: "Daughter tenderly cupping Eddie's cheek during an affectionate embrace" },
      { src: "events/landscape/EYSI-57.jpg", caption: "Eddie @75", alt: "Eddie in a blue cap standing arm in arm with an older woman in white lace near the buffet" },
      { src: "events/landscape/EYSI-77.jpg", caption: "Eddie @75", alt: "Eddie blowing out his birthday candles as delicate smoke drifts before a glowing neon sign" },
      { src: "events/landscape/EYSI-78.jpg", caption: "Eddie @75", alt: "Celebrant Eddie addressing his family and guests with a microphone from his armchair" },
      { src: "events/landscape/EYSI-100.jpg", caption: "Eddie @75", alt: "Eddie smiling joyfully as he opens a lucky red envelope during the celebration" },
      { src: "events/landscape/EYSI-114.jpg", caption: "Eddie @75", alt: "Daughter wiping away tears of joy during a heartfelt speech for her father" },
      { src: "events/landscape/EYSI-165.jpg", caption: "Eddie @75", alt: "Eddie smiling warmly while watching video messages from overseas family on an iPad" }
    ],
  },

  institutional: {
    landscape: [
      { src: "institutional/EYSI-32.jpg", caption: "Baccalaureate Mass", alt: "Minister in white holding up a communion host over a gold ciborium during the mass" },
      { src: "institutional/EYSI-37.jpg", caption: "Baccalaureate Mass", alt: "Students in Filipiniana attire talking at red-draped banquet tables" },
      { src: "institutional/EYSI-41.jpg", caption: "Baccalaureate Mass", alt: "Students laughing and clapping at a banquet table set with red cloths and glassware" },
      { src: "institutional/EYSI-55.jpg", caption: "Baccalaureate Mass", alt: "Smiling student holding certificates of recognition beside a classmate in a barong" },
      { src: "institutional/EYSI-109.jpg", caption: "UC - PNC Foundation Week 2026", alt: "Black-and-white photo of a dancer lying back on the floor with one fist raised as another dancer stretches behind" },
      { src: "institutional/EYSI-145.jpg", caption: "UC - PNC Foundation Week 2026", alt: "Folk dancer in a blue gown dipped by her partner in a vest and hat as the crowd watches from the stands" },
      { src: "institutional/EYSI-152.jpg", caption: "UC - PNC Foundation Week 2026", alt: "Black-and-white photo of a dancer in a white suit kicking high during a performance in the gym" },
      { src: "institutional/EYSI-189.jpg", caption: "UC - PNC Foundation Week 2026", alt: "Black-and-white photo of a cheerleader mid-air in a toe-touch jump before a packed gym" },
      { src: "institutional/EYSI-1.jpg", caption: "Academic Excellence Award", alt: "Wide view of an awards hall with a lit stage, banner and decorated banquet tables" },
      { src: "institutional/EYSI-21.jpg", caption: "Academic Excellence Award", alt: "Guest raising a phone to photograph the awards ceremony in a softly lit hall" },
      { src: "institutional/EYSI-26.jpg", caption: "Academic Excellence Award", alt: "Live band in matching mint outfits performing on stage during the awards night" },
      { src: "institutional/EYSI-35.jpg", caption: "Academic Excellence Award", alt: "Guests in barong shirts smiling and applauding at a banquet table" },
      { src: "institutional/EYSI-36.jpg", caption: "Academic Excellence Award", alt: "Man in a white barong standing near the stage as colorful beams of light fan out" },
      { src: "institutional/EYSI-42.jpg", caption: "Academic Excellence Award", alt: "Graduates wearing yellow sashes standing together at the awards dinner" },
      { src: "institutional/EYSI-5.jpg", caption: "Academic Excellence Award", alt: "Table number card glowing among crystal glasses and warm candlelight" },
      { src: "institutional/EYSI-57.jpg", caption: "Academic Excellence Award", alt: "Three awardees on stage holding framed plaques beneath the Academic Excellence Award banner" },
      { src: "institutional/EYSI-63.jpg", caption: "Academic Excellence Award", alt: "Host presenting an awardee on stage under bright pink stage lighting" },
      { src: "institutional/EYSI-7.jpg", caption: "Academic Excellence Award", alt: "Two guests taking a selfie amid golden stage light at the venue" }
    ],
  },

};


/* ── 1. DOMAIN MODEL & REPOSITORY ── */

class PhotoAsset {
  #src;
  #webpSrc;
  #caption;
  #alt;
  #category;
  #orientation;
  #index;

  static #OPTICAL_PROFILES = {
    predebut:      'NATURAL LIGHT',
    events:        'NATURAL LIGHT',
    institutional: 'NATURAL LIGHT',
  };

  constructor(entry, category, orientation, index) {
    const normalized = PhotoAsset.#normalizeEntry(entry);
    this.#src         = normalized.src;
    this.#webpSrc     = normalized.src.replace(/\.jpe?g$/i, '.webp');
    this.#caption     = normalized.caption;
    this.#alt         = normalized.alt || '';
    this.#category    = category;
    this.#orientation = orientation;
    this.#index       = index;
  }

  static #normalizeEntry(entry) {
    if (!entry || (typeof entry !== 'object' && typeof entry !== 'string')) {
      return { src: '', caption: 'Cherished Moment', alt: '' };
    }
    if (typeof entry !== 'string') {
      return {
        src: (entry && entry.src) || '',
        caption: (entry && entry.caption) || 'Untitled Moment',
        alt: (entry && entry.alt) || ''
      };
    }
    const filename = entry.split('/').pop().split('.')[0];
    const caption = filename
      .replace(/[-_]+/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());
    return { src: entry, caption: caption || 'Cherished Moment', alt: '' };
  }

  get src()         { return this.#src; }
  get webpSrc()     { return this.#webpSrc; }
  // Small derivatives written next to the full WebP (see CLAUDE.md "How to add a photo")
  get gridSrc()     { return this.#webpSrc.replace(/\.webp$/i, '.grid.webp'); }
  get thumbSrc()    { return this.#webpSrc.replace(/\.webp$/i, '.thumb.webp'); }
  // Grid candidates by pixel width (photos are 3:2 or 2:3; long edges 480 / 960 / 2048).
  // Lead prints also offer the full frame, so they stay sharp on high-density desktops.
  gridSrcset(isLead = false) {
    const k = this.#orientation === 'portrait' ? 2 / 3 : 1;
    const w = longEdge => `${Math.round(longEdge * k)}w`;
    const list = [
      `${this.#webpSrc.replace(/\.webp$/i, '.sm.webp')} ${w(480)}`,
      `${this.gridSrc} ${w(960)}`,
    ];
    if (isLead) list.push(`${this.#webpSrc} ${w(2048)}`);
    return list.join(', ');
  }
  get caption()     { return this.#caption; }
  get alt()         { return this.#alt; }
  get category()    { return this.#category; }
  get orientation() { return this.#orientation; }
  get index()       { return this.#index; }

  get visualAlt() {
    if (this.#alt) {
      return `${this.#caption} — ${this.#alt} (${this.plateNumber})`;
    }
    return `${this.#caption} — ${this.categoryLabel} (${this.plateNumber})`;
  }

  get plateNumber() {
    return `PLATE ${String(this.#index + 1).padStart(2, '0')}`;
  }

  get categoryLabel() {
    const labels = {
      predebut:      'Pre-Debut',
      events:        'Events',
      institutional: 'Institutional',
    };
    return labels[this.#category] || 'Portfolio';
  }
}


class PortfolioRepository {
  #rawStore;
  #categories;

  constructor(rawStore, categories = CATS) {
    this.#rawStore   = rawStore;
    this.#categories = [...categories];
  }

  getCategories() {
    return [...this.#categories];
  }

  isValidCategory(cat) {
    return this.#categories.includes(cat);
  }

  hasOrientation(cat, orientation) {
    const list = this.#rawStore[cat]?.[orientation];
    return Array.isArray(list) && list.length > 0;
  }

  getOrientationCount(cat, orientation) {
    const list = this.#rawStore[cat]?.[orientation];
    return Array.isArray(list) ? list.length : 0;
  }

  getCategoryTotalCount(cat) {
    return this.getOrientationCount(cat, 'portrait') + this.getOrientationCount(cat, 'landscape');
  }

  getTotalArchivalPlates() {
    return this.#categories.reduce((sum, cat) => sum + this.getCategoryTotalCount(cat), 0);
  }

  getPhotos(cat, orientation = null) {
    if (!this.#rawStore[cat]) return [];
    if (orientation) {
      const rawList = this.#rawStore[cat][orientation] || [];
      return rawList.map((entry, idx) => new PhotoAsset(entry, cat, orientation, idx));
    }
    const portraits = (this.#rawStore[cat].portrait || []).map(entry => ({ entry, orient: 'portrait' }));
    const landscapes = (this.#rawStore[cat].landscape || []).map(entry => ({ entry, orient: 'landscape' }));
    const merged = PortfolioRepository.#groupByStory([...portraits, ...landscapes]);
    return merged.map(({ entry, orient }, idx) => new PhotoAsset(entry, cat, orient, idx));
  }

  // A "story" is one shoot, identified by its caption. Stories keep the order in which
  // they first appear in photoData; photos inside a story keep portraits-then-landscapes.
  static #groupByStory(items) {
    const order = [];
    const groups = new Map();
    items.forEach(item => {
      const key = PortfolioRepository.storyKey(item.entry);
      if (!groups.has(key)) {
        groups.set(key, []);
        order.push(key);
      }
      groups.get(key).push(item);
    });
    return order.flatMap(key => groups.get(key));
  }

  static storyKey(entryOrAsset) {
    const caption = typeof entryOrAsset === 'string' ? '' : (entryOrAsset?.caption || '');
    return caption.trim().toLowerCase();
  }
}


/* ── 2. VIEW TRANSITION COORDINATOR ── */

class ViewTransitionCoordinator {
  #reducedMotionQuery;

  constructor() {
    this.#reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  }

  get prefersReducedMotion() {
    return this.#reducedMotionQuery.matches;
  }

  run(mutationCallback, afterCallback = null) {
    if (!document.startViewTransition || this.prefersReducedMotion) {
      mutationCallback();
      if (typeof afterCallback === 'function') afterCallback();
      return;
    }

    try {
      const transition = document.startViewTransition(() => {
        mutationCallback();
      });
      if (typeof afterCallback === 'function') {
        transition.finished
          .catch(() => {})
          .finally(() => {
            afterCallback();
          });
      }
    } catch {
      mutationCallback();
      if (typeof afterCallback === 'function') afterCallback();
    }
  }
}


/* ── 3. THEME MANAGER (DAYLIGHT / DARKROOM) ── */

class ThemeManager {
  #storageKey = 'eysiclicks-theme';
  #toggleBtn;
  #toggleLabel;
  #metaThemeColor;
  #transitionCoordinator;

  constructor(transitionCoordinator) {
    this.#transitionCoordinator = transitionCoordinator;
    this.#toggleBtn      = document.getElementById('theme-toggle');
    this.#toggleLabel    = document.getElementById('theme-toggle-label');
    this.#metaThemeColor = document.getElementById('meta-theme-color');
    this.#init();
  }

  #init() {
    // Blocked site data makes localStorage throw; that must not stop the rest of app.js
    let saved = null;
    try { saved = localStorage.getItem(this.#storageKey); } catch {}
    const initial = saved === 'dark' ? 'dark' : 'light';
    this.#applyTheme(initial, false);

    if (this.#toggleBtn) {
      this.#toggleBtn.addEventListener('click', () => {
        const next = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.#transitionCoordinator.run(() => {
          this.#applyTheme(next, true);
        });
      });
    }
  }

  get currentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'light';
  }

  #applyTheme(theme, persist) {
    document.documentElement.setAttribute('data-theme', theme);
    if (persist) {
      try { localStorage.setItem(this.#storageKey, theme); } catch {}
    }

    const isDark = theme === 'dark';
    if (this.#toggleLabel) {
      this.#toggleLabel.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    }
    if (this.#toggleBtn) {
      this.#toggleBtn.setAttribute(
        'aria-label',
        isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'
      );
    }
    if (this.#metaThemeColor) {
      this.#metaThemeColor.setAttribute('content', isDark ? '#0a0a0b' : '#faf8f5');
    }
  }
}


/* ── 4. BESPOKE OPTICAL LOUPE CURSOR CONTROLLER ── */

class CursorLoupeController {
  #el;
  #textEl;
  #finePointerQuery;
  #targetX = -100;
  #targetY = -100;
  #rafId = null;

  constructor() {
    this.#el     = document.getElementById('cursor-loupe');
    this.#textEl = document.getElementById('cursor-loupe-text');
    this.#finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (this.#el && this.#finePointerQuery.matches) {
      this.#bindGlobalTracking();
    }
  }

  #bindGlobalTracking() {
    window.addEventListener('mousemove', e => {
      this.#targetX = e.clientX;
      this.#targetY = e.clientY;
      if (!this.#rafId) {
        this.#rafId = requestAnimationFrame(() => {
          if (this.#el) {
            this.#el.style.transform = `translate3d(${this.#targetX + 16}px, ${this.#targetY + 16}px, 0) scale(1)`;
          }
          this.#rafId = null;
        });
      }
    }, { passive: true });
  }

  attachInteractiveTarget(element, label = 'INSPECT PHOTO') {
    if (!this.#el || !this.#finePointerQuery.matches || !element) return;
    element.addEventListener('mouseenter', () => {
      if (this.#textEl) this.#textEl.textContent = label;
      this.#el.classList.add('active');
    });
    element.addEventListener('mouseleave', () => {
      this.#el.classList.remove('active');
    });
  }

  hide() {
    if (this.#el) this.#el.classList.remove('active');
  }
}


/* ── 5. LIGHTBOX CONTROLLER ("THE DARKROOM LOUPE") ── */

const LightboxState = Object.freeze({
  CLOSED: 0,
  VIEWING: 1,
});

class LightboxController {
  #lightboxEl;
  #imgEl;
  #sourceWebpEl;
  #titleEl;
  #counterEl;
  #catBadgeEl;
  #filmstripEl;
  #transitionCoordinator;
  #cursorLoupe;

  #state = LightboxState.CLOSED;
  #images = [];
  #currentIndex = 0;
  #lastFocusedElement = null;
  #activeSourceFigure = null;
  #preloadCache = new Map();
  #flightToken = 0;
  // GSAP is optional: without it (or with reduced motion) swipes and pans keep their plain behaviour
  #gsap = (typeof window !== 'undefined' && window.gsap) || null;
  #pictureEl = null;
  #carousel = null;

  constructor(transitionCoordinator, cursorLoupe) {
    this.#transitionCoordinator = transitionCoordinator;
    this.#cursorLoupe    = cursorLoupe;
    this.#lightboxEl     = document.getElementById('lightbox');
    this.#imgEl          = document.getElementById('lightbox-img');
    this.#sourceWebpEl   = document.getElementById('lightbox-source-webp');
    this.#titleEl        = document.getElementById('lightbox-title');
    this.#counterEl      = document.getElementById('lightbox-counter');
    this.#catBadgeEl     = document.getElementById('lightbox-cat-badge');
    this.#filmstripEl    = document.getElementById('lightbox-filmstrip');

    this.#bindEvents();
  }

  preload(asset) {
    if (!asset) return;
    const url = asset.webpSrc || asset.src;
    if (!url || this.#preloadCache.has(url)) return;
    const img = new Image();
    img.decoding = 'async';
    img.src = url;
    if (typeof img.decode === 'function') {
      img.decode().catch(() => {});
    }
    this.#preloadCache.set(url, img);
  }

  get state() {
    return this.#state;
  }

  get isOpen() {
    return Boolean(this.#lightboxEl && this.#lightboxEl.classList.contains('open'));
  }

  get currentIndex() {
    return this.#currentIndex;
  }

  // The bending row of prints (LightboxCarousel) becomes the view when WebGL2 is there;
  // this controller keeps ownership of the current photo, caption, hash and keys.
  attachCarousel(carousel) {
    if (!carousel?.active) return;
    this.#carousel = carousel;
    carousel.onSettle = index => this.#selectFromCarousel(index);
    carousel.onBackdrop = () => this.close();
    // A #photo- link opens the viewer while the page starts, before the row exists
    if (this.isOpen && this.#images.length) {
      carousel.open(this.#images, this.#currentIndex);
    }
  }

  get #carouselView() {
    return Boolean(this.#carousel?.isShowing);
  }

  #selectFromCarousel(index) {
    if (!this.isOpen || index === this.#currentIndex || index < 0 || index >= this.#images.length) return;
    this.#currentIndex = index;
    this.#updateView();
  }

  open(images, index, sourceFigure = null) {
    if (!images || !images.length || !this.#lightboxEl) return;
    this.#cursorLoupe?.hide();
    this.#lastFocusedElement = document.activeElement;
    this.#images = images;
    this.#currentIndex = Math.max(0, Math.min(index, images.length - 1));
    this.#state = LightboxState.VIEWING;

    this.#clearSourceTransitionClass();
    if (sourceFigure) {
      this.#activeSourceFigure = sourceFigure;
    }

    this.#renderFilmstrip();
    this.#carousel?.open(images, this.#currentIndex);
    this.#updateView();

    // The row has its own entrance, so the single-print flight is only for the fallback view
    const canFly = !this.#carouselView && this.#canFly(sourceFigure);
    if (canFly) this.#lightboxEl.classList.add('flip-open', 'is-flying');
    this.#lightboxEl.classList.add('open');
    document.body.style.overflow = 'hidden';
    const closeBtn = this.#lightboxEl.querySelector('.lightbox-close');
    if (closeBtn) closeBtn.focus();
    if (canFly) this.#flyIn(sourceFigure.querySelector('img'));
  }

  // Spatial continuity: the photo grows out of the card that was clicked and shrinks back
  // into its card on close. Transform-only (Web Animations), skipped for reduced motion.
  #canFly(sourceFigure) {
    const srcImg = sourceFigure?.querySelector?.('img');
    return Boolean(srcImg && this.#imgEl
      && typeof this.#imgEl.animate === 'function'
      && typeof srcImg.getBoundingClientRect === 'function'
      && !this.#transitionCoordinator.prefersReducedMotion);
  }

  #flyIn(srcImg) {
    const token = ++this.#flightToken;
    const from = srcImg.getBoundingClientRect();
    const img = this.#imgEl;
    const land = () => {
      if (token !== this.#flightToken) return;
      this.#lightboxEl.classList.remove('is-flying');
      if (!this.isOpen || !from.width || !from.height) return;
      // Frame still loading after the wait: its box is not the photo's real shape yet, so
      // just show it rather than fly to a size it is about to jump away from.
      if (!img.complete || !img.naturalWidth) return;
      const to = img.getBoundingClientRect();
      if (!to.width || !to.height) return;
      const dx = (from.left + from.width / 2) - (to.left + to.width / 2);
      const dy = (from.top + from.height / 2) - (to.top + to.height / 2);
      // One uniform scale (matched by area) so cropped or rotated sources never squash the photo
      const scale = Math.sqrt((from.width * from.height) / (to.width * to.height));
      img.animate([
        { transform: `translate(${dx}px, ${dy}px) scale(${scale})` },
        { transform: 'none' }
      ], { duration: 460, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' });
    };
    // Wait for the full frame (normally already cached by the hover/press preload), but never
    // hold the viewer back for more than a moment.
    const decoded = typeof img.decode === 'function' ? img.decode() : Promise.resolve();
    Promise.race([decoded, new Promise(resolve => setTimeout(resolve, 320))])
      .catch(() => {})
      .then(land);
  }

  #flyOut() {
    const current = this.#images[this.#currentIndex];
    const img = this.#imgEl;
    if (!current || !img || typeof img.animate !== 'function'
      || this.#transitionCoordinator.prefersReducedMotion) return;
    const from = img.getBoundingClientRect();
    // Grid cards only: hero cards crop and rotate their photo, so a flight back would distort
    const target = [...document.querySelectorAll('.cat-panel.active .photo-item img')]
      .find(el => el.getAttribute('src') === current.src && this.#isOnScreen(el));
    if (!target || !from.width) return;
    const to = target.getBoundingClientRect();

    const clone = document.createElement('img');
    clone.className = 'lightbox-fly-clone';
    clone.src = img.currentSrc || img.src;
    clone.alt = '';
    clone.setAttribute('aria-hidden', 'true');
    clone.style.left = `${from.left}px`;
    clone.style.top = `${from.top}px`;
    clone.style.width = `${from.width}px`;
    clone.style.height = `${from.height}px`;
    document.body.appendChild(clone);

    const flight = clone.animate([
      { transform: 'none' },
      { transform: `translate(${to.left - from.left}px, ${to.top - from.top}px) scale(${to.width / from.width})` }
    ], { duration: 380, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' });
    const cleanup = () => clone.remove();
    flight.onfinish = cleanup;
    flight.oncancel = cleanup;
  }

  #isOnScreen(el) {
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.bottom > 0 && r.top < window.innerHeight;
  }

  close() {
    if (!this.#lightboxEl || !this.isOpen) return;
    this.#flightToken++;
    this.#settleSwipe();
    if (!this.#carouselView) this.#flyOut();
    this.#lightboxEl.classList.remove('flip-open', 'is-flying');
    this.#state = LightboxState.CLOSED;

    // Clear photo URL hash cleanly
    if (window.history && typeof window.history.replaceState === 'function') {
      try {
        const cleanUrl = window.location.pathname + (window.location.search || '');
        window.history.replaceState(null, '', cleanUrl);
      } catch (_) {}
    }
    if (window.location && window.location.hash) {
      window.location.hash = '';
    }

    const restoreTarget = this.#lastFocusedElement;
    this.#carousel?.close();
    this.#lightboxEl.classList.remove('open');
    document.body.style.overflow = '';
    this.#clearSourceTransitionClass();
    if (restoreTarget && typeof restoreTarget.focus === 'function') {
      restoreTarget.focus();
    }
  }

  navigate(dir, { animate = true } = {}) {
    if (!this.#images.length) return;
    if (animate) this.#settleSwipe();
    this.#currentIndex = (this.#currentIndex + dir + this.#images.length) % this.#images.length;
    if (animate) this.#triggerFrameCrossfade(dir >= 0 ? 'next' : 'prev');
    this.#updateView();
  }

  // ── Finger-following swipe (GSAP) ──
  // The print slides inside its mat with the finger. Past a short distance or a quick flick
  // it leaves and the next one arrives from the other side; otherwise it settles back.
  #canFollowSwipe() {
    if (!this.#gsap || this.#images.length < 2
      || this.#transitionCoordinator.prefersReducedMotion) return false;
    this.#pictureEl ??= this.#lightboxEl?.querySelector('.lightbox-picture') || null;
    return Boolean(this.#pictureEl);
  }

  #settleSwipe() {
    if (!this.#gsap || !this.#pictureEl) return;
    this.#gsap.killTweensOf(this.#pictureEl);
    this.#gsap.set(this.#pictureEl, { clearProps: 'transform,opacity' });
  }

  #finishSwipe(deltaX, velocityX) {
    const gsap = this.#gsap;
    const el = this.#pictureEl;
    const width = el.offsetWidth || 320;
    const flick = Math.abs(velocityX) > 0.45 && Math.sign(velocityX) === Math.sign(deltaX);
    if (Math.abs(deltaX) < Math.max(45, Math.min(90, width * 0.22)) && !flick) {
      gsap.to(el, { x: 0, duration: 0.32, ease: 'power3.out', clearProps: 'transform' });
      return;
    }
    const side = Math.sign(deltaX);
    gsap.to(el, {
      x: side * width,
      duration: 0.16,
      ease: 'power2.in',
      onComplete: () => {
        this.navigate(side < 0 ? 1 : -1, { animate: false });
        gsap.fromTo(el,
          { x: -side * width * 0.4, opacity: 0.6 },
          { x: 0, opacity: 1, duration: 0.36, ease: 'power3.out', clearProps: 'transform,opacity' });
      }
    });
  }

  #triggerFrameCrossfade(navDir = 'next') {
    if (this.#imgEl && !this.#transitionCoordinator.prefersReducedMotion) {
      this.#imgEl.setAttribute('data-nav-dir', navDir);
      this.#imgEl.classList.remove('frame-crossfade');
      void this.#imgEl.offsetWidth;
      this.#imgEl.classList.add('frame-crossfade');
    }
  }

  #clearSourceTransitionClass() {
    document.querySelectorAll('.photo-item.vt-source').forEach(el => el.classList.remove('vt-source'));
    this.#activeSourceFigure = null;
  }

  // A frame that is still downloading shows its small filmstrip thumb (usually already
  // loaded) at full size, instead of leaving the previous photo under the new caption.
  #showFrame(current, fullSrc) {
    this.preload(current);
    const pending = this.#preloadCache.get(fullSrc);
    const ready = !pending || (pending.complete && pending.naturalWidth > 0);
    if (ready || !current.thumbSrc || typeof pending.decode !== 'function') {
      this.#sourceWebpEl.srcset = fullSrc;
      return;
    }
    this.#sourceWebpEl.srcset = current.thumbSrc;
    const swap = () => {
      if (this.#images[this.#currentIndex] === current) this.#sourceWebpEl.srcset = fullSrc;
    };
    pending.decode().then(swap, swap);
  }

  #updateView() {
    if (!this.#images.length) return;
    const current = this.#images[this.#currentIndex];

    if (this.#sourceWebpEl) {
      this.#showFrame(current, current.webpSrc || current.src.replace(/\.jpe?g$/i, '.webp'));
    }
    if (this.#imgEl) {
      this.#imgEl.src = current.src;
      const catLabel = current.categoryLabel || 'PORTFOLIO';
      const plateNo = current.plateNumber || `PLATE ${String(this.#currentIndex + 1).padStart(2, '0')}`;
      const captionText = current.caption || 'Photograph';
      this.#imgEl.alt = current.visualAlt || `${captionText} — ${catLabel} (${plateNo})`;
    }
    const hasCaption = Boolean(current.caption && current.caption.trim());
    if (this.#titleEl) {
      this.#titleEl.textContent = hasCaption ? current.caption : '';
      this.#titleEl.style.display = hasCaption ? '' : 'none';
    }
    if (this.#counterEl) {
      this.#counterEl.textContent = `${String(this.#currentIndex + 1).padStart(2, '0')} / ${String(this.#images.length).padStart(2, '0')}`;
    }
    if (this.#catBadgeEl && current.categoryLabel) {
      this.#catBadgeEl.textContent = current.categoryLabel;
    }

    // ARIA live announcement
    const announcer = document.getElementById('gallery-announcer');
    if (announcer && current) {
      const plate = current.plateNumber || `Plate ${this.#currentIndex + 1}`;
      const caption = current.caption || 'Photo';
      announcer.textContent = `${plate}: ${caption} (${this.#currentIndex + 1} of ${this.#images.length})`;
    }

    // Synchronize URL hash with active photo slug
    const slug = (current.src && current.src.split('/').pop().replace(/\.[^.]+$/, '')) || String(this.#currentIndex + 1);
    const newHash = `#photo-${slug}`;
    if (window.location && window.location.hash !== newHash) {
      window.location.hash = newHash;
    }

    this.#syncFilmstripActive();
    this.#carousel?.show(this.#currentIndex);

    // Preload and asynchronously decode ±2 adjacent frames for zero-latency browsing
    const len = this.#images.length;
    if (len > 1) {
      const offsets = len > 3 ? [1, -1, 2, -2] : [1, -1];
      offsets.forEach(offset => {
        const idx = (this.#currentIndex + offset + len) % len;
        this.preload(this.#images[idx]);
      });
    }
  }

  #renderFilmstrip() {
    if (!this.#filmstripEl) return;
    this.#filmstripEl.innerHTML = '';

    this.#images.forEach((image, idx) => {
      const thumb = document.createElement('button');
      thumb.type = 'button';
      const isActive = idx === this.#currentIndex;
      thumb.className = 'filmstrip-thumb' + (isActive ? ' active' : '');
      thumb.setAttribute('role', 'tab');
      thumb.setAttribute('aria-selected', String(isActive));
      thumb.setAttribute('aria-label', `View photo ${idx + 1}: ${image.caption || 'Untitled'}`);

      const img = document.createElement('img');
      const fullWebp = image.webpSrc || image.src.replace(/\.jpe?g$/i, '.webp');
      img.src = image.thumbSrc || fullWebp;
      img.alt = `Thumbnail preview for ${image.caption || 'plate'} (${image.plateNumber || String(idx + 1).padStart(2, '0')})`;
      img.loading = 'lazy';
      img.decoding = 'async';
      img.onerror = () => { img.src = image.src; };

      thumb.appendChild(img);
      thumb.addEventListener('mouseenter', () => this.preload(image), { passive: true });
      thumb.addEventListener('click', e => {
        e.stopPropagation();
        if (this.#currentIndex !== idx) {
          const dir = idx > this.#currentIndex ? 'next' : 'prev';
          this.#currentIndex = idx;
          this.#triggerFrameCrossfade(dir);
          this.#updateView();
        }
      });

      this.#filmstripEl.appendChild(thumb);
    });
  }

  #syncFilmstripActive() {
    if (!this.#filmstripEl) return;
    const thumbs = this.#filmstripEl.querySelectorAll('.filmstrip-thumb');
    thumbs.forEach((thumb, idx) => {
      const isActive = idx === this.#currentIndex;
      thumb.classList.toggle('active', isActive);
      thumb.setAttribute('aria-selected', String(isActive));
      if (isActive) {
        thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });
  }

  #handleHashChange() {
    // Read the live hash, never evt.newURL: stepping through photos quickly queues several
    // hashchange events, and replaying their stale URLs dragged the viewer back to photos
    // already passed. A closed viewer ignores them, so a late event can't
    // write #photo-… back into the address bar after close().
    if (!this.isOpen) return;
    const hash = window.location?.hash || '';
    if (!hash || !hash.startsWith('#photo-')) {
      if (this.isOpen) {
        this.close();
      }
      return;
    }

    const current = this.#images[this.#currentIndex];
    const currentSlug = (current?.src && current.src.split('/').pop().replace(/\.[^.]+$/, '')) || String(this.#currentIndex + 1);
    if (`#photo-${currentSlug}` === hash) return;

    const targetSlug = hash.replace(/^#photo-/, '').toLowerCase();
    const foundIdx = this.#images.findIndex((img, idx) => {
      const slug = (img.src && img.src.split('/').pop().replace(/\.[^.]+$/, '')) || String(idx + 1);
      return slug.toLowerCase() === targetSlug;
    });

    if (foundIdx !== -1) {
      this.#currentIndex = foundIdx;
      this.#updateView();
    }
  }

  #bindEvents() {
    if (!this.#lightboxEl) return;

    this.#lightboxEl.addEventListener('click', e => {
      if (e.target === this.#lightboxEl || e.target.classList.contains('lightbox-stage')) {
        this.close();
      }
    });

    const closeBtn = document.getElementById('lightbox-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', e => {
        e.stopPropagation();
        this.close();
      });
    }

    const prevBtn = document.getElementById('lightbox-prev');
    if (prevBtn) {
      prevBtn.addEventListener('click', e => {
        e.stopPropagation();
        this.navigate(-1);
      });
    }

    const nextBtn = document.getElementById('lightbox-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', e => {
        e.stopPropagation();
        this.navigate(1);
      });
    }

    window.addEventListener('hashchange', () => this.#handleHashChange());
    window.addEventListener('popstate', () => this.#handleHashChange());

    // Touch swipe navigation
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX   = 0;
    let touchEndY   = 0;
    let isMultiTouch = false;
    // 'x' while the print follows the finger, 'y' for a vertical drag, null until decided
    let swipeAxis = null;
    let swipeVelX = 0;
    let swipeLastX = 0;
    let swipeLastT = 0;

    this.#lightboxEl.addEventListener('touchstart', e => {
      if (e.touches.length > 1) {
        isMultiTouch = true;
        if (swipeAxis === 'x') this.#settleSwipe();
        swipeAxis = null;
        return;
      }
      isMultiTouch = false;
      swipeAxis = null;
      swipeVelX = 0;
      swipeLastX = e.touches[0].clientX;
      swipeLastT = Date.now();
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchEndX   = touchStartX;
      touchEndY   = touchStartY;
    }, { passive: true });

    this.#lightboxEl.addEventListener('touchmove', e => {
      if (e.touches.length > 1) isMultiTouch = true;
      if (e.touches.length === 1) {
        touchEndX = e.touches[0].clientX;
        touchEndY = e.touches[0].clientY;

        if (!isMultiTouch && !this.#carouselView && this.#canFollowSwipe()) {
          const deltaX = touchEndX - touchStartX;
          const deltaY = touchEndY - touchStartY;
          if (!swipeAxis && Math.hypot(deltaX, deltaY) > 8) {
            swipeAxis = Math.abs(deltaX) > Math.abs(deltaY) * 1.2 ? 'x' : 'y';
            if (swipeAxis === 'x') this.#gsap.killTweensOf(this.#pictureEl);
          }
          if (swipeAxis === 'x') {
            const now = Date.now();
            if (now > swipeLastT) swipeVelX = (touchEndX - swipeLastX) / (now - swipeLastT);
            swipeLastX = touchEndX;
            swipeLastT = now;
            this.#gsap.set(this.#pictureEl, { x: deltaX });
          }
        }
      }
    }, { passive: true });

    this.#lightboxEl.addEventListener('touchend', () => {
      if (isMultiTouch) return;
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;
      // The row moves under the finger itself; only the swipe down to close stays here
      if (this.#carouselView) {
        if (deltaY > 80 && Math.abs(deltaX) < 60) this.close();
        return;
      }
      if (swipeAxis === 'x') {
        swipeAxis = null;
        // A finger that stopped before lifting is a drop, not a flick
        this.#finishSwipe(deltaX, Date.now() - swipeLastT > 80 ? 0 : swipeVelX);
        return;
      }
      const absX   = Math.abs(deltaX);
      const absY   = Math.abs(deltaY);

      if (absX > 45 && absX > absY * 1.2) {
        this.navigate(deltaX < 0 ? 1 : -1);
      } else if (deltaY > 80 && absX < 60) {
        this.close();
      }
    }, { passive: true });

    // Keyboard shortcuts & Focus Trap
    document.addEventListener('keydown', e => {
      if (!this.isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        // An enlarged print comes down first, then the viewer closes
        if (this.#carousel?.closeFocus()) return;
        this.close();
        return;
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        this.navigate(-1);
        return;
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        this.navigate(1);
        return;
      }
      if (e.key === 'Tab') {
        const focusable = Array.from(this.#lightboxEl.querySelectorAll('button:not([disabled])'));
        if (!focusable.length) return;
        const first = focusable[0];
        const last  = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }
}


/* ── 6. GALLERY PRESENTER ── */

class GalleryPresenter {
  #repository;
  #transitionCoordinator;
  #lightbox;
  #cursorLoupe;
  #revealObserver = null;
  #renderedCategories = new Set();

  constructor(repository, transitionCoordinator, lightbox, cursorLoupe) {
    this.#repository            = repository;
    this.#transitionCoordinator = transitionCoordinator;
    this.#lightbox              = lightbox;
    this.#cursorLoupe           = cursorLoupe;

    this.#setupIntersectionObserver();
    this.#populateStaticCounts();
    this.#bindControls();
    this.#bindHeroFloatingFrames();
    this.#initDefaultView();
  }

  get activeCategory() {
    const activeTab = document.querySelector('.cat-tab.active');
    return activeTab ? activeTab.dataset.tab : 'events';
  }

  switchTab(cat, animate = true, updateHistory = true) {
    if (!this.#repository.isValidCategory(cat)) return;
    const categories = this.#repository.getCategories();
    const prevIdx = categories.indexOf(this.activeCategory);
    const nextIdx = categories.indexOf(cat);
    const whipDir = nextIdx >= prevIdx ? '1' : '-1';

    const performSwitch = () => {
      document.querySelectorAll('.cat-tab').forEach(tab => {
        const isActive = tab.dataset.tab === cat;
        tab.classList.toggle('active', isActive);
        tab.setAttribute('aria-selected', String(isActive));
        tab.tabIndex = isActive ? 0 : -1;
      });

      document.querySelectorAll('.cat-panel').forEach(panel => {
        panel.classList.remove('active');
        panel.removeAttribute('data-whip-dir');
      });

      const panel = document.getElementById('panel-' + cat);
      if (panel) {
        if (animate && prevIdx !== nextIdx) {
          panel.setAttribute('data-whip-dir', whipDir);
        }
        panel.classList.add('active');
      }

      this.#ensureRendered(cat);

      if (window.location && typeof history !== 'undefined') {
        const url = new URL(window.location.href);
        const currentParam = url.searchParams.get('tab');
        if (currentParam !== cat) {
          url.searchParams.set('tab', cat);
          if (updateHistory && typeof history.pushState === 'function') {
            history.pushState({ tab: cat }, '', url);
          } else if (typeof history.replaceState === 'function') {
            history.replaceState({ tab: cat }, '', url);
          }
        }
      }
    };

    performSwitch();
  }

  renderCategory(cat) {
    const photos = this.#repository.getPhotos(cat);
    this.#buildGridDOM('grid-' + cat, photos);
    this.#renderedCategories.add(cat);
  }

  #ensureRendered(cat) {
    if (!this.#renderedCategories.has(cat)) {
      this.renderCategory(cat);
    }
  }

  #populateStaticCounts() {
    this.#repository.getCategories().forEach(cat => {
      const badge = document.getElementById('count-' + cat);
      if (badge) {
        const count = this.#repository.getCategoryTotalCount(cat);
        badge.textContent = String(count).padStart(2, '0');
      }
    });
  }

  #setupIntersectionObserver() {
    if (!('IntersectionObserver' in window) || this.#transitionCoordinator.prefersReducedMotion) {
      return;
    }
    this.#revealObserver = new IntersectionObserver((entries, observer) => {
      // Everything entering in the same frame forms one wave, ordered top-left to
      // bottom-right; the stagger is capped so fast scrollers never wait on a card.
      const arriving = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => (a.boundingClientRect.top - b.boundingClientRect.top)
          || (a.boundingClientRect.left - b.boundingClientRect.left));
      arriving.forEach((entry, i) => {
        const el = entry.target;
        el.style.setProperty?.('--reveal-delay', `${Math.min(i, 5) * 70}ms`);
        el.classList.add('is-revealed');
        // Panels toggle display:none, which would restart these entrance animations on every
        // tab switch; once played, they are switched off for good.
        el.addEventListener?.('animationend', () => el.classList.add('rise-done'), { once: true });
        observer.unobserve(el);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px 40px 0px' });
  }

  // Story layout: leads need a story of at least 3; stories over 11 show 9 (fills the rows
  // on both the 3-column desktop and the 2-column phone grid) until "Show all" is pressed.
  static #LEAD_MIN = 3;
  static #FOLD_OVER = 11;
  static #FOLD_SHOWN = 9;

  #buildStoryHeader(title, count, isFirst) {
    const header = document.createElement('div');
    header.className = isFirst ? 'story-head is-first' : 'story-head';

    const heading = document.createElement('h3');
    heading.className = 'story-title';
    heading.textContent = title || 'Untitled';

    const meta = document.createElement('p');
    meta.className = 'story-count';
    meta.textContent = `${count} ${count === 1 ? 'photo' : 'photos'}`;

    header.appendChild(heading);
    header.appendChild(meta);
    return header;
  }

  #buildGridDOM(gridId, photos) {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    grid.innerHTML = '';
    if (!photos.length) return;

    const storyCounts = new Map();
    photos.forEach(asset => {
      const key = PortfolioRepository.storyKey(asset);
      storyCounts.set(key, (storyCounts.get(key) || 0) + 1);
    });
    let currentStory = null;
    let posInStory = 0;
    let folded = [];

    photos.forEach((asset, idx) => {
      const storyKey = PortfolioRepository.storyKey(asset);
      const storySize = storyCounts.get(storyKey);
      if (storyKey !== currentStory) {
        currentStory = storyKey;
        posInStory = 0;
        const header = this.#buildStoryHeader(asset.caption, storyCounts.get(storyKey), idx === 0);
        if (this.#revealObserver && !this.#transitionCoordinator.prefersReducedMotion) {
          this.#revealObserver.observe(header);
        } else {
          header.classList.add('is-revealed');
        }
        grid.appendChild(header);
      }

      const figure = document.createElement('figure');
      figure.className = 'photo-item';
      // A story of three or more opens on one large lead print
      const isLead = posInStory === 0 && storySize >= GalleryPresenter.#LEAD_MIN;
      if (isLead) figure.classList.add('is-lead');
      // Very long stories show their first rows and fold the rest behind "Show all"
      if (storySize > GalleryPresenter.#FOLD_OVER && posInStory >= GalleryPresenter.#FOLD_SHOWN) {
        figure.classList.add('is-folded');
        folded.push(figure);
      }
      posInStory += 1;

      if (!this.#revealObserver || this.#transitionCoordinator.prefersReducedMotion) {
        figure.classList.add('is-revealed');
      } else {
        this.#revealObserver.observe(figure);
      }

      const picture = document.createElement('picture');
      picture.className = asset.orientation === 'portrait' ? 'photo-frame is-portrait' : 'photo-frame';
      // The tiny filmstrip thumb doubles as a low-res placeholder while the grid image loads
      picture.style.setProperty?.('--ph-image', `url("${asset.thumbSrc}")`);
      const sourceWebp = document.createElement('source');
      sourceWebp.srcset = asset.gridSrcset(isLead);
      // Rough share of the viewport a print's cell takes (2 columns, 3 from 1024px)
      sourceWebp.sizes = isLead ? '(min-width: 1024px) 60vw, 80vw' : '(min-width: 1024px) 28vw, 45vw';
      sourceWebp.type = 'image/webp';

      const img = document.createElement('img');
      img.src = asset.src;
      img.alt = asset.visualAlt || `${asset.caption} — ${asset.categoryLabel} (${asset.plateNumber})`;
      img.width = asset.orientation === 'portrait' ? 800 : 1200;
      img.height = asset.orientation === 'portrait' ? 1000 : 800;
      img.loading = 'lazy';
      img.decoding = 'async';
      const describedAlt = img.alt;
      img.onerror = () => {
        img.alt = 'Photograph currently being preserved in archive';
        // Grid derivative missing: retry once with the full-size WebP
        if (sourceWebp.srcset !== asset.webpSrc) sourceWebp.srcset = asset.webpSrc;
      };

      const markLoaded = () => {
        img.alt = describedAlt;
        img.classList.add('is-loaded');
        figure.classList.add('has-image');
      };
      if (img.complete && img.naturalWidth) {
        markLoaded();
      } else {
        img.addEventListener('load', markLoaded);
      }

      picture.appendChild(sourceWebp);
      picture.appendChild(img);

      const figcaption = document.createElement('figcaption');
      figcaption.className = 'photo-overlay';

      const label = document.createElement('span');
      label.className = 'photo-label';
      label.textContent = asset.caption;

      figcaption.appendChild(label);
      figure.appendChild(picture);
      figure.appendChild(figcaption);

      this.#cursorLoupe?.attachInteractiveTarget(figure, 'INSPECT');

      figure.addEventListener('mouseenter', () => this.#lightbox.preload(asset), { passive: true });
      // Touch has no hover: start fetching the full-size frame as soon as the finger lands
      figure.addEventListener('pointerdown', () => this.#lightbox.preload(asset), { passive: true });
      figure.addEventListener('focus', () => this.#lightbox.preload(asset));
      const activate = () => this.#lightbox.open(photos, idx, figure);
      figure.addEventListener('click', activate);
      figure.tabIndex = 0;
      figure.setAttribute('role', 'button');
      figure.setAttribute('aria-label', `View photo: ${asset.caption} (${asset.plateNumber})`);
      figure.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activate();
        }
      });

      grid.appendChild(figure);

      if (folded.length && posInStory === storySize) {
        grid.appendChild(this.#buildStoryMore(folded, storySize));
        folded = [];
      }
    });
  }

  #buildStoryMore(folded, total) {
    const more = document.createElement('button');
    more.type = 'button';
    more.className = 'story-more btn-editorial btn-editorial-secondary btn-specular';
    // The label has its own span so updating it never removes the rim light canvas
    const label = document.createElement('span');
    more.appendChild(label);
    const sync = open => {
      label.textContent = open ? 'Show fewer photos' : `Show all ${total} photos`;
      more.setAttribute('aria-expanded', String(open));
    };
    sync(false);
    more.addEventListener('click', () => {
      const open = more.getAttribute('aria-expanded') !== 'true';
      const playFlip = this.#captureFlip(more);
      folded.forEach(fig => fig.classList.toggle('is-folded', !open));
      sync(open);
      if (open) {
        folded[0]?.focus({ preventScroll: true });
      } else {
        // The rows above the button just collapsed: keep the button, not empty space, in view
        more.scrollIntoView?.({ block: 'center', behavior: 'instant' });
      }
      playFlip?.();
    });
    return more;
  }

  // With GSAP's Flip, the button and everything after it glide to their new places when a
  // story unfolds or folds, instead of jumping. Returns null when Flip is unavailable.
  #captureFlip(more) {
    const gsap = typeof window !== 'undefined' ? window.gsap : null;
    const Flip = typeof window !== 'undefined' ? window.Flip : null;
    const grid = more.parentElement;
    if (!gsap || !Flip || !grid || this.#transitionCoordinator.prefersReducedMotion) return null;
    const targets = [more];
    for (let el = more.nextElementSibling; el; el = el.nextElementSibling) {
      if (!el.classList.contains('is-folded')) targets.push(el);
    }
    gsap.registerPlugin(Flip);
    const state = Flip.getState(targets);
    return () => {
      // `is-flipping` switches off the cards' own transform transitions, which would lag the tween
      grid.classList.add('is-flipping');
      const done = () => {
        grid.classList.remove('is-flipping');
        gsap.set(targets, { clearProps: 'transform' });
      };
      Flip.from(state, { duration: 0.55, ease: 'power3.out', onComplete: done, onInterrupt: done });
    };
  }

  #bindControls() {
    document.querySelectorAll('.cat-tab[data-tab]').forEach(tab => {
      tab.addEventListener('click', () => this.switchTab(tab.dataset.tab));
    });

    const tabListEl = document.querySelector('.cat-tabs');
    if (tabListEl) {
      tabListEl.addEventListener('keydown', e => {
        const tabs = Array.from(tabListEl.querySelectorAll('.cat-tab'));
        const currentIndex = tabs.indexOf(document.activeElement);
        if (currentIndex === -1) return;

        let newIndex = null;
        if (e.key === 'ArrowRight') newIndex = (currentIndex + 1) % tabs.length;
        if (e.key === 'ArrowLeft')  newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        if (e.key === 'Home')       newIndex = 0;
        if (e.key === 'End')        newIndex = tabs.length - 1;

        if (newIndex !== null) {
          e.preventDefault();
          tabs[newIndex].focus();
          this.switchTab(tabs[newIndex].dataset.tab);
        }
      });
    }

    window.addEventListener('popstate', e => {
      const tab = e?.state?.tab || new URLSearchParams(window.location?.search || '').get('tab');
      if (tab && this.#repository.isValidCategory(tab) && tab !== this.activeCategory) {
        this.switchTab(tab, true, false);
      }
    });
  }

  #bindHeroFloatingFrames() {
    document.querySelectorAll('.hero-frame').forEach(frame => {
      this.#cursorLoupe?.attachInteractiveTarget(frame, 'VIEW PHOTO');

      const handler = () => {
        const cat = frame.dataset.cat;
        const slug = (frame.dataset.slug || '').toLowerCase();
        const idx = parseInt(frame.dataset.idx, 10) || 0;
        const photos = this.#repository.getPhotos(cat);
        if (!photos.length) return;

        let targetIdx = idx;
        if (slug) {
          const found = photos.findIndex(p => {
            const s = (p.src && p.src.split('/').pop().replace(/\.[^.]+$/, '')) || '';
            return s.toLowerCase() === slug;
          });
          if (found !== -1) targetIdx = found;
        }

        // Keep ?tab= on the photo's category so a copied #photo- link reopens this exact photo
        if (cat !== this.activeCategory && this.#repository.isValidCategory(cat)) {
          this.switchTab(cat, false, false);
        }
        this.#lightbox.open(photos, Math.min(targetIdx, photos.length - 1), frame);
      };

      frame.addEventListener('click', handler);
      frame.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handler();
        }
      });
    });
  }

  #initDefaultView() {
    const requestedTab = new URLSearchParams(window.location?.search || '').get('tab');
    const startCat = (requestedTab && this.#repository.isValidCategory(requestedTab))
      ? requestedTab
      : this.activeCategory;
    this.switchTab(startCat, false, false);
    if (window.location && history?.replaceState) {
      const url = new URL(window.location.href);
      url.searchParams.set('tab', startCat);
      history.replaceState({ tab: startCat }, '', url);
    }
    this.#initHashPhoto();
  }

  #initHashPhoto() {
    const hash = window.location?.hash || '';
    if (!hash || !hash.startsWith('#photo-')) return;
    const targetSlug = hash.replace(/^#photo-/, '').toLowerCase();

    // File names repeat across categories (Pre-Debut and Events share EYSI-7-3, 8-3, …), so the
    // category in ?tab= decides first; the lightbox and hero keep ?tab= in sync with the photo.
    const requestedTab = new URLSearchParams(window.location?.search || '').get('tab');
    const categories = this.#repository.getCategories();
    const ordered = this.#repository.isValidCategory(requestedTab)
      ? [requestedTab, ...categories.filter(c => c !== requestedTab)]
      : categories;

    for (const cat of ordered) {
      const photos = this.#repository.getPhotos(cat);
      const idx = photos.findIndex((p, i) => {
        const s = (p.src && p.src.split('/').pop().replace(/\.[^.]+$/, '')) || String(i + 1);
        return s.toLowerCase() === targetSlug;
      });
      if (idx !== -1) {
        this.switchTab(cat, false);
        this.#lightbox.open(photos, idx, null);
        return;
      }
    }
  }
}


/* ── 7. TELEMETRY HUD & SCROLL CONTINUUM CONTROLLER ── */

class TelemetryHudController {
  #navEl;
  #navLinks;
  #sections;
  #hudChapter;
  #bttBtn;
  #currentSectionId = null;
  #lastScrollY = 0;

  static #CHAPTERS = {
    hero:    'EYSI CLICKS',
    about:   'Andrei C. Capoy',
    gallery: 'Selected Works',
  };

  constructor() {
    this.#navEl      = document.getElementById('navbar');
    this.#navLinks   = Array.from(document.querySelectorAll('.nav-link[data-section]'));
    this.#sections   = this.#navLinks
      .map(link => document.getElementById(link.dataset.section))
      .filter(Boolean);
    this.#hudChapter = document.getElementById('hud-chapter');
    this.#bttBtn     = document.getElementById('back-to-top');

    this.#bindScroll();
    this.#setupScrollspy();
    this.updateOnScroll();
  }

  updateOnScroll() {
    const scrollY = window.scrollY || 0;
    if (this.#navEl) {
      this.#navEl.classList.toggle('is-scrolled', scrollY > 50);

      // Smart hide-on-scroll-down / show-on-scroll-up
      if (scrollY > 120 && scrollY > this.#lastScrollY + 6) {
        this.#navEl.classList.add('nav-hidden');
      } else if (scrollY < this.#lastScrollY - 6 || scrollY <= 50) {
        this.#navEl.classList.remove('nav-hidden');
      }
      // Lets the pinned gallery tabs sit at the very top while the nav is away
      document.documentElement.classList.toggle('nav-away', this.#navEl.classList.contains('nav-hidden'));
    }
    if (this.#bttBtn) {
      this.#bttBtn.classList.toggle('visible', scrollY > 480);
    }
    if (scrollY <= 80 && this.#currentSectionId !== 'hero') {
      this.#setActiveSection('hero');
    }
    this.#lastScrollY = scrollY;
  }

  #setupScrollspy() {
    if (!this.#sections.length) return;
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.#setActiveSection(entry.target.id);
          }
        });
      }, {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0.1
      });
      this.#sections.forEach(sec => observer.observe(sec));
    }
  }

  #setActiveSection(id) {
    if (!id || this.#currentSectionId === id) return;
    this.#currentSectionId = id;
    this.#navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.section === id);
    });
    if (this.#hudChapter) {
      this.#hudChapter.textContent = TelemetryHudController.#CHAPTERS[id] || TelemetryHudController.#CHAPTERS.hero;
    }
  }

  #bindScroll() {
    if (this.#bttBtn) {
      this.#bttBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    let scrollTicking = false;
    window.addEventListener('scroll', () => {
      if (!scrollTicking) {
        window.requestAnimationFrame(() => {
          this.updateOnScroll();
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    }, { passive: true });
  }
}


/* ── 8. EDITORIAL MONOGRAPH MOTION CONTROLLER ── */

class EditorialMotionController {
  #heroSection;
  #heroDeck;
  #grainEl;
  #aboutSection;
  #aboutWrap;
  #gallerySection;
  #packagesSection;
  #closingSection;
  #footerSection;
  #transitionCoordinator;

  constructor(transitionCoordinator) {
    this.#transitionCoordinator = transitionCoordinator;
    this.#heroSection    = document.getElementById('hero');
    this.#heroDeck       = document.querySelector('.hero-deck');
    this.#grainEl        = document.querySelector('.grain');
    this.#aboutSection   = document.getElementById('about');
    this.#aboutWrap      = document.querySelector('.about-wrap');
    this.#gallerySection = document.getElementById('gallery');
    this.#packagesSection = document.getElementById('packages');
    this.#closingSection = document.getElementById('closing');
    this.#footerSection  = document.getElementById('footer');

    this.#initKineticTypography();
    this.#initScrollObservers();
    this.#initCameraRigAndGrain();
    this.#initEntranceCleanup();
  }

  #initKineticTypography() {
    if (this.#transitionCoordinator?.prefersReducedMotion) return;

    let heroCharIdx = 0;
    document.querySelectorAll('.hero-title-word').forEach(wordEl => {
      heroCharIdx = this.#splitCharacters(wordEl, heroCharIdx);
    });

    const taglineEl = document.querySelector('.hero-tagline');
    if (taglineEl) {
      this.#splitWordsPreservingHighlights(taglineEl);
    }

    const aboutTitle = document.querySelector('#about .section-title');
    if (aboutTitle) {
      this.#splitCharacters(aboutTitle, 0);
    }

    const galleryTitle = document.querySelector('#gallery .section-title');
    if (galleryTitle) {
      this.#splitCharacters(galleryTitle, 0);
    }

    const packagesTitle = document.querySelector('#packages .section-title');
    if (packagesTitle) {
      this.#splitCharacters(packagesTitle, 0);
    }
  }

  #splitCharacters(el, startIdx = 0) {
    const rawText = el.textContent || '';
    if (!rawText.trim()) return startIdx;

    if (!el.hasAttribute('aria-label')) {
      el.setAttribute('aria-label', rawText.trim());
    }
    el.innerHTML = '';

    let charIdx = startIdx;
    const tokens = rawText.split(/(\s+)/);
    tokens.forEach(token => {
      if (!token) return;
      if (/^\s+$/.test(token)) {
        const spaceSpan = document.createElement('span');
        spaceSpan.className = 'bm-space';
        spaceSpan.setAttribute('aria-hidden', 'true');
        spaceSpan.textContent = token;
        el.appendChild(spaceSpan);
        return;
      }
      const wordWrap = document.createElement('span');
      wordWrap.className = 'bm-char-wrap';
      wordWrap.setAttribute('aria-hidden', 'true');

      for (const ch of token) {
        const span = document.createElement('span');
        span.className = 'bm-char';
        span.setAttribute('style', `--char-idx:${charIdx}`);
        span.setAttribute('aria-hidden', 'true');
        span.textContent = ch;
        wordWrap.appendChild(span);
        charIdx++;
      }
      el.appendChild(wordWrap);
    });

    return charIdx;
  }

  #splitWordsPreservingHighlights(container) {
    const originalNodes = [...container.childNodes];
    container.innerHTML = '';
    let wordIdx = 0;

    originalNodes.forEach(node => {
      if (node.nodeType === 3) {
        const parts = (node.textContent || '').split(/(\s+)/);
        parts.forEach(part => {
          if (!part) return;
          if (/^\s+$/.test(part)) {
            const spaceSpan = document.createElement('span');
            spaceSpan.className = 'bm-space';
            spaceSpan.textContent = part;
            container.appendChild(spaceSpan);
          } else {
            const span = document.createElement('span');
            span.className = 'bm-word';
            span.setAttribute('style', `--word-idx:${wordIdx++}`);
            span.textContent = part;
            container.appendChild(span);
          }
        });
      } else {
        container.appendChild(node);
        wordIdx += 2;
      }
    });
  }

  #initCameraRigAndGrain() {
    // Static archival grain with CSS strict containment requires zero scroll/mousemove style mutations
  }

  #initScrollObservers() {
    if (this.#transitionCoordinator?.prefersReducedMotion) {
      if (this.#aboutWrap) this.#aboutWrap.classList.add('is-in-view');
      if (this.#gallerySection) this.#gallerySection.classList.add('is-in-view');
      if (this.#packagesSection) this.#packagesSection.classList.add('is-in-view');
      if (this.#closingSection) this.#closingSection.classList.add('is-in-view');
      if (this.#footerSection) this.#footerSection.classList.add('is-in-view');
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      if (this.#aboutWrap) this.#aboutWrap.classList.add('is-in-view');
      if (this.#gallerySection) this.#gallerySection.classList.add('is-in-view');
      if (this.#packagesSection) this.#packagesSection.classList.add('is-in-view');
      if (this.#closingSection) this.#closingSection.classList.add('is-in-view');
      if (this.#footerSection) this.#footerSection.classList.add('is-in-view');
      return;
    }

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === this.#aboutSection) {
            if (this.#aboutWrap) this.#aboutWrap.classList.add('is-in-view');
          } else if (entry.target === this.#gallerySection) {
            entry.target.classList.add('is-in-view');
          } else if (entry.target === this.#packagesSection || entry.target === this.#closingSection) {
            entry.target.classList.add('is-in-view');
          } else if (entry.target === this.#footerSection) {
            entry.target.classList.add('is-in-view');
          }
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    if (this.#aboutSection) revealObserver.observe(this.#aboutSection);
    if (this.#gallerySection) revealObserver.observe(this.#gallerySection);
    if (this.#packagesSection) revealObserver.observe(this.#packagesSection);
    if (this.#closingSection) revealObserver.observe(this.#closingSection);
    if (this.#footerSection) revealObserver.observe(this.#footerSection);
  }

  #initEntranceCleanup() {
    const settle = () => document.documentElement.classList.add('hero-settled');
    if (this.#transitionCoordinator?.prefersReducedMotion) {
      settle();
      return;
    }
    // Every hero entrance keyframe has finished by then (the fan cards are placed by
    // HeroFanController and have none)
    setTimeout(settle, 1650);
  }
}


/* ── 8b. HERO FAN (cards dealt onto a curve; hover lifts one and parts the fan) ── */

// A vanilla port of ReactDrops' "Fan Gallery" (drop 29, v2.0.1): its fan geometry, hover
// clearance, spring maths and "deal" entrance. ReactDrops Component License 1.0 (royalty-free
// for finished websites); the full text is in vendor/reactdrops/LICENSE.txt.
class HeroFanController {
  // The owner's configuration (2026-11-19). Distances are in layout pixels before fitting.
  // From 960px the hero has two columns: cards are larger there, and the deck is dealt from
  // the right so the cards never cross the headline (see #currentConfig).
  static #OPTIONS = Object.freeze({
    cardWidth: 162,
    wideCardWidth: 200,
    aspectRatio: 0.8,
    spacing: 0.69,     // distance between card centres, as a fraction of the card width
    curve: 0.2,        // how far the outer cards drop, as a fraction of the card height
    tilt: 14.5,        // degrees the outer cards lean outward
    lift: 42,          // pixels the hovered card rises
    spread: 0.2,       // extra gap opened beside the hovered card, in card widths
    stackFrom: 'left', // this side lies in front at rest
    speed: 0.7,        // seconds for one card to settle
    stagger: 0.09,     // seconds between cards
    bounce: 0.45,      // 0 lands softly, 1 overshoots and wobbles
    hoverSpeed: 0.28,  // seconds for a card to glide to its hover position
    radius: 18,
    viewportStart: 75, // play once the stage's top passes 75% down the viewport
  });
  static #PADDING = 16;
  static #RAD = Math.PI / 180;

  #transitionCoordinator;
  #stage;
  #cards = [];
  #count = 0;
  #layout = null;
  #measuredWidth = -1;
  // Entrance clock in seconds: null before play, Infinity once finished
  #time = null;
  #started = null;
  #length = 0;
  #last = 0;
  #frame = 0;
  #animating = false;
  #active = -1;
  #offsets = [];
  #written = [];
  #fullRepaint = true;
  #shifts = null;
  #partLeft = 0;
  #partRight = 0;
  #wideQuery = null;
  #config = HeroFanController.#OPTIONS;
  #motif = null;
  #motifToken = 0;

  constructor(transitionCoordinator) {
    this.#transitionCoordinator = transitionCoordinator;
    this.#stage = document.querySelector('.hero-deck');
    if (!this.#stage || typeof requestAnimationFrame !== 'function') return;
    this.#cards = Array.from(this.#stage.querySelectorAll('.hero-card'));
    this.#count = this.#cards.length;
    if (!this.#count) return;

    const o = HeroFanController.#OPTIONS;
    this.#wideQuery = typeof window.matchMedia === 'function' ? window.matchMedia('(min-width: 960px)') : null;
    this.#motif = document.querySelector('.memory-motif .motif-text');
    this.#offsets = this.#cards.map(() => ({
      x: { x: 0, v: 0 }, y: { x: 0, v: 0 }, r: { x: 0, v: 0 }, tx: 0, ty: 0, tr: 0,
    }));
    this.#written = this.#cards.map(() => ({ transform: '', z: -1 }));
    this.#length = (this.#count - 1) * o.stagger + HeroFanController.#settleTime(o.speed, o.bounce);

    this.#measure();
    this.#stage.dataset.ready = 'true';
    this.#bindInput();
    this.#watchSize();
    if (this.#reduced) this.#finish();
    else this.#armTrigger();
  }

  get #reduced() {
    return Boolean(this.#transitionCoordinator?.prefersReducedMotion);
  }

  // ── Geometry (ported) ──

  // Resting pose of card `index`, relative to the middle of the fan (y grows downward)
  static #restPose(index, count, o) {
    const width = o.cardWidth;
    const height = width / o.aspectRatio;
    const middle = (count - 1) / 2;
    const offset = index - middle;
    const share = offset / Math.max(1, middle);
    return {
      x: offset * Math.max(0, o.spacing) * width,
      y: Math.max(0, o.curve) * height * share * share,
      rotation: o.tilt * share,
    };
  }

  static #corners(pose, width, height) {
    const cos = Math.cos(pose.rotation * HeroFanController.#RAD);
    const sin = Math.sin(pose.rotation * HeroFanController.#RAD);
    const xs = [];
    const ys = [];
    [[-1, -1], [1, -1], [1, 1], [-1, 1]].forEach(([sx, sy]) => {
      const dx = (sx * width) / 2;
      const dy = (sy * height) / 2;
      xs.push(pose.x + dx * cos - dy * sin);
      ys.push(pose.y + dx * sin + dy * cos);
    });
    return { xs, ys };
  }

  // Rightmost (side 1) or leftmost (side -1) point of a quad on the line y
  static #edgeAt(q, y, side) {
    let best = side > 0 ? -Infinity : Infinity;
    for (let k = 0; k < 4; k++) {
      const j = (k + 1) & 3;
      const ay = q.ys[k];
      const by = q.ys[j];
      if ((ay - y) * (by - y) > 0 || ay === by) continue;
      const x = q.xs[k] + ((y - ay) / (by - ay)) * (q.xs[j] - q.xs[k]);
      best = side > 0 ? Math.max(best, x) : Math.min(best, x);
    }
    return best;
  }

  // How far the right card reaches into the left one, over every height both share. Both
  // edges are piecewise linear in y, so checking the vertex heights is exact.
  static #overlapWidth(left, right, width, height) {
    const a = HeroFanController.#corners(left, width, height);
    const b = HeroFanController.#corners(right, width, height);
    const top = Math.max(Math.min(...a.ys), Math.min(...b.ys));
    const bottom = Math.min(Math.max(...a.ys), Math.max(...b.ys));
    if (top >= bottom) return -Infinity;
    let overlap = -Infinity;
    const check = y => {
      if (y < top || y > bottom) return;
      const l = HeroFanController.#edgeAt(a, y, 1);
      const r = HeroFanController.#edgeAt(b, y, -1);
      if (Number.isFinite(l) && Number.isFinite(r)) overlap = Math.max(overlap, l - r);
    };
    check(top);
    check(bottom);
    for (let k = 0; k < 4; k++) {
      check(a.ys[k]);
      check(b.ys[k]);
    }
    return overlap;
  }

  // For every card that can be lifted: how far each side of the fan slides, as one piece, so
  // the lifted card overlaps nothing, plus the spread gap
  static #sideShifts(count, o) {
    const width = o.cardWidth;
    const height = width / o.aspectRatio;
    const gap = Math.max(0, o.spread) * width;
    const left = [];
    const right = [];
    for (let active = 0; active < count; active++) {
      const lifted = { ...HeroFanController.#restPose(active, count, o), rotation: 0 };
      lifted.y -= o.lift;
      let l = 0;
      let r = 0;
      for (let i = 0; i < count; i++) {
        if (i === active) continue;
        const pose = HeroFanController.#restPose(i, count, o);
        if (i > active) r = Math.max(r, HeroFanController.#overlapWidth(lifted, pose, width, height));
        else l = Math.max(l, HeroFanController.#overlapWidth(pose, lifted, width, height));
      }
      left.push(l + gap);
      right.push(r + gap);
    }
    return { left, right };
  }

  #pose(index, active = -1) {
    const o = this.#layout.options;
    const pose = HeroFanController.#restPose(index, this.#count, o);
    if (active < 0 || active >= this.#count) return pose;
    if (index === active) return { x: pose.x, y: pose.y - o.lift, rotation: 0 };
    pose.x += index > active ? this.#partRight : -this.#partLeft;
    return pose;
  }

  // The original lets a parted fan run past its own edges. In the hero that would cover the
  // headline beside it (two columns) or run off the screen, so each side parts only as far as
  // the room it has; when cramped, the neighbours tuck partly behind the lifted card.
  #limitParting(active) {
    this.#partLeft = 0;
    this.#partRight = 0;
    if (active < 0) return;
    const L = this.#layout;
    const o = L.options;
    const n = this.#count;
    const height = o.cardWidth / o.aspectRatio;
    const box = this.#stage.getBoundingClientRect();
    const viewport = document.documentElement.clientWidth || window.innerWidth;
    let left = 8 - box.left;
    const right = viewport - 8 - box.left;
    const text = document.querySelector('.hero-content')?.getBoundingClientRect();
    if (text && text.right <= box.left + 1 && text.bottom > box.top && text.top < box.bottom) {
      left = Math.max(left, text.right + 16 - box.left);
    }
    const edge = (i, side) => {
      const pose = HeroFanController.#restPose(i, n, o);
      const reach = HeroFanController.#extents(pose.rotation, o.cardWidth, height).x;
      return L.originX + (pose.x + side * reach) * L.fit;
    };
    this.#partLeft = Math.max(0, Math.min(this.#shifts.left[active], (edge(0, -1) - left) / L.fit));
    this.#partRight = Math.max(0, Math.min(this.#shifts.right[active], (right - edge(n - 1, 1)) / L.fit));
  }

  static #extents(rotation, width, height) {
    const c = Math.abs(Math.cos(rotation * HeroFanController.#RAD));
    const s = Math.abs(Math.sin(rotation * HeroFanController.#RAD));
    return { x: (c * width + s * height) / 2, y: (s * width + c * height) / 2 };
  }

  // Fits the resting fan to the stage width: spacing compresses first (down to 40%), then the
  // cards scale down. Height reserves the hovered card's rise.
  static #fit(availableWidth, count, input) {
    const width = Math.max(40, input.cardWidth);
    const height = width / input.aspectRatio;
    const padding = HeroFanController.#PADDING;
    const available = Math.max(1, availableWidth - padding * 2);
    const middle = (count - 1) / 2;
    const requested = Math.max(0, input.spacing);
    let spacing = requested;
    for (let i = 0; i < count; i++) {
      const offset = Math.abs(i - middle);
      if (!offset) continue;
      const edge = HeroFanController.#extents(input.tilt * ((i - middle) / Math.max(1, middle)), width, height).x;
      spacing = Math.min(spacing, (available / 2 - edge) / (offset * width));
    }
    spacing = Math.min(requested, Math.max(requested * 0.4, spacing));
    const options = { ...input, cardWidth: width, spacing };
    let half = 1;
    let top = 0;
    let restTop = Infinity;
    let bottom = 0;
    for (let i = 0; i < count; i++) {
      const pose = HeroFanController.#restPose(i, count, options);
      const e = HeroFanController.#extents(pose.rotation, width, height);
      half = Math.max(half, Math.abs(pose.x) + e.x);
      restTop = Math.min(restTop, pose.y - e.y);
      top = Math.min(top, pose.y - e.y, pose.y - options.lift - height / 2);
      bottom = Math.max(bottom, pose.y + e.y);
    }
    const fit = Math.min(1, available / (half * 2));
    return {
      fit,
      width: width * fit,
      height: height * fit,
      originX: availableWidth / 2,
      originY: -top * fit + padding,
      stageHeight: (bottom - top) * fit + padding * 2,
      bandTop: padding + (restTop - top) * fit,
      bandBottom: padding + (bottom - top) * fit,
      options,
    };
  }

  // ── Springs (ported) ──

  // Exact step response of a damped spring from 0 to 1; bounce lowers the damping ratio
  static #spring(time, speed, bounce) {
    if (time <= 0) return 0;
    const zeta = 1 - 0.68 * Math.max(0, Math.min(1, bounce));
    const omega = 6.6 / Math.max(0.05, speed);
    if (zeta >= 0.999) return 1 - (1 + omega * time) * Math.exp(-omega * time);
    const damped = omega * Math.sqrt(1 - zeta * zeta);
    return 1 - Math.exp(-zeta * omega * time)
      * (Math.cos(damped * time) + ((zeta * omega) / damped) * Math.sin(damped * time));
  }

  // Time after which that spring stays within 0.1% of its target
  static #settleTime(speed, bounce) {
    const zeta = 1 - 0.68 * Math.max(0, Math.min(1, bounce));
    const omega = 6.6 / Math.max(0.05, speed);
    const tolerance = 1e-3;
    if (zeta >= 0.999) {
      let t = Math.log(1 / tolerance) / omega;
      for (let i = 0; i < 8; i++) t = (Math.log(1 + omega * t) + Math.log(1 / tolerance)) / omega;
      return t;
    }
    return Math.log(1 / (tolerance * Math.sqrt(1 - zeta * zeta))) / (zeta * omega);
  }

  // Critically damped follow, frame-rate independent (each card has its own hover spring)
  static #follow(state, target, omega, dt) {
    const decay = Math.exp(-omega * dt);
    const change = state.x - target;
    const lag = (state.v + omega * change) * dt;
    state.x = target + (change + lag) * decay;
    state.v = (state.v - omega * lag) * decay;
  }

  // ── Layout and painting ──

  // The options for the current screen: the owner's values, with the wide-screen card size and
  // deal side from 960px
  #currentConfig() {
    const o = HeroFanController.#OPTIONS;
    const wide = Boolean(this.#wideQuery?.matches);
    return {
      ...o,
      cardWidth: wide ? o.wideCardWidth : o.cardWidth,
      dealFrom: wide ? 'right' : o.stackFrom,
    };
  }

  #measure() {
    const width = this.#stage.clientWidth || 0;
    const config = this.#currentConfig();
    if (width === this.#measuredWidth && config.cardWidth === this.#config.cardWidth
      && config.dealFrom === this.#config.dealFrom) return false;
    this.#measuredWidth = width;
    this.#config = config;
    this.#layout = HeroFanController.#fit(width, this.#count, config);
    this.#shifts = HeroFanController.#sideShifts(this.#count, this.#layout.options);
    this.#retarget();
    this.#stage.style.height = `${this.#layout.stageHeight.toFixed(1)}px`;
    // The CSS aspect ratio only approximates the height until now
    this.#stage.style.maxHeight = 'none';
    this.#stage.style.aspectRatio = 'auto';
    const radius = `${(config.radius * this.#layout.fit).toFixed(2)}px`;
    this.#cards.forEach(card => {
      card.style.width = `${this.#layout.width.toFixed(2)}px`;
      card.style.height = `${this.#layout.height.toFixed(2)}px`;
      card.style.borderRadius = radius;
    });
    this.#snap();
    this.#render();
    return true;
  }

  #retarget() {
    this.#limitParting(this.#active);
    const fit = this.#layout.fit;
    this.#offsets.forEach((o, i) => {
      const rest = this.#pose(i);
      const target = this.#pose(i, this.#active);
      o.tx = (target.x - rest.x) * fit;
      o.ty = (target.y - rest.y) * fit;
      o.tr = target.rotation - rest.rotation;
    });
  }

  #snap() {
    this.#offsets.forEach(o => {
      o.x.x = o.tx;
      o.y.x = o.ty;
      o.r.x = o.tr;
      o.x.v = o.y.v = o.r.v = 0;
    });
  }

  // Dealing order: the card nearest the deck goes first. Dealt from the right, the back cards
  // land first and the front card lands last, on top.
  #rank(i) {
    return this.#config.dealFrom === 'right' ? this.#count - 1 - i : i;
  }

  #layer(i) {
    return HeroFanController.#OPTIONS.stackFrom === 'right' ? i : this.#count - 1 - i;
  }

  // Pose of card i at entrance progress p: thrown from a deck beside the stage along an arc,
  // with a spin. Hover offsets ride on top, so hover responds even while cards arrive.
  #place(i, p) {
    const L = this.#layout;
    const fit = L.fit;
    const final = this.#pose(i);
    let x = final.x * fit;
    let y = final.y * fit;
    let rotation = final.rotation;
    if (p !== 1) {
      const h = L.height;
      const side = this.#config.dealFrom === 'right' ? 1 : -1;
      const startX = side * (L.originX + L.width * 1.2);
      const startY = L.stageHeight - L.originY + h * 0.4;
      const controlX = (startX + x) / 2;
      const controlY = Math.min(startY, y) - h * 0.9;
      const q = 1 - p;
      x = q * q * startX + 2 * q * p * controlX + p * p * x;
      y = q * q * startY + 2 * q * p * controlY + p * p * y;
      rotation = side * -75 + (rotation - side * -75) * p;
    }
    const off = this.#offsets[i];
    return { x: x + off.x.x, y: y + off.y.x, rotation: rotation + off.r.x };
  }

  #render(only) {
    const o = HeroFanController.#OPTIONS;
    const L = this.#layout;
    const now = this.#time;
    for (let i = 0; i < this.#count; i++) {
      if (only && !only[i]) continue;
      const progress = now === null ? 0
        : now === Infinity ? 1
        : HeroFanController.#spring(now - this.#rank(i) * o.stagger, o.speed, o.bounce);
      const pose = this.#place(i, progress);
      const left = L.originX + pose.x - L.width / 2;
      const top = L.originY + pose.y - L.height / 2;
      const transform = `translate(${left.toFixed(2)}px,${top.toFixed(2)}px) rotate(${pose.rotation.toFixed(3)}deg)`;
      // The lifted card comes to the front; the rest keep their resting order
      const z = 1 + this.#layer(i) + (i === this.#active ? this.#count : 0);
      const cache = this.#written[i];
      const style = this.#cards[i].style;
      if (cache.transform !== transform) style.transform = cache.transform = transform;
      if (cache.z !== z) style.zIndex = String(cache.z = z);
    }
  }

  // ── Frame loop ──

  static #settled(state, target) {
    return Math.abs(state.x - target) < 0.02 && Math.abs(state.v) < 0.05;
  }

  static #cardMoving(o) {
    const settled = HeroFanController.#settled;
    return !settled(o.x, o.tx) || !settled(o.y, o.ty) || !settled(o.r, o.tr);
  }

  #entering() {
    return this.#time !== null && this.#time !== Infinity;
  }

  #tick(now) {
    this.#frame = 0;
    const dt = this.#last ? Math.min(0.05, (now - this.#last) / 1000) : 1 / 60;
    this.#last = now;
    const omega = 6.6 / Math.max(0.05, HeroFanController.#OPTIONS.hoverSpeed);
    const changed = new Uint8Array(this.#count);
    this.#offsets.forEach((o, i) => {
      if (!HeroFanController.#cardMoving(o)) return;
      HeroFanController.#follow(o.x, o.tx, omega, dt);
      HeroFanController.#follow(o.y, o.ty, omega, dt);
      HeroFanController.#follow(o.r, o.tr, omega, dt);
      if (!HeroFanController.#cardMoving(o)) {
        o.x.x = o.tx;
        o.y.x = o.ty;
        o.r.x = o.tr;
        o.x.v = o.y.v = o.r.v = 0;
      }
      changed[i] = 1;
    });
    if (this.#entering()) {
      if (this.#started === null) this.#started = now;
      this.#time = (now - this.#started) / 1000;
      if (this.#time >= this.#length) this.#time = Infinity;
      this.#fullRepaint = true;
    }
    this.#render(this.#fullRepaint ? undefined : changed);
    this.#fullRepaint = false;
    const moving = this.#entering() || this.#offsets.some(HeroFanController.#cardMoving);
    this.#setAnimating(moving);
    if (moving) this.#frame = requestAnimationFrame(t => this.#tick(t));
    else this.#last = 0;
  }

  // While anything moves, cards may travel past the stage edges and are never cut
  #setAnimating(on) {
    if (on === this.#animating) return;
    this.#animating = on;
    this.#stage.classList.toggle('is-moving', on);
    this.#stage.classList.toggle('is-animating', on);
  }

  #wake() {
    this.#setAnimating(true);
    if (!this.#frame) this.#frame = requestAnimationFrame(t => this.#tick(t));
  }

  #play() {
    if (this.#time !== null) return;
    if (this.#reduced) {
      this.#finish();
      return;
    }
    this.#time = 0;
    this.#started = null;
    this.#last = 0;
    this.#render();
    this.#wake();
  }

  #finish() {
    cancelAnimationFrame(this.#frame);
    this.#frame = 0;
    this.#last = 0;
    this.#time = Infinity;
    this.#setAnimating(false);
    this.#snap();
    this.#render();
  }

  // Deals the cards once the stage's top is 75% down the viewport, after the headline and
  // tagline have begun (the old deck's slot in the entrance choreography)
  #armTrigger() {
    const delay = typeof getComputedStyle === 'function'
      ? parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--motion-delay-deck')) || 380
      : 380;
    setTimeout(() => {
      if (typeof IntersectionObserver !== 'function') {
        this.#play();
        return;
      }
      const observer = new IntersectionObserver(entries => {
        if (!entries.some(e => e.isIntersecting)) return;
        observer.disconnect();
        this.#play();
      }, { rootMargin: `0px 0px -${100 - HeroFanController.#OPTIONS.viewportStart}% 0px` });
      observer.observe(this.#stage);
    }, delay);
  }

  #watchSize() {
    let pending = 0;
    const remeasure = () => {
      if (pending) return;
      pending = requestAnimationFrame(() => {
        pending = 0;
        this.#measure();
      });
    };
    if (typeof ResizeObserver === 'function') new ResizeObserver(remeasure).observe(this.#stage);
    else window.addEventListener('resize', remeasure, { passive: true });
    // Crossing 960px changes the card size even when the stage keeps its width
    this.#wideQuery?.addEventListener?.('change', remeasure);
  }

  // ── Hover and keyboard ──

  #activate(index) {
    if (this.#time === null) return;
    const next = index < 0 ? -1 : index;
    if (next === this.#active) return;
    this.#active = next;
    this.#stage.classList.toggle('is-active', next >= 0);
    this.#showName(next);
    this.#retarget();
    this.#fullRepaint = true;
    if (this.#reduced) {
      this.#snap();
      this.#render();
    } else {
      this.#wake();
    }
  }

  // The line under the fan names the lifted card, and goes back to the place name after
  #showName(index) {
    const motif = this.#motif;
    if (!motif) return;
    const text = index >= 0 ? this.#cards[index].dataset.name : motif.dataset.default;
    if (!text) return;
    const token = ++this.#motifToken;
    if (this.#reduced) {
      motif.textContent = text;
      return;
    }
    motif.classList.add('is-swapping');
    setTimeout(() => {
      if (token !== this.#motifToken) return;
      motif.textContent = text;
      motif.classList.remove('is-swapping');
    }, 150);
  }

  // Stable slots, one per card and centred on its resting place, so a card that moves never
  // steals the pointer; only inside the band the cards occupy (plus the lifted card's rise)
  #point(clientX, clientY) {
    const L = this.#layout;
    const box = this.#stage.getBoundingClientRect();
    const y = clientY - box.top;
    const rise = this.#active >= 0 ? HeroFanController.#OPTIONS.lift * L.fit : 0;
    if (y < L.bandTop - rise - 8 || y > L.bandBottom + 8) {
      this.#activate(-1);
      return;
    }
    const slot = Math.max(1e-3, L.options.spacing * L.options.cardWidth * L.fit);
    const first = L.originX + this.#pose(0).x * L.fit - slot / 2;
    const t = (clientX - box.left - first) / (slot * this.#count);
    this.#activate(Math.min(this.#count - 1, Math.max(0, Math.floor(Math.min(0.9999, Math.max(0, t)) * this.#count))));
  }

  #bindInput() {
    const stage = this.#stage;
    stage.addEventListener('pointermove', e => {
      if (e.pointerType !== 'touch') this.#point(e.clientX, e.clientY);
    });
    stage.addEventListener('pointerleave', () => this.#activate(this.#cards.indexOf(document.activeElement)));
    stage.addEventListener('focusout', e => {
      if (!stage.contains(e.relatedTarget)) this.#activate(-1);
    });
    // The space a lifted card left below itself still belongs to it
    stage.addEventListener('click', e => {
      if (e.target === stage && this.#active >= 0) this.#cards[this.#active].click();
    });
    this.#cards.forEach((card, i) => {
      // Tabbing onto a card before the scroll trigger has dealt the fan deals it straight away
      card.addEventListener('focus', () => {
        this.#play();
        this.#activate(i);
      });
      card.addEventListener('keydown', e => {
        const n = this.#count;
        const next = e.key === 'ArrowRight' ? (i + 1) % n
          : e.key === 'ArrowLeft' ? (i - 1 + n) % n
          : e.key === 'Home' ? 0
          : e.key === 'End' ? n - 1
          : -1;
        if (next >= 0) {
          e.preventDefault();
          this.#cards[next].focus({ preventScroll: true });
        } else if (e.key === 'Escape') {
          this.#activate(-1);
          card.blur();
        }
      });
    });
  }
}


/* ── 8c. SCROLL-LINKED MOTION (GSAP ScrollTrigger) ── */

// Two moments are tied to the scroll position itself rather than to a timer: the hero eases
// back as the page leaves it, and the closing tagline lights up word by word as it arrives.
// GSAP is optional. Without it, or with reduced motion, the CSS versions stay in charge.
class ScrollMotionController {
  #gsap = (typeof window !== 'undefined' && window.gsap) || null;

  constructor() {
    const ScrollTrigger = typeof window !== 'undefined' ? window.ScrollTrigger : null;
    if (!this.#gsap || !ScrollTrigger) return;
    this.#gsap.registerPlugin(ScrollTrigger);

    const media = this.#gsap.matchMedia();
    // Wide screens only: on phones the deck sits below the text, so the hero is still
    // being read while it scrolls and must not fade.
    media.add('(prefers-reduced-motion: no-preference) and (min-width: 960px)', () => this.#heroExit());
    media.add('(prefers-reduced-motion: no-preference)', () => this.#closingReveal());
  }

  #heroExit() {
    const inner = document.querySelector('#hero .hero-inner');
    if (!inner) return;
    this.#gsap.to(inner, {
      y: -56,
      opacity: 0.15,
      ease: 'none',
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true }
    });
  }

  #closingReveal() {
    const section = document.getElementById('closing');
    const line = section?.querySelector('.closing-line');
    if (!line) return undefined;
    const units = this.#splitWords(line);
    const underline = line.querySelector('.bm-hl.under i');
    section.classList.add('has-scrub');

    const timeline = this.#gsap.timeline({
      defaults: { ease: 'none' },
      // clamp(): the section sits near the end of the page, so the range must finish
      // within the scroll that actually exists
      scrollTrigger: { trigger: section, start: 'clamp(top 88%)', end: 'clamp(top 48%)', scrub: 0.4 }
    });
    timeline.fromTo(units, { opacity: 0.16 }, { opacity: 1, duration: 0.3, stagger: 0.08 });
    if (underline) timeline.fromTo(underline, { scaleX: 0 }, { scaleX: 1, duration: 0.35 }, '>-0.15');

    // matchMedia reverts the tweens; this hands the line back to the CSS entrance
    return () => section.classList.remove('has-scrub');
  }

  // Wraps each word in a span once; the highlighted phrase stays one unit. Words stay
  // inline with real spaces between them, so wrapping and screen readers are unchanged.
  #splitWords(line) {
    if (line.dataset.split === 'true') return Array.from(line.querySelectorAll('.closing-word'));
    Array.from(line.childNodes).forEach(node => {
      if (node.nodeType === 1) {
        node.classList.add('closing-word');
        return;
      }
      if (node.nodeType !== 3) return;
      const fragment = document.createDocumentFragment();
      node.textContent.split(/(\s+)/).forEach(part => {
        if (!part) return;
        if (/^\s+$/.test(part)) {
          fragment.appendChild(document.createTextNode(part));
          return;
        }
        const word = document.createElement('span');
        word.className = 'closing-word';
        word.textContent = part;
        fragment.appendChild(word);
      });
      line.replaceChild(fragment, node);
    });
    line.dataset.split = 'true';
    return Array.from(line.querySelectorAll('.closing-word'));
  }
}


/* ── 8d. SPECULAR EDGE (a light that runs along every button's rim) ── */

// A vanilla port of React Bits' SpecularButton (WebGL2 rim light). React Bits is
// MIT + Commons Clause: free to use inside a website; the notice is in
// vendor/reactbits/LICENSE.md. Only the light is ported: each button keeps the site's own
// fill, type and hover. Every `.btn-specular` gets its own 2D canvas, and one shared WebGL2
// context draws each light and copies it in, because a page only gets a handful of WebGL
// contexts. Colours come from --specular-line and --specular-base on each button, which the
// CSS sets per theme, per fill and per state (hover, active tab, pressed).

// One button's light: its geometry, where the light sits and how bright it is
class SpecularLight {
  // Owner's configuration (2026-11-19), the component's defaults
  static #OPTIONS = Object.freeze({
    radius: 9999,       // pills and circles: clamped to half the height
    intensity: 1,
    idleIntensity: 0.35,
    shineSize: 10,      // degrees of rim at full strength
    shineFade: 34,      // degrees over which it fades out
    thickness: 1.2,
    glow: 1,
    followMouse: true,
    proximity: 250,
  });
  // The canvas reaches this far past the button so the glow is never cut
  static PAD = 24;

  #button;
  #canvas;
  #context;
  #view = { width: 1, height: 1, ratio: 1 };
  #state = { spot: 0, level: 0, press: 0, ready: false };
  #colors = { line: [1, 1, 1], base: [0.5, 0.5, 0.5] };
  #colorsStale = true;
  #needsDraw = true;
  visible = false;

  constructor(button, canvas, context) {
    this.#button = button;
    this.#canvas = canvas;
    this.#context = context;
  }

  get button() { return this.#button; }
  get canvas() { return this.#canvas; }
  get context() { return this.#context; }
  get needsDraw() { return this.#needsDraw; }
  get colorsStale() { return this.#colorsStale; }

  static get followsPointer() {
    return SpecularLight.#OPTIONS.followMouse;
  }

  // ── Rim geometry (ported) ──

  static #wrap(value) {
    return value - Math.floor(value);
  }

  // Where along the rim (0 … 1, counter-clockwise from the right middle) a point lies
  static #loopPosition(x, y, halfX, halfY, r) {
    const innerX = halfX - r;
    const innerY = halfY - r;
    const arc = (Math.PI / 2) * r;
    const quarter = innerX + innerY + arc;
    const ax = Math.abs(x);
    const ay = Math.abs(y);
    const qx = ax - innerX;
    const qy = ay - innerY;
    let s;
    if (qx > 0 && qy > 0) s = innerY + Math.atan2(qy, qx) * r;
    else if (qx > qy) s = Math.min(ay, innerY);
    else s = innerY + arc + innerX - Math.min(ax, innerX);
    if (x < 0) s = y >= 0 ? 2 * quarter - s : 2 * quarter + s;
    else if (y < 0) s = 4 * quarter - s;
    return SpecularLight.#wrap(s / Math.max(4 * quarter, 0.0001));
  }

  // The rim point at a given position
  static #rimPoint(position, halfX, halfY, r) {
    const innerX = halfX - r;
    const innerY = halfY - r;
    const arc = (Math.PI / 2) * r;
    const quarter = innerX + innerY + arc;
    let s = SpecularLight.#wrap(position) * 4 * quarter;
    let signX = 1;
    let signY = 1;
    if (s > 3 * quarter) {
      s = 4 * quarter - s;
      signY = -1;
    } else if (s > 2 * quarter) {
      s -= 2 * quarter;
      signX = -1;
      signY = -1;
    } else if (s > quarter) {
      s = 2 * quarter - s;
      signX = -1;
    }
    let x = innerX - (s - innerY - arc);
    let y = halfY;
    if (s <= innerY) {
      x = halfX;
      y = s;
    } else if (s <= innerY + arc) {
      const angle = (s - innerY) / Math.max(r, 0.0001);
      x = innerX + Math.cos(angle) * r;
      y = innerY + Math.sin(angle) * r;
    }
    return [x * signX, y * signY];
  }

  // ── State ──

  measure(width, height, ratio) {
    const pad = SpecularLight.PAD;
    this.#view.width = Math.max(1, width);
    this.#view.height = Math.max(1, height);
    this.#view.ratio = ratio;
    this.#canvas.width = Math.max(1, Math.round((this.#view.width + pad * 2) * ratio));
    this.#canvas.height = Math.max(1, Math.round((this.#view.height + pad * 2) * ratio));
    this.#needsDraw = true;
  }

  markColors() {
    this.#colorsStale = true;
  }

  // A press flares the light
  flare() {
    this.#state.press = 1;
  }

  // Theme and state colours, resolved to RGB through a 1px 2D canvas (any CSS colour syntax)
  readColors(probe) {
    const style = getComputedStyle(this.#button);
    const toRgb = (value, fallback) => {
      if (!probe || !value) return fallback;
      probe.clearRect(0, 0, 1, 1);
      probe.fillStyle = '#000000';
      probe.fillStyle = value;
      probe.fillRect(0, 0, 1, 1);
      const [r, g, b] = probe.getImageData(0, 0, 1, 1).data;
      return [r / 255, g / 255, b / 255];
    };
    this.#colors.line = toRgb(style.getPropertyValue('--specular-line').trim(), [1, 1, 1]);
    this.#colors.base = toRgb(style.getPropertyValue('--specular-base').trim(), [0.5, 0.5, 0.5]);
    this.#colorsStale = false;
    this.#needsDraw = true;
  }

  #cornerRadius() {
    return Math.min(SpecularLight.#OPTIONS.radius, this.#view.width / 2, this.#view.height / 2);
  }

  // At rest the light sits on the upper-left curve
  #restSpot() {
    const r = this.#cornerRadius();
    const inset = r * (1 - Math.SQRT1_2);
    const { width, height } = this.#view;
    return SpecularLight.#loopPosition(inset - width / 2, height / 2 - inset, width / 2, height / 2, r);
  }

  // The rim point nearest the pointer and how close the pointer is (0 … 1). Measured on the
  // canvas, not the button, so a button that scales or turns on hover is still read right.
  #aim(pointer) {
    if (!pointer.known) return null;
    const o = SpecularLight.#OPTIONS;
    const rect = this.#canvas.getBoundingClientRect();
    const scale = rect.width / (this.#view.width + SpecularLight.PAD * 2) || 1;
    const halfX = this.#view.width / 2;
    const halfY = this.#view.height / 2;
    const x = (pointer.x - rect.left - rect.width / 2) / scale;
    const y = (rect.top + rect.height / 2 - pointer.y) / scale;
    const distance = Math.hypot(Math.max(Math.abs(x) - halfX, 0), Math.max(Math.abs(y) - halfY, 0));
    if (distance >= o.proximity) return { spot: 0, near: 0 };
    const t = 1 - distance / o.proximity;
    const near = t * t * (3 - 2 * t);
    const nearest = SpecularLight.#loopPosition(x, y, halfX, halfY, this.#cornerRadius());
    if (distance > 0) return { spot: nearest, near };
    // Over the button the light sways gently from its rest spot instead of jumping around
    const depth = Math.min(1, Math.max(0, Math.min(halfX - Math.abs(x), halfY - Math.abs(y)) / (halfY * 0.8)));
    const sway = this.#restSpot() - (x / halfX) * 0.06 - (y / halfY) * 0.02;
    const offset = sway - nearest - Math.round(sway - nearest);
    return { spot: SpecularLight.#wrap(nearest + offset * depth * depth * (3 - 2 * depth)), near };
  }

  // Moves the light one frame towards where it wants to be; true while it is still moving
  step(dt, pointer, follow) {
    const o = SpecularLight.#OPTIONS;
    const state = this.#state;
    const target = follow ? this.#aim(pointer) : null;
    const steering = Boolean(target) && target.near > 0;
    if (!state.ready) {
      state.spot = this.#restSpot();
      state.level = o.idleIntensity;
      state.ready = true;
      this.#needsDraw = true;
    }
    let diff = (steering ? target.spot : this.#restSpot()) - state.spot;
    diff -= Math.round(diff);
    state.spot = SpecularLight.#wrap(state.spot + diff * (1 - Math.exp(-dt * 8)));
    const level = o.idleIntensity + (1 - o.idleIntensity) * (target ? target.near : 0);
    state.level += (level - state.level) * (1 - Math.exp(-dt * 7));
    state.press *= Math.exp(-dt * 5);
    const moving = Math.abs(diff) > 0.0002 || Math.abs(level - state.level) > 0.001 || state.press > 0.002;
    if (moving) this.#needsDraw = true;
    return moving;
  }

  // Shader inputs, in canvas pixels
  uniforms() {
    const o = SpecularLight.#OPTIONS;
    const pad = SpecularLight.PAD;
    const { width, height, ratio } = this.#view;
    const scaleX = this.#canvas.width / (width + pad * 2);
    const scaleY = this.#canvas.height / (height + pad * 2);
    const r = this.#cornerRadius();
    const [rimX, rimY] = SpecularLight.#rimPoint(this.#state.spot, width / 2, height / 2, r);
    const reach = Math.max(Math.hypot(rimX, rimY), 0.0001);
    const pull = 1 - Math.min(0.35 * (height / 2), reach) / reach;
    return {
      center: [(pad + width / 2) * scaleX, (pad + height / 2) * scaleY],
      half: [(width / 2) * scaleX, (height / 2) * scaleY],
      radius: r * scaleX,
      px: ratio,
      spot: this.#state.spot,
      entry: [rimX * pull * scaleX, rimY * pull * scaleY],
      line: this.#colors.line,
      base: this.#colors.base,
      intensity: o.intensity * (this.#state.level + this.#state.press * 0.8),
      window: [o.shineSize / 360 + this.#state.press * 0.06, o.shineFade / 360 + 0.0001],
      thickness: o.thickness,
      glow: o.glow,
    };
  }

  drawn() {
    this.#needsDraw = false;
  }
}

// Finds every `.btn-specular`, owns the shared WebGL2 context and runs one frame loop for all
class SpecularEdgeController {
  static #VERTEX = `#version 300 es
in vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`;
  static #FRAGMENT = `#version 300 es
precision highp float;
uniform vec2 uCenter;
uniform vec2 uHalf;
uniform float uRadius;
uniform float uPx;
uniform float uSpot;
uniform vec2 uEntry;
uniform vec3 uLineColor;
uniform vec3 uBaseColor;
uniform float uIntensity;
uniform vec2 uWindow;
uniform float uThickness;
uniform float uGlow;
out vec4 outColor;

float roundedBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

float loopPosition(vec2 p, vec2 b, float r) {
  vec2 inner = b - r;
  float arc = 1.5707963 * r;
  float quarter = inner.x + inner.y + arc;
  vec2 a = abs(p);
  vec2 q = a - inner;
  float s = q.x > 0.0 && q.y > 0.0
    ? inner.y + atan(q.y, q.x) * r
    : (q.x > q.y ? min(a.y, inner.y) : inner.y + arc + inner.x - min(a.x, inner.x));
  if (p.x < 0.0) s = p.y >= 0.0 ? 2.0 * quarter - s : 2.0 * quarter + s;
  else if (p.y < 0.0) s = 4.0 * quarter - s;
  return s / max(4.0 * quarter, 0.0001);
}

float lobe(float position, float center) {
  float gap = abs(fract(position - center + 0.5) - 0.5);
  return 1.0 - smoothstep(uWindow.x, uWindow.x + uWindow.y, gap);
}

void main() {
  vec2 p = gl_FragCoord.xy - uCenter;
  float d = roundedBox(p, uHalf, uRadius);
  float position = loopPosition(p, uHalf, uRadius);
  float key = lobe(position, uSpot);
  float back = lobe(position, uSpot + 0.5);
  float streak = key + back * 0.45;
  float width = max(uThickness * uPx * mix(1.0, max(key, back), 0.6), 0.35);
  float band = smoothstep(-width - 0.6, -width + 0.6, d) * (1.0 - smoothstep(-0.6, 0.6, d));
  float hair = smoothstep(-uPx - 0.6, -uPx + 0.6, d) * (1.0 - smoothstep(-0.6, 0.6, d));
  float inside = 1.0 - smoothstep(-0.6, 0.6, d);
  vec2 pool = (p - uEntry) / (uHalf.y * vec2(1.6, 1.1));
  float glow = streak * 0.2 * exp(-abs(d + width * 0.5) / (5.0 * uPx)) + inside * 0.08 * exp(-dot(pool, pool));
  float light = clamp((band * streak + glow * uGlow) * uIntensity, 0.0, 1.0);
  vec4 base = vec4(uBaseColor, 1.0) * hair * 0.6;
  outColor = vec4(uLineColor, 1.0) * light + base * (1.0 - light);
}`;

  #transitionCoordinator;
  #gl = null;
  #glCanvas = null;
  #program = null;
  #vao = null;
  #uniforms = {};
  #probe = null;
  #lights = new Map();
  #pointer = { x: 0, y: 0, known: false };
  #raf = 0;
  #last = 0;
  #observers = [];
  #resizeObserver = null;
  #viewObserver = null;
  #stateObserver = null;

  constructor(transitionCoordinator) {
    this.#transitionCoordinator = transitionCoordinator;
    if (!document.querySelector('.btn-specular') || typeof requestAnimationFrame !== 'function'
      || typeof ResizeObserver !== 'function') return;
    const glCanvas = document.createElement('canvas');
    if (typeof glCanvas.getContext !== 'function') return;
    // preserveDrawingBuffer keeps each light readable until it has been copied to its button
    const gl = glCanvas.getContext('webgl2', {
      alpha: true, premultipliedAlpha: true, antialias: false, depth: false, stencil: false,
      preserveDrawingBuffer: true,
    });
    if (!gl || !this.#link(gl)) return;
    // If the browser reclaims the GPU context, every button simply goes back to its plain look
    glCanvas.addEventListener('webglcontextlost', () => this.#teardown());
    this.#gl = gl;
    this.#glCanvas = glCanvas;
    this.#probe = document.createElement('canvas').getContext('2d', { willReadFrequently: true });
    this.#observe();
    this.#bindPointer();
    this.#adopt(document);
  }

  // ── WebGL setup ──

  static #compile(gl, type, source) {
    const shader = gl.createShader(type);
    if (!shader) return null;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return shader;
    gl.deleteShader(shader);
    return null;
  }

  #link(gl) {
    const vertex = SpecularEdgeController.#compile(gl, gl.VERTEX_SHADER, SpecularEdgeController.#VERTEX);
    const fragment = SpecularEdgeController.#compile(gl, gl.FRAGMENT_SHADER, SpecularEdgeController.#FRAGMENT);
    const program = gl.createProgram();
    if (!vertex || !fragment || !program) return false;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.bindAttribLocation(program, 0, 'aPosition');
    gl.linkProgram(program);
    gl.deleteShader(vertex);
    gl.deleteShader(fragment);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return false;
    }
    ['uCenter', 'uHalf', 'uRadius', 'uPx', 'uSpot', 'uEntry', 'uLineColor', 'uBaseColor',
      'uIntensity', 'uWindow', 'uThickness', 'uGlow'].forEach(name => {
      this.#uniforms[name] = gl.getUniformLocation(program, name);
    });
    // One triangle that covers the whole canvas
    const buffer = gl.createBuffer();
    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.bindVertexArray(null);
    this.#program = program;
    this.#vao = vao;
    return true;
  }

  // ── Buttons ──

  #observe() {
    this.#resizeObserver = new ResizeObserver(entries => {
      entries.forEach(entry => this.#measure(entry));
      this.#wake();
    });
    if (typeof IntersectionObserver === 'function') {
      this.#viewObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const light = this.#lights.get(entry.target);
          if (light) light.visible = entry.isIntersecting;
        });
        this.#last = 0;
        this.#wake();
      });
    }
    if (typeof MutationObserver !== 'function') return;
    // An active tab or a pressed control changes fill, so it needs the other colours
    this.#stateObserver = new MutationObserver(records => {
      records.forEach(record => this.#lights.get(record.target)?.markColors());
      this.#wake();
    });
    // Daylight / Darkroom swap every light's colours
    const theme = new MutationObserver(() => {
      this.#lights.forEach(light => light.markColors());
      this.#wake();
    });
    theme.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    this.#observers.push(theme);
    // "Show all photos" buttons are built when a category is first opened
    const gallery = document.getElementById('gallery');
    if (gallery) {
      const later = new MutationObserver(() => this.#adopt(gallery));
      later.observe(gallery, { childList: true, subtree: true });
      this.#observers.push(later);
    }
  }

  #adopt(root) {
    this.#lights.forEach((light, button) => {
      if (button.isConnected) return;
      this.#resizeObserver.unobserve(button);
      this.#viewObserver?.unobserve(button);
      this.#lights.delete(button);
    });
    root.querySelectorAll('.btn-specular').forEach(button => {
      if (!this.#lights.has(button)) this.#attach(button);
    });
  }

  #attach(button) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) return;
    canvas.className = 'specular-light';
    canvas.setAttribute('aria-hidden', 'true');
    button.prepend(canvas);
    const light = new SpecularLight(button, canvas, context);
    light.visible = !this.#viewObserver;
    this.#lights.set(button, light);
    button.addEventListener('pointerdown', event => {
      this.#track(event);
      if (!this.#transitionCoordinator?.prefersReducedMotion) light.flare();
      this.#wake();
    });
    // Some buttons fill in on hover, which needs the other colours
    const restyle = () => {
      light.markColors();
      this.#wake();
    };
    button.addEventListener('pointerenter', restyle);
    button.addEventListener('pointerleave', restyle);
    this.#resizeObserver.observe(button);
    this.#viewObserver?.observe(button);
    this.#stateObserver?.observe(button, { attributes: true, attributeFilter: ['class', 'aria-pressed'] });
  }

  #measure(entry) {
    const light = this.#lights.get(entry.target);
    if (!light) return;
    const box = entry.borderBoxSize?.[0];
    const ratio = Math.min(window.devicePixelRatio || 1, 3);
    light.measure(box ? box.inlineSize : entry.target.offsetWidth,
      box ? box.blockSize : entry.target.offsetHeight, ratio);
    // The shared canvas only ever grows to fit the largest light
    const glCanvas = this.#glCanvas;
    if (light.canvas.width > glCanvas.width) glCanvas.width = light.canvas.width;
    if (light.canvas.height > glCanvas.height) glCanvas.height = light.canvas.height;
  }

  // ── Pointer and frame loop ──

  #track(event) {
    this.#pointer.x = event.clientX;
    this.#pointer.y = event.clientY;
    this.#pointer.known = true;
  }

  #bindPointer() {
    window.addEventListener('pointermove', event => {
      this.#track(event);
      this.#wake();
    }, { passive: true });
    const release = event => {
      if (event.pointerType === 'mouse') return;
      this.#pointer.known = false;
      this.#wake();
    };
    window.addEventListener('pointerup', release, { passive: true });
    window.addEventListener('pointercancel', release, { passive: true });
    document.documentElement.addEventListener('pointerleave', () => {
      this.#pointer.known = false;
      this.#wake();
    });
  }

  #wake() {
    if (!this.#raf && this.#gl && this.#lights.size) this.#raf = requestAnimationFrame(t => this.#frame(t));
  }

  #frame(now) {
    this.#raf = 0;
    if (!this.#gl) return;
    const dt = this.#last ? Math.min(0.05, (now - this.#last) / 1000) : 1 / 60;
    this.#last = now;
    const follow = SpecularLight.followsPointer && !this.#transitionCoordinator?.prefersReducedMotion;
    let moving = false;
    this.#lights.forEach(light => {
      if (!light.visible || !light.canvas.isConnected) return;
      if (light.colorsStale) light.readColors(this.#probe);
      if (light.step(dt, this.#pointer, follow)) moving = true;
      if (light.needsDraw) this.#draw(light);
    });
    if (moving) this.#raf = requestAnimationFrame(t => this.#frame(t));
    else this.#last = 0;
  }

  #draw(light) {
    const gl = this.#gl;
    const u = this.#uniforms;
    const v = light.uniforms();
    const { width, height } = light.canvas;
    gl.viewport(0, 0, width, height);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(this.#program);
    gl.uniform2f(u.uCenter, v.center[0], v.center[1]);
    gl.uniform2f(u.uHalf, v.half[0], v.half[1]);
    gl.uniform1f(u.uRadius, v.radius);
    gl.uniform1f(u.uPx, v.px);
    gl.uniform1f(u.uSpot, v.spot);
    gl.uniform2f(u.uEntry, v.entry[0], v.entry[1]);
    gl.uniform3fv(u.uLineColor, v.line);
    gl.uniform3fv(u.uBaseColor, v.base);
    gl.uniform1f(u.uIntensity, v.intensity);
    gl.uniform2f(u.uWindow, v.window[0], v.window[1]);
    gl.uniform1f(u.uThickness, v.thickness);
    gl.uniform1f(u.uGlow, v.glow);
    gl.bindVertexArray(this.#vao);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    gl.bindVertexArray(null);
    // WebGL draws from the bottom-left corner; copy that corner into the button's canvas
    light.context.clearRect(0, 0, width, height);
    light.context.drawImage(this.#glCanvas, 0, this.#glCanvas.height - height, width, height, 0, 0, width, height);
    light.drawn();
  }

  #teardown() {
    cancelAnimationFrame(this.#raf);
    this.#raf = 0;
    this.#gl = null;
    this.#resizeObserver?.disconnect();
    this.#viewObserver?.disconnect();
    this.#stateObserver?.disconnect();
    this.#observers.forEach(observer => observer.disconnect());
    this.#lights.forEach(light => light.canvas.remove());
    this.#lights.clear();
  }
}

/* ── 8e. JELLY TABS (the chosen category tab swells and its neighbours make room) ── */

// A vanilla port of React Bits' JellyRadio (MIT + Commons Clause, notice in
// vendor/reactbits/LICENSE.md). Only the motion is ported: the tabs keep their ARIA tab
// pattern, look and switching (GalleryPresenter). The chosen tab grows, every other tab
// gives up a little, and the tabs beside it are shoved aside, each on its own spring and
// wide before tall. As in the component, a click animates and everything else (arrow keys,
// Back / Forward, opening a hero card) jumps. Changes from the original: when the tabs wrap
// (phones) only the chosen tab's own row parts, and the parting never pushes a tab past the
// edge of the controls bar.
class JellyTabsController {
  // The component's defaults, which the owner's integration used (2026-11-19)
  static #OPTIONS = Object.freeze({
    swell: 0.2,       // how much the chosen tab grows
    barge: 6,         // extra px every neighbour is shoved beyond the room it makes
    shrink: 0.05,     // how much every other tab gives up
    jelly: 1,         // wide-before-tall split
    bounce: 0.25,     // one minus the damping ratio
    stagger: 22,      // ms per step before a neighbour moves
    stiffness: 580,
  });
  static #EDGE = 4;   // px kept clear at the edges of the controls bar

  #transitionCoordinator;
  #list = null;
  #tabs = [];
  #springs = [];
  #layout = [];       // per tab: untransformed left, width and row
  #bounds = { left: 0, right: 0 };
  #selected = -1;
  #fromPointer = false;
  #raf = 0;
  #last = 0;

  constructor(transitionCoordinator) {
    this.#transitionCoordinator = transitionCoordinator;
    this.#list = document.querySelector('.cat-tabs');
    if (!this.#list || typeof requestAnimationFrame !== 'function'
      || typeof MutationObserver !== 'function') return;
    this.#tabs = Array.from(this.#list.querySelectorAll('.cat-tab'));
    if (this.#tabs.length < 2) return;
    const value = rest => ({ pos: rest, vel: 0, target: rest, k: 1, c: 1, m: 1, wait: 0 });
    this.#springs = this.#tabs.map(() => ({ x: value(0), sx: value(1), sy: value(1) }));
    this.#list.classList.add('is-jelly');
    this.#selected = this.#current();
    this.#bind();
    this.#settle();
  }

  #current() {
    return Math.max(0, this.#tabs.findIndex(tab => tab.getAttribute('aria-selected') === 'true'));
  }

  #bind() {
    // Capture runs before the tab's own handler switches it; a keyboard "click" has detail 0
    this.#list.addEventListener('click', event => {
      this.#fromPointer = event.detail !== 0;
      setTimeout(() => { this.#fromPointer = false; }, 0);
    }, true);
    new MutationObserver(() => {
      const next = this.#current();
      if (next === this.#selected) return;
      this.#selected = next;
      this.#apply(next, !this.#fromPointer);
    }).observe(this.#list, { subtree: true, attributes: true, attributeFilter: ['aria-selected'] });
    const settle = () => this.#settle();
    if (typeof ResizeObserver === 'function') new ResizeObserver(settle).observe(this.#list.parentElement || this.#list);
    document.fonts?.ready?.then(settle);
  }

  // Reads where each tab sits without its transform, then snaps to the chosen state
  #settle() {
    this.#tabs.forEach(tab => { tab.style.transform = ''; });
    const bar = (this.#list.parentElement || this.#list).getBoundingClientRect();
    this.#bounds = { left: bar.left + JellyTabsController.#EDGE, right: bar.right - JellyTabsController.#EDGE };
    this.#layout = this.#tabs.map(tab => {
      const rect = tab.getBoundingClientRect();
      return { left: rect.left, right: rect.right, width: rect.width, row: Math.round(rect.top) };
    });
    this.#apply(this.#selected, true);
  }

  // Room the neighbours make on each side, cut short where the bar ends
  #parting(sel) {
    const o = JellyTabsController.#OPTIONS;
    const push = this.#layout[sel].width * o.swell / 2 + o.barge;
    const row = this.#layout.filter(box => box.row === this.#layout[sel].row);
    const first = row[0];
    const last = row[row.length - 1];
    const roomLeft = first.left - this.#bounds.left + first.width * o.shrink / 2;
    const roomRight = this.#bounds.right - last.right + last.width * o.shrink / 2;
    return {
      left: first === this.#layout[sel] ? 0 : Math.max(0, Math.min(push, roomLeft)),
      right: last === this.#layout[sel] ? 0 : Math.max(0, Math.min(push, roomRight)),
    };
  }

  static #moving(value) {
    return value.wait > 0 || Math.abs(value.pos - value.target) > 0.0005 || Math.abs(value.vel) > 0.005;
  }

  static #aim(value, target, k, m, bounce, wait) {
    value.target = target;
    value.k = k;
    value.m = m;
    value.c = 2 * Math.sqrt(k * m) * (1 - bounce);
    value.wait = wait;
  }

  #apply(sel, instant) {
    if (!this.#layout.length || sel < 0) return;
    const o = JellyTabsController.#OPTIONS;
    const jump = instant || this.#transitionCoordinator?.prefersReducedMotion;
    const row = this.#layout[sel].row;
    const parting = this.#parting(sel);
    this.#tabs.forEach((tab, i) => {
      const spring = this.#springs[i];
      const sameRow = this.#layout[i].row === row;
      const x = !sameRow || i === sel ? 0 : (i < sel ? -parting.left : parting.right);
      const s = i === sel ? 1 + o.swell : 1 - o.shrink;
      if (jump) {
        [spring.x, spring.sx, spring.sy].forEach((value, n) => {
          value.pos = value.target = n ? s : x;
          value.vel = 0;
          value.wait = 0;
        });
        this.#write(i);
        return;
      }
      const far = Math.abs(i - sel);
      const k = o.stiffness * (1 - 0.12 * Math.min(far, 3));
      const inFlight = JellyTabsController.#moving(spring.x) || JellyTabsController.#moving(spring.sx)
        || JellyTabsController.#moving(spring.sy);
      const delay = inFlight ? 0 : (far * o.stagger) / 1000;
      const j = o.jelly;
      JellyTabsController.#aim(spring.x, x, k, 0.9, o.bounce, delay);
      JellyTabsController.#aim(spring.sx, s, k * (1 + 0.24 * j), 0.9 - 0.1 * j, Math.min(0.85, o.bounce + 0.3 * j), delay);
      JellyTabsController.#aim(spring.sy, s, k * (1 - 0.14 * j), 0.9 + 0.05 * j, o.bounce, delay + 0.05 * j);
    });
    if (jump) {
      cancelAnimationFrame(this.#raf);
      this.#raf = 0;
      return;
    }
    if (!this.#raf) {
      this.#last = 0;
      this.#raf = requestAnimationFrame(t => this.#frame(t));
    }
  }

  #write(i) {
    const { x, sx, sy } = this.#springs[i];
    this.#tabs[i].style.transform = `translateX(${x.pos.toFixed(2)}px) scale(${sx.pos.toFixed(4)}, ${sy.pos.toFixed(4)})`;
  }

  #frame(now) {
    this.#raf = 0;
    const dt = this.#last ? Math.min(0.05, (now - this.#last) / 1000) : 1 / 60;
    this.#last = now;
    let moving = false;
    this.#springs.forEach((spring, i) => {
      [spring.x, spring.sx, spring.sy].forEach(value => {
        let left = dt;
        if (value.wait > 0) {
          const waited = Math.min(value.wait, left);
          value.wait -= waited;
          left -= waited;
        }
        // Small fixed steps keep the stiff springs stable
        while (left > 0) {
          const h = Math.min(left, 1 / 240);
          value.vel += ((-value.k * (value.pos - value.target) - value.c * value.vel) / value.m) * h;
          value.pos += value.vel * h;
          left -= h;
        }
        if (JellyTabsController.#moving(value)) moving = true;
        else {
          value.pos = value.target;
          value.vel = 0;
        }
      });
      this.#write(i);
    });
    if (moving) this.#raf = requestAnimationFrame(t => this.#frame(t));
  }
}

/* ── 8f. SPOTLIGHT CARDS (a soft light that follows the pointer across the Coverage cards) ── */

// A vanilla port of React Bits' Spotlight Card (MIT + Commons Clause, notice in
// vendor/reactbits/LICENSE.md). Each card gets a pool of light under its content and a
// brighter one clipped to its 1px edge; both are plain layers moved with transform and
// faded with opacity, so nothing repaints. The light reaches a card from 80px away, so
// two cards side by side share it. Colours are --spotlight-fill / --spotlight-edge
// (Daylight: a white pool and bronze edge on the cream card; Darkroom: champagne).
// Not ported: the press flare (the cards are not buttons), the idle drift and the grain.
class SpotlightCardController {
  // The component's defaults (2026-11-19); intensity and edge strength live in the colours
  static #OPTIONS = Object.freeze({
    size: 240,        // radius of the light, px
    proximity: 80,    // px outside a card at which the light starts to reach it
    smoothing: 0.3,   // how far the light floats behind the pointer, s
  });

  #transitionCoordinator;
  #cards = [];
  #pointer = { x: 0, y: 0, known: false };
  #raf = 0;
  #last = 0;
  #visible = false;

  constructor(transitionCoordinator) {
    this.#transitionCoordinator = transitionCoordinator;
    const cards = Array.from(document.querySelectorAll('.package-card'));
    if (!cards.length || typeof requestAnimationFrame !== 'function'
      || typeof cards[0].prepend !== 'function') return;
    this.#cards = cards.map(card => this.#dress(card));
    this.#bind();
  }

  #dress(card) {
    const layer = className => {
      const outer = document.createElement('span');
      outer.className = className;
      outer.setAttribute('aria-hidden', 'true');
      const pool = document.createElement('span');
      pool.className = 'spotlight-pool';
      outer.appendChild(pool);
      card.prepend(outer);
      return { outer, pool };
    };
    const edge = layer('spotlight-edge');
    const light = layer('spotlight-light');
    card.classList.add('has-spotlight');
    return { card, light, edge, x: 0, y: 0, near: 0, placed: false };
  }

  #bind() {
    const track = event => {
      this.#pointer.x = event.clientX;
      this.#pointer.y = event.clientY;
      this.#pointer.known = true;
      this.#wake();
    };
    const forget = event => {
      if (event && event.pointerType === 'mouse') return;
      this.#pointer.known = false;
      this.#wake();
    };
    window.addEventListener('pointermove', track, { passive: true });
    window.addEventListener('pointerdown', track, { passive: true });
    window.addEventListener('pointerup', forget, { passive: true });
    window.addEventListener('pointercancel', forget, { passive: true });
    document.documentElement.addEventListener('pointerleave', () => forget());
    // Only work while the cards are on screen
    if (typeof IntersectionObserver === 'function') {
      const seen = new Set();
      new IntersectionObserver(entries => {
        entries.forEach(entry => (entry.isIntersecting ? seen.add(entry.target) : seen.delete(entry.target)));
        this.#visible = seen.size > 0;
        this.#wake();
      }).observe(this.#cards[0].card.parentElement || this.#cards[0].card);
    } else {
      this.#visible = true;
    }
  }

  #wake() {
    if (!this.#raf && this.#visible) this.#raf = requestAnimationFrame(t => this.#frame(t));
  }

  #frame(now) {
    this.#raf = 0;
    const o = SpotlightCardController.#OPTIONS;
    const dt = this.#last ? Math.min(0.05, (now - this.#last) / 1000) : 1 / 60;
    this.#last = now;
    const follow = this.#transitionCoordinator?.prefersReducedMotion ? 1 : 1 - Math.exp(-dt * (4 / o.smoothing));
    let moving = false;
    this.#cards.forEach(entry => {
      const rect = entry.card.getBoundingClientRect();
      const x = this.#pointer.x - rect.left;
      const y = this.#pointer.y - rect.top;
      let near = 0;
      if (this.#pointer.known) {
        const dx = Math.max(-x, 0, x - rect.width);
        const dy = Math.max(-y, 0, y - rect.height);
        const t = Math.min(1, Math.max(0, 1 - Math.hypot(dx, dy) / o.proximity));
        near = t * t * (3 - 2 * t);
      }
      // A light that is off jumps to the pointer, so it fades in where the pointer is
      if (!entry.placed || entry.near < 0.01) {
        entry.x = x;
        entry.y = y;
        entry.placed = true;
      } else {
        entry.x += (x - entry.x) * follow;
        entry.y += (y - entry.y) * follow;
      }
      entry.near += (near - entry.near) * follow;
      if (Math.abs(near - entry.near) > 0.002 || Math.hypot(x - entry.x, y - entry.y) > 0.3) moving = true;
      else entry.near = near;
      const shift = `translate3d(${(entry.x - o.size).toFixed(1)}px, ${(entry.y - o.size).toFixed(1)}px, 0)`;
      entry.light.pool.style.transform = shift;
      entry.edge.pool.style.transform = shift;
      const opacity = entry.near.toFixed(3);
      entry.light.outer.style.opacity = opacity;
      entry.edge.outer.style.opacity = opacity;
    });
    if (moving) this.#raf = requestAnimationFrame(t => this.#frame(t));
    else this.#last = 0;
  }
}

/* ── 8g. LIGHTBOX GRAINIENT (a slow, dark, grainy gradient behind the photo viewer) ── */

// A vanilla port of React Bits' Grainient (MIT + Commons Clause, notice in
// vendor/reactbits/LICENSE.md): a WebGL2 shader that drifts a gradient into soft waves and
// adds film grain. Here it only lifts the lightbox's flat black: the palette starts at the
// overlay colour and stays deep and warm, so the edges blend in and nothing competes with
// the print. It runs only while the lightbox is open, at 30 fps and 1x resolution, and
// blooms out from the middle each time it opens. Not ported: the cursor stir and click
// swirl (clicks in the lightbox navigate), the light-mode palette and the radial type.
// Reduced motion: a still gradient with fixed grain. No WebGL2, or a lost GPU context:
// the canvas is removed and the plain overlay remains.
class LightboxGrainController {
  static #OPTIONS = Object.freeze({
    // Overlay black, then deep warm browns up to a dim bronze
    colors: ['#08080a', '#0e0c0d', '#16120f', '#211a14', '#2e241a'],
    angle: 55,
    flow: 0.8,
    scale: 1.2,
    softness: 1,
    speed: 0.6,
    silk: 0.35,
    grainAmount: 0.05,
    grainSize: 1.2,
    contrast: 1,
    saturation: 1,
    introSeconds: 1.6,
    fps: 30,
  });

  static #VERTEX = `#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;

  static #FIELD = `#version 300 es
precision highp float;
precision highp int;
uniform float uAspect;
uniform float uTime;
uniform vec3 uRamp[8];
uniform int uCount;
uniform vec2 uDir;
uniform float uExtent;
uniform float uSoftness;
uniform float uFlow;
uniform float uScale;
uniform float uSilk;
uniform float uContrast;
uniform float uSaturation;
uniform float uSettle;
uniform float uReveal;
in vec2 vUv;
out vec4 outColor;

vec2 hash2(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * vec3(0.1031, 0.103, 0.0973));
  q += dot(q, q.yzx + 33.33);
  return fract((q.xx + q.yz) * q.zy) * 2.0 - 1.0;
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = dot(hash2(i), f);
  float b = dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));
  float c = dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));
  float d = dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));
  return 0.5 + 0.5 * mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

vec2 drift(vec2 p, float t) {
  vec2 w1 = vec2(
    noise(p * 0.85 + vec2(t * 0.11, t * 0.07)),
    noise(p * 0.85 + vec2(4.1, 1.7) - vec2(t * 0.08, t * 0.12))
  );
  vec2 w2 = vec2(
    noise(p * 1.55 + w1 * 1.8 + vec2(1.3, 7.1) + t * 0.05),
    noise(p * 1.55 + w1 * 1.8 + vec2(6.4, 2.2) - t * 0.06)
  );
  return (w1 - 0.5) * 1.1 + (w2 - 0.5) * 0.55;
}

vec2 warp(vec2 p) {
  vec2 q = p / uScale;
  q += vec2(-uDir.y, uDir.x) * uTime * 0.45;
  return p + drift(q, uTime) * uFlow * uScale * uSettle;
}

float coord(vec2 p) {
  return dot(warp(p), uDir) / uExtent + 0.5;
}

vec3 labToRgb(vec3 lab) {
  float l = lab.x + 0.3963377774 * lab.y + 0.2158037573 * lab.z;
  float m = lab.x - 0.1055613458 * lab.y - 0.0638541728 * lab.z;
  float s = lab.x - 0.0894841775 * lab.y - 1.2914855480 * lab.z;
  l = l * l * l;
  m = m * m * m;
  s = s * s * s;
  return vec3(
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
  );
}

vec3 encode(vec3 c) {
  c = clamp(c, 0.0, 1.0);
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}

void main() {
  vec2 p = (vUv - 0.5) * vec2(uAspect, 1.0);
  float raw = coord(p);
  float s = clamp(raw, 0.0, 1.0);
  float scaled = s * float(uCount - 1);
  int index = int(min(floor(scaled), float(uCount - 2)));
  float f = scaled - float(index);
  float edge = max(uSoftness * 0.5, fwidth(scaled) * 0.75);
  float shaped = smoothstep(0.5 - edge, 0.5 + edge, f);
  vec3 from = uRamp[0];
  vec3 to = uRamp[1];
  for (int i = 0; i < 7; i++) {
    if (i == index) {
      from = uRamp[i];
      to = uRamp[i + 1];
    }
  }
  vec3 lab = mix(from, to, shaped);
  if (uSilk > 0.0) {
    vec2 grad = vec2(coord(p + vec2(0.004, 0.0)) - raw, coord(p + vec2(0.0, 0.004)) - raw) / 0.004;
    vec2 slope = grad * sin(3.14159265 * clamp(raw, 0.0, 1.0)) * uSilk * 4.0;
    vec3 normal = normalize(vec3(-slope, 1.0));
    vec3 light = normalize(vec3(-uDir.y, uDir.x, 1.2));
    float diffuse = dot(normal, light) - light.z;
    lab = uRamp[0] + (lab - uRamp[0]) * (1.0 + (diffuse * 0.35 + max(diffuse, 0.0) * diffuse * 0.6) * uSilk);
  }
  lab = mix(uRamp[0], lab, smoothstep(0.0, 1.0, uReveal * 1.5 - length(vUv - 0.5) * 0.6));
  lab.x = (lab.x - 0.55) * uContrast + 0.55;
  lab.yz *= uSaturation;
  outColor = vec4(encode(labToRgb(lab)), 1.0);
}`;

  static #COMPOSITE = `#version 300 es
precision highp float;
uniform sampler2D uField;
uniform float uGrain;
uniform float uGrainSize;
uniform float uFrame;
in vec2 vUv;
out vec4 outColor;

float hash(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}

float clump(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

void main() {
  vec3 color = texture(uField, vUv).rgb;
  vec2 pixel = gl_FragCoord.xy + uFrame * vec2(17.0, 59.0);
  float fine = hash(pixel) + hash(pixel + 7.13) - 1.0;
  float coarse = (clump(pixel / max(uGrainSize, 1.0)) - 0.5) * 2.0;
  float grain = mix(fine, coarse, clamp(uGrainSize - 1.0, 0.0, 1.0) * 0.8);
  float luma = dot(color, vec3(0.2126, 0.7152, 0.0722));
  color += grain * uGrain * (0.45 + 2.2 * luma * (1.0 - luma));
  outColor = vec4(clamp(color, 0.0, 1.0), 1.0);
}`;

  #transitionCoordinator;
  #lightbox = null;
  #canvas = null;
  #gl = null;
  #field = null;
  #composite = null;
  #vao = null;
  #target = null;
  #buffer = null;
  #fieldSize = { width: 0, height: 0 };
  #ramp = new Float32Array(8 * 3);
  #view = { width: 1, height: 1 };
  #time = 0;
  #intro = 1;
  #frameSeed = 0;
  #grainClock = 0;
  #raf = 0;
  #last = 0;
  #lastDraw = 0;
  #open = false;
  #resizeObserver = null;
  #classObserver = null;

  constructor(transitionCoordinator) {
    this.#transitionCoordinator = transitionCoordinator;
    this.#lightbox = document.getElementById('lightbox');
    if (!this.#lightbox || typeof requestAnimationFrame !== 'function'
      || typeof ResizeObserver !== 'function' || typeof MutationObserver !== 'function'
      || typeof this.#lightbox.prepend !== 'function') return;
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext?.('webgl2', { alpha: false, antialias: false, depth: false, stencil: false });
    if (!gl || !this.#setup(gl)) return;
    canvas.className = 'lightbox-grain';
    canvas.setAttribute('aria-hidden', 'true');
    canvas.addEventListener('webglcontextlost', () => this.#teardown());
    this.#lightbox.prepend(canvas);
    this.#canvas = canvas;
    this.#gl = gl;
    this.#bind();
  }

  // ── Colour (ported): the ramp is blended in Oklab so the dark steps stay even ──

  static #toLab([r, g, b]) {
    const linear = v => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
    const lr = linear(r);
    const lg = linear(g);
    const lb = linear(b);
    const l = Math.cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
    const m = Math.cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
    const s = Math.cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);
    return [
      0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
      1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
      0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
    ];
  }

  static #hexToRgb(hex) {
    const n = parseInt(hex.slice(1), 16);
    return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
  }

  // ── WebGL setup ──

  static #program(gl, fragmentSource) {
    const compile = (type, source) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return shader;
      gl.deleteShader(shader);
      return null;
    };
    const vertex = compile(gl.VERTEX_SHADER, LightboxGrainController.#VERTEX);
    const fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
    const program = gl.createProgram();
    if (!vertex || !fragment || !program) return null;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    gl.deleteShader(vertex);
    gl.deleteShader(fragment);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return null;
    }
    const uniforms = {};
    const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < count; i++) {
      const info = gl.getActiveUniform(program, i);
      if (!info) continue;
      const name = info.name.replace(/\[0\]$/, '');
      uniforms[name] = gl.getUniformLocation(program, name);
    }
    return { program, uniforms };
  }

  #setup(gl) {
    this.#field = LightboxGrainController.#program(gl, LightboxGrainController.#FIELD);
    this.#composite = LightboxGrainController.#program(gl, LightboxGrainController.#COMPOSITE);
    if (!this.#field || !this.#composite) return false;
    this.#vao = gl.createVertexArray();
    this.#target = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, this.#target);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    this.#buffer = gl.createFramebuffer();
    LightboxGrainController.#OPTIONS.colors.forEach((hex, i) => {
      this.#ramp.set(LightboxGrainController.#toLab(LightboxGrainController.#hexToRgb(hex)), i * 3);
    });
    return true;
  }

  // ── Open / close ──

  #bind() {
    this.#resizeObserver = new ResizeObserver(() => this.#resize());
    this.#resizeObserver.observe(this.#lightbox);
    this.#classObserver = new MutationObserver(() => this.#sync());
    this.#classObserver.observe(this.#lightbox, { attributes: true, attributeFilter: ['class'] });
    document.addEventListener('visibilitychange', () => {
      this.#last = 0;
      this.#wake();
    });
    this.#sync();
  }

  #sync() {
    const open = this.#lightbox.classList.contains('open');
    if (open === this.#open) return;
    this.#open = open;
    if (!open) {
      cancelAnimationFrame(this.#raf);
      this.#raf = 0;
      return;
    }
    // Each opening blooms the colours out from the middle again
    this.#intro = this.#reduced ? 1 : 0;
    this.#last = 0;
    this.#resize();
  }

  get #reduced() {
    return Boolean(this.#transitionCoordinator?.prefersReducedMotion);
  }

  #resize() {
    if (!this.#open || !this.#gl) return;
    const gl = this.#gl;
    this.#view.width = Math.max(1, this.#lightbox.clientWidth);
    this.#view.height = Math.max(1, this.#lightbox.clientHeight);
    // A soft gradient needs no retina pixels; 1x keeps a full-screen shader cheap
    this.#canvas.width = this.#view.width;
    this.#canvas.height = this.#view.height;
    const width = Math.max(1, Math.round(this.#canvas.width / 2));
    const height = Math.max(1, Math.round(this.#canvas.height / 2));
    if (width !== this.#fieldSize.width || height !== this.#fieldSize.height) {
      this.#fieldSize.width = width;
      this.#fieldSize.height = height;
      gl.bindTexture(gl.TEXTURE_2D, this.#target);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      gl.bindFramebuffer(gl.FRAMEBUFFER, this.#buffer);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.#target, 0);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }
    this.#draw();
    this.#wake();
  }

  #wake() {
    if (!this.#raf && this.#open && this.#gl && !document.hidden) {
      this.#raf = requestAnimationFrame(t => this.#frame(t));
    }
  }

  #frame(now) {
    this.#raf = 0;
    if (!this.#open || !this.#gl || document.hidden) return;
    const o = LightboxGrainController.#OPTIONS;
    if (this.#reduced && this.#intro >= 1) return;
    // Hold to 30 fps: the drift is slow, and this runs the whole time a photo is open
    if (this.#lastDraw && now - this.#lastDraw < 1000 / o.fps - 2) {
      this.#raf = requestAnimationFrame(t => this.#frame(t));
      return;
    }
    const dt = this.#last ? Math.min(0.05 * 2, Math.max(0.001, (now - this.#last) / 1000)) : 1 / o.fps;
    this.#last = now;
    this.#lastDraw = now;
    this.#time += dt * o.speed * 0.16;
    if (this.#intro < 1) this.#intro = Math.min(1, this.#intro + dt / o.introSeconds);
    this.#grainClock += dt;
    if (this.#grainClock > 1 / 24) {
      this.#grainClock = 0;
      this.#frameSeed = (this.#frameSeed + 1) % 97;
    }
    this.#draw();
    this.#raf = requestAnimationFrame(t => this.#frame(t));
  }

  #draw() {
    const gl = this.#gl;
    const o = LightboxGrainController.#OPTIONS;
    const fu = this.#field.uniforms;
    const cu = this.#composite.uniforms;
    const aspect = this.#view.width / this.#view.height;
    const radians = (o.angle * Math.PI) / 180;
    const intro = this.#intro;
    gl.bindVertexArray(this.#vao);
    gl.disable(gl.BLEND);
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.#buffer);
    gl.viewport(0, 0, this.#fieldSize.width, this.#fieldSize.height);
    gl.useProgram(this.#field.program);
    gl.uniform1f(fu.uAspect, aspect);
    gl.uniform1f(fu.uTime, this.#time);
    gl.uniform3fv(fu.uRamp, this.#ramp);
    gl.uniform1i(fu.uCount, o.colors.length);
    gl.uniform2f(fu.uDir, Math.sin(radians), Math.cos(radians));
    gl.uniform1f(fu.uExtent, aspect * Math.abs(Math.sin(radians)) + Math.abs(Math.cos(radians)));
    gl.uniform1f(fu.uSoftness, o.softness);
    gl.uniform1f(fu.uFlow, o.flow);
    gl.uniform1f(fu.uScale, o.scale);
    gl.uniform1f(fu.uSilk, o.silk);
    gl.uniform1f(fu.uContrast, o.contrast);
    gl.uniform1f(fu.uSaturation, o.saturation);
    gl.uniform1f(fu.uSettle, intro * intro * (3 - 2 * intro));
    gl.uniform1f(fu.uReveal, intro);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, this.#canvas.width, this.#canvas.height);
    gl.useProgram(this.#composite.program);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.#target);
    gl.uniform1i(cu.uField, 0);
    gl.uniform1f(cu.uGrain, o.grainAmount);
    gl.uniform1f(cu.uGrainSize, o.grainSize);
    gl.uniform1f(cu.uFrame, this.#frameSeed);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }

  #teardown() {
    cancelAnimationFrame(this.#raf);
    this.#raf = 0;
    this.#gl = null;
    this.#resizeObserver?.disconnect();
    this.#classObserver?.disconnect();
    this.#canvas?.remove();
  }
}

/* ── 8h. LIGHTBOX CAROUSEL (the photo viewer as a row of matted prints bending through glass) ── */

// A vanilla port of React Bits' FlexCarousel (MIT + Commons Clause, notice in
// vendor/reactbits/LICENSE.md), written against WebGL2 directly instead of the `ogl` library.
// The open viewer shows the category as a row of prints; past the edge of an invisible lens
// the row bends away (the "liquid" preset). LightboxController still owns everything else:
// which photo is current, the caption and counter, the #photo- hash, keys and arrows. Arrows
// and keys glide the row; dragging, flicking, wheeling or clicking a side print moves it and
// reports the photo it lands on. Clicking the centred print enlarges it in place (the others
// part and the bend melts); Escape or another click lowers it. Changes from the original to fit
// the site: every card wears the off-white mat of the print view, photos are never cropped
// (no 8% overscan, no in-card parallax), the "bloom" intro replays on every opening, only
// the centred print loads its full-size file, a side print is centred on click rather than
// also opened, and the component's caption, counter, keyboard and autoplay are left to the
// viewer. Reduced motion: no intro bloom or squeeze, and moves land without gliding.
// No WebGL2, or a lost GPU context: the canvas goes and the single-print viewer returns.
class LightboxCarousel {
  static #OPTIONS = Object.freeze({
    // "liquid" preset, with the bend and the rainbow split toned down: across a full screen
    // the preset curled the outer prints into the top bar and fringed photos with colour
    lensWidth: 0.74,
    lensHeight: 1.18,
    tilt: 62,
    roundness: 1,
    bend: 0.22,         // preset 0.34
    reach: 0.38,
    dispersion: 0.18,   // preset 0.45
    // component props from the owner's integration
    gap: 12,
    squeeze: 0.2,
    // fitted to the viewer
    cardHeight: 0.76,   // share of the band between the top bar and the caption
    radius: 2,          // the print mat's corner
    mat: 0.04,          // mat width as a share of card height; the bottom is 1.5x, like the print view
    introSeconds: 1.6,  // "bloom"
  });
  static #TAPS = 12;
  static #PIXEL_BUDGET = 4.5e6;
  static #MAT_COLOR = [250 / 255, 248 / 255, 245 / 255];
  static #EMPTY = [28 / 255, 28 / 255, 32 / 255];

  static #CARD_VERTEX = `#version 300 es
in vec2 aPosition;
uniform vec4 uRect;
uniform vec2 uResolution;
out vec2 vLocal;
void main() {
  vLocal = vec2(aPosition.x, -aPosition.y) * uRect.zw;
  vec2 px = uRect.xy + vLocal;
  gl_Position = vec4(px.x / uResolution.x * 2.0 - 1.0, 1.0 - px.y / uResolution.y * 2.0, 0.0, 1.0);
}`;

  // A print on its mat: the photo fills the inner box at its own aspect ratio, never cropped
  static #CARD_FRAGMENT = `#version 300 es
precision highp float;
uniform sampler2D tMap;
uniform vec2 uSize;
uniform vec3 uMat;
uniform float uRadius;
uniform float uAlpha;
uniform float uReady;
uniform float uDpr;
uniform vec3 uPlaceholder;
uniform vec3 uMatColor;
in vec2 vLocal;
out vec4 fragColor;

float roundedBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

void main() {
  vec2 hs = uSize * 0.5;
  float sd = roundedBox(vLocal, hs, min(uRadius, min(hs.x, hs.y)));
  float mask = clamp(0.5 - sd * uDpr, 0.0, 1.0);
  vec2 innerMin = vec2(-hs.x + uMat.x, -hs.y + uMat.y);
  vec2 innerMax = vec2(hs.x - uMat.x, hs.y - uMat.z);
  vec2 innerHalf = max((innerMax - innerMin) * 0.5, vec2(0.5));
  float sdIn = roundedBox(vLocal - (innerMin + innerMax) * 0.5, innerHalf, 0.0);
  float photo = clamp(0.5 - sdIn * uDpr, 0.0, 1.0);
  vec2 uv = clamp((vLocal - innerMin) / (innerHalf * 2.0), 0.0, 1.0);
  vec3 inside = mix(uPlaceholder, texture(tMap, uv).rgb, uReady);
  vec3 color = mix(uMatColor, inside, photo);
  float alpha = mask * uAlpha;
  fragColor = vec4(color * alpha, alpha);
}`;

  static #LENS_VERTEX = `#version 300 es
in vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`;

  static #LENS_FRAGMENT = `#version 300 es
precision highp float;
uniform sampler2D tScene;
uniform vec2 uResolution;
uniform float uDpr;
uniform vec2 uCenter;
uniform vec2 uHalf;
uniform float uAngle;
uniform float uExponent;
uniform float uInner;
uniform float uOuter;
uniform float uFlow;
uniform float uDispersion;
uniform float uStrength;
uniform float uSceneAlpha;
out vec4 fragColor;

void main() {
  vec2 frag = gl_FragCoord.xy / uDpr;
  vec2 uv = frag / uResolution;
  vec2 rel = frag - vec2(uCenter.x, uResolution.y - uCenter.y);
  float ca = cos(uAngle);
  float sa = sin(uAngle);
  vec2 local = vec2(ca * rel.x + sa * rel.y, -sa * rel.x + ca * rel.y);
  vec2 k = max(abs(local) / uHalf, vec2(1e-5));
  float nd = pow(pow(k.x, uExponent) + pow(k.y, uExponent), 1.0 / uExponent);
  vec2 grad = pow(k, vec2(uExponent - 1.0)) * sign(local) / uHalf * pow(nd, 1.0 - uExponent);
  float glen = max(length(grad), 1e-6);
  float edge = (nd - 1.0) / glen;
  vec2 outward = grad / glen;
  vec2 normal = vec2(ca * outward.x - sa * outward.y, sa * outward.x + ca * outward.y);
  vec2 along = vec2(-normal.y, normal.x);

  float t = clamp((edge + uInner) / (uInner + uOuter), 0.0, 1.0);
  float ramp = t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
  float slope = 16.0 * t * t * (1.0 - t) * (1.0 - t);
  float reachX = rel.x / (uResolution.x * 0.5);
  float side = smoothstep(0.02, 0.3, abs(reachX)) * sign(reachX);
  float lift = ramp * side * uFlow * uStrength;
  vec2 swirl = along * along.y * side * slope * uFlow * uStrength * 0.35;
  vec2 drift = vec2(0.0, -lift) - swirl;
  vec2 shifted = uv + drift / uResolution;

  vec2 texels = uResolution * uDpr;
  vec2 gx = dFdx(shifted);
  vec2 gy = dFdy(shifted);
  gx *= min(1.0, 3.0 / max(length(gx * texels), 1e-4));
  gy *= min(1.0, 3.0 / max(length(gy * texels), 1e-4));

  vec4 color = textureGrad(tScene, shifted, gx, gy);
  vec2 spread = vec2(0.0, side * slope * uFlow * uStrength) / uResolution * uDispersion;
  float spreadPx = length(spread * texels);
  if (color.a > 0.002 && spreadPx > 0.25) {
    vec3 base = color.rgb / color.a;
    vec3 sumColor = vec3(0.0);
    vec3 sumWeight = vec3(0.0);
    for (int i = 0; i < ${LightboxCarousel.#TAPS}; i++) {
      float s = (float(i) + 0.5) / float(${LightboxCarousel.#TAPS});
      vec4 c = textureGrad(tScene, shifted + spread * (s - 0.5), gx, gy);
      vec3 w = max(1.0 - abs(vec3(s) - vec3(0.15, 0.5, 0.85)) * 2.6, 0.0) * c.a;
      sumColor += c.rgb * (w / max(c.a, 0.002));
      sumWeight += w;
    }
    vec3 split = mix(base, sumColor / max(sumWeight, vec3(1e-4)), clamp(sumWeight * 2.0, 0.0, 1.0));
    color.rgb = mix(color.rgb, clamp(split, 0.0, 1.0) * color.a, smoothstep(0.25, 1.5, spreadPx));
  }

  fragColor = color * uSceneAlpha;
}`;

  #transitionCoordinator;
  #lightbox;
  #canvas = null;
  #gl = null;
  #card = null;
  #lens = null;
  #quad = null;
  #triangle = null;
  #target = { texture: null, fbo: null, width: 0, height: 0 };
  #anisotropy = null;
  #probe = null;

  #slots = [];
  #key = '';
  #view = { width: 1, height: 1, dpr: 1, top: 0, bottom: 1 };
  #pos = 0;
  #vel = 0;
  #goal = 0;
  #mode = 'spring';
  #wheelAt = 0;
  #raf = 0;
  #last = 0;
  #dirty = true;
  #resizePending = true;
  #open = false;
  #activeIndex = -1;
  #reported = -1;
  #pendingIndex = -1;
  #resnap = false;
  #layout = null;
  #energy = 0;
  #lastPos = 0;
  #lensBase = 0;
  #hiSlot = null;
  #instances = [];
  #hover = '';
  #focus = { index: -1, t: 0, v: 0, target: 0 };
  #intro = { t: 0, running: false, done: false, since: 0 };
  #pointer = {
    x: 0, y: 0, over: false, down: false, id: -1, startX: 0, startY: 0, startPos: 0,
    dragging: false, dragged: false, touch: false, samples: [],
  };

  onSettle = null;     // (index) => void: the row came to rest on another photo
  onBackdrop = null;   // () => void: a click that hit no print

  constructor(lightbox, transitionCoordinator) {
    this.#lightbox = lightbox;
    this.#transitionCoordinator = transitionCoordinator;
    if (!lightbox || typeof requestAnimationFrame !== 'function' || typeof ResizeObserver !== 'function'
      || typeof lightbox.insertBefore !== 'function') return;
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext?.('webgl2', {
      alpha: true, premultipliedAlpha: true, antialias: false, depth: false, stencil: false,
    });
    if (!gl || !this.#setup(gl)) return;
    canvas.className = 'lightbox-carousel';
    canvas.setAttribute('aria-hidden', 'true');
    canvas.addEventListener('webglcontextlost', () => this.#teardown());
    lightbox.insertBefore(canvas, lightbox.querySelector('.lightbox-topbar'));
    this.#canvas = canvas;
    this.#gl = gl;
    this.#probe = document.createElement('canvas').getContext('2d', { willReadFrequently: true });
    this.#bind();
  }

  get active() {
    return Boolean(this.#gl);
  }

  // True while the row is the visible view
  get isShowing() {
    return Boolean(this.#gl) && this.#open;
  }

  get #reduced() {
    return Boolean(this.#transitionCoordinator?.prefersReducedMotion);
  }

  // ── WebGL setup ──

  static #program(gl, vertexSource, fragmentSource) {
    const compile = (type, source) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return shader;
      gl.deleteShader(shader);
      return null;
    };
    const vertex = compile(gl.VERTEX_SHADER, vertexSource);
    const fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
    const program = gl.createProgram();
    if (!vertex || !fragment || !program) return null;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.bindAttribLocation(program, 0, 'aPosition');
    gl.linkProgram(program);
    gl.deleteShader(vertex);
    gl.deleteShader(fragment);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return null;
    }
    const uniforms = {};
    const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < count; i++) {
      const info = gl.getActiveUniform(program, i);
      if (info) uniforms[info.name] = gl.getUniformLocation(program, info.name);
    }
    return { program, uniforms };
  }

  static #geometry(gl, points) {
    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.bindVertexArray(null);
    return vao;
  }

  #setup(gl) {
    this.#card = LightboxCarousel.#program(gl, LightboxCarousel.#CARD_VERTEX, LightboxCarousel.#CARD_FRAGMENT);
    this.#lens = LightboxCarousel.#program(gl, LightboxCarousel.#LENS_VERTEX, LightboxCarousel.#LENS_FRAGMENT);
    if (!this.#card || !this.#lens) return false;
    this.#quad = LightboxCarousel.#geometry(gl, [-0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5]);
    this.#triangle = LightboxCarousel.#geometry(gl, [-1, -1, 3, -1, -1, 3]);
    this.#anisotropy = gl.getExtension('EXT_texture_filter_anisotropic');
    this.#target.texture = gl.createTexture();
    this.#target.fbo = gl.createFramebuffer();
    return true;
  }

  #newTexture() {
    const gl = this.#gl;
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([28, 28, 32, 255]));
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    return texture;
  }

  #upload(texture, image) {
    const gl = this.#gl;
    if (!gl) return;
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    gl.generateMipmap(gl.TEXTURE_2D);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    if (this.#anisotropy) {
      gl.texParameterf(gl.TEXTURE_2D, this.#anisotropy.TEXTURE_MAX_ANISOTROPY_EXT, 8);
    }
    this.#dirty = true;
  }

  // ── Photos ──

  #loadSlot(asset, index) {
    const slot = {
      asset,
      index,
      texture: this.#newTexture(),
      // A first guess from the photo's orientation, so the row has its shape before loading
      aspect: asset.orientation === 'portrait' ? 0.8 : 1.5,
      loaded: false,
      failed: false,
      ready: 0,
      color: LightboxCarousel.#EMPTY,
      grid: null,
      full: null,
      fullLoading: false,
    };
    const image = new Image();
    image.decoding = 'async';
    image.onload = () => {
      if (!this.#slots.includes(slot) || !this.#gl) return;
      slot.grid = image;
      slot.aspect = (image.naturalWidth || 1) / (image.naturalHeight || 1);
      slot.color = this.#averageColor(image);
      this.#upload(slot.texture, image);
      slot.loaded = true;
      this.#start();
    };
    image.onerror = () => {
      // The small derivative is missing: fall back to the full WebP, as the grid does
      if (!slot.failed && image.src.indexOf('.grid.webp') !== -1 && asset.webpSrc) {
        slot.failed = true;
        image.src = asset.webpSrc;
        return;
      }
      slot.failed = true;
      this.#dirty = true;
      this.#start();
    };
    image.src = asset.gridSrc || asset.webpSrc || asset.src;
    return slot;
  }

  #averageColor(image) {
    try {
      const ctx = this.#probe;
      if (!ctx) return LightboxCarousel.#EMPTY;
      ctx.canvas.width = 8;
      ctx.canvas.height = 8;
      ctx.drawImage(image, 0, 0, 8, 8);
      const data = ctx.getImageData(0, 0, 8, 8).data;
      const sum = [0, 0, 0];
      for (let i = 0; i < data.length; i += 4) {
        sum[0] += data[i];
        sum[1] += data[i + 1];
        sum[2] += data[i + 2];
      }
      return sum.map(v => v / 64 / 255);
    } catch {
      return LightboxCarousel.#EMPTY;
    }
  }

  #setItems(images) {
    const key = images.map(asset => asset.src).join('|');
    if (key === this.#key && this.#slots.length) return;
    this.#key = key;
    this.#slots.forEach(slot => this.#gl?.deleteTexture(slot.texture));
    this.#hiSlot = null;
    this.#layout = null;
    this.#slots = images.map((asset, i) => this.#loadSlot(asset, i));
  }

  // The centred print swaps its 960px texture for the full-size file the print view uses;
  // the one it replaces goes back to the small one, so only one large texture is held.
  #sharpen(index) {
    const slot = this.#slots[index];
    if (!slot || slot === this.#hiSlot) return;
    if (this.#hiSlot?.grid) this.#upload(this.#hiSlot.texture, this.#hiSlot.grid);
    this.#hiSlot = null;
    if (!slot.loaded) return;
    if (slot.full) {
      this.#upload(slot.texture, slot.full);
      this.#hiSlot = slot;
      return;
    }
    if (slot.fullLoading || !slot.asset.webpSrc) return;
    slot.fullLoading = true;
    const image = new Image();
    image.decoding = 'async';
    image.onload = () => {
      slot.fullLoading = false;
      if (!this.#slots.includes(slot) || !this.#gl) return;
      slot.full = image;
      if (this.#activeIndex === slot.index && this.#settled) this.#sharpen(slot.index);
    };
    image.onerror = () => { slot.fullLoading = false; };
    image.src = slot.asset.webpSrc;
  }

  // ── Viewer API ──

  open(images, index) {
    if (!this.#gl || !images?.length) return;
    this.#setItems(images);
    this.#open = true;
    this.#lightbox.classList.add('has-carousel');
    this.#focus.target = 0;
    this.#focus.t = 0;
    this.#focus.v = 0;
    this.#intro.t = 0;
    this.#intro.running = false;
    this.#intro.done = false;
    this.#intro.since = 0;
    this.#jumpTo(index);
    this.#reported = index;
    this.#energy = 0;
    this.#resizePending = true;
    this.#start();
  }

  close() {
    this.#open = false;
    cancelAnimationFrame(this.#raf);
    this.#raf = 0;
    this.#pointer.down = false;
    this.#pointer.dragging = false;
    this.#canvas?.removeAttribute('data-dragging');
    this.#setHover('');
    // A blank canvas, so the next opening never flashes the last frame
    if (this.#gl) {
      this.#gl.bindFramebuffer(this.#gl.FRAMEBUFFER, null);
      this.#gl.clearColor(0, 0, 0, 0);
      this.#gl.clear(this.#gl.COLOR_BUFFER_BIT);
    }
  }

  // The viewer moved to another photo (arrows, keys, hash)
  show(index) {
    if (!this.isShowing || index < 0 || index >= this.#slots.length) return;
    this.#reported = index;
    this.closeFocus();
    if (!this.#intro.done || this.#reduced) {
      this.#jumpTo(index);
    } else if (!this.#layout) {
      this.#jumpTo(index);
    } else {
      const m = this.#layout;
      this.#goal += LightboxCarousel.#wrap(m.centers[index] - this.#goal, m.loop);
      this.#mode = 'spring';
    }
    this.#dirty = true;
    this.#start();
  }

  // Lowers an enlarged print; true when there was one
  closeFocus() {
    if (this.#focus.target === 0) return false;
    this.#focus.target = 0;
    if (this.#reduced) {
      this.#focus.t = 0;
      this.#focus.v = 0;
    }
    this.#dirty = true;
    this.#start();
    return true;
  }

  #openFocus(index) {
    this.#focus.index = index;
    this.#focus.target = 1;
    if (this.#reduced) {
      this.#focus.t = 1;
      this.#focus.v = 0;
    }
    this.#dirty = true;
    this.#start();
  }

  #jumpTo(index) {
    this.#pendingIndex = index;
    this.#resnap = true;
  }

  // ── Layout (ported) ──

  static #wrap(value, size) {
    return ((((value + size / 2) % size) + size) % size) - size / 2;
  }

  static #clamp01(value) {
    return Math.min(Math.max(value, 0), 1);
  }

  static #easeOut(value) {
    return 1 - Math.pow(1 - LightboxCarousel.#clamp01(value), 3);
  }

  static #easeInOut(value) {
    const t = LightboxCarousel.#clamp01(value);
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  #metrics() {
    const o = LightboxCarousel.#OPTIONS;
    const bandH = Math.max(80, this.#view.bottom - this.#view.top);
    // Prints share one height, so cap it where a 3:2 print (most of the set) still fits
    // within 92% of the width: a 3:2 card is about 1.43x its height once matted
    const cardH = Math.max(40, Math.min(o.cardHeight * bandH, (this.#view.width * 0.92) / 1.43));
    const mat = Math.max(4, Math.round(cardH * o.mat));
    const matBottom = Math.round(mat * 1.5);
    const innerH = cardH - mat - matBottom;
    const widths = this.#slots.map(slot => slot.aspect * innerH + mat * 2);
    const centers = [];
    let cursor = 0;
    widths.forEach(w => {
      centers.push(cursor + w / 2);
      cursor += w + o.gap;
    });
    return {
      cardH, mat, matBottom, bandH, widths, centers, gap: o.gap,
      loop: Math.max(cursor, 1), homeY: (this.#view.top + this.#view.bottom) / 2,
    };
  }

  #nearest(m, at) {
    let best = 0;
    let bestDist = Infinity;
    m.centers.forEach((center, i) => {
      const dist = Math.abs(LightboxCarousel.#wrap(center - at, m.loop));
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    return best;
  }

  #snapPoint(m, at) {
    const i = this.#nearest(m, at);
    return at + LightboxCarousel.#wrap(m.centers[i] - at, m.loop);
  }

  #remap(from, to, at) {
    const i = this.#nearest(from, at);
    const offset = LightboxCarousel.#wrap(at - from.centers[i], from.loop);
    const cycles = Math.round((at - offset - from.centers[i]) / from.loop);
    return cycles * to.loop + to.centers[i] + offset * (to.widths[i] / from.widths[i]);
  }

  #step(m, delta) {
    let at = this.#snapPoint(m, this.#goal);
    let index = this.#nearest(m, at);
    const n = m.centers.length;
    for (let k = 0; k < Math.abs(delta); k++) {
      const next = (index + (delta > 0 ? 1 : n - 1)) % n;
      at += delta > 0
        ? m.widths[index] / 2 + m.gap + m.widths[next] / 2
        : -(m.widths[next] / 2 + m.gap + m.widths[index] / 2);
      index = next;
    }
    this.#goal = at;
    this.#mode = 'spring';
  }

  get #settled() {
    return this.#mode === 'spring' && !this.#pointer.dragging
      && Math.abs(this.#goal - this.#pos) < 1.5 && Math.abs(this.#vel) < 30;
  }

  // ── Size ──

  #applyResize() {
    const width = Math.max(1, this.#lightbox.clientWidth);
    const height = Math.max(1, this.#lightbox.clientHeight);
    const budget = Math.sqrt(LightboxCarousel.#PIXEL_BUDGET / (width * height));
    const dpr = Math.min(window.devicePixelRatio || 1, 2, budget);
    this.#view.width = width;
    this.#view.height = height;
    this.#view.dpr = dpr;
    this.#canvas.width = Math.max(2, Math.round(width * dpr));
    this.#canvas.height = Math.max(2, Math.round(height * dpr));
    const gl = this.#gl;
    const t = this.#target;
    if (t.width !== this.#canvas.width || t.height !== this.#canvas.height) {
      t.width = this.#canvas.width;
      t.height = this.#canvas.height;
      gl.bindTexture(gl.TEXTURE_2D, t.texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, t.width, t.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.bindFramebuffer(gl.FRAMEBUFFER, t.fbo);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, t.texture, 0);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }
    this.#measureBand();
    this.#dirty = true;
  }

  // The row lives in the band between the top bar and whatever sits under it at the bottom
  // (the caption, plus the arrow row on phones and tablets)
  #measureBand() {
    const box = this.#lightbox.getBoundingClientRect();
    const height = this.#view.height;
    const topbar = this.#lightbox.querySelector('.lightbox-topbar')?.getBoundingClientRect();
    let top = topbar ? topbar.bottom - box.top : 64;
    let bottom = height - 72;
    ['.lightbox-caption', '#lightbox-prev', '#lightbox-next'].forEach(selector => {
      const r = this.#lightbox.querySelector(selector)?.getBoundingClientRect();
      if (!r || !r.height) return;
      const y = r.top - box.top;
      if (y > height * 0.5) bottom = Math.min(bottom, y);
    });
    top += 8;
    bottom -= 8;
    if (bottom - top < 120) {
      top = Math.max(0, (top + bottom) / 2 - 60);
      bottom = top + 120;
    }
    this.#view.top = top;
    this.#view.bottom = bottom;
  }

  // ── Input ──

  #bind() {
    const canvas = this.#canvas;
    canvas.addEventListener('pointerdown', e => this.#onPointerDown(e));
    canvas.addEventListener('pointermove', e => this.#onPointerMove(e));
    canvas.addEventListener('pointerup', e => this.#onPointerUp(e));
    canvas.addEventListener('pointercancel', () => this.#onPointerCancel());
    canvas.addEventListener('pointerleave', () => {
      this.#pointer.over = false;
      this.#setHover('');
    });
    canvas.addEventListener('wheel', e => this.#onWheel(e), { passive: false });
    // Taps act on click; the click that ends a drag is ignored in #onClick
    canvas.addEventListener('click', e => this.#onClick(e));
    new ResizeObserver(() => {
      this.#resizePending = true;
      this.#start();
    }).observe(this.#lightbox);
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) this.#start();
    });
  }

  #local(e) {
    const rect = this.#canvas.getBoundingClientRect();
    return [e.clientX - rect.left, e.clientY - rect.top];
  }

  #skipIntro() {
    if (this.#intro.running) this.#intro.t = 1;
  }

  #onPointerDown(e) {
    if (e.button !== undefined && e.button > 0) return;
    this.#skipIntro();
    const [x, y] = this.#local(e);
    const p = this.#pointer;
    p.down = true;
    p.id = e.pointerId;
    p.touch = e.pointerType === 'touch';
    p.startX = x;
    p.startY = y;
    p.x = x;
    p.y = y;
    p.startPos = this.#pos;
    p.dragging = false;
    p.dragged = false;
    p.samples = [{ x, t: e.timeStamp }];
    if (Math.abs(this.#vel) > 40) {
      this.#goal = this.#pos;
      this.#vel = 0;
    }
    this.#dirty = true;
    this.#start();
  }

  #onPointerMove(e) {
    const [x, y] = this.#local(e);
    const p = this.#pointer;
    p.x = x;
    p.y = y;
    p.over = true;
    if (p.down && e.pointerId === p.id) {
      const dx = x - p.startX;
      const dy = y - p.startY;
      const slop = p.touch ? 10 : 5;
      if (!p.dragging) {
        // A mostly vertical touch drag belongs to the viewer (swipe down closes it)
        if (p.touch && Math.abs(dy) > slop && Math.abs(dy) > Math.abs(dx)) {
          p.down = false;
          return;
        }
        if (Math.abs(dx) > slop) {
          p.dragging = true;
          p.dragged = true;
          p.startX = x;
          p.startPos = this.#pos;
          this.closeFocus();
          try {
            this.#canvas.setPointerCapture(e.pointerId);
          } catch {
            // capture is only a nicety: the drag still follows inside the canvas
          }
          this.#canvas.setAttribute('data-dragging', '');
        }
      }
      if (p.dragging) {
        this.#pos = p.startPos - (x - p.startX);
        this.#goal = this.#pos;
        this.#vel = 0;
        p.samples.push({ x, t: e.timeStamp });
        while (p.samples.length > 2 && e.timeStamp - p.samples[0].t > 100) p.samples.shift();
      }
    }
    this.#updateHover();
    this.#dirty = true;
    this.#start();
  }

  #onPointerUp(e) {
    const p = this.#pointer;
    if (!p.down || e.pointerId !== p.id) return;
    p.down = false;
    this.#canvas.removeAttribute('data-dragging');
    if (!p.dragging || !this.#layout) return;
    p.dragging = false;
    const m = this.#layout;
    const first = p.samples[0];
    const last = p.samples[p.samples.length - 1];
    let velocity = 0;
    if (first && last && last.t > first.t && e.timeStamp - last.t < 70) {
      velocity = -((last.x - first.x) / (last.t - first.t)) * 1000;
    }
    this.#vel = this.#reduced ? 0 : velocity;
    const landing = this.#snapPoint(m, this.#pos + velocity * 0.32);
    this.#goal = landing;
    if (Math.abs(velocity) > 400 && Math.abs(landing - this.#pos) < 1) this.#step(m, velocity > 0 ? 1 : -1);
    this.#mode = 'spring';
    this.#start();
  }

  #onPointerCancel() {
    const p = this.#pointer;
    p.down = false;
    p.dragging = false;
    this.#canvas.removeAttribute('data-dragging');
    if (this.#layout) this.#goal = this.#snapPoint(this.#layout, this.#pos);
    this.#mode = 'spring';
    this.#start();
  }

  #onClick(e) {
    if (this.#pointer.dragged) {
      this.#pointer.dragged = false;
      return;
    }
    if (!this.isShowing || !this.#intro.done && !this.#intro.running) return;
    e.stopPropagation();
    if (this.closeFocus()) return;
    const [x, y] = this.#local(e);
    const hit = this.#hit(x, y);
    if (!hit) {
      this.onBackdrop?.();
      return;
    }
    if (hit.index === this.#activeIndex && Math.abs(this.#goal - this.#pos) < 2) {
      this.#openFocus(hit.index);
    } else if (this.#layout) {
      // A side print comes to the centre; a second click enlarges it
      const rel = (hit.x0 + hit.x1) / 2 - this.#view.width / 2;
      this.#goal = this.#snapPoint(this.#layout, this.#pos + rel);
      this.#mode = 'spring';
      this.#start();
    }
  }

  #onWheel(e) {
    if (e.ctrlKey || !this.isShowing) return;
    let dx = e.deltaX;
    let dy = e.deltaY;
    if (e.shiftKey && Math.abs(dx) < Math.abs(dy)) {
      dx = dy;
      dy = 0;
    }
    const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? this.#view.height : 1;
    const horizontal = Math.abs(dx) > Math.abs(dy);
    e.preventDefault();
    this.#skipIntro();
    if (this.closeFocus()) return;
    const delta = Math.max(-120, Math.min(120, (horizontal ? dx : dy) * unit));
    this.#goal += delta * 1.25;
    this.#mode = 'wheel';
    this.#wheelAt = e.timeStamp;
    this.#start();
  }

  #hit(x, y) {
    for (let i = this.#instances.length - 1; i >= 0; i--) {
      const inst = this.#instances[i];
      if (x >= inst.x0 && x <= inst.x1 && y >= inst.y0 && y <= inst.y1) return inst;
    }
    return null;
  }

  #updateHover() {
    const p = this.#pointer;
    let next = '';
    if (p.over && !p.touch && !p.dragging && this.#intro.done) {
      const hit = this.#hit(p.x, p.y);
      if (this.#focus.target > 0) next = 'close';
      else if (hit) next = hit.index === this.#activeIndex ? 'open' : 'side';
    }
    this.#setHover(next);
  }

  #setHover(value) {
    if (value === this.#hover || !this.#canvas) return;
    this.#hover = value;
    if (value) this.#canvas.setAttribute('data-hover', value);
    else this.#canvas.removeAttribute('data-hover');
  }

  // ── Frame loop (ported) ──

  #start() {
    if (this.#raf || !this.#gl || !this.#open || document.hidden) return;
    this.#last = 0;
    this.#raf = requestAnimationFrame(t => this.#frame(t));
  }

  #introEffects() {
    const intro = this.#intro;
    const e = { sceneAlpha: 1, strength: 1, card: null };
    if (!intro.done && !intro.running) {
      e.sceneAlpha = 0;
      e.strength = 0;
      return e;
    }
    const t = intro.running ? intro.t : 1;
    if (t >= 1) return e;
    if (this.#reduced) {
      e.sceneAlpha = LightboxCarousel.#easeOut(t);
      e.strength = LightboxCarousel.#easeOut(t);
      return e;
    }
    // "bloom": prints fade in from the centre outwards while the bend forms
    const width = this.#view.width;
    e.strength = LightboxCarousel.#easeInOut((t - 0.2) / 0.8);
    e.card = rel => {
      const delay = Math.min(Math.abs(rel) / (width * 0.6), 1) * 0.25;
      const local = LightboxCarousel.#easeOut((t - delay) / 0.55);
      return { alpha: local, scale: 0.92 + 0.08 * local };
    };
    return e;
  }

  #frame(now) {
    this.#raf = 0;
    if (!this.#gl || !this.#open || document.hidden) return;
    if (this.#resizePending) {
      this.#resizePending = false;
      this.#applyResize();
    }
    const n = this.#slots.length;
    if (!n) return;
    const o = LightboxCarousel.#OPTIONS;
    const reduced = this.#reduced;
    const dt = this.#last ? Math.min(0.05, Math.max(0.001, (now - this.#last) / 1000)) : 1 / 60;
    this.#last = now;
    const m = this.#metrics();
    let animating = false;

    if (this.#resnap) {
      const i = this.#pendingIndex >= 0 && this.#pendingIndex < n ? this.#pendingIndex : this.#nearest(m, this.#goal);
      this.#goal = m.centers[i];
      this.#pos = this.#goal;
      this.#vel = 0;
      this.#resnap = false;
      this.#pendingIndex = -1;
      this.#lastPos = this.#pos;
    } else if (this.#layout && this.#layout.loop !== m.loop) {
      // A photo finished loading and changed its width: keep the same print centred
      this.#pos = this.#remap(this.#layout, m, this.#pos);
      this.#goal = this.#remap(this.#layout, m, this.#goal);
      this.#pointer.startPos = this.#pos + (this.#pointer.x - this.#pointer.startX);
      this.#lastPos = this.#pos;
      animating = true;
    }
    this.#layout = m;

    // The intro starts once the centred print and its neighbours are in, or after a moment
    const intro = this.#intro;
    if (!intro.running && !intro.done) {
      if (!intro.since) intro.since = now;
      const c = this.#nearest(m, this.#goal);
      const near = [c, (c + 1) % n, (c + n - 1) % n].every(i => this.#slots[i].loaded || this.#slots[i].failed);
      if (near || now - intro.since > 700) intro.running = true;
      animating = true;
    }
    if (intro.running) {
      intro.t = Math.min(1, intro.t + dt / (reduced ? 0.35 : o.introSeconds));
      if (intro.t >= 1) {
        intro.running = false;
        intro.done = true;
      }
      animating = true;
    }

    if (this.#mode === 'wheel' && now - this.#wheelAt > 150) {
      this.#goal = this.#snapPoint(m, this.#goal);
      this.#mode = 'spring';
    }
    if (!this.#pointer.dragging) {
      if (reduced) {
        this.#pos = this.#goal;
        this.#vel = 0;
      } else {
        const stiffness = this.#mode === 'wheel' ? 80 : 55;
        const damping = 2 * Math.sqrt(stiffness);
        const steps = Math.ceil(dt / (1 / 240));
        const h = dt / steps;
        for (let i = 0; i < steps; i++) {
          this.#vel += (stiffness * (this.#goal - this.#pos) - damping * this.#vel) * h;
          this.#pos += this.#vel * h;
        }
        if (Math.abs(this.#goal - this.#pos) < 0.05 && Math.abs(this.#vel) < 0.5) {
          this.#pos = this.#goal;
          this.#vel = 0;
        } else {
          animating = true;
        }
      }
    } else {
      animating = true;
    }

    if (Math.abs(this.#pos) > m.loop * 8) {
      const shift = Math.round(this.#pos / m.loop) * m.loop;
      this.#pos -= shift;
      this.#goal -= shift;
      this.#pointer.startPos -= shift;
      this.#lastPos -= shift;
    }

    this.#activeIndex = this.#nearest(m, this.#pos);
    if (this.#settled && intro.done) {
      if (this.#activeIndex !== this.#reported) {
        this.#reported = this.#activeIndex;
        this.onSettle?.(this.#activeIndex);
      }
      this.#sharpen(this.#activeIndex);
    }

    // Prints shrink a little while the row travels fast
    const travel = Math.abs(this.#pos - this.#lastPos) / dt;
    this.#lastPos = this.#pos;
    const energyTarget = reduced ? 0 : Math.min(travel / 2600, 1);
    this.#energy += (energyTarget - this.#energy)
      * (1 - Math.exp(-dt / (energyTarget > this.#energy ? 0.07 : 0.35)));
    if (this.#energy > 0.001) animating = true;

    const focus = this.#focus;
    if (!reduced) {
      const k = 64;
      focus.v += (k * (focus.target - focus.t) - 2 * Math.sqrt(k) * focus.v) * dt;
      focus.t += focus.v * dt;
    }
    if (Math.abs(focus.target - focus.t) < 0.0005 && Math.abs(focus.v) < 0.001) {
      focus.t = focus.target;
      focus.v = 0;
    } else {
      animating = true;
    }
    const focusAmount = LightboxCarousel.#clamp01(focus.t);
    const focusEase = LightboxCarousel.#easeInOut(focusAmount);
    const width = this.#view.width;
    const focusW = focus.index >= 0 && focus.index < n ? m.widths[focus.index] : m.cardH;
    // Enlarged, a print fills the band or 92% of the width, whichever comes first. The
    // component stops at 1.3x; on phones, where the shared height keeps portraits small,
    // this lets a tapped print fill the screen.
    const focusScale = Math.max(1, Math.min((m.bandH * 0.98) / m.cardH, (width * 0.92) / focusW));

    // The glass is sized from the width, as in the component, but never so small that its
    // bending edge reaches the centred print: on narrow screens it grows, so the photo being
    // viewed stays flat and only the neighbours bend. Its flat middle is about 0.29 of its size.
    const centred = m.widths[this.#activeIndex] || m.cardH;
    const lensTarget = Math.max(width, (centred / 2 + 16) / 0.29);
    if (!this.#lensBase || reduced) this.#lensBase = lensTarget;
    else this.#lensBase += (lensTarget - this.#lensBase) * (1 - Math.exp(-dt / 0.25));
    if (Math.abs(lensTarget - this.#lensBase) > 0.5) animating = true;

    for (const slot of this.#slots) {
      if (slot.loaded && slot.ready < 1) {
        slot.ready = reduced ? 1 : Math.min(1, slot.ready + dt / 0.45);
        animating = true;
      }
    }

    if (this.#dirty || animating) {
      this.#dirty = false;
      this.#draw(m, focusAmount, focusEase, focusScale);
    }
    this.#updateHover();

    if (animating || this.#pointer.down) this.#raf = requestAnimationFrame(t => this.#frame(t));
  }

  #draw(m, focusAmount, focusEase, focusScale) {
    const gl = this.#gl;
    const o = LightboxCarousel.#OPTIONS;
    const { width, height, dpr } = this.#view;
    const effects = this.#introEffects();
    const homeX = width / 2;
    const n = this.#slots.length;
    const shrink = 1 - LightboxCarousel.#clamp01(o.squeeze) * this.#energy;
    const draws = [];
    for (let i = 0; i < n; i++) {
      const w = m.widths[i];
      const baseRel = LightboxCarousel.#wrap(m.centers[i] - this.#pos, m.loop);
      for (let k = -3; k <= 3; k++) {
        const rel = baseRel + k * m.loop;
        if (Math.abs(rel) - w / 2 > width + 40) continue;
        const fx = effects.card ? effects.card(rel) : null;
        const x = homeX + rel;
        let scale = shrink * (fx ? fx.scale : 1);
        let alpha = fx ? fx.alpha : 1;
        let px = x;
        if (focusAmount > 0) {
          if (i === this.#focus.index && Math.abs(rel) < w) {
            scale *= 1 + (focusScale - 1) * focusEase;
          } else {
            const order = Math.min(Math.abs(rel) / width, 1) * 0.25;
            const part = LightboxCarousel.#easeInOut(focusAmount * 1.25 - order);
            px += Math.sign(rel) * part * width * 0.7;
            alpha *= 1 - part;
          }
        }
        const cw = w * scale;
        if (alpha <= 0.001 || px + cw / 2 < -40 || px - cw / 2 > width + 40) continue;
        draws.push({ i, rel, x: px, y: m.homeY, cw, ch: m.cardH * scale, scale, alpha });
      }
    }
    draws.sort((a, b) => Math.abs(b.rel) - Math.abs(a.rel));

    // Prints into the off-screen scene
    const t = this.#target;
    gl.bindFramebuffer(gl.FRAMEBUFFER, t.fbo);
    gl.viewport(0, 0, t.width, t.height);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    const cu = this.#card.uniforms;
    gl.useProgram(this.#card.program);
    gl.bindVertexArray(this.#quad);
    gl.uniform2f(cu.uResolution, width, height);
    gl.uniform1f(cu.uDpr, dpr);
    gl.uniform1f(cu.uRadius, o.radius);
    gl.uniform3fv(cu.uMatColor, LightboxCarousel.#MAT_COLOR);
    gl.uniform1i(cu.tMap, 0);
    gl.activeTexture(gl.TEXTURE0);
    this.#instances = [];
    for (const d of draws) {
      const slot = this.#slots[d.i];
      gl.bindTexture(gl.TEXTURE_2D, slot.texture);
      gl.uniform4f(cu.uRect, d.x, d.y, d.cw + 2, d.ch + 2);
      gl.uniform2f(cu.uSize, d.cw, d.ch);
      gl.uniform3f(cu.uMat, m.mat * d.scale, m.mat * d.scale, m.matBottom * d.scale);
      gl.uniform1f(cu.uAlpha, d.alpha);
      gl.uniform1f(cu.uReady, slot.ready);
      gl.uniform3fv(cu.uPlaceholder, slot.color);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      this.#instances.push({
        index: d.i, x0: d.x - d.cw / 2, x1: d.x + d.cw / 2, y0: d.y - d.ch / 2, y1: d.y + d.ch / 2,
      });
    }
    gl.disable(gl.BLEND);
    gl.bindTexture(gl.TEXTURE_2D, t.texture);
    gl.generateMipmap(gl.TEXTURE_2D);

    // The invisible glass bends the scene onto the canvas
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, this.#canvas.width, this.#canvas.height);
    const lu = this.#lens.uniforms;
    gl.useProgram(this.#lens.program);
    gl.bindVertexArray(this.#triangle);
    gl.uniform1i(lu.tScene, 0);
    gl.uniform2f(lu.uResolution, width, height);
    gl.uniform1f(lu.uDpr, dpr);
    gl.uniform2f(lu.uCenter, homeX, m.homeY);
    const base = this.#lensBase || width;
    const halfW = Math.max((o.lensWidth * base) / 2, 1);
    const halfH = Math.max((o.lensHeight * base) / 2, 1);
    gl.uniform2f(lu.uHalf, halfW, halfH);
    gl.uniform1f(lu.uAngle, (o.tilt * Math.PI) / 180);
    gl.uniform1f(lu.uExponent, 2 + Math.pow(1 - LightboxCarousel.#clamp01(o.roundness), 1.5) * 10);
    const inner = Math.max(4, o.reach * (halfW + halfH) * 0.5);
    gl.uniform1f(lu.uInner, inner);
    gl.uniform1f(lu.uOuter, inner * 1.6);
    gl.uniform1f(lu.uFlow, o.bend * (halfW + halfH) * 0.45);
    gl.uniform1f(lu.uDispersion, o.dispersion * 0.12);
    gl.uniform1f(lu.uStrength, effects.strength * (1 - focusEase));
    gl.uniform1f(lu.uSceneAlpha, effects.sceneAlpha);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    gl.bindVertexArray(null);
  }

  #teardown() {
    cancelAnimationFrame(this.#raf);
    this.#raf = 0;
    this.#gl = null;
    this.#open = false;
    this.#slots = [];
    this.#canvas?.remove();
    this.#lightbox?.classList.remove('has-carousel');
  }
}

/* ── 8i. FILM GRAIN (a fine, living grain behind the whole page) ── */

// A vanilla port of React Bits' Noise (MIT + Commons Clause, notice in
// vendor/reactbits/LICENSE.md). The component lays a grey grain tile over its parent with
// mix-blend-mode and moves it by rewriting background-position. Here the grain sits behind
// the page, never over a photograph, and a blend mode over the whole page would repaint on
// every scroll, so the tile is painted with its own transparency instead: pixels above
// mid-grey become champagne specks, pixels below become warm ink specks, and mid-grey is
// clear, which is what overlay does. The CSS keyframe filmGrainShift moves each layer by
// transform. Hosts: the fixed .grain behind the page, plus the nav, the pinned category
// bar and the footer, whose solid fills would otherwise hide it. The photo viewer pauses
// it (it has its own grain). Reduced motion: still grain, like the component's fps 0.
// Not ported: dust, scratches, scanlines, flicker, coloured grain.
class FilmGrainController {
  // The component's defaults (2026-11-20); strength per theme is --film-grain-opacity
  static #OPTIONS = Object.freeze({
    tile: 256,        // px; filmGrainShift in styles.css moves within one tile
    contrast: 0.6,    // 0 soft and fine, 1 harsh
    seed: 1013904223,
    paper: [255, 248, 236],
    ink: [40, 30, 20],
  });

  static #HOSTS = ['.grain', '#navbar', '.gallery-controls', '#footer'];

  constructor() {
    const tile = FilmGrainController.#paintTile();
    if (!tile?.toBlob || typeof URL === 'undefined' || !URL.createObjectURL) return;
    tile.toBlob(blob => {
      if (!blob) return;
      const root = document.documentElement;
      root.style.setProperty?.('--film-grain-tile', `url("${URL.createObjectURL(blob)}")`);
      FilmGrainController.#HOSTS.forEach(selector => {
        const host = document.querySelector(selector);
        if (host) FilmGrainController.#attach(host, selector === '.grain');
      });
      root.classList.add('has-film-grain');
    });
  }

  static #attach(host, isPageLayer) {
    const layer = document.createElement('div');
    layer.className = 'film-grain-layer';
    if (isPageLayer) {
      host.appendChild(layer);
      return;
    }
    if (typeof host.prepend !== 'function') return;
    const frame = document.createElement('div');
    frame.className = 'film-grain';
    frame.setAttribute('aria-hidden', 'true');
    frame.appendChild(layer);
    host.prepend(frame);
  }

  // The component's generator and triangular sample, written out as transparent specks
  static #paintTile() {
    const { tile, contrast, seed, paper, ink } = FilmGrainController.#OPTIONS;
    const canvas = document.createElement('canvas');
    canvas.width = tile;
    canvas.height = tile;
    const ctx = canvas.getContext?.('2d');
    if (!ctx?.createImageData) return null;
    const image = ctx.createImageData(tile, tile);
    const data = image.data;
    let state = seed >>> 0;
    const random = () => {
      state = (state + 0x6d2b79f5) | 0;
      let t = Math.imul(state ^ (state >>> 15), 1 | state);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    const range = 0.5 + contrast * 1.1;
    for (let i = 0; i < data.length; i += 4) {
      const value = Math.min(1, Math.max(0, 0.5 + (random() + random() - 1) * range));
      const tone = value >= 0.5 ? paper : ink;
      data[i] = tone[0];
      data[i + 1] = tone[1];
      data[i + 2] = tone[2];
      data[i + 3] = Math.round(Math.abs(value - 0.5) * 2 * 255);
    }
    ctx.putImageData(image, 0, 0);
    return canvas;
  }
}


/* ── 9. APPLICATION BOOTSTRAP ── */

const repository            = new PortfolioRepository(photoData, CATS);
const transitionCoordinator = new ViewTransitionCoordinator();
const themeManager          = new ThemeManager(transitionCoordinator);
const cursorLoupe           = new CursorLoupeController();
const lightboxController    = new LightboxController(transitionCoordinator, cursorLoupe);
const galleryPresenter      = new GalleryPresenter(repository, transitionCoordinator, lightboxController, cursorLoupe);
const telemetryHud          = new TelemetryHudController();
const editorialMotion       = new EditorialMotionController(transitionCoordinator);
const heroFan               = new HeroFanController(transitionCoordinator);
const scrollMotion          = new ScrollMotionController();
const specularEdge          = new SpecularEdgeController(transitionCoordinator);
const jellyTabs             = new JellyTabsController(transitionCoordinator);
const spotlightCards        = new SpotlightCardController(transitionCoordinator);
const lightboxGrain         = new LightboxGrainController(transitionCoordinator);
const filmGrain             = new FilmGrainController();
lightboxController.attachCarousel(new LightboxCarousel(document.getElementById('lightbox'), transitionCoordinator));

// Keep the footer copyright year current without a yearly edit
const footerYearEl = document.getElementById('ft-year');
if (footerYearEl) footerYearEl.textContent = String(new Date().getFullYear());
