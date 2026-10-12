import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import { useLanguage, useTranslation } from "../contexts/LanguageContext";
import { withLocale } from "../lib/localePath";
import globeIcon from "/globe-black.png";

const OPTIONS = [
  { code: "ro", labelKey: "navigation.language_ro" },
  { code: "en", labelKey: "navigation.language_en" },
] as const;

type LanguageSelectorProps = {
  variant?: "default" | "nav";
  className?: string;
};

export const LanguageSelector = ({
  variant = "default",
  className = "",
}: LanguageSelectorProps) => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const isNav = variant === "nav";

  const updatePosition = () => {
    const trigger = rootRef.current;
    const menu = menuRef.current;
    if (!trigger || !menu) return;

    const rect = trigger.getBoundingClientRect();
    const menuWidth = menu.offsetWidth || 132;
    const menuHeight = menu.offsetHeight || 88;
    const gap = 10;
    const next = {
      left: Math.min(
        Math.max(8, rect.left + rect.width / 2 - menuWidth / 2),
        window.innerWidth - menuWidth - 8
      ),
      top: isNav ? rect.bottom + gap : Math.max(8, rect.top - menuHeight - gap),
    };

    menu.style.top = `${next.top}px`;
    menu.style.left = `${next.left}px`;
    menu.style.visibility = "visible";
    setCoords(next);
  };

  useLayoutEffect(() => {
    if (!open) {
      setCoords(null);
      return;
    }
    updatePosition();
  }, [open, isNav]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!rootRef.current?.contains(target) && !menuRef.current?.contains(target)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [open, isNav]);

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        className={
          isNav
            ? "flex items-center justify-center p-1 transition-opacity duration-200 hover:opacity-80"
            : "flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all duration-200 hover:border-white/30 hover:opacity-80"
        }
      >
        <img
          src={globeIcon}
          alt=""
          aria-hidden
          className={`${isNav ? "h-[18px] w-[18px]" : "h-4 w-4"} brightness-0 invert`}
        />
      </button>

      {open &&
        createPortal(
          <div
            ref={menuRef}
            role="listbox"
            aria-label="Language"
            style={{
              top: coords?.top ?? 0,
              left: coords?.left ?? 0,
              visibility: coords ? "visible" : "hidden",
            }}
            className="fixed z-[100] flex flex-col rounded-3xl border border-white/15 bg-[#0B1438]/92 py-1 shadow-[0_10px_40px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
          >
            {OPTIONS.map((option, index) => {
              const selected = language === option.code;
              return (
                <button
                  key={option.code}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    const next = withLocale(
                      `${location.pathname}${location.hash}`,
                      option.code
                    );
                    const current = `${window.location.pathname}${window.location.hash}`;
                    if (current === next) {
                      window.location.reload();
                      return;
                    }
                    window.location.assign(next);
                  }}
                  className={`px-5 py-2.5 text-center font-['Urbanist',Helvetica] text-[15px] font-medium leading-none transition-colors duration-200 ${
                    index > 0 ? "border-t border-white/15" : ""
                  } ${
                    selected
                      ? "text-white"
                      : "text-white/45 hover:text-[#6BA3FF]"
                  }`}
                >
                  {t(option.labelKey)}
                </button>
              );
            })}
          </div>,
          document.body
        )}
    </div>
  );
};
