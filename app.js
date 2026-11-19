/* ============================================================
   EYSI CLICKS — app.js
   Object-Oriented Luxury Portfolio Architecture
   Sections:
     0. PHOTO DATA — add or remove your photos here
     1. Domain Model & Value Objects (PhotoAsset, PortfolioRepository)
     2. ViewTransitionCoordinator (Same-Document View Transitions API)
     3. ThemeManager (Archival Daylight / Darkroom Obsidian)
     4. CursorLoupeController (Fine-Pointer Optical Reticle)
     5. LightboxController (Darkroom Loupe, Museum Mat, Slideshow)
     6. GalleryPresenter (Tabs, Orientation, Contact Sheet Proofs)
     7. TelemetryHudController (Scrollspy, Focal Continuum, Local Clock)
     8. Application Bootstrap
   ============================================================ */


/* ── 0. PHOTO DATA — JUST PASTE THE FILE PATH IN ── */

const CATS = ['predebut', 'events', 'institutional'];

const photoData = {

  predebut: {
    portrait: [
      { src: "predebut/portrait/EYSI-2-22.jpg", caption: "Avegail @18", alt: "Debutante in an off-shoulder ivory gown seated gracefully outdoors in golden natural light" },
      { src: "predebut/portrait/EYSI-5-5.jpg", caption: "Trisha @20", alt: "Portrait of a smiling young woman outdoors in soft evening sunlight" },
      { src: "predebut/portrait/EYSI-6-3.jpg", caption: "Anne @20", alt: "Close-up portrait of a young woman in an outdoor natural light setting" },
      { src: "predebut/portrait/EYSI-7-3.jpg", caption: "Anne @20", alt: "Portrait of a smiling young woman with lush green foliage background" },
      { src: "predebut/portrait/EYSI-8-3.jpg", caption: "Anne @20", alt: "Candid outdoor portrait of a young woman bathed in soft daylight" }
    ],
    landscape: [
      { src: "predebut/landscape/EYSI-1-62.jpg", caption: "Avegail @18", alt: "Young woman in an elegant evening gown walking through an outdoor landscaped garden" },
      { src: "predebut/landscape/EYSI-3-16.jpg", caption: "Avegail @18", alt: "Wide shot of a debutante posed in an evening gown outdoors during sunset" },
      { src: "predebut/landscape/EYSI-4-9.jpg", caption: "Trisha @20", alt: "Outdoor portrait of a young woman posed gracefully in warm ambient light" }
    ],
  },

  events: {
    portrait: [
      { src: "events/portrait/EYSI-7-3.jpg", caption: "Eddie @75", alt: "Portrait of an elderly celebrant smiling warmly at a milestone birthday gathering" },
      { src: "events/portrait/EYSI-8-3.jpg", caption: "Eddie @75", alt: "Candid portrait of an elderly man celebrating a milestone surrounded by family" }
    ],
    landscape: [
      { src: "events/landscape/EYSI-1-62.jpg", caption: "Pulo Ati-Atihan", alt: "Festival performers dancing in vibrant colorful feathered headdresses and traditional attire" },
      { src: "events/landscape/EYSI-1.jpg", caption: "Khel Pangilinan", alt: "Gathering of friends and celebrants smiling together at a celebration" },
      { src: "events/landscape/EYSI-2-22.jpg", caption: "Pulo Ati-Atihan", alt: "Street dancers in ornate headdresses performing energetically during a cultural festival" },
      { src: "events/landscape/EYSI-3-16.jpg", caption: "Pulo Ati-Atihan", alt: "Vibrant festival dancers in traditional regalia participating in a street parade" },
      { src: "events/landscape/EYSI-4-9.jpg", caption: "Pulo Ati-Atihan", alt: "Dynamic group portrait of cultural festival performers in elaborate costumes" },
      { src: "events/landscape/EYSI-5-5.jpg", caption: "Eddie @75", alt: "Celebrant seated with family and guests at a milestone banquet celebration" },
      { src: "events/landscape/EYSI-5.jpg", caption: "Khel Pangilinan", alt: "Event guests conversing and smiling warmly during an evening reception" },
      { src: "events/landscape/EYSI-6-3.jpg", caption: "Eddie @75", alt: "Family members gathered around a celebration table sharing a joyful moment" },
      { src: "events/landscape/EYSI-9.jpg", caption: "Khel Pangilinan", alt: "Singer in sunglasses and a denim jacket raising both arms to the crowd under bright yellow stage lights" },
      { src: "events/landscape/EYSI-12.jpg", caption: "Khel Pangilinan", alt: "Singer in sunglasses and a denim jacket performing into a microphone under purple and green stage lights" },
      { src: "events/landscape/EYSI-19.jpg", caption: "Eddie @75", alt: "Illuminated neon Happy Birthday sign behind a blue milestone cake with gold candles" },
      { src: "events/landscape/EYSI-5-e75.jpg", caption: "Eddie @75", alt: "Matriarch in white lace seated gracefully in a tufted armchair surrounded by balloons" },
      { src: "events/landscape/EYSI-45.jpg", caption: "Eddie @75", alt: "Celebrant Eddie waving joyfully to cheering guests upon his grand entrance" },
      { src: "events/landscape/EYSI-53.jpg", caption: "Eddie @75", alt: "Daughter tenderly cupping Eddie's cheek during an affectionate embrace" },
      { src: "events/landscape/EYSI-57.jpg", caption: "Eddie @75", alt: "Eddie and his partner walking hand-in-hand smiling warmly at guests" },
      { src: "events/landscape/EYSI-77.jpg", caption: "Eddie @75", alt: "Eddie blowing out his birthday candles as delicate smoke drifts before a glowing neon sign" },
      { src: "events/landscape/EYSI-78.jpg", caption: "Eddie @75", alt: "Celebrant Eddie addressing his family and guests with a microphone from his armchair" },
      { src: "events/landscape/EYSI-100.jpg", caption: "Eddie @75", alt: "Eddie smiling joyfully as he opens a lucky red envelope during the celebration" },
      { src: "events/landscape/EYSI-114.jpg", caption: "Eddie @75", alt: "Daughter wiping away tears of joy during a heartfelt speech for her father" },
      { src: "events/landscape/EYSI-165.jpg", caption: "Eddie @75", alt: "Eddie smiling warmly while watching video messages from overseas family on an iPad" }
    ],
  },

  institutional: {
    landscape: [
      { src: "institutional/EYSI-32.jpg", caption: "Baccalaureate Mass", alt: "Graduates and faculty gathered in formal attire during a baccalaureate mass" },
      { src: "institutional/EYSI-37.jpg", caption: "Baccalaureate Mass", alt: "Academic procession of graduates and university faculty in church ceremonies" },
      { src: "institutional/EYSI-41.jpg", caption: "Baccalaureate Mass", alt: "Students and attendees standing solemnly during a formal academic ceremony" },
      { src: "institutional/EYSI-55.jpg", caption: "Baccalaureate Mass", alt: "Large gathering of graduates and educators attending a formal university service" },
      { src: "institutional/EYSI-109.jpg", caption: "UC - PNC Foundation Week 2026", alt: "University students and faculty participating in outdoor foundation week celebrations" },
      { src: "institutional/EYSI-145.jpg", caption: "UC - PNC Foundation Week 2026", alt: "Campus community gathered outdoors during an institutional celebration" },
      { src: "institutional/EYSI-152.jpg", caption: "UC - PNC Foundation Week 2026", alt: "Group of students in university uniform smiling during campus festivities" },
      { src: "institutional/EYSI-189.jpg", caption: "UC - PNC Foundation Week 2026", alt: "Wide view of university grounds with students and staff celebrating foundation week" },
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
  ZOOMED: 2,
  SLIDESHOW: 3,
});

class LightboxController {
  #lightboxEl;
  #imgEl;
  #sourceWebpEl;
  #titleEl;
  #counterEl;
  #catBadgeEl;
  #filmstripEl;
  #slideshowBarEl;
  #playBtn;
  #playLabel;
  #zoomBtn;
  #transitionCoordinator;
  #cursorLoupe;

  #state = LightboxState.CLOSED;
  #images = [];
  #currentIndex = 0;
  #isZoomed = false;
  #panX = 0;
  #panY = 0;
  #panBounds = { maxX: 180, maxY: 180 };
  #isPanning = false;
  #dragStartX = 0;
  #dragStartY = 0;
  #startPanX = 0;
  #startPanY = 0;
  #hasDragged = false;
  #slideshowInterval = null;
  #lastFocusedElement = null;
  #activeSourceFigure = null;
  #preloadCache = new Map();
  #flightToken = 0;
  // GSAP is optional: without it (or with reduced motion) swipes and pans keep their plain behaviour
  #gsap = (typeof window !== 'undefined' && window.gsap) || null;
  #pictureEl = null;
  #panVelX = 0;
  #panVelY = 0;
  #panLastX = 0;
  #panLastY = 0;
  #panLastT = 0;
  #panGlide = null;
  #kenBurnsFlip = false;
  #chromeTimer = null;

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
    this.#slideshowBarEl = document.getElementById('lightbox-slideshow-bar');
    this.#playBtn        = document.getElementById('lb-play-btn');
    this.#playLabel      = document.getElementById('lb-play-label');
    this.#zoomBtn        = document.getElementById('lb-zoom-btn');

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
    this.#updateView();

    const canFly = this.#canFly(sourceFigure);
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
    if (!this.#isZoomed) this.#flyOut();
    this.#lightboxEl.classList.remove('flip-open', 'is-flying');
    this.stopSlideshow();
    this.#setKenBurns('');
    this.#resetZoom();
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
    if (this.#state === LightboxState.ZOOMED || this.#isZoomed) {
      this.#resetZoom();
      this.#state = LightboxState.VIEWING;
    } else if (this.#state === LightboxState.SLIDESHOW || this.#slideshowInterval) {
      this.#restartSlideshowTimer();
    }
    this.#currentIndex = (this.#currentIndex + dir + this.#images.length) % this.#images.length;
    if (animate) this.#triggerFrameCrossfade(dir >= 0 ? 'next' : 'prev');
    this.#nextKenBurns();
    this.#updateView();
  }

  // ── Finger-following swipe (GSAP) ──
  // The print slides inside its mat with the finger. Past a short distance or a quick flick
  // it leaves and the next one arrives from the other side; otherwise it settles back.
  #canFollowSwipe() {
    if (!this.#gsap || this.#isZoomed || this.#images.length < 2
      || this.#transitionCoordinator.prefersReducedMotion) return false;
    this.#pictureEl ??= this.#lightboxEl?.querySelector('.lightbox-picture') || null;
    // The slideshow's push-in animates this same element
    return Boolean(this.#pictureEl) && !this.#pictureEl.getAttribute('data-kb');
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

  // ── Zoom pan momentum (GSAP) ──
  #applyPan() {
    if (this.#imgEl) {
      this.#imgEl.style.transform = `scale(1.85) translate3d(${this.#panX / 1.85}px, ${this.#panY / 1.85}px, 0)`;
    }
  }

  #beginPanTracking(x, y) {
    this.#panGlide?.kill();
    this.#panGlide = null;
    this.#panVelX = 0;
    this.#panVelY = 0;
    this.#panLastX = x;
    this.#panLastY = y;
    this.#panLastT = Date.now();
  }

  #trackPan(x, y) {
    const now = Date.now();
    const dt = now - this.#panLastT;
    if (dt <= 0) return;
    // Smoothed px/ms, so one jittery sample does not decide the throw
    this.#panVelX = 0.7 * ((x - this.#panLastX) / dt) + 0.3 * this.#panVelX;
    this.#panVelY = 0.7 * ((y - this.#panLastY) / dt) + 0.3 * this.#panVelY;
    this.#panLastX = x;
    this.#panLastY = y;
    this.#panLastT = now;
  }

  // Returns true when the photo keeps gliding (the caller then leaves `is-panning` on,
  // because that class switches off the CSS transition that would fight the tween)
  #glidePan() {
    const stale = Date.now() - this.#panLastT > 80;
    const speed = Math.hypot(this.#panVelX, this.#panVelY);
    if (!this.#gsap || !this.#isZoomed || stale || speed < 0.15
      || this.#transitionCoordinator.prefersReducedMotion) return false;
    const { maxX, maxY } = this.#getPanBounds();
    const clamp = (v, max) => Math.max(-max, Math.min(max, v));
    const proxy = { x: this.#panX, y: this.#panY };
    this.#panGlide = this.#gsap.to(proxy, {
      x: clamp(this.#panX + this.#panVelX * 240, maxX),
      y: clamp(this.#panY + this.#panVelY * 240, maxY),
      duration: 0.7,
      ease: 'power3.out',
      onUpdate: () => {
        this.#panX = proxy.x;
        this.#panY = proxy.y;
        this.#applyPan();
      },
      onComplete: () => {
        this.#panGlide = null;
        this.#imgEl?.classList.remove('is-panning');
      }
    });
    return true;
  }

  #triggerFrameCrossfade(navDir = 'next') {
    if (this.#imgEl && !this.#transitionCoordinator.prefersReducedMotion) {
      this.#imgEl.setAttribute('data-nav-dir', navDir);
      this.#imgEl.classList.remove('frame-crossfade');
      void this.#imgEl.offsetWidth;
      this.#imgEl.classList.add('frame-crossfade');
    }
  }

  toggleZoom() {
    if (!this.#imgEl) return;
    this.#setKenBurns('');
    if (this.#state === LightboxState.SLIDESHOW || this.#slideshowInterval) {
      this.stopSlideshow();
      this.#isZoomed = true;
      this.#state = LightboxState.ZOOMED;
      this.#panBounds = this.#measurePanBounds();
      this.#imgEl.classList.add('zoomed');
      if (this.#zoomBtn) {
        this.#zoomBtn.setAttribute('aria-pressed', 'true');
      }
    } else if (this.#state === LightboxState.ZOOMED || this.#isZoomed) {
      this.#resetZoom();
      this.#state = LightboxState.VIEWING;
    } else {
      this.#isZoomed = true;
      this.#state = LightboxState.ZOOMED;
      this.#panBounds = this.#measurePanBounds();
      this.#imgEl.classList.add('zoomed');
      if (this.#zoomBtn) {
        this.#zoomBtn.setAttribute('aria-pressed', 'true');
      }
    }
  }

  toggleSlideshow() {
    if (this.#state === LightboxState.SLIDESHOW || this.#slideshowInterval) {
      this.stopSlideshow();
    } else {
      this.startSlideshow();
    }
  }

  startSlideshow() {
    if (this.#slideshowInterval || this.#images.length <= 1) return;
    this.#resetZoom();
    this.#state = LightboxState.SLIDESHOW;
    if (this.#playBtn) this.#playBtn.setAttribute('aria-pressed', 'true');
    if (this.#playLabel) this.#playLabel.textContent = 'Pause';
    if (this.#slideshowBarEl) this.#slideshowBarEl.classList.add('playing');
    this.#setCinema(true);

    this.#slideshowInterval = window.setInterval(() => {
      this.navigate(1);
    }, 3500);
  }

  // Cinema mode: while the slideshow plays, the controls fade out and each frame gets a slow
  // push-in that alternates drift direction. Pointer movement or keyboard focus wakes the controls.
  #setCinema(on) {
    if (!this.#lightboxEl) return;
    this.#lightboxEl.classList.toggle('is-cinema', on);
    this.#lightboxEl.classList.remove('chrome-awake');
    clearTimeout(this.#chromeTimer);
    // Starting sets the first push-in; pausing leaves the current frame where it is (no snap
    // back) until the next navigation, zoom or close clears it.
    if (on) {
      this.#kenBurnsFlip = false;
      this.#setKenBurns('a');
    }
  }

  #setKenBurns(value) {
    this.#lightboxEl?.querySelector('.lightbox-picture')?.setAttribute('data-kb', value);
  }

  #nextKenBurns() {
    if (!this.#lightboxEl?.classList.contains('is-cinema')) {
      this.#setKenBurns('');
      return;
    }
    this.#kenBurnsFlip = !this.#kenBurnsFlip;
    this.#setKenBurns(this.#kenBurnsFlip ? 'b' : 'a');
  }

  #restartSlideshowTimer() {
    if (!this.#slideshowInterval) return;
    clearInterval(this.#slideshowInterval);
    this.#slideshowInterval = window.setInterval(() => {
      this.navigate(1);
    }, 3500);
  }

  #wakeChrome() {
    if (!this.#lightboxEl?.classList.contains('is-cinema')) return;
    this.#lightboxEl.classList.add('chrome-awake');
    clearTimeout(this.#chromeTimer);
    this.#chromeTimer = setTimeout(() => this.#lightboxEl.classList.remove('chrome-awake'), 1800);
  }

  stopSlideshow() {
    if (this.#slideshowInterval) {
      clearInterval(this.#slideshowInterval);
      this.#slideshowInterval = null;
    }
    if (this.#state === LightboxState.SLIDESHOW) {
      this.#state = LightboxState.VIEWING;
    }
    if (this.#playBtn) this.#playBtn.setAttribute('aria-pressed', 'false');
    if (this.#playLabel) this.#playLabel.textContent = 'Slideshow';
    if (this.#slideshowBarEl) this.#slideshowBarEl.classList.remove('playing');
    this.#setCinema(false);
  }

  #resetZoom() {
    this.#panGlide?.kill();
    this.#panGlide = null;
    this.#isZoomed = false;
    this.#panX = 0;
    this.#panY = 0;
    this.#isPanning = false;
    this.#hasDragged = false;
    if (this.#state === LightboxState.ZOOMED) {
      this.#state = LightboxState.VIEWING;
    }
    if (this.#imgEl) {
      this.#imgEl.classList.remove('zoomed');
      this.#imgEl.classList.remove('is-panning');
      this.#imgEl.style.transform = '';
    }
    if (this.#zoomBtn) this.#zoomBtn.setAttribute('aria-pressed', 'false');
  }

  #measurePanBounds() {
    const scale = 1.85;
    const w = this.#imgEl?.clientWidth || 0;
    const h = this.#imgEl?.clientHeight || 0;
    return {
      maxX: w > 0 ? (w * (scale - 1)) / 2 : 180,
      maxY: h > 0 ? (h * (scale - 1)) / 2 : 180,
    };
  }

  #getPanBounds() {
    return this.#panBounds;
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
          this.#resetZoom();
          this.#restartSlideshowTimer();
          this.#currentIndex = idx;
          this.#triggerFrameCrossfade(dir);
          this.#nextKenBurns();
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
    // already passed (and reset zoom). A closed viewer ignores them, so a late event can't
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
      this.#resetZoom();
      this.#currentIndex = foundIdx;
      this.#updateView();
    }
  }

  #bindEvents() {
    if (!this.#lightboxEl) return;

    // While cinema controls are hidden, the first tap only wakes them: it must not land on an
    // invisible Close button, the stage (close) or the photo (zoom).
    let swallowNextClick = false;
    this.#lightboxEl.addEventListener('pointermove', e => {
      if (e.pointerType === 'mouse') this.#wakeChrome();
    }, { passive: true });
    this.#lightboxEl.addEventListener('pointerdown', () => {
      swallowNextClick = this.#lightboxEl.classList.contains('is-cinema')
        && !this.#lightboxEl.classList.contains('chrome-awake');
      this.#wakeChrome();
    }, { capture: true, passive: true });
    this.#lightboxEl.addEventListener('click', e => {
      if (!swallowNextClick) return;
      swallowNextClick = false;
      e.stopPropagation();
      e.preventDefault();
    }, { capture: true });

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

    if (this.#imgEl) {
      this.#imgEl.addEventListener('mousedown', e => {
        if (!this.#isZoomed) return;
        e.preventDefault();
        this.#dragStartX = e.clientX;
        this.#dragStartY = e.clientY;
        this.#startPanX  = this.#panX;
        this.#startPanY  = this.#panY;
        this.#hasDragged = false;
        this.#isPanning  = true;
        this.#beginPanTracking(e.clientX, e.clientY);
      });

      window.addEventListener('mousemove', e => {
        if (!this.#isPanning || !this.#isZoomed) return;
        const deltaX = e.clientX - this.#dragStartX;
        const deltaY = e.clientY - this.#dragStartY;
        if (Math.hypot(deltaX, deltaY) > 4) {
          this.#hasDragged = true;
          this.#imgEl.classList.add('is-panning');
        }
        const { maxX, maxY } = this.#getPanBounds();
        this.#panX = Math.max(-maxX, Math.min(maxX, this.#startPanX + deltaX));
        this.#panY = Math.max(-maxY, Math.min(maxY, this.#startPanY + deltaY));
        this.#imgEl.style.transform = `scale(1.85) translate3d(${this.#panX / 1.85}px, ${this.#panY / 1.85}px, 0)`;
        this.#trackPan(e.clientX, e.clientY);
      });

      window.addEventListener('mouseup', () => {
        if (this.#isPanning) {
          this.#isPanning = false;
          if (!(this.#hasDragged && this.#glidePan())) this.#imgEl?.classList.remove('is-panning');
        }
      });

      this.#imgEl.addEventListener('wheel', e => {
        if (!this.#isZoomed) return;
        e.preventDefault();
        this.#panGlide?.kill();
        const { maxX, maxY } = this.#getPanBounds();
        this.#panX = Math.max(-maxX, Math.min(maxX, this.#panX - e.deltaX));
        this.#panY = Math.max(-maxY, Math.min(maxY, this.#panY - e.deltaY));
        this.#imgEl.style.transform = `scale(1.85) translate3d(${this.#panX / 1.85}px, ${this.#panY / 1.85}px, 0)`;
      }, { passive: false });

      this.#imgEl.addEventListener('click', e => {
        e.stopPropagation();
        if (this.#hasDragged) {
          this.#hasDragged = false;
          return;
        }
        this.toggleZoom();
      });
    }

    if (this.#playBtn) {
      this.#playBtn.addEventListener('click', e => {
        e.stopPropagation();
        this.toggleSlideshow();
      });
    }

    if (this.#zoomBtn) {
      this.#zoomBtn.addEventListener('click', e => {
        e.stopPropagation();
        this.toggleZoom();
      });
    }

    window.addEventListener('hashchange', () => this.#handleHashChange());
    window.addEventListener('popstate', () => this.#handleHashChange());

    // Touch swipe navigation and zoom drag-to-pan
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

      if (this.#isZoomed && e.touches.length === 1) {
        this.#dragStartX = touchStartX;
        this.#dragStartY = touchStartY;
        this.#startPanX  = this.#panX;
        this.#startPanY  = this.#panY;
        this.#hasDragged = false;
        this.#isPanning  = true;
        this.#beginPanTracking(touchStartX, touchStartY);
      }
    }, { passive: true });

    this.#lightboxEl.addEventListener('touchmove', e => {
      if (e.touches.length > 1) isMultiTouch = true;
      if (e.touches.length === 1) {
        touchEndX = e.touches[0].clientX;
        touchEndY = e.touches[0].clientY;

        if (this.#isZoomed && this.#isPanning) {
          const deltaX = touchEndX - this.#dragStartX;
          const deltaY = touchEndY - this.#dragStartY;
          if (Math.hypot(deltaX, deltaY) > 4) {
            this.#hasDragged = true;
            this.#imgEl?.classList.add('is-panning');
          }
          const { maxX, maxY } = this.#getPanBounds();
          this.#panX = Math.max(-maxX, Math.min(maxX, this.#startPanX + deltaX));
          this.#panY = Math.max(-maxY, Math.min(maxY, this.#startPanY + deltaY));
          if (this.#imgEl) {
            this.#imgEl.style.transform = `scale(1.85) translate3d(${this.#panX / 1.85}px, ${this.#panY / 1.85}px, 0)`;
          }
          this.#trackPan(touchEndX, touchEndY);
        } else if (!this.#isZoomed && !isMultiTouch && this.#canFollowSwipe()) {
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
      if (this.#isZoomed) {
        this.#isPanning = false;
        if (!(this.#hasDragged && this.#glidePan())) this.#imgEl?.classList.remove('is-panning');
        return;
      }
      if (isMultiTouch) return;
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;
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
        if (this.#isZoomed) {
          this.#resetZoom();
        } else {
          this.close();
        }
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
      if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        this.toggleSlideshow();
        return;
      }
      if (e.key === 'z' || e.key === 'Z') {
        e.preventDefault();
        this.toggleZoom();
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
    more.className = 'story-more btn-editorial btn-editorial-secondary';
    const sync = open => {
      more.textContent = open ? 'Show fewer photos' : `Show all ${total} photos`;
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

// Keep the footer copyright year current without a yearly edit
const footerYearEl = document.getElementById('ft-year');
if (footerYearEl) footerYearEl.textContent = String(new Date().getFullYear());
