import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useLocaleNavigate } from "../../../../lib/localePath";
import { useTranslation } from "../../../../contexts/LanguageContext";

type GalleryGroup = {
  id: string;
  title: string;
  description: string;
  desktop?: string;
  mobile?: string;
  image?: string;
  frame?: string;
};

const ProjectGallery: React.FC<{ groups: GalleryGroup[]; t: (key: string) => string }> = ({ groups, t }) => {
  const slides = groups.flatMap((group) => {
    if (group.desktop && group.mobile) {
      return [
        {
          id: `${group.id}-desktop`,
          src: group.desktop,
          title: group.title,
          description: group.description,
          desktopShot: true,
        },
        {
          id: `${group.id}-mobile`,
          src: group.mobile,
          title: group.title,
          description: group.description,
          desktopShot: false,
        },
      ];
    }
    return [
      {
        id: group.id,
        src: group.image || "",
        title: group.title,
        description: group.description,
        desktopShot: group.frame === "wide",
      },
    ];
  });
  const [desktopLayout, setDesktopLayout] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches
  );
  const desktopSlides = slides.filter((item) => item.desktopShot);
  const previewSlides = desktopLayout && desktopSlides.length > 0 ? desktopSlides : slides;
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselStep, setCarouselStep] = useState(0);
  const [carouselMoving, setCarouselMoving] = useState(true);
  const [dragX, setDragX] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const touchX = React.useRef(0);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const dragRef = React.useRef({ startX: 0, dragging: false, moved: false, index: -1 });
  const openedAt = React.useRef(0);
  const slide = previewSlides[index] || previewSlides[0];
  const go = (step: number) => setIndex((current) => (current + step + previewSlides.length) % previewSlides.length);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const apply = () => {
      setDesktopLayout(media.matches);
      setCarouselIndex(0);
      setIndex(0);
      setCarouselMoving(false);
    };
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      const card = track.querySelector("button");
      if (!card) return;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      setCarouselStep(card.getBoundingClientRect().width + gap);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [previewSlides.length, desktopLayout]);

  useEffect(() => {
    if (!autoplay || open || previewSlides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setCarouselMoving(true);
      setCarouselIndex((current) => current + 1);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [autoplay, open, previewSlides.length]);

  useEffect(() => {
    if (carouselIndex < previewSlides.length) return;
    const timer = window.setTimeout(() => {
      setCarouselMoving(false);
      setCarouselIndex(0);
    }, 700);
    return () => window.clearTimeout(timer);
  }, [carouselIndex, previewSlides.length]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, previewSlides.length]);

  const settleDrag = (clientX: number) => {
    if (!dragRef.current.dragging) return;
    const delta = clientX - dragRef.current.startX;
    const slideIndex = dragRef.current.index;
    dragRef.current.dragging = false;
    setDragX(0);
    setCarouselMoving(true);
    if (Math.abs(delta) >= 48) {
      dragRef.current.moved = true;
      setAutoplay(false);
      setCarouselIndex((current) => {
        const next = current + (delta < 0 ? 1 : -1);
        if (next < 0) return 0;
        if (next > previewSlides.length) return previewSlides.length;
        return next;
      });
      return;
    }
    if (Math.abs(delta) > 12 || slideIndex < 0) return;
    openedAt.current = Date.now();
    setIndex(slideIndex % previewSlides.length);
    setOpen(true);
  };

  if (!slide) return null;

  const viewer = open
    ? createPortal(
        <div
          className="fixed inset-0 z-[80] bg-black"
          role="dialog"
          aria-modal="true"
          aria-label={slide.title}
          onClick={() => {
            if (Date.now() - openedAt.current < 400) return;
            setOpen(false);
          }}
          onTouchStart={(event) => {
            touchX.current = event.touches[0].clientX;
          }}
          onTouchEnd={(event) => {
            const delta = event.changedTouches[0].clientX - touchX.current;
            if (delta > 48) go(-1);
            if (delta < -48) go(1);
          }}
        >
          <img
            src={slide.src}
            alt={slide.title}
            onClick={(event) => event.stopPropagation()}
            className="absolute inset-0 h-full w-full object-contain"
          />
          <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-3">
            <p className="text-xs tracking-[0.14em] text-white/70">
              {index + 1} / {previewSlides.length}
            </p>
            <button
              type="button"
              aria-label={t("portfolio.grid.detail.close")}
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <button
            type="button"
            aria-label={t("portfolio.grid.detail.previous")}
            onClick={(event) => {
              event.stopPropagation();
              go(-1);
            }}
            className="absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            aria-label={t("portfolio.grid.detail.next")}
            onClick={(event) => {
              event.stopPropagation();
              go(1);
            }}
            className="absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-6 pt-16 pb-5">
            <p className="text-base font-medium text-white">{slide.title}</p>
            <p className="mt-1 line-clamp-2 max-w-2xl text-sm leading-relaxed text-white/60">{slide.description}</p>
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <div
        className="cursor-grab overflow-hidden touch-pan-y active:cursor-grabbing"
        onDragStart={(event) => event.preventDefault()}
        onPointerDown={(event) => {
          if (event.pointerType === "mouse" && event.button !== 0) return;
          const button = (event.target as HTMLElement).closest("button");
          if (!button || !trackRef.current?.contains(button)) return;
          const buttons = [...trackRef.current.querySelectorAll("button")];
          dragRef.current = {
            startX: event.clientX,
            dragging: true,
            moved: false,
            index: buttons.indexOf(button),
          };
          setCarouselMoving(false);
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (!dragRef.current.dragging) return;
          const delta = event.clientX - dragRef.current.startX;
          if (Math.abs(delta) > 8) dragRef.current.moved = true;
          setDragX(delta);
        }}
        onPointerUp={(event) => settleDrag(event.clientX)}
        onPointerCancel={(event) => settleDrag(event.clientX)}
      >
        <div
          ref={trackRef}
          className="flex gap-3"
          style={{
            transform: `translate3d(${-carouselIndex * carouselStep + dragX}px, 0, 0)`,
            transition: carouselMoving ? "transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)" : "none",
          }}
        >
          {[0, 1].map((copy) =>
            previewSlides.map((item, itemIndex) => (
              <button
                key={`${item.id}-${copy}`}
                type="button"
                aria-label={item.title}
                onClick={() => {
                  if (dragRef.current.moved) {
                    dragRef.current.moved = false;
                    return;
                  }
                  openedAt.current = Date.now();
                  setIndex(itemIndex);
                  setOpen(true);
                }}
                className="relative h-48 w-72 shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-white/10 md:aspect-[1920/1054] md:h-auto md:w-[28rem]"
              >
                <img
                  src={item.src}
                  alt=""
                  draggable={false}
                  className="pointer-events-none h-full w-full object-cover object-top select-none"
                />
              </button>
            ))
          )}
        </div>
      </div>
      {viewer}
    </>
  );
};

export const PortfolioGridSection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useLocaleNavigate();
  const [activeFilters, setActiveFilters] = useState<string[]>(['ALL']);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'detail'>('grid');

  useEffect(() => {
    if (viewMode === 'detail') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [viewMode]);

  const filterKeys = ['ALL', 'FULLSTACK', 'UIUX', 'MARKETING', 'ECOMMERCE'];
  const filterLabels: Record<string, string> = {
    'ALL': t('portfolio.grid.filters.all'),
    'FULLSTACK': t('portfolio.grid.filters.fullstack'),
    'UIUX': t('portfolio.grid.filters.uiux'),
    'MARKETING': t('portfolio.grid.filters.marketing'),
    'ECOMMERCE': t('portfolio.grid.filters.ecommerce')
  };

  const categoryToFilterKey: Record<string, string> = {
    'FullStack Development': 'FULLSTACK',
    'UI/UX Design': 'UIUX',
    'Digital Marketing': 'MARKETING',
    'E-commerce Development': 'ECOMMERCE'
  };

  const projects = [
    {
      id: 6,
      title: "Level Auto Rental",
      description: "We helped Level Auto Rental transform its online presence from social media and a basic Canva page into a professional car rental platform. Customers can now explore the vehicle fleet, select rental dates, and view automatically calculated rental prices.\n\nThe website also features a dedicated admin dashboard, allowing the owner to manage vehicles, monitor booking requests and availability, and track website traffic.\n\nRead the client's review to learn more about their experience.",
      images: [
        "/portfolio/levelautorental/LevelAutoRental-MainPage-Desktop.png",
      ],
      groups: [
        {
          id: "home",
          title: "Homepage",
          description: "The page opens on the fleet, with a call, a way into the cars, and search by brand, model, and location. On mobile the offer becomes a card: photos, specs, the daily price in MDL, and a rent button.",
          desktop: "/portfolio/levelautorental/LevelAutoRental-MainPage-Desktop.png",
          mobile: "/portfolio/levelautorental/LevelAutoRental-MainPage-Mobile.png",
        },
        {
          id: "admin",
          title: "Admin dashboard",
          description: "Sales, orders, average price, and fleet status sit at the top, then which cars are available or out. On mobile the same numbers stack, and requests, cars, and the calendar stay one tap away.",
          desktop: "/portfolio/levelautorental/LevelAutoRental-AdminDashboard-Desktop.png",
          mobile: "/portfolio/levelautorental/LevelAutoRental-AdminDashboard-Mobile.png",
        },
        {
          id: "catalog",
          title: "Fleet catalog",
          description: "A filterable grid. Each car shows availability, year, mileage, transmission, fuel, drivetrain, and the daily price, with rent as the next step.",
          image: "/portfolio/levelautorental/LevelAutoRental-CarCatalog-Desktop.png",
          frame: "wide",
        },
        {
          id: "car",
          title: "Car page",
          description: "Photos and specs sit next to the booking. Dates and times calculate the total, with phone and Telegram if the visitor would rather talk.",
          image: "/portfolio/levelautorental/LevelAutoRental-CarPage-Desktop.png",
          frame: "wide",
        },
        {
          id: "reviews",
          title: "Reviews",
          description: "A rating, the customer's words, and the Google source sit on the page, so the proof is next to the cars.",
          image: "/portfolio/levelautorental/LevelAutoRental-ReviewsSection-Mobile.png",
          frame: "phone",
        },
        {
          id: "pricing",
          title: "Rental price calculator",
          description: "Pickup and return become a total in MDL. The visitor can call, write on Telegram, or book from the same panel.",
          image: "/portfolio/levelautorental/LevelAutoRental-SmartPricingSolution-RentalPriceCalculator.png",
          frame: "panel",
        },
      ],
      category: "FullStack Development",
      url: "https://levelauto.md",
      review: {
        author: "Victorin Levitchi",
        company: "Level Auto Rental",
        quote: "The entire process was well-organized and efficient, with a professional approach and great attention to detail. Everything was delivered on time, and the final result met my expectations in terms of both quality and functionality.",
        note: "I'm very satisfied with the work and the website developed for my company.",
        avatar: "/avatars/user-05.JPG",
      },
    },
    {
      id: 2,
      title: "EuroTour Moldova",
      description: "We helped EuroTour Moldova turn its cross-border transport service into a clear digital booking experience. Passengers can understand routes between Moldova and European destinations, follow a short booking flow, and act on clear calls to action without guessing the next step.\n\nThe UI/UX system covers navigation, layouts, and visual identity so the brand stays consistent on every screen, from first visit to confirmed trip.\n\nRead the client's review to learn more about their experience.",
      review: {
        author: "Castravet Ilie",
        company: "Euro Tour Moldova",
        quote: "The modern, high-quality website they built for our transport company is fast, ranks high, attracts clients, and elevates visibility.",
        avatar: "/avatars/user-01.jpg",
      },
      images: [
        "/portfolio/eurotour/img1.jpg",
        "/portfolio/eurotour/img2.jpg"
      ],
      groups: [
        {
          id: "overview",
          title: "Brand overview",
          description: "The visual identity and main screens for the Moldova–Europe transport service, built around clear booking actions.",
          image: "/portfolio/eurotour/img1.jpg",
          frame: "wide",
        },
        {
          id: "booking",
          title: "Booking experience",
          description: "A focused booking layout with route selection and call-to-actions that keep the trip flow short.",
          image: "/portfolio/eurotour/img2.jpg",
          frame: "wide",
        },
      ],
      category: "UI/UX Design",
    },
    {
      id: 1,
      title: "Epic Trans Logistics",
      description: "We helped Epic Trans Logistics build a professional online presence for international cargo and logistics. Clients can review services, understand coverage, and reach the team without hunting through unclear pages.\n\nThe website emphasizes trust and reliability—service details, tracking context, and contact paths are easy to find, so freight inquiries turn into booked work faster.\n\nRead the client's review to learn more about their experience.",
      review: {
        author: "Bors Andrei",
        company: "Epic Trans Logistics",
        quote: "I recommend Codava! They helped our logistics business with a logo, business cards, and a client-attracting website.",
        avatar: "/avatars/user-02.jpg",
      },
      images: [
        "/portfolio/moldcargo/img1.webp",
        "/portfolio/moldcargo/img2.webp",
        "/portfolio/moldcargo/img3.webp",
        "/portfolio/moldcargo/img4.webp"
      ],
      groups: [
        {
          id: "home",
          title: "Homepage",
          description: "A clear entry point for logistics services, with trust signals and a direct path to booking or contact.",
          image: "/portfolio/moldcargo/img1.webp",
          frame: "wide",
        },
        {
          id: "services",
          title: "Services",
          description: "Transport options presented simply so clients can understand coverage and choose the right service.",
          image: "/portfolio/moldcargo/img2.webp",
          frame: "wide",
        },
        {
          id: "tracking",
          title: "Tracking",
          description: "Shipment status and route context stay front and center for clients who need updates fast.",
          image: "/portfolio/moldcargo/img3.webp",
          frame: "wide",
        },
        {
          id: "contact",
          title: "Contact",
          description: "Direct ways to reach the team, so inquiries turn into booked freight without friction.",
          image: "/portfolio/moldcargo/img4.webp",
          frame: "wide",
        },
      ],
      category: "UI/UX Design",
    },
    {
      id: 3,
      title: "PURE.BMWM E-Commerce",
      category: "E-commerce Development",
      description: "We built PURE.BMWM as a modern e-commerce platform for automotive merchandise. Shoppers can browse collections, check inventory-aware product cards, and complete purchases through a secure checkout on desktop and mobile.\n\nBehind the storefront, the stack supports real-time inventory, multiple payment options, optimized product media, and a responsive experience that stays fast as the catalog grows.",
      mainImage: "/portfolio/bmwm/img1.jpg",
      images: [
        "/portfolio/bmwm/img1.jpg",
        "/portfolio/bmwm/img2.jpg",
        "/portfolio/bmwm/img3.jpg",
        "/portfolio/bmwm/img4.jpg",
        "/portfolio/bmwm/img5.jpg",
        "/portfolio/bmwm/img6.jpg",
        "/portfolio/bmwm/img7.jpg",
        "/portfolio/bmwm/img8.jpg"
      ],
      groups: [
        {
          id: "storefront",
          title: "Storefront",
          description: "The desktop store opens on featured merchandise, collections, and a clear path into the catalog.",
          image: "/portfolio/bmwm/img1.jpg",
          frame: "wide",
        },
        {
          id: "catalog",
          title: "Product catalog",
          description: "Grid browsing for automotive merchandise with inventory-aware cards and quick product entry.",
          image: "/portfolio/bmwm/img2.jpg",
          frame: "wide",
        },
        {
          id: "checkout",
          title: "Checkout",
          description: "A focused purchase flow with secure payments and a short path from cart to confirmation.",
          image: "/portfolio/bmwm/img3.jpg",
          frame: "wide",
        },
        {
          id: "mobile_home",
          title: "Mobile storefront",
          description: "The same offer on phone: featured items, navigation, and shop actions sized for one hand.",
          image: "/portfolio/bmwm/img4.jpg",
          frame: "phone",
        },
        {
          id: "mobile_product",
          title: "Mobile product",
          description: "Product details and buy actions stack cleanly for shopping on the go.",
          image: "/portfolio/bmwm/img5.jpg",
          frame: "phone",
        },
        {
          id: "mobile_cart",
          title: "Mobile cart",
          description: "Cart review and checkout stay compact so buyers can finish without zooming or hunting.",
          image: "/portfolio/bmwm/img6.jpg",
          frame: "phone",
        },
        {
          id: "mobile_profile",
          title: "Mobile account",
          description: "Account and order touchpoints stay reachable after purchase.",
          image: "/portfolio/bmwm/img7.jpg",
          frame: "phone",
        },
        {
          id: "mobile_extra",
          title: "Mobile browsing",
          description: "Additional mobile screens for browsing and product discovery on smaller viewports.",
          image: "/portfolio/bmwm/img8.jpg",
          frame: "phone",
        },
      ],
    },
    {
      id: 4,
      title: "RollWithdraw Platform",
      category: "FullStack Development",
      description: "We developed RollWithdraw as a trading platform built for real-time crypto activity. Users can follow balances, market data, and payment status in one place, with WebSocket updates keeping the interface in sync.\n\nThe product also covers secure authentication, crypto payment flows, and performance-focused architecture so the platform stays responsive under concurrent use.",
      mainImage: "/portfolio/websites/rollwithdraw/img1.jpg",
      images: [
        "/portfolio/websites/rollwithdraw/img1.jpg",
        "/portfolio/websites/rollwithdraw/img2.jpg",
        "/portfolio/websites/rollwithdraw/img3.jpg",
        "/portfolio/websites/rollwithdraw/img4.jpg",
        "/portfolio/websites/rollwithdraw/img5.jpg"
      ],
      groups: [
        {
          id: "dashboard",
          title: "Trading dashboard",
          description: "Live balances, activity, and crypto payment status sit in one desktop view for active traders.",
          image: "/portfolio/websites/rollwithdraw/img1.jpg",
          frame: "wide",
        },
        {
          id: "trading",
          title: "Trading view",
          description: "Real-time market data and actions stay synchronized through the WebSocket-backed interface.",
          image: "/portfolio/websites/rollwithdraw/img2.jpg",
          frame: "wide",
        },
        {
          id: "payments",
          title: "Payments",
          description: "Secure crypto checkout and withdrawal flows presented clearly on desktop.",
          image: "/portfolio/websites/rollwithdraw/img3.jpg",
          frame: "wide",
        },
        {
          id: "mobile_home",
          title: "Mobile dashboard",
          description: "Key balances and actions compress into a phone layout without losing the trading context.",
          image: "/portfolio/websites/rollwithdraw/img4.jpg",
          frame: "phone",
        },
        {
          id: "mobile_trade",
          title: "Mobile trading",
          description: "Trading and payment controls remain reachable on smaller screens.",
          image: "/portfolio/websites/rollwithdraw/img5.jpg",
          frame: "phone",
        },
      ],
    },
    {
      id: 5,
      title: "Senda Courier",
      description: "We redesigned Senda Courier’s digital booking experience so sending a parcel feels straightforward. Users can move from request to tracking with clearer actions, a cleaner layout, and a flow built for speed on every device.\n\nThe work covered UI/UX, brand touchpoints such as logo and cards, and a visual system that makes the courier service look modern and easy to trust.\n\nRead the client's review to learn more about their experience.",
      review: {
        author: "Stefan Istrati",
        company: "Senda Courier",
        quote: "I worked with Codava on redesign, logo, and cards; the site's innovative and results were fast, professional.",
        avatar: "/avatars/user-03.jpg",
      },
      images: [
        "/portfolio/sendacourier/img1.webp"
      ],
      groups: [
        {
          id: "interface",
          title: "Full interface",
          description: "A long-form look at the courier booking and tracking UI, from first action through delivery status.",
          image: "/portfolio/sendacourier/img1.webp",
          frame: "wide",
        },
      ],
      category: "UI/UX Design",
    },
  ];

  const handleFilterToggle = (filterKey: string) => {
    setActiveFilters((prev) => {
      const next = prev.filter((f) => f !== "ALL");
      if (prev.includes(filterKey)) {
        const updated = next.filter((f) => f !== filterKey);
        return updated.length === 0 ? ["ALL"] : updated;
      }
      return [...next, filterKey];
    });
  };

  const filteredProjects = activeFilters.includes('ALL')
    ? projects
    : projects.filter(project => {
        const filterKey = categoryToFilterKey[project.category];
        return filterKey && activeFilters.includes(filterKey);
      });

  const projectTitleToKey: Record<string, string> = {
    "Epic Trans Logistics": "epic_trans_logistics",
    "EuroTour Moldova": "eurotour_moldova",
    "PURE.BMWM E-Commerce": "pure_bmwm_ecommerce",
    "RollWithdraw Platform": "rollwithdraw_platform",
    "Senda Courier": "senda_courier",
    "Level Auto Rental": "level_auto_rental"
  };

  const getTranslatedProject = (project: any) => {
    const translationKey = projectTitleToKey[project.title];
    if (!translationKey) return project;

    const baseKey = `portfolio.grid.projects.${translationKey}`;
    const getTranslation = (key: string, fallback: any) => {
      const translated = t(key);
      return translated !== key ? translated : fallback;
    };

    return {
      ...project,
      description: getTranslation(`${baseKey}.description`, project.description),
      review: project.review
        ? {
            ...project.review,
            quote: getTranslation(`${baseKey}.review.quote`, project.review.quote),
            note: getTranslation(`${baseKey}.review.note`, project.review.note),
          }
        : project.review,
      groups: project.groups?.map((group: GalleryGroup) => ({
        ...group,
        title: getTranslation(`${baseKey}.groups.${group.id}.title`, group.title),
        description: getTranslation(`${baseKey}.groups.${group.id}.description`, group.description),
      })),
    };
  };

  const openProjectDetail = (project: any) => {
    setSelectedProject(project);
    setViewMode("detail");
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
    setViewMode("grid");
  };

  const fillCtaSlot = Math.max(filteredProjects.length - 1, 0) % 2 === 1;
  const detailProject = selectedProject ? getTranslatedProject(selectedProject) : null;
  const detailType = selectedProject
    ? filterLabels[categoryToFilterKey[selectedProject.category]] || selectedProject.category
    : "";

  return (
    <>
      {viewMode === "grid" && (
        <section id="portfolio-grid" className="relative pt-32 md:pt-40">
          <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 md:px-8">
            <div className="mb-10 flex flex-wrap justify-center gap-2">
              {filterKeys.map((filterKey) => {
                const isActive = activeFilters.includes(filterKey);
                return (
                  <button
                    key={filterKey}
                    type="button"
                    onClick={() => {
                      if (filterKey === "ALL") setActiveFilters(["ALL"]);
                      else handleFilterToggle(filterKey);
                    }}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 text-white"
                        : "border border-[#194EFF]/35 bg-[#194EFF]/10 text-white hover:border-[#194EFF]/60 hover:bg-[#194EFF]/18"
                    }`}
                  >
                    {filterLabels[filterKey]}
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {filteredProjects.length === 0 ? (
                <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
                  <h4 className="mb-2 text-xl font-semibold text-white">{t("portfolio.grid.empty_state.title")}</h4>
                  <p className="mb-6 max-w-md text-base text-white/55">
                    {t("portfolio.grid.empty_state.description")}
                  </p>
                  <button
                    onClick={() => navigate("/contact")}
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105"
                  >
                    {t("portfolio.grid.empty_state.button")}
                  </button>
                </div>
              ) : (
                <>
                  {filteredProjects.map((project, index) => {
                    const featured = index === 0;
                    const type =
                      filterLabels[categoryToFilterKey[project.category]] || project.category;
                    return (
                      <button
                        key={project.id}
                        type="button"
                        onClick={() => openProjectDetail(project)}
                        className={`group relative w-full overflow-hidden rounded-[1.75rem] border border-white/10 text-left ${
                          featured ? "aspect-[16/10] md:col-span-2 md:aspect-[16/8]" : "aspect-[16/11]"
                        }`}
                      >
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
                          style={{ backgroundImage: `url(${project.mainImage || project.images?.[0]})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6">
                          <div className="min-w-0">
                            <p className="mb-1 text-[11px] font-medium tracking-[0.16em] text-white/70 uppercase">
                              {type}
                            </p>
                            <h3 className={`truncate font-medium text-white ${featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"}`}>
                              {project.title}
                            </h3>
                          </div>
                          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-black">
                            {t("portfolio.grid.view_details")}
                            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </span>
                        </div>
                      </button>
                    );
                  })}
                  <div
                    className={`relative flex overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-[#194EFF]/14 via-white/[0.03] to-transparent backdrop-blur-xl ${
                      fillCtaSlot
                        ? "aspect-[16/11] flex-col justify-between p-5 md:p-6"
                        : "min-h-[16rem] flex-col justify-between gap-6 p-6 md:col-span-2 md:min-h-0 md:flex-row md:items-center md:px-10 md:py-10"
                    }`}
                  >
                    <div className="pointer-events-none absolute -top-20 right-0 h-40 w-40 rounded-full bg-[#194EFF]/25 blur-[70px]" />
                    <div className={`relative z-10 ${fillCtaSlot ? "" : "max-w-xl"}`}>
                      <h3 className={`font-bold tracking-tight text-white ${fillCtaSlot ? "mb-2 text-xl md:text-2xl" : "mb-3 text-2xl md:text-3xl"}`}>
                        {t("cta.title")}{" "}
                        <span className="bg-gradient-to-r from-[#8EB6FF] via-[#C8DBFF] to-[#194EFF] bg-clip-text text-transparent">
                          {t("cta.title_highlight")}
                        </span>
                      </h3>
                      <p className={`mb-3 leading-relaxed text-white/65 ${fillCtaSlot ? "text-sm" : "text-base"}`}>
                        {t("cta.subtitle")}
                      </p>
                      <a
                        href={`mailto:${t("cta.contact_email")}`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#8EB6FF] transition-colors duration-200 hover:text-white"
                      >
                        {t("cta.contact_email")}
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={() => window.open("https://calendly.com/codava-dev/30min", "_blank")}
                      className={`group/btn relative z-10 inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#194EFF] to-[#3B6FFF] text-sm font-semibold text-white transition-all duration-300 hover:scale-105 ${
                        fillCtaSlot ? "mt-4 w-full px-5 py-3" : "self-start px-8 py-3.5 md:self-center"
                      }`}
                    >
                      <span className="relative z-10">{t("cta.primary_button")}</span>
                      <svg className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover/btn:translate-x-full" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      )}

      {viewMode === "detail" && detailProject && (
        <section id="project-detail" className="relative pt-32 pb-24 md:pt-40">
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
            <button
              onClick={closeProjectDetail}
              className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 transition-colors duration-200 hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t("portfolio.grid.detail.breadcrumb")}
            </button>

            <div className="mb-10 md:grid md:grid-cols-[minmax(0,1fr)_22rem] md:items-center md:gap-x-10 xl:grid-cols-[minmax(0,1.25fr)_minmax(24rem,32rem)] xl:gap-x-12">
              <div className="md:col-start-1 md:row-start-1">
                <p className="mb-3 text-[11px] font-medium tracking-[0.16em] text-white/50 uppercase">
                  {detailType}
                </p>
                <h1 className="mb-4 max-w-3xl text-3xl font-medium tracking-tight text-white md:text-4xl">
                  {detailProject.title}
                </h1>
                <div className="space-y-4 text-base leading-relaxed text-white/60">
                  {detailProject.description.split(/\n\n+/).map((paragraph: string) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
              {detailProject.review && (
                <figure className="group relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 md:col-start-2 md:row-start-1 md:mt-0 md:p-7">
                  <div className="pointer-events-none absolute -top-6 -right-6 h-24 w-24 rounded-full bg-[#194EFF]/15 blur-2xl" />
                  <div className="relative mb-4 flex flex-row items-center gap-3">
                    <img
                      className="rounded-full ring-2 ring-[#194EFF]/25"
                      width="40"
                      height="40"
                      alt=""
                      src={detailProject.review.avatar}
                    />
                    <div className="flex min-w-0 flex-col">
                      <figcaption className="truncate text-sm font-semibold text-white">
                        {detailProject.review.author}
                      </figcaption>
                      <p className="truncate text-xs font-medium text-white/50">{detailProject.review.company}</p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {[...Array(5)].map((_, star) => (
                        <svg key={star} className="h-3.5 w-3.5 text-[#194EFF]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="relative text-[15px] leading-relaxed text-white/75">
                    <p>{detailProject.review.quote}</p>
                    {detailProject.review.note && <p className="mt-3">{detailProject.review.note}</p>}
                  </blockquote>
                </figure>
              )}
              {detailProject.url && (
                <a
                  href={detailProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105 md:col-start-1 md:row-start-2"
                >
                  {t("portfolio.grid.detail.visit_site")}
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5h5m0 0v5m0-5L10 14" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13v6a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h6" />
                  </svg>
                </a>
              )}
            </div>

            {detailProject.groups ? (
              <ProjectGallery groups={detailProject.groups} t={t} />
            ) : (
              <div className="flex flex-col gap-4">
                {detailProject.images.map((image: string) => (
                  <img
                    key={image}
                    src={image}
                    alt={detailProject.title}
                    className="w-full rounded-[1.75rem] object-cover"
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};
