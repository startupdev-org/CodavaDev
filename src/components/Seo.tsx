import { useEffect } from "react";

const SITE_URL = "https://codava.dev";
const TITLE_SUFFIX = " | CodavaDev";

type SeoProps = {
  /** Page title. "| CodavaDev" is appended unless the string already contains "CodavaDev". */
  title: string;
  description: string;
  /** Route path, e.g. "/services/design". Used for canonical + og:url. */
  path: string;
  noindex?: boolean;
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Per-route document head. There is no react-helmet in this project; this hook
 * mutates the static tags from index.html on mount. Every routed page renders one.
 */
export const Seo = ({ title, description, path, noindex }: SeoProps) => {
  useEffect(() => {
    const fullTitle = title.includes("CodavaDev") ? title : title + TITLE_SUFFIX;
    const url = SITE_URL + path;

    document.title = fullTitle;

    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noindex ? "noindex, follow" : "index, follow");
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "twitter:title", fullTitle);
    upsertMeta("property", "twitter:description", description);
    upsertMeta("property", "twitter:url", url);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [title, description, path, noindex]);

  return null;
};
