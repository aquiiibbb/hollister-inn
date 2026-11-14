import { useEffect, useRef, useState } from 'react';

const DEFAULT_SETTINGS = {
  removeImages: false,
  disableAnimations: false,
  monoChrome: false,
  grayScale: false,
  sepia: false,
  highContrast: false,
  invertColors: false,
  wcagContrast: false,
  boldFonts: false,
};
const COLOR_KEYS = ['monoChrome', 'grayScale', 'sepia', 'highContrast', 'invertColors', 'wcagContrast'];
const COLOR_ACTIONS = ['mono-chrome', 'gray-scale', 'sepia', 'high-contrast', 'invert-colors', 'wcag-contrast'];
const ACTION_KEY = {
  'remove-images': 'removeImages',
  'disable-animations': 'disableAnimations',
  'mono-chrome': 'monoChrome',
  'gray-scale': 'grayScale',
  sepia: 'sepia',
  'high-contrast': 'highContrast',
  'invert-colors': 'invertColors',
  'wcag-contrast': 'wcagContrast',
  'bold-fonts': 'boldFonts',
};
const kebab = (key) => key.replace(/([A-Z])/g, '-$1').toLowerCase();

function loadSavedSettings() {
  try {
    const saved = localStorage.getItem('accessibilitySettings');
    if (!saved) return null;
    const parsed = JSON.parse(saved);
    return {
      active: parsed.activeSettings || { ...DEFAULT_SETTINGS },
      font: parsed.fontSizeLevel || 0,
      zoom: parsed.zoomLevel || 0,
      lh: parsed.lineHeightLevel || 0,
    };
  } catch (e) {
    return null;
  }
}

export default function AccessibilityWidget() {
  // ---- Accessibility widget state (ported 1:1 from the original script) ----
  const [isOpen, setIsOpen] = useState(false);
  const [collapsed, setCollapsed] = useState({});
  const widgetRef = useRef(null);
  const fabRef = useRef(null);

  const [s, setS] = useState(() => {
    const saved = loadSavedSettings();
    if (!saved) return { active: { ...DEFAULT_SETTINGS }, font: 0, zoom: 0, lh: 0, touched: { font: false, zoom: false, lh: false } };
    return { ...saved, touched: { font: true, zoom: true, lh: true } };
  });
  // which accessibility buttons are highlighted
  const [btnActive, setBtnActive] = useState(() => {
    const saved = loadSavedSettings();
    const map = {};
    if (saved) Object.keys(saved.active).forEach((key) => { if (saved.active[key]) map[kebab(key)] = true; });
    return map;
  });

  const toggleSection = (i) => setCollapsed((c) => ({ ...c, [i]: !c[i] }));

  const toggleA11yPanel = () => {
    const next = !isOpen;
    setIsOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  const applyAccessibility = (action) => {
    const next = { active: { ...s.active }, font: s.font, zoom: s.zoom, lh: s.lh, touched: { ...s.touched } };
    const btns = { ...btnActive };
    // mirrors classList.toggle('active', isActive): an undefined flag flips the button
    const updateButtonState = (act, isActive) => {
      btns[act] = isActive === undefined ? !btns[act] : isActive;
    };

    if (COLOR_ACTIONS.includes(action)) {
      COLOR_KEYS.forEach((k) => { next.active[k] = false; }); // removeColorFilters()
      const key = ACTION_KEY[action];
      next.active[key] = !next.active[key];
      updateButtonState(action, next.active[key]);
      COLOR_ACTIONS.forEach((a) => updateButtonState(a, next.active[a.replace('-', '')])); // updateColorButtonStates()
    } else if (ACTION_KEY[action]) {
      const key = ACTION_KEY[action];
      next.active[key] = !next.active[key];
      updateButtonState(action, next.active[key]);
    } else {
      switch (action) {
        case 'increase-font': next.font = Math.min(next.font + 1, 5); next.touched.font = true; break;
        case 'decrease-font': next.font = Math.max(next.font - 1, -3); next.touched.font = true; break;
        case 'reset-font': next.font = 0; next.touched.font = true; break;
        case 'zoom-increase': next.zoom = Math.min(next.zoom + 1, 5); next.touched.zoom = true; break;
        case 'zoom-decrease': next.zoom = Math.max(next.zoom - 1, -3); next.touched.zoom = true; break;
        case 'increase-line-height': next.lh = Math.min(next.lh + 1, 5); next.touched.lh = true; break;
        case 'decrease-line-height': next.lh = Math.max(next.lh - 1, -2); next.touched.lh = true; break;
        case 'reset-all':
          next.active = { ...DEFAULT_SETTINGS };
          next.font = 0; next.zoom = 0; next.lh = 0;
          next.touched = { font: false, zoom: false, lh: false };
          Object.keys(btns).forEach((k) => { btns[k] = false; });
          break;
        default:
          break;
      }
    }

    setS(next);
    setBtnActive(btns);
    // saveSettings() runs after every action (also after reset-all)
    try {
      localStorage.setItem('accessibilitySettings', JSON.stringify({ activeSettings: next.active, fontSizeLevel: next.font, zoomLevel: next.zoom, lineHeightLevel: next.lh }));
    } catch (e) { /* storage unavailable */ }
  };

  // apply settings to <body> (classes + inline styles), like the original script did
  useEffect(() => {
    const body = document.body;
    Object.keys(DEFAULT_SETTINGS).forEach((key) => body.classList.toggle(kebab(key), !!s.active[key]));
    body.style.fontSize = s.touched.font ? `${100 + s.font * 20}%` : '';
    body.style.zoom = s.touched.zoom ? String(1 + s.zoom * 0.1) : '';
    body.style.lineHeight = s.touched.lh ? String(1.5 + s.lh * 0.2) : '';
  }, [s]);

  // leaving the page restores <body>
  useEffect(() => () => {
    const body = document.body;
    Object.keys(DEFAULT_SETTINGS).forEach((key) => body.classList.remove(kebab(key)));
    body.style.fontSize = '';
    body.style.zoom = '';
    body.style.lineHeight = '';
    body.style.overflow = '';
  }, []);

  // Keyboard shortcuts: Shift + A toggles the panel, ESC closes it
  // + close widget when clicking outside
  useEffect(() => {
    const onKey = (e) => {
      if (e.shiftKey && e.key === 'A') {
        e.preventDefault();
        toggleA11yPanel();
      }
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        toggleA11yPanel();
      }
    };
    const onDocClick = (e) => {
      if (isOpen && !widgetRef.current?.contains(e.target) && !fabRef.current?.contains(e.target)) {
        toggleA11yPanel();
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onDocClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onDocClick);
    };
  });

  return (
    <>
<button className="accessibility-fab" onClick={() => toggleA11yPanel()} aria-label="Open Accessibility Panel" ref={fabRef}></button>
<div id="accessibilityWidget" className="accessibility-widget" style={{ display: isOpen ? 'flex' : 'none' }} ref={widgetRef}>
        <div className="widget-header">
          <div className="widget-logo">
            <span className="logo-text">ada.tray</span>
          </div>
          <button className="close-btn" onClick={() => toggleA11yPanel()}>
            <span>ESC</span>
            {" "}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
          </button>
        </div>
        <div className="widget-sidebar">
          <div className="sidebar-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"></path>
            </svg>
            <div>
              <div className="sidebar-title">Keyboard Nav</div>
              <div className="sidebar-subtitle">(Shift + A To Activate)</div>
            </div>
          </div>
          <div className="sidebar-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"></path>
            </svg>
            <div className="sidebar-title">Reset Button</div>
          </div>
          <div className="sidebar-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path>
            </svg>
            <div className="sidebar-title">Help Button</div>
          </div>
        </div>
        <div className="widget-content">
          <div className="widget-section">
            <div className={'section-header' + (collapsed[0] ? ' collapsed' : '')} onClick={() => toggleSection(0)}>
              <h4>{"CONTENT & DISPLAY ADJUSTMENTS"}</h4>
              <span className="expand-icon">{collapsed[0] ? '▶' : '▼'}</span>
            </div>
            <div className="widget-grid" style={collapsed[0] ? { display: 'none' } : undefined}>
              <button onClick={() => applyAccessibility('remove-images')} className={'widget-btn' + (btnActive['remove-images'] ? ' active' : '')}>
                <div className="btn-icon">🖼️</div>
                <span>Remove Images</span>
              </button>
              {" "}
              <button className="widget-btn">
                <div className="btn-icon">🔊</div>
                <span>Listen</span>
              </button>
              {" "}
              <button onClick={() => applyAccessibility('disable-animations')} className={'widget-btn' + (btnActive['disable-animations'] ? ' active' : '')}>
                <div className="btn-icon">🎬</div>
                <span>Disable Animations</span>
              </button>
              {" "}
              <button onClick={() => applyAccessibility('increase-font')} className={'widget-btn' + (btnActive['increase-font'] ? ' active' : '')}>
                <div className="btn-icon">A+</div>
                <span>Increase Fonts</span>
              </button>
              {" "}
              <button onClick={() => applyAccessibility('decrease-font')} className={'widget-btn' + (btnActive['decrease-font'] ? ' active' : '')}>
                <div className="btn-icon">A-</div>
                <span>Decrease Fonts</span>
              </button>
              {" "}
              <button onClick={() => applyAccessibility('reset-font')} className={'widget-btn' + (btnActive['reset-font'] ? ' active' : '')}>
                <div className="btn-icon">A</div>
                <span>Reset Font</span>
              </button>
              {" "}
              <button onClick={() => applyAccessibility('zoom-increase')} className={'widget-btn' + (btnActive['zoom-increase'] ? ' active' : '')}>
                <div className="btn-icon">🔍+</div>
                <span>Zoom Increase</span>
              </button>
              {" "}
              <button onClick={() => applyAccessibility('zoom-decrease')} className={'widget-btn' + (btnActive['zoom-decrease'] ? ' active' : '')}>
                <div className="btn-icon">🔍-</div>
                <span>Zoom Decrease</span>
              </button>
              {" "}
              <button onClick={() => applyAccessibility('increase-line-height')} className={'widget-btn' + (btnActive['increase-line-height'] ? ' active' : '')}>
                <div className="btn-icon">≡</div>
                <span>Increase Line Height</span>
              </button>
              {" "}
              <button onClick={() => applyAccessibility('decrease-line-height')} className={'widget-btn' + (btnActive['decrease-line-height'] ? ' active' : '')}>
                <div className="btn-icon">≡</div>
                <span>Decrease Line Height</span>
              </button>
              {" "}
              <button className="widget-btn">
                <div className="btn-icon">≡</div>
                <span>Increase Word Spacing</span>
              </button>
              {" "}
              <button className="widget-btn">
                <div className="btn-icon">≡</div>
                <span>Decrease Word Spacing</span>
              </button>
              {" "}
              <button className="widget-btn">
                <div className="btn-icon">A+</div>
                <span>Increase Letter Spacing</span>
              </button>
              {" "}
              <button className="widget-btn">
                <div className="btn-icon">A-</div>
                <span>Decrease Letter Spacing</span>
              </button>
              {" "}
              <button className="widget-btn">
                <div className="btn-icon">≡</div>
                <span>Align Center</span>
              </button>
              {" "}
              <button className="widget-btn">
                <div className="btn-icon">≡</div>
                <span>Align Left</span>
              </button>
              {" "}
              <button className="widget-btn">
                <div className="btn-icon">≡</div>
                <span>Align Right</span>
              </button>
              {" "}
              <button className="widget-btn">
                <div className="btn-icon">≡</div>
                <span>Align Justify</span>
              </button>
              {" "}
              <button onClick={() => applyAccessibility('bold-fonts')} className={'widget-btn' + (btnActive['bold-fonts'] ? ' active' : '')}>
                <div className="btn-icon">B</div>
                <span>Bold Fonts</span>
              </button>
              {" "}
              <button className="widget-btn">
                <div className="btn-icon">T</div>
                <span>Highlights Titles</span>
              </button>
              {" "}
              <button className="widget-btn">
                <div className="btn-icon">🔗</div>
                <span>Highlights Links</span>
              </button>
              {" "}
              <button className="widget-btn">
                <div className="btn-icon">↗</div>
                <span>Black Cursor</span>
              </button>
            </div>
          </div>
          <div className="widget-section">
            <div className={'section-header' + (collapsed[1] ? ' collapsed' : '')} onClick={() => toggleSection(1)}>
              <h4>COLOR ADJUSTMENTS</h4>
              <span className="expand-icon">{collapsed[1] ? '▶' : '▼'}</span>
            </div>
            <div className="widget-grid color-grid" style={collapsed[1] ? { display: 'none' } : undefined}>
              <button onClick={() => applyAccessibility('mono-chrome')} className={'widget-btn color-btn' + (btnActive['mono-chrome'] ? ' active' : '')}>
                <div className="color-circle mono-chrome-bg"></div>
                <span>Mono Chrome</span>
              </button>
              {" "}
              <button onClick={() => applyAccessibility('gray-scale')} className={'widget-btn color-btn' + (btnActive['gray-scale'] ? ' active' : '')}>
                <div className="color-circle gray-scale-bg"></div>
                <span>Gray Scale</span>
              </button>
              {" "}
              <button className="widget-btn color-btn">
                <div className="color-circle title-color-bg"></div>
                <span>Title Color</span>
              </button>
              {" "}
              <button className="widget-btn color-btn">
                <div className="color-circle text-color-bg"></div>
                <span>Text Color</span>
              </button>
              {" "}
              <button onClick={() => applyAccessibility('sepia')} className={'widget-btn color-btn' + (btnActive['sepia'] ? ' active' : '')}>
                <div className="color-circle sepia-bg"></div>
                <span>Sepia</span>
              </button>
              {" "}
              <button onClick={() => applyAccessibility('high-contrast')} className={'widget-btn color-btn' + (btnActive['high-contrast'] ? ' active' : '')}>
                <div className="color-circle high-contrast-bg"></div>
                <span>High Contrast</span>
              </button>
              {" "}
              <button onClick={() => applyAccessibility('invert-colors')} className={'widget-btn color-btn' + (btnActive['invert-colors'] ? ' active' : '')}>
                <div className="color-circle invert-bg"></div>
                <span>Invert</span>
              </button>
              {" "}
              <button onClick={() => applyAccessibility('wcag-contrast')} className={'widget-btn color-btn' + (btnActive['wcag-contrast'] ? ' active' : '')}>
                <div className="color-circle wcag-bg"></div>
                <span>WCAG Contrast</span>
              </button>
            </div>
          </div>
          <div className="widget-section">
            <div className={'section-header' + (collapsed[2] ? ' collapsed' : '')} onClick={() => toggleSection(2)}>
              <h4>ADDITIONAL INFORMATION</h4>
              <span className="expand-icon">{collapsed[2] ? '▶' : '▼'}</span>
            </div>
            <div className="widget-grid info-grid" style={collapsed[2] ? { display: 'none' } : undefined}>
              <button className="widget-btn info-btn">
                <div className="info-icon">W3C</div>
                <span>Initiative</span>
              </button>
              {" "}
              <button className="widget-btn info-btn">
                <div className="info-icon">♿</div>
                <span>Accessibility Statement</span>
              </button>
            </div>
          </div>
          <div className="widget-section">
            <div className={'section-header' + (collapsed[3] ? ' collapsed' : '')} onClick={() => toggleSection(3)}>
              <h4>RESET ALL</h4>
              <span className="expand-icon">{collapsed[3] ? '▶' : '▼'}</span>
            </div>
            <div className="widget-grid" style={collapsed[3] ? { display: 'none' } : undefined}>
              <button onClick={() => applyAccessibility('reset-all')} className={'widget-btn reset-btn' + (btnActive['reset-all'] ? ' active' : '')}>
                <div className="btn-icon">🔄</div>
                <span>Reset All Settings</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
