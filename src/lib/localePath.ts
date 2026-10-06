import { useLocation, useNavigate } from "react-router-dom";

export type SiteLocale = "en" | "ro";

export const localeFromPath = (pathname: string): SiteLocale =>
  pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ro";

export const stripLocale = (pathname: string): string => {
  if (pathname === "/en" || pathname === "/en/") return "/";
  if (pathname.startsWith("/en/")) {
    const rest = pathname.slice(3);
    return rest.startsWith("/") ? rest : `/${rest}`;
  }
  return pathname || "/";
};

export const withLocale = (path: string, lang: SiteLocale): string => {
  const hashIndex = path.indexOf("#");
  const pathname = (hashIndex >= 0 ? path.slice(0, hashIndex) : path) || "/";
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : "";
  const bare = stripLocale(pathname);
  const localized = lang === "en" ? (bare === "/" ? "/en" : `/en${bare}`) : bare;
  return `${localized}${hash}`;
};

export const useLocaleNavigate = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const lang = localeFromPath(pathname);

  return (path: string) => navigate(withLocale(path, lang));
};
