import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem
} from "../../../../components/ui/animated-elements";
import emailjs from '@emailjs/browser';

const packages = [
  {
    name: "Starter",
    subtitle: "Perfect for small businesses and personal sites",
    highlight: false,
  },
  {
    name: "Business",
    subtitle: "Ideal for growing businesses with professional needs",
    highlight: true,
  },
  {
    name: "Professional",
    subtitle: "For established businesses needing advanced functionality",
    highlight: false,
  },
];

  const features = [
  { label: "SSL Security Certificate", values: [true, true, true] },
  { label: "Professional Hosting", values: ["1 month", "3 months", "6 months"] },
  { label: "Responsive Design", values: [true, true, true] },
  { label: "Pages Included", values: ["5", "10", "20"] },
  // { label: "Extra Pages", values: ["+€30", "+€25", "+€20"] },
  { label: "Languages", values: ["1", "2", "3"] },
  { label: "Contact Form", values: ["Basic", "Enhanced + File Uploads", "Enhanced + File Uploads"] },
  { label: "Professional Copywriting", values: [true, true, true] },
  { label: "SEO Optimization", values: ["Basic", "Advanced", "Advanced + Local"] },
  { label: "CMS", values: [false, "Basic", "Advanced"] },
  { label: "E-Commerce", values: [false, "Basic (up to 10 products)", "Advanced (up to 50 products)"] },
  { label: "Professional Email", values: [false, "3 accounts", "10 accounts"] },
  { label: "Newsletter Integration", values: [false, true, true] },
  { label: "Google Analytics", values: ["Basic", "Custom Reporting", "Advanced Dashboard"] },
  { label: "Google Search Console", values: [false, true, true] },
  { label: "Social Media Integration", values: [true, true, true] },
  { label: "User Registration/Login", values: [false, false, true] },
  { label: "Inventory Management", values: [false, false, "Advanced"] },
  { label: "Booking/Quotes System", values: [false, false, true] },
  { label: "Live Chat & AI Chatbot", values: [false, false, true] },
  { label: "Free Support Period", values: ["7 days", "14 days", "30 days"] },
  { label: "Priority Support", values: [false, "24h", "12h"] },
];

const check = <svg className="w-5 h-5 text-[#194EFF] inline-block" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>;
const cross = <svg className="w-5 h-5 text-white/30 inline-block" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>;

// Add-ons that are NOT included in any package
const addons = [
  
  {
    title: "Google Maps + Directions",
    description: "Interactive map with marker and directions."
  },
  
  {
    title: "Custom Domain",
    description: "Purchase .com, .ro, .md, etc."
  },

  {
    title: "Priority Support Upgrade",
    description: "Upgrade to faster support response times (12h response time including changes)."
  },
  {
    title: "Additional Pages",
    description: "Extra pages beyond what's included in your selected package."
  },
  {
    title: "Advanced E-commerce Features",
    description: "Inventory tracking, order management, shipping calculators, tax calculations, discount codes, product variants, bulk import/export."
  },
  {
    title: "Custom Integrations",
    description: "Connect with CRM systems, accounting software, payment gateways, social media APIs, or other business tools."
  },
];

const infoIcon = (faqKey: string, label: string) => (
  <button
    type="button"
    aria-label={`What is ${label}? (see FAQ)`}
    className="inline-block align-middle ml-2"
    tabIndex={0}
    style={{ textDecoration: 'none' }}
    onClick={() => {
      window.dispatchEvent(new CustomEvent('open-faq', { detail: { faqKey } }));
    }}
  >
    <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#194EFF] text-white text-xs font-bold cursor-pointer hover:bg-[#194EFF]/80 transition" style={{ fontSize: '11px' }}>
      ?
    </span>
  </button>
);

export const WebDevelopmentFeaturesSection: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  // Only show info icon for the most important hard features
  const hardNames: Record<string, string> = {
    "SSL Certificate & Security": "ssl",
    "SEO Optimization": "seo",
    "CMS": "cms",
    "E-commerce": "ecommerce",
    "Google Analytics": "analytics",
    "Google Search Console": "searchconsole",
    "Live Chat & AI Chatbot": "chatbot",
    "Inventory Management": "inventory",
    "Booking/Quotes System": "booking",
    "Priority Support": "support",
    "Maintenance Included": "maintenance",
  };

  const handlePackageSelect = (packageName: string) => {
    setSelectedPackage(packageName);
    
    // Scroll to add-ons section after a short delay
    setTimeout(() => {
      const addonsSection = document.getElementById('addons-section');
      if (addonsSection) {
        const navbarHeight = 140;
        const elementPosition = addonsSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 300);
  };

  const handleAddonToggle = (addonTitle: string) => {
    setSelectedAddons(prev => {
      // Check if this is a maintenance plan
      const isMaintenancePlan = addonTitle.includes('Maintenance');
      
      if (prev.includes(addonTitle)) {
        // If already selected, remove it
        return prev.filter(item => item !== addonTitle);
      } else {
        // If selecting a maintenance plan, remove any other maintenance plans first
        if (isMaintenancePlan) {
          const nonMaintenanceAddons = prev.filter(item => !item.includes('Maintenance'));
          return [...nonMaintenanceAddons, addonTitle];
        } else {
          // For non-maintenance add-ons, just add to the list
          return [...prev, addonTitle];
        }
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedPackage) {
      setError("Please select a package");
      return;
    }

    if (!name) {
      setError("Please enter your name");
      return;
    }

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    setIsLoading(true);
    setError("");
    setIsSuccess(false);

    try {
      const result = await emailjs.send(
        'service_glh9iss', // Service ID
        'template_bgtc3sa', // Template ID
        {
          name: name,
          email: email,
          phone: phone || 'Not provided',
          selectedPackage: selectedPackage || 'No package selected',
          selectedAddons: selectedAddons.length > 0 ? selectedAddons.join(', ') : 'No add-ons selected',
          description: description || 'No description provided',
        },
        'dj1hZBH9DC_l229_T' // Public key
      );

      if (result.status === 200) {
        setIsSuccess(true);
        // Reset form
        setSelectedPackage(null);
        setSelectedAddons([]);
        setEmail("");
        setName("");
        setPhone("");
        setDescription("");
        // Reset success state after 5 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setError('Failed to send quote request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#00041F] via-[#00020F] to-[#00041F] px-2">
      <div className="max-w-7xl mx-auto px-2 md:px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">Web Development Packages</h2>
        {/* Mobile: Stacked Cards */}
        <div className="block md:hidden space-y-6 mb-12">
          {packages.map((pkg, idx) => (
            <div key={pkg.name} className={`bg-white/[0.03] border border-white/10 rounded-2xl p-5 shadow-lg backdrop-blur-xl ${pkg.highlight ? 'ring-2 ring-[#194EFF]/30' : ''}`}>
              <div className="text-center mb-4">
                <div className="flex items-center justify-center gap-2 mb-1">
                  {pkg.highlight && <span className="px-2 py-1 bg-[#194EFF]/20 text-[#194EFF] text-xs font-semibold rounded-full">Most Popular</span>}
                </div>
                <div className="py-5">
                  <div className="text-4xl md:text-3xl font-bold text-white">{pkg.name}</div>
                  <div className="text-sm text-white/60 mt-1">{pkg.subtitle}</div>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                {features.map((row, i) => {
                  // In both mobile and desktop feature rendering, use only this hardNames mapping for info icons
                  const icon = hardNames[row.label] ? infoIcon(hardNames[row.label], row.label) : null;
                  return (
                    <div key={row.label} className="flex items-center justify-between py-2 border-b border-white/5 last:border-b-0">
                      <span className="text-sm text-white/70 font-medium flex items-center">{row.label}{icon}</span>
                      <span className="text-sm text-white/90">
                        {row.values[idx] === true ? check : row.values[idx] === false ? cross : <span className="text-white/90 text-sm">{row.values[idx]}</span>}
                      </span>
                    </div>
                  );
                })}
              </div>
              <button 
                onClick={() => handlePackageSelect(pkg.name)}
                className={`w-full py-4 font-semibold rounded-2xl transition-all duration-300 border-2 ${
                  selectedPackage === pkg.name
                    ? 'bg-[#194EFF] border-[#194EFF] text-white shadow-lg shadow-[#194EFF]/30 hover:shadow-[#194EFF]/50'
                    : 'bg-transparent border-[#194EFF]/30 text-[#194EFF] hover:bg-[#194EFF]/10 hover:border-[#194EFF]/50'
                }`}
              >
                {selectedPackage === pkg.name ? '✓ Selected' : 'Select Package'}
              </button>
            </div>
          ))}
        </div>
        {/* Desktop: Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-4">
            <thead>
              <tr>
                <th className="text-left text-white/70 text-base font-semibold py-4 pr-4">Feature</th>
                {packages.map((pkg, idx) => (
                  <th key={pkg.name} className={`text-center px-4 py-4 ${pkg.highlight ? 'bg-[#194EFF]/10 rounded-t-2xl' : ''}`}>
                    <div className="flex flex-col items-center">
                      <span className="text-2xl md:text-3xl font-bold text-white mt-1 py-2">{pkg.name}</span>
                      <span className="text-xs text-white/60 mb-1">{pkg.subtitle}</span>
                      {pkg.highlight && <span className="px-2 py-1 bg-[#194EFF]/20 text-[#194EFF] text-xs font-semibold rounded-full mt-1">Most Popular</span>}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => {
                // In both mobile and desktop feature rendering, use only this hardNames mapping for info icons
                const icon = hardNames[row.label] ? infoIcon(hardNames[row.label], row.label) : null;
                return (
                  <tr key={row.label} className="align-top">
                    <td className="text-white/80 text-sm font-medium py-3 pr-4 min-w-[180px] border-r border-white/10 flex items-center">{row.label}{icon}</td>
                    {row.values.map((val, idx) => (
                      <td key={idx} className={`text-center py-3 px-4 ${packages[idx].highlight ? 'bg-[#194EFF]/5' : ''}`}>
                        {val === true ? check : val === false ? cross : <span className="text-white/90 text-sm">{val}</span>}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td className="py-6 pr-4"></td>
                {packages.map((pkg, idx) => (
                  <td key={pkg.name} className={`text-center py-6 px-4 ${pkg.highlight ? 'bg-[#194EFF]/5' : ''}`}>
                    <button 
                      onClick={() => handlePackageSelect(pkg.name)}
                      className={`px-8 py-3 text-sm font-semibold rounded-xl transition-all duration-300 border-2 ${
                        selectedPackage === pkg.name
                          ? 'bg-[#194EFF] border-[#194EFF] text-white shadow-lg shadow-[#194EFF]/30 hover:shadow-[#194EFF]/50'
                          : 'bg-transparent border-[#194EFF]/30 text-[#194EFF] hover:bg-[#194EFF]/10 hover:border-[#194EFF]/50'
                      }`}
                    >
                      {selectedPackage === pkg.name ? '✓ Selected' : 'Select Package'}
                    </button>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
        <h3 id="addons-section" className="text-2xl font-bold text-white mb-6 mt-16 text-center">Add-On Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {addons.map((addon, i) => (
            <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-xl flex flex-col gap-3">
              <h4 className="text-lg font-semibold text-[#194EFF] mb-1">{addon.title}</h4>
              <p className="text-white/80 text-sm mb-2">{addon.description}</p>
              <button 
                onClick={() => handleAddonToggle(addon.title)}
                className={`mt-auto px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 border-2 ${
                  selectedAddons.includes(addon.title)
                    ? 'bg-[#194EFF] border-[#194EFF] text-white shadow-lg shadow-[#194EFF]/30 hover:shadow-[#194EFF]/50'
                    : 'bg-transparent border-[#194EFF]/30 text-[#194EFF] hover:bg-[#194EFF]/10 hover:border-[#194EFF]/50'
                }`}
              >
                {selectedAddons.includes(addon.title) ? '✓ Selected' : 'Add to My Project'}
              </button>
            </div>
          ))}
        </div>

        {/* Maintenance Packages */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Maintenance Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Maintenance */}
            <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-3xl p-8 shadow-xl backdrop-blur-xl hover:border-[#194EFF]/30 transition-all duration-300 relative h-full flex flex-col">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-white mb-3">Basic Maintenance</h4>
                <div className="text-4xl font-bold text-[#194EFF] mb-2">€29<span className="text-xl text-white/60">/month</span></div>
                <p className="text-sm text-white/60">Perfect for Starter Websites</p>
              </div>
              
              {/* Highlighted Features */}
              <div className="bg-[#194EFF]/10 border border-[#194EFF]/20 rounded-2xl p-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#194EFF] mb-1">2 Hours</div>
                  <div className="text-sm text-white/80">Content Updates</div>
                </div>
              </div>
              
              <div className="space-y-3 mb-6 flex-1">
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  Security updates & patches
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  Performance monitoring
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  Monthly backups
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  Support (48h response)
                </div>
              </div>
              
              <button 
                onClick={() => handleAddonToggle("Basic Maintenance - €29/month")}
                className={`w-full py-4 text-sm font-semibold rounded-2xl transition-all duration-300 border-2 mt-auto ${
                  selectedAddons.includes("Basic Maintenance - €29/month")
                    ? 'bg-[#194EFF] border-[#194EFF] text-white shadow-lg shadow-[#194EFF]/30 hover:shadow-[#194EFF]/50'
                    : 'bg-transparent border-[#194EFF]/30 text-[#194EFF] hover:bg-[#194EFF]/10 hover:border-[#194EFF]/50'
                }`}
              >
                {selectedAddons.includes("Basic Maintenance - €29/month") ? '✓ Selected' : 'Add to My Project'}
              </button>
            </div>

            {/* Professional Maintenance */}
            <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.03] border-2 border-[#194EFF]/30 rounded-3xl p-8 shadow-xl backdrop-blur-xl hover:border-[#194EFF]/50 transition-all duration-300 relative h-full flex flex-col">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-2 bg-[#194EFF] text-white text-sm font-semibold rounded-full shadow-lg">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-white mb-3">Professional Maintenance</h4>
                <div className="text-4xl font-bold text-[#194EFF] mb-2">€59<span className="text-xl text-white/60">/month</span></div>
                <p className="text-sm text-white/60">Ideal for Pro Websites</p>
              </div>
              
              {/* Highlighted Features */}
              <div className="bg-[#194EFF]/15 border border-[#194EFF]/30 rounded-2xl p-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#194EFF] mb-1">5 Hours</div>
                  <div className="text-sm text-white/80">Content Updates</div>
                </div>
              </div>
              
              <div className="space-y-3 mb-6 flex-1">
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  Everything in Basic
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  Blog post assistance (5/month)
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  SEO monitoring & reporting
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  CMS troubleshooting
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  <span className="text-[#194EFF] font-semibold">Priority support (24h)</span>
                </div>
                {/* <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  Instant changes
                </div> */}
              </div>
              
              <button 
                onClick={() => handleAddonToggle("Professional Maintenance - €59/month")}
                className={`w-full py-4 text-sm font-semibold rounded-2xl transition-all duration-300 border-2 mt-auto ${
                  selectedAddons.includes("Professional Maintenance - €59/month")
                    ? 'bg-[#194EFF] border-[#194EFF] text-white shadow-lg shadow-[#194EFF]/30 hover:shadow-[#194EFF]/50'
                    : 'bg-transparent border-[#194EFF]/30 text-[#194EFF] hover:bg-[#194EFF]/10 hover:border-[#194EFF]/50'
                }`}
              >
                {selectedAddons.includes("Professional Maintenance - €59/month") ? '✓ Selected' : 'Add to My Project'}
              </button>
            </div>

            {/* Premium Maintenance */}
            <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-3xl p-8 shadow-xl backdrop-blur-xl hover:border-[#194EFF]/30 transition-all duration-300 relative h-full flex flex-col">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-white mb-3">Premium Maintenance</h4>
                <div className="text-4xl font-bold text-[#194EFF] mb-2">€99<span className="text-xl text-white/60">/month</span></div>
                <p className="text-sm text-white/60">Comprehensive for Premium Websites</p>
              </div>
              
              {/* Highlighted Features */}
              <div className="bg-[#194EFF]/10 border border-[#194EFF]/20 rounded-2xl p-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#194EFF] mb-1">8 Hours</div>
                  <div className="text-sm text-white/80">Content Updates</div>
                </div>
              </div>
              
              <div className="space-y-3 mb-6 flex-1">
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  Everything in Professional
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  E-commerce support
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  Payment system maintenance
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  Email automation management
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  Monthly strategy call
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  <span className="text-[#194EFF] font-semibold">Priority support (12h)</span>
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  Instant changes
                </div>
                
              </div>
              
              <button 
                onClick={() => handleAddonToggle("Premium Maintenance - €99/month")}
                className={`w-full py-4 text-sm font-semibold rounded-2xl transition-all duration-300 border-2 mt-auto ${
                  selectedAddons.includes("Premium Maintenance - €99/month")
                    ? 'bg-[#194EFF] border-[#194EFF] text-white shadow-lg shadow-[#194EFF]/30 hover:shadow-[#194EFF]/50'
                    : 'bg-transparent border-[#194EFF]/30 text-[#194EFF] hover:bg-[#194EFF]/10 hover:border-[#194EFF]/50'
                }`}
              >
                {selectedAddons.includes("Premium Maintenance - €99/month") ? '✓ Selected' : 'Add to My Project'}
              </button>
            </div>
          </div>
        </div>

        {/* Quote Submission Form */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Find Out the Price</h3>
          
          {/* Success Message */}
          {isSuccess && (
            <FadeIn delay={0} direction="up">
              <div className="mb-8 p-6 bg-green-500/10 border border-green-500/30 rounded-2xl backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-green-400 font-semibold text-lg">Request Sent Successfully!</h3>
                    <p className="text-green-300 text-sm">Thank you for your interest. We'll review your selections and get back to you with a personalized quote and consultation scheduling.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          )}

          {/* Error Message */}
          {error && (
            <FadeIn delay={0} direction="up">
              <div className="mb-8 p-6 bg-red-500/10 border border-red-500/30 rounded-2xl backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-red-400 font-semibold text-lg">Error</h3>
                    <p className="text-red-300 text-sm">{error}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          )}

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Selection Summary Card */}
              <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-3xl p-8 shadow-xl backdrop-blur-xl">
                <h4 className="text-xl font-bold text-white mb-6">Your Selection Summary</h4>
                
                {/* Package Selection */}
                <div className="mb-6">
                  <div className="text-sm text-white/60 mb-2">Selected Package:</div>
                  {selectedPackage ? (
                    <div className="bg-[#194EFF]/10 border border-[#194EFF]/30 rounded-xl p-4">
                      <div className="text-[#194EFF] font-semibold">{selectedPackage}</div>
                    </div>
                  ) : (
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <div className="text-white/40">No package selected</div>
                    </div>
                  )}
                </div>

                {/* Add-ons Selection */}
                <div className="mb-6">
                  <div className="text-sm text-white/60 mb-2">Selected Add-ons:</div>
                  {selectedAddons.length > 0 ? (
                    <div className="space-y-2">
                      {selectedAddons.map((addon, index) => (
                        <div key={index} className="bg-[#194EFF]/10 border border-[#194EFF]/30 rounded-xl p-3">
                          <div className="text-[#194EFF] text-sm">{addon}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <div className="text-white/40">No add-ons selected</div>
                    </div>
                  )}
                </div>

                {/* Total Items */}
                <div className="pt-4 border-t border-white/10">
                  <div className="text-sm text-white/60">Total Items:</div>
                  <div className="text-white font-semibold">
                    {selectedPackage ? 1 : 0} package + {selectedAddons.length} add-ons
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-3xl p-8 shadow-xl backdrop-blur-xl">
                <h4 className="text-xl font-bold text-white mb-6">Contact Information</h4>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-white font-semibold text-base mb-3 block">Full Name *</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-[#194EFF]/50 focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label className="text-white font-semibold text-base mb-3 block">Email Address *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-[#194EFF]/50 focus:outline-none transition-colors"
                      placeholder="Enter your email address"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label className="text-white font-semibold text-base mb-3 block">Phone Number</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-[#194EFF]/50 focus:outline-none transition-colors"
                      placeholder="Enter your phone number (optional)"
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label className="text-white font-semibold text-base mb-3 block">Project Description</label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 min-h-[100px] focus:border-[#194EFF]/50 focus:outline-none transition-colors resize-vertical"
                      placeholder="Tell us about your project (optional)"
                      disabled={isLoading}
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading || !selectedPackage}
                    className={`w-full py-6 font-semibold text-lg rounded-2xl transition-all duration-300 border-2 ${
                      isLoading || !selectedPackage
                        ? 'bg-gray-600/20 border-gray-600/30 text-gray-400 cursor-not-allowed' 
                        : 'bg-[#194EFF] border-[#194EFF] text-white shadow-xl shadow-[#194EFF]/30  transform'
                    }`}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending Request...</span>
                      </div>
                    ) : (
                      <span>Get My Price Quote</span>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 