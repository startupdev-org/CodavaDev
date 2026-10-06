import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { localeFromPath, stripLocale } from "../lib/localePath";

const ORIGIN = "https://codava.dev";

const setLink = (rel: string, href: string, hreflang?: string) => {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    if (hreflang) el.hreflang = hreflang;
    document.head.appendChild(el);
  }
  el.href = href;
};

export const LocaleHead = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const lang = localeFromPath(pathname);
    const bare = stripLocale(pathname);
    const roUrl = `${ORIGIN}${bare === "/" ? "/" : bare}`;
    const enUrl = `${ORIGIN}${bare === "/" ? "/en" : `/en${bare}`}`;

    setLink("canonical", lang === "en" ? enUrl : roUrl);
    setLink("alternate", roUrl, "ro");
    setLink("alternate", enUrl, "en");
    setLink("alternate", roUrl, "x-default");
  }, [pathname]);

  return null;
};
