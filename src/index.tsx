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
import { BotAutomationPage } from "./screens/BotAutomationPage";
import { FullStackDevelopmentPage } from "./screens/FullStackDevelopmentPage";
import { ContactPage } from "./screens/ContactPage/ContactPage";
import { PortfolioPage } from "./screens/PortfolioPage/PortfolioPage";
import ScrollToTop from "./components/ScrollToTop";
import { CaseStudiesPage } from "./screens/CaseStudiesPage/CaseStudiesPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePageDesktop />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/web-development" element={<WebDevelopmentPage />} />
        <Route path="/services/full-stack-development" element={<FullStackDevelopmentPage />} />
        <Route path="/services/design" element={<DesignPage />} />
        <Route path="/services/seo" element={<SEOPage />} />
        <Route path="/services/digital-advertising" element={<DigitalAdvertisingPage />} />
        <Route path="/services/copywriting" element={<CopywritingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<PortfolioPage/>} />
        <Route path="/services/bot-automation" element={<BotAutomationPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
