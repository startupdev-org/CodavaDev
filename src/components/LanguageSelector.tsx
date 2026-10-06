import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { withLocale } from "../lib/localePath";
import globeIcon from "/globe-black.png";

const OPTIONS = [
  { code: "ro", label: "RO" },
  { code: "en", label: "EN" },
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
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const rootRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const isNav = variant === "nav";

  const updatePosition = () => {
    const trigger = rootRef.current;
    if (!trigger) return;

    const rect = trigger.getBoundingClientRect();
    const menu = menuRef.current;
    const menuWidth = menu?.offsetWidth ?? 96;
    const menuHeight = menu?.offsetHeight ?? 40;
    const gap = 10;

    setCoords({
      left: Math.min(
        Math.max(8, rect.left + rect.width / 2 - menuWidth / 2),
        window.innerWidth - menuWidth - 8
      ),
      top: isNav ? rect.bottom + gap : rect.top - menuHeight - gap,
    });
  };

  useLayoutEffect(() => {
    if (open) updatePosition();
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
          className={`${isNav ? "w-[18px] h-[18px]" : "w-4 h-4"} brightness-0 invert`}
        />
      </button>

      {open &&
        createPortal(
          <div
            ref={menuRef}
            role="listbox"
            aria-label="Language"
            style={{ top: coords.top, left: coords.left }}
            className="fixed z-[100] flex items-center gap-0.5 rounded-full border border-white/15 bg-[#0B1438]/85 p-1 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.55)]"
          >
            {OPTIONS.map((option) => {
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
                    if (`${location.pathname}${location.hash}` !== next) {
                      navigate(next);
                    }
                    setOpen(false);
                  }}
                  className={`min-w-[2.5rem] rounded-full px-3 py-1.5 font-['Urbanist',Helvetica] text-xs font-semibold tracking-[0.08em] transition-all duration-200 ${
                    selected
                      ? "bg-[#194EFF] text-white"
                      : "text-white/55 hover:text-white"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>,
          document.body
        )}
    </div>
  );
};
