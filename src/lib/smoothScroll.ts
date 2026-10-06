import { localeFromPath, stripLocale, withLocale } from "./localePath";

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

let activeAnimation: number | null = null;

export const smoothScrollTo = (
  target: HTMLElement | number,
  { duration = 1100, offset = 112 }: { duration?: number; offset?: number } = {}
) => {
  const end =
    typeof target === "number"
      ? target
      : target.getBoundingClientRect().top + window.scrollY - offset;

  const start = window.scrollY;
  const distance = end - start;

  if (Math.abs(distance) < 1) return;

  if (activeAnimation !== null) {
    cancelAnimationFrame(activeAnimation);
  }

  const startTime = performance.now();

  const step = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + distance * easeInOutCubic(progress));

    if (progress < 1) {
      activeAnimation = requestAnimationFrame(step);
    } else {
      activeAnimation = null;
    }
  };

  activeAnimation = requestAnimationFrame(step);
};

export const smoothScrollToId = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    smoothScrollTo(element);
    return true;
  }
  return false;
};

export const goToHash = (
  id: string,
  pathname: string,
  navigate: (path: string) => void
) => {
  const path = withLocale(`/#${id}`, localeFromPath(pathname));
  if (stripLocale(pathname) === "/") {
    smoothScrollToId(id);
    window.history.replaceState(null, "", path);
    return;
  }
  navigate(path);
};
