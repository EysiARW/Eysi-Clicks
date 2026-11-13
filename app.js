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
      { src: "events/landscape/EYSI-9.jpg", caption: "Khel Pangilinan", alt: "Candid moment of event attendees socializing and laughing together" },
      { src: "events/landscape/EYSI-12.jpg", caption: "Khel Pangilinan", alt: "Group of smiling guests posing together at an celebratory event" },
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


/* Hero wheel rotation: the photos that turn through the three hero cards, in order.
   The first three are the cards in index.html (left, centre, right); the rest enter from
   the left one at a time. Any photo listed in photoData above can be added here. */
const HERO_ROTATION = [
  "predebut/portrait/EYSI-2-22.jpg",
  "events/portrait/EYSI-7-3.jpg",
  "institutional/EYSI-109.jpg",
  "predebut/portrait/EYSI-5-5.jpg",
  "events/landscape/EYSI-77.jpg",
  "institutional/EYSI-57.jpg",
  "predebut/portrait/EYSI-6-3.jpg",
  "events/landscape/EYSI-1-62.jpg",
  "institutional/EYSI-26.jpg",
  "predebut/landscape/EYSI-1-62.jpg",
  "events/landscape/EYSI-53.jpg",
  "institutional/EYSI-32.jpg",
];


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
  #blurRafIds = new Map();

  constructor() {
    this.#reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  }

  get prefersReducedMotion() {
    return this.#reducedMotionQuery.matches;
  }

  pulseDirectionalBlur(targetEl, axis = 'y', peak = 18, durationMs = 420) {
    if (!targetEl || this.prefersReducedMotion || typeof requestAnimationFrame !== 'function') return;
    const filterId = axis === 'x' ? 'bm-blur-x' : 'bm-blur-y';
    const nodeId   = axis === 'x' ? 'bm-blur-x-node' : 'bm-blur-y-node';
    const blurNode = document.getElementById(nodeId);
    if (!blurNode) return;

    const prev = this.#blurRafIds.get(axis);
    if (prev) {
      cancelAnimationFrame(prev.rafId);
      if (prev.blurNode) prev.blurNode.setAttribute('stdDeviation', '0 0');
      if (prev.targetEl && prev.targetEl.style) prev.targetEl.style.filter = '';
      this.#blurRafIds.delete(axis);
    }

    const startTime = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
    targetEl.style.filter = `url(#${filterId})`;

    const step = (now) => {
      const current = typeof now === 'number' ? now : Date.now();
      const progress = Math.min(1, Math.max(0, (current - startTime) / durationMs));
      // Power4-like ease-out decay from peak -> 0 (Bang Motion techniques.md §2)
      const eased = Math.pow(1 - progress, 3);
      const mainVal = (peak * eased).toFixed(2);
      const crossVal = (peak * eased * 0.08).toFixed(2);
      blurNode.setAttribute('stdDeviation', axis === 'x' ? `${mainVal} ${crossVal}` : `${crossVal} ${mainVal}`);

      if (progress < 1) {
        const rafId = requestAnimationFrame(step);
        this.#blurRafIds.set(axis, { rafId, targetEl, blurNode });
      } else {
        blurNode.setAttribute('stdDeviation', '0 0');
        targetEl.style.filter = '';
        this.#blurRafIds.delete(axis);
      }
    };

    const initialRafId = requestAnimationFrame(step);
    this.#blurRafIds.set(axis, { rafId: initialRafId, targetEl, blurNode });
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

  navigate(dir) {
    if (!this.#images.length) return;
    if (this.#state === LightboxState.ZOOMED || this.#isZoomed) {
      this.#resetZoom();
      this.#state = LightboxState.VIEWING;
    } else if (this.#state === LightboxState.SLIDESHOW || this.#slideshowInterval) {
      this.#restartSlideshowTimer();
    }
    this.#currentIndex = (this.#currentIndex + dir + this.#images.length) % this.#images.length;
    this.#triggerFrameCrossfade(dir >= 0 ? 'next' : 'prev');
    this.#nextKenBurns();
    this.#updateView();
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
      });

      window.addEventListener('mouseup', () => {
        if (this.#isPanning) {
          this.#isPanning = false;
          this.#imgEl?.classList.remove('is-panning');
        }
      });

      this.#imgEl.addEventListener('wheel', e => {
        if (!this.#isZoomed) return;
        e.preventDefault();
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

    this.#lightboxEl.addEventListener('touchstart', e => {
      if (e.touches.length > 1) {
        isMultiTouch = true;
        return;
      }
      isMultiTouch = false;
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
        }
      }
    }, { passive: true });

    this.#lightboxEl.addEventListener('touchend', () => {
      if (this.#isZoomed) {
        this.#isPanning = false;
        this.#imgEl?.classList.remove('is-panning');
        return;
      }
      if (isMultiTouch) return;
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;
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
        if (panel.style) panel.style.filter = '';
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

    photos.forEach((asset, idx) => {
      const storyKey = PortfolioRepository.storyKey(asset);
      if (storyKey !== currentStory) {
        currentStory = storyKey;
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
      sourceWebp.srcset = asset.gridSrc;
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
    });
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

    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      this.#transitionCoordinator?.pulseDirectionalBlur(heroTitle, 'y', 22, 680);
    }

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
      if (this.#footerSection) this.#footerSection.classList.add('is-in-view');
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      if (this.#aboutWrap) this.#aboutWrap.classList.add('is-in-view');
      if (this.#gallerySection) this.#gallerySection.classList.add('is-in-view');
      if (this.#packagesSection) this.#packagesSection.classList.add('is-in-view');
      if (this.#footerSection) this.#footerSection.classList.add('is-in-view');
      return;
    }

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === this.#aboutSection) {
            if (this.#aboutWrap) this.#aboutWrap.classList.add('is-in-view');
            const aboutTitle = this.#aboutSection.querySelector('.section-title');
            if (aboutTitle) this.#transitionCoordinator?.pulseDirectionalBlur(aboutTitle, 'x', 18, 520);
          } else if (entry.target === this.#gallerySection) {
            entry.target.classList.add('is-in-view');
            const galTitle = this.#gallerySection.querySelector('.section-title');
            if (galTitle) this.#transitionCoordinator?.pulseDirectionalBlur(galTitle, 'y', 16, 480);
          } else if (entry.target === this.#packagesSection) {
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
    if (this.#footerSection) revealObserver.observe(this.#footerSection);
  }

  #initEntranceCleanup() {
    let settled = false;
    const settle = () => {
      if (settled) return;
      settled = true;
      document.documentElement.classList.add('hero-settled');
    };

    if (this.#transitionCoordinator?.prefersReducedMotion) {
      settle();
      return;
    }

    const cards = document.querySelectorAll('.hero-card');
    let endedCount = 0;
    const supportsAnimationProp = typeof AnimationEvent !== 'undefined' && 'animation' in AnimationEvent.prototype;

    cards.forEach(card => {
      card.addEventListener('animationend', (e) => {
        const animTarget = supportsAnimationProp && e.animation?.effect?.target ? e.animation.effect.target : e.target;
        if (animTarget === card || e.target === card) {
          card.style.willChange = 'auto';
          endedCount++;
          if (endedCount >= cards.length) {
            settle();
          }
        }
      });
    });

    // Fallback timer: ensure hero is marked settled even if animations are suppressed or run in background tab
    setTimeout(settle, 1650);
  }
}


/* ── 8b. HERO WHEEL (cards turn along the fan's own arc) ── */

class HeroCarouselController {
  // The resting fan (left / centre / right) is three spokes of one large wheel: the side
  // cards sit one "step" (their rest rotation) either side of centre. The wheel turns that
  // arc left to right at one constant speed. Two steps out on each side is a portal: the
  // right card sinks back and fades into it, gets the next photo while hidden, and emerges
  // from the left portal. Paused it is exactly the original fan.
  static #STEP_SECONDS = 5;
  // In steps from centre: a card is whole up to FULL and fully inside a portal at PORTAL.
  // PORTAL must be 2 with four cards, so the one leaving on the right and the one arriving
  // on the left are the same card at the same moment.
  static #FULL = 1;
  static #PORTAL = 2;

  #repository;
  #transitionCoordinator;
  #deck;
  #lightboxEl;
  #pool = [];
  #nextPoolIdx = 0;
  #cards = [];
  #phase = 0;
  #speed = 1;
  #stepDeg = 8;
  #radius = 935;
  #lastTime = 0;
  #rafId = null;
  #inView = true;
  #hovered = false;
  #focused = false;
  #needsMeasure = true;
  #portals = [];

  constructor(repository, transitionCoordinator) {
    this.#repository = repository;
    this.#transitionCoordinator = transitionCoordinator;
    this.#deck = document.querySelector('.hero-deck');
    this.#lightboxEl = document.getElementById('lightbox');
    if (!this.#deck || transitionCoordinator?.prefersReducedMotion
      || typeof requestAnimationFrame !== 'function') return;

    this.#pool = this.#buildPool();
    const [left, center, right, extra] = ['.hero-card-left', '.hero-card-center', '.hero-card-right', '.hero-card-extra']
      .map(sel => this.#deck.querySelector(sel));
    if (!left || !center || !right || !extra || this.#pool.length < 4) return;

    this.#cards = [
      { el: extra,  slot: -2, interactive: false },
      { el: left,   slot: -1, interactive: true },
      { el: center, slot: 0,  interactive: true },
      { el: right,  slot: 1,  interactive: true },
    ];
    this.#nextPoolIdx = 4 % this.#pool.length;
    this.#preload(this.#pool[this.#nextPoolIdx]);
    this.#whenEntranceSettled(() => this.#start());
  }

  #buildPool() {
    const bySrc = new Map();
    this.#repository.getCategories().forEach(cat => {
      this.#repository.getPhotos(cat).forEach(asset => bySrc.set(asset.src, asset));
    });
    return HERO_ROTATION.map(src => bySrc.get(src)).filter(Boolean);
  }

  #whenEntranceSettled(callback) {
    const root = document.documentElement;
    if (root.classList.contains('hero-settled')) { callback(); return; }
    let done = false;
    const go = () => { if (!done) { done = true; callback(); } };
    if (typeof MutationObserver === 'function') {
      const watcher = new MutationObserver(() => {
        if (root.classList.contains('hero-settled')) { watcher.disconnect(); go(); }
      });
      watcher.observe(root, { attributes: true, attributeFilter: ['class'] });
    }
    setTimeout(go, 2200);
  }

  #start() {
    this.#deck.classList.add('is-turning');
    // Portals are decoration that only exists while the wheel turns
    this.#portals = [-1, 1].map(side => {
      const el = document.createElement('span');
      el.className = 'hero-portal';
      el.setAttribute('aria-hidden', 'true');
      this.#deck.appendChild(el);
      return { el, side };
    });
    this.#deck.addEventListener('pointerenter', () => { this.#hovered = true; });
    this.#deck.addEventListener('pointerleave', () => { this.#hovered = false; this.#wake(); });
    // Tabbing onto a card pauses the wheel so keyboard users can read and open it. Focus the
    // lightbox hands back on close (after a click or Esc) does not, or the wheel would stay
    // stopped after every visit.
    let tabbed = false;
    document.addEventListener('keydown', e => { tabbed = e.key === 'Tab'; });
    document.addEventListener('pointerdown', () => { tabbed = false; }, { passive: true });
    this.#deck.addEventListener('focusin', () => { this.#focused = tabbed; });
    this.#deck.addEventListener('focusout', () => { this.#focused = false; this.#wake(); });
    window.addEventListener('resize', () => { this.#needsMeasure = true; }, { passive: true });
    document.addEventListener('visibilitychange', () => this.#wake());

    if (typeof IntersectionObserver === 'function') {
      new IntersectionObserver(entries => {
        this.#inView = entries.some(e => e.isIntersecting);
        this.#wake();
      }).observe(this.#deck);
    }
    this.#render();
    this.#wake();
  }

  // Runs the frame loop only while the deck is on screen and the tab is visible
  #wake() {
    if (this.#rafId !== null || !this.#inView || document.hidden) return;
    this.#lastTime = performance.now();
    this.#rafId = requestAnimationFrame(t => this.#tick(t));
  }

  #tick(now) {
    this.#rafId = null;
    if (!this.#inView || document.hidden) return;
    const dt = Math.min(0.1, (now - this.#lastTime) / 1000);
    this.#lastTime = now;

    // Under the pointer, on keyboard focus, or behind the lightbox the wheel stops — but first
    // glides to the nearest resting fan, so a pause never freezes a card half-faded. The
    // target keeps any focused card on the visible side.
    const paused = this.#hovered || this.#focused || this.#lightboxEl?.classList.contains('open');
    if (paused) {
      this.#speed = 0;
      let rest = this.#phase < 0.5 ? 0 : 1;
      const held = this.#cards.find(c => c.el === document.activeElement);
      if (held && Math.abs(held.slot + rest) > 1) rest = 1 - rest;
      this.#phase += (rest - this.#phase) * Math.min(1, dt * 5);
      if (Math.abs(rest - this.#phase) < 0.0015) this.#phase = rest;
    } else {
      // Back to full speed within about half a second, then it never varies
      this.#speed += (1 - this.#speed) * Math.min(1, dt * 6);
      if (this.#speed > 0.995) this.#speed = 1;
      this.#phase += (this.#speed * dt) / HeroCarouselController.#STEP_SECONDS;
    }

    if (this.#phase >= 1) {
      this.#phase -= 1;
      this.#cards.forEach(card => {
        card.slot += 1;
        if (card.slot > 1) {
          card.slot = -2;
          this.#assignNextPhoto(card.el);
        }
      });
    }
    this.#render();
    this.#rafId = requestAnimationFrame(t => this.#tick(t));
  }

  #measure() {
    this.#needsMeasure = false;
    const ref = this.#deck.querySelector('.hero-card-right');
    const cs = ref ? getComputedStyle(ref) : null;
    const restX = parseFloat(cs?.getPropertyValue('--card-rest-x')) || 130;
    const restRot = parseFloat(cs?.getPropertyValue('--card-rest-rot')) || 8;
    this.#stepDeg = restRot;
    this.#radius = restX / Math.sin(restRot * Math.PI / 180);
    const w = ref?.offsetWidth || 0;
    const h = ref?.offsetHeight || 0;
    this.#portals.forEach(({ el }) => {
      el.style.width = `${w}px`;
      el.style.height = `${h}px`;
      el.style.marginLeft = `${-w / 2}px`;
    });
  }

  // Position on the arc for a card `steps` spokes from centre
  #arc(steps) {
    const deg = steps * this.#stepDeg;
    const rad = deg * Math.PI / 180;
    return `translate3d(${(this.#radius * Math.sin(rad)).toFixed(2)}px, ${(this.#radius * (1 - Math.cos(rad))).toFixed(2)}px, 0) rotate(${deg.toFixed(3)}deg)`;
  }

  static #smooth(t) {
    const c = Math.min(1, Math.max(0, t));
    return c * c * (3 - 2 * c);
  }

  #render() {
    if (this.#needsMeasure) this.#measure();
    const full = HeroCarouselController.#FULL;
    const portal = HeroCarouselController.#PORTAL;
    const smooth = HeroCarouselController.#smooth;
    let glow = 0;
    this.#cards.forEach(card => {
      const steps = card.slot + this.#phase;
      // The arc speed never changes. Near a portal the card sinks back (a slight uniform
      // shrink) and fades into the glow, which also keeps it off the hero text.
      const into = smooth((Math.abs(steps) - full) / (portal - full));
      const scale = 1 - 0.4 * into;
      const opacity = 1 - into;
      // Each portal is brightest while a card is half-way through it
      if (into > 0 && into < 1) glow = Math.max(glow, Math.sin(Math.PI * into));

      const el = card.el;
      el.style.transform = `${this.#arc(steps)} scale(${scale.toFixed(3)})`;
      el.style.opacity = opacity.toFixed(3);
      const z = String(20 + Math.round(steps * 4));
      if (el.style.zIndex !== z) el.style.zIndex = z;

      // Only cards that are mostly shown can be clicked or focused
      const interactive = opacity > 0.5;
      if (interactive !== card.interactive) {
        card.interactive = interactive;
        el.setAttribute('tabindex', interactive ? '0' : '-1');
        el.setAttribute('aria-hidden', interactive ? 'false' : 'true');
        el.style.pointerEvents = interactive ? '' : 'none';
      }
    });
    // Cards leave on the right exactly as they arrive on the left, so both portals share
    // one glow; it rests at zero whenever the fan is at rest.
    this.#portals.forEach(({ el, side }) => {
      el.style.transform = this.#arc(side * portal);
      el.style.opacity = (0.85 * glow).toFixed(3);
    });
  }

  #assignNextPhoto(el) {
    const visibleSrcs = this.#cards.filter(c => c.el !== el).map(c => c.el.querySelector('img')?.getAttribute('src'));
    let asset = this.#pool[this.#nextPoolIdx];
    for (let i = 0; i < this.#pool.length && visibleSrcs.includes(asset.src); i++) {
      this.#nextPoolIdx = (this.#nextPoolIdx + 1) % this.#pool.length;
      asset = this.#pool[this.#nextPoolIdx];
    }
    this.#nextPoolIdx = (this.#nextPoolIdx + 1) % this.#pool.length;
    this.#preload(this.#pool[this.#nextPoolIdx]);

    const slug = asset.src.split('/').pop().replace(/\.[^.]+$/, '').toLowerCase();
    el.dataset.cat = asset.category;
    el.dataset.slug = slug;
    el.dataset.idx = '0';
    el.setAttribute('aria-label', `View ${asset.caption} (${asset.categoryLabel}) in Lightbox`);

    const source = el.querySelector('source');
    const img = el.querySelector('img');
    if (source) source.srcset = asset.gridSrc;
    if (img) {
      img.src = asset.src;
      img.alt = `${asset.caption} · ${asset.categoryLabel}`;
      img.width = asset.orientation === 'portrait' ? 800 : 1200;
      img.height = asset.orientation === 'portrait' ? 1000 : 800;
    }
    const title = el.querySelector('.monument-title');
    const context = el.querySelector('.monument-context');
    if (title) title.textContent = asset.caption;
    if (context) context.textContent = asset.categoryLabel;
  }

  #preload(asset) {
    if (!asset || typeof Image !== 'function') return;
    const img = new Image();
    img.decoding = 'async';
    img.src = asset.gridSrc;
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
const heroCarousel          = new HeroCarouselController(repository, transitionCoordinator);

// Keep the footer copyright year current without a yearly edit
const footerYearEl = document.getElementById('ft-year');
if (footerYearEl) footerYearEl.textContent = String(new Date().getFullYear());
