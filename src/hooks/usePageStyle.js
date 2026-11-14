import { useEffect, useInsertionEffect } from 'react';

/**
 * Injects a page's stylesheet into <head> while the page is mounted.
 * Only ONE page stylesheet may be active at a time: before inserting, any stylesheet left behind by a
 * previous page (e.g. a hidden Suspense tree that was never cleaned up) is removed, so styles from the
 * Home page can no longer leak into Rooms / Gallery / Amenities etc.
 */
export default function usePageStyle(css, title) {
  useInsertionEffect(() => {
    document.querySelectorAll('style[data-page-style]').forEach((s) => s.remove());
    const style = document.createElement('style');
    style.setAttribute('data-page-style', '');
    style.textContent = css;
    document.head.appendChild(style);
    return () => style.remove();
  }, [css]);
  useEffect(() => {
    if (title) document.title = title;
  }, [title]);
}
