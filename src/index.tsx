import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePageDesktop } from "./screens/HomePageDesktop";
import { AboutUsPage } from "./screens/AboutUsPage/AboutUsPage";
import { WebDevelopmentPage } from "./screens/WebDevelopmentPage";
import { DesignPage } from "./screens/DesignPage";
import { SEOPage } from "./screens/SEOPage";
import { DigitalAdvertisingPage } from "./screens/DigitalAdvertisingPage";
import { CopywritingPage } from "./screens/CopywritingPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageDesktop />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/services/web-development" element={<WebDevelopmentPage />} />
        <Route path="/services/design" element={<DesignPage />} />
        <Route path="/services/seo" element={<SEOPage />} />
        <Route path="/services/advertising" element={<DigitalAdvertisingPage />} />
        <Route path="/services/copywriting" element={<CopywritingPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
