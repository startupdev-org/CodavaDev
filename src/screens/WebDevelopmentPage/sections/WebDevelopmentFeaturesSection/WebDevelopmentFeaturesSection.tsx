import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem
} from "../../../../components/ui/animated-elements";
import emailjs from '@emailjs/browser';
import { useTranslation } from "../../../../contexts/LanguageContext";

const check = <svg className="w-5 h-5 text-[#194EFF] inline-block" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>;
const cross = <svg className="w-5 h-5 text-white/30 inline-block" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>;


const infoIcon = (faqKey: string, ariaLabel: string) => (
  <button
    type="button"
    aria-label={ariaLabel}
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
  const { t } = useTranslation();
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const packages = [
    {
      name: t('web_development.packages.starter.name'),
      subtitle: t('web_development.packages.starter.subtitle'),
      price: t('web_development.packages.starter.price'),
      highlight: false,
    },
    {
      name: t('web_development.packages.business.name'),
      subtitle: t('web_development.packages.business.subtitle'),
      price: t('web_development.packages.business.price'),
      highlight: true,
    },
    {
      name: t('web_development.packages.professional.name'),
      subtitle: t('web_development.packages.professional.subtitle'),
      price: t('web_development.packages.professional.price'),
      highlight: false,
    },
  ];

  const priceNote = t('web_development.packages.price_note');

  // `faqKey` links a feature row to a question in WebDevelopmentFAQSection via the
  // `open-faq` event. Keep these ids in sync with `featureFaqKeyToQuestion` there.
  const features = [
    { faqKey: 'ssl', label: t('web_development.features.ssl_security'), values: [true, true, true] },
    { label: t('web_development.features.professional_hosting'), values: [t('web_development.values.month_1'), t('web_development.values.month_3'), t('web_development.values.month_6')] },
    { label: t('web_development.features.responsive_design'), values: [true, true, true] },
    { label: t('web_development.features.pages_included'), values: [t('web_development.values.pages_5'), t('web_development.values.pages_10'), t('web_development.values.pages_20')] },
    { label: t('web_development.features.languages'), values: [t('web_development.values.language_1'), t('web_development.values.language_2'), t('web_development.values.language_3')] },
    { label: t('web_development.features.contact_form'), values: [t('web_development.values.basic'), t('web_development.values.enhanced'), t('web_development.values.enhanced')] },
    { label: t('web_development.features.professional_copywriting'), values: [true, true, true] },
    { faqKey: 'seo', label: t('web_development.features.seo_optimization'), values: [t('web_development.values.basic'), t('web_development.values.advanced'), t('web_development.values.advanced') + " + Local"] },
    { faqKey: 'cms', label: t('web_development.features.cms'), values: [false, t('web_development.values.basic'), t('web_development.values.advanced')] },
    { faqKey: 'ecommerce', label: t('web_development.features.e_commerce'), values: [false, t('web_development.values.up_to_10_products'), t('web_development.values.up_to_50_products')] },
    { label: t('web_development.features.professional_email'), values: [false, t('web_development.values.accounts_3'), t('web_development.values.accounts_10')] },
    { label: t('web_development.features.newsletter_integration'), values: [false, true, true] },
    { faqKey: 'analytics', label: t('web_development.features.google_analytics'), values: [t('web_development.values.basic'), t('web_development.values.custom_reporting'), t('web_development.values.advanced_dashboard')] },
    { faqKey: 'searchconsole', label: t('web_development.features.google_search_console'), values: [false, true, true] },
    { label: t('web_development.features.social_media_integration'), values: [true, true, true] },
    { label: t('web_development.features.user_registration'), values: [false, false, true] },
    { faqKey: 'inventory', label: t('web_development.features.inventory_management'), values: [false, false, t('web_development.values.advanced')] },
    { faqKey: 'booking', label: t('web_development.features.booking_quotes_system'), values: [false, false, true] },
    { faqKey: 'chatbot', label: t('web_development.features.live_chat_ai_chatbot'), values: [false, false, true] },
    { label: t('web_development.features.free_support_period'), values: [t('web_development.values.support_7_days'), t('web_development.values.support_14_days'), t('web_development.values.support_30_days')] },
    { faqKey: 'support', label: t('web_development.features.priority_support'), values: [false, t('web_development.values.support_24h'), t('web_development.values.support_12h')] },
  ];

  const addons = [

    {
      title: t('web_development.addons.google_maps.title'),
      description: t('web_development.addons.google_maps.description')
    },

    {
      title: t('web_development.addons.custom_domain.title'),
      description: t('web_development.addons.custom_domain.description')
    },

    {
      title: t('web_development.addons.priority_support.title'),
      description: t('web_development.addons.priority_support.description')
    },
    {
      title: t('web_development.addons.additional_pages.title'),
      description: t('web_development.addons.additional_pages.description')
    },
    {
      title: t('web_development.addons.advanced_ecommerce.title'),
      description: t('web_development.addons.advanced_ecommerce.description')
    },
    {
      title: t('web_development.addons.custom_integrations.title'),
      description: t('web_development.addons.custom_integrations.description')
    },
  ];

  // Stable identifiers for the maintenance plans so selection state and the
  // mutual-exclusivity check don't depend on the (translated) display text.
  const maintenancePlans = {
    basic: `${t('web_development.maintenance.basic.name')} - ${t('web_development.maintenance.basic.price')}${t('web_development.maintenance.basic.period')}`,
    professional: `${t('web_development.maintenance.professional.name')} - ${t('web_development.maintenance.professional.price')}${t('web_development.maintenance.professional.period')}`,
    premium: `${t('web_development.maintenance.premium.name')} - ${t('web_development.maintenance.premium.price')}${t('web_development.maintenance.premium.period')}`,
  };
  const maintenanceLabels: string[] = Object.values(maintenancePlans);

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

  const handleAddonToggle = (addonTitle: string, isMaintenancePlan = false) => {
    setSelectedAddons(prev => {
      if (prev.includes(addonTitle)) {
        // If already selected, remove it
        return prev.filter(item => item !== addonTitle);
      } else {
        // If selecting a maintenance plan, remove any other maintenance plans first
        if (isMaintenancePlan) {
          const nonMaintenanceAddons = prev.filter(item => !maintenanceLabels.includes(item));
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
      setError(t('web_development.errors.select_package'));
      return;
    }

    if (!name) {
      setError(t('web_development.errors.enter_name'));
      return;
    }

    if (!email) {
      setError(t('web_development.errors.enter_email'));
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
      setError(t('web_development.errors.send_failed'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#00041F] via-[#00020F] to-[#00041F] px-2">
      <div className="max-w-7xl mx-auto px-2 md:px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">{t('web_development.packages.title')}</h2>
        {/* Mobile: Stacked Cards */}
        <div className="block md:hidden space-y-6 mb-12">
          {packages.map((pkg, idx) => (
            <div key={pkg.name} className={`bg-white/[0.03] border border-white/10 rounded-2xl p-5 shadow-lg backdrop-blur-xl ${pkg.highlight ? 'ring-2 ring-[#194EFF]/30' : ''}`}>
              <div className="text-center mb-4">
                <div className="flex items-center justify-center gap-2 mb-1">
                  {pkg.highlight && <span className="px-2 py-1 bg-[#194EFF]/20 text-[#194EFF] text-xs font-semibold rounded-full">{t('web_development.packages.most_popular')}</span>}
                </div>
                <div className="py-5">
                  <div className="text-4xl md:text-3xl font-bold text-white">{pkg.name}</div>
                  <div className="text-sm text-white/60 mt-1">{pkg.subtitle}</div>
                  <div className="mt-3">
                    <span className="text-3xl font-bold text-[#194EFF]">{pkg.price}</span>
                    <span className="text-sm text-white/50 ml-1">{priceNote}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                {features.map((row, i) => {
                  const icon = row.faqKey ? infoIcon(row.faqKey, `${t('web_development.packages.info_aria')} ${row.label}`) : null;
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
                {selectedPackage === pkg.name ? t('web_development.buttons.selected') : t('web_development.buttons.select_package')}
              </button>
            </div>
          ))}
        </div>
        {/* Desktop: Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-4">
            <thead>
              <tr>
                <th className="text-left text-white/70 text-base font-semibold py-4 pr-4">{t('web_development.packages.feature_column')}</th>
                {packages.map((pkg, idx) => (
                  <th key={pkg.name} className={`text-center px-4 py-4 ${pkg.highlight ? 'bg-[#194EFF]/10 rounded-t-2xl' : ''}`}>
                    <div className="flex flex-col items-center">
                      <span className="text-2xl md:text-3xl font-bold text-white mt-1 py-2">{pkg.name}</span>
                      <span className="text-xs text-white/60 mb-1">{pkg.subtitle}</span>
                      <div className="mt-1 mb-1">
                        <span className="text-2xl font-bold text-[#194EFF]">{pkg.price}</span>
                        <span className="text-xs text-white/50 ml-1">{priceNote}</span>
                      </div>
                      {pkg.highlight && <span className="px-2 py-1 bg-[#194EFF]/20 text-[#194EFF] text-xs font-semibold rounded-full mt-1">{t('web_development.packages.most_popular')}</span>}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => {
                const icon = row.faqKey ? infoIcon(row.faqKey, `${t('web_development.packages.info_aria')} ${row.label}`) : null;
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
                      {selectedPackage === pkg.name ? t('web_development.buttons.selected') : t('web_development.buttons.select_package')}
                    </button>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
        <h3 id="addons-section" className="text-2xl font-bold text-white mb-6 mt-16 text-center">{t('web_development.addons.title')}</h3>
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
                {selectedAddons.includes(addon.title) ? t('web_development.buttons.selected') : t('web_development.buttons.add_to_project')}
              </button>
            </div>
          ))}
        </div>

        {/* Maintenance Packages */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">{t('web_development.maintenance.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Maintenance */}
            <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-3xl p-8 shadow-xl backdrop-blur-xl hover:border-[#194EFF]/30 transition-all duration-300 relative h-full flex flex-col">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-white mb-3">{t('web_development.maintenance.basic.name')}</h4>
                <div className="text-4xl font-bold text-[#194EFF] mb-2">{t('web_development.maintenance.basic.price')}<span className="text-xl text-white/60">{t('web_development.maintenance.basic.period')}</span></div>
                <p className="text-sm text-white/60">{t('web_development.maintenance.basic.subtitle')}</p>
              </div>
              
              {/* Highlighted Features */}
              <div className="bg-[#194EFF]/10 border border-[#194EFF]/20 rounded-2xl p-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#194EFF] mb-1">{t('web_development.maintenance.basic.hours')}</div>
                  <div className="text-sm text-white/80">{t('web_development.maintenance.basic.hours_label')}</div>
                </div>
              </div>
              
              <div className="space-y-3 mb-6 flex-1">
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  {t('web_development.maintenance.basic.features')[0]}
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  {t('web_development.maintenance.basic.features')[1]}
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  {t('web_development.maintenance.basic.features')[2]}
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  {t('web_development.maintenance.basic.features')[3]}
                </div>
              </div>
              
              <button
                onClick={() => handleAddonToggle(maintenancePlans.basic, true)}
                className={`w-full py-4 text-sm font-semibold rounded-2xl transition-all duration-300 border-2 mt-auto ${
                  selectedAddons.includes(maintenancePlans.basic)
                    ? 'bg-[#194EFF] border-[#194EFF] text-white shadow-lg shadow-[#194EFF]/30 hover:shadow-[#194EFF]/50'
                    : 'bg-transparent border-[#194EFF]/30 text-[#194EFF] hover:bg-[#194EFF]/10 hover:border-[#194EFF]/50'
                }`}
              >
                {selectedAddons.includes(maintenancePlans.basic) ? t('web_development.buttons.selected') : t('web_development.buttons.add_to_project')}
              </button>
            </div>

            {/* Professional Maintenance */}
            <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.03] border-2 border-[#194EFF]/30 rounded-3xl p-8 shadow-xl backdrop-blur-xl hover:border-[#194EFF]/50 transition-all duration-300 relative h-full flex flex-col">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-2 bg-[#194EFF] text-white text-sm font-semibold rounded-full shadow-lg">
                  {t('web_development.maintenance.professional.badge')}
                </span>
              </div>
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-white mb-3">{t('web_development.maintenance.professional.name')}</h4>
                <div className="text-4xl font-bold text-[#194EFF] mb-2">{t('web_development.maintenance.professional.price')}<span className="text-xl text-white/60">{t('web_development.maintenance.professional.period')}</span></div>
                <p className="text-sm text-white/60">{t('web_development.maintenance.professional.subtitle')}</p>
              </div>
              
              {/* Highlighted Features */}
              <div className="bg-[#194EFF]/15 border border-[#194EFF]/30 rounded-2xl p-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#194EFF] mb-1">{t('web_development.maintenance.professional.hours')}</div>
                  <div className="text-sm text-white/80">{t('web_development.maintenance.professional.hours_label')}</div>
                </div>
              </div>
              
              <div className="space-y-3 mb-6 flex-1">
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  {t('web_development.maintenance.features.everything_in_basic')}
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  {t('web_development.maintenance.features.blog_assistance')}
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  {t('web_development.maintenance.features.seo_monitoring')}
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  {t('web_development.maintenance.features.cms_troubleshooting')}
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  <span className="text-[#194EFF] font-semibold">{t('web_development.maintenance.features.priority_support_24h')}</span>
                </div>
                {/* <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  {t('web_development.maintenance.features.instant_changes')}
                </div> */}
              </div>
              
              <button
                onClick={() => handleAddonToggle(maintenancePlans.professional, true)}
                className={`w-full py-4 text-sm font-semibold rounded-2xl transition-all duration-300 border-2 mt-auto ${
                  selectedAddons.includes(maintenancePlans.professional)
                    ? 'bg-[#194EFF] border-[#194EFF] text-white shadow-lg shadow-[#194EFF]/30 hover:shadow-[#194EFF]/50'
                    : 'bg-transparent border-[#194EFF]/30 text-[#194EFF] hover:bg-[#194EFF]/10 hover:border-[#194EFF]/50'
                }`}
              >
                {selectedAddons.includes(maintenancePlans.professional) ? t('web_development.buttons.selected') : t('web_development.buttons.add_to_project')}
              </button>
            </div>

            {/* Premium Maintenance */}
            <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-3xl p-8 shadow-xl backdrop-blur-xl hover:border-[#194EFF]/30 transition-all duration-300 relative h-full flex flex-col">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-white mb-3">{t('web_development.maintenance.premium.name')}</h4>
                <div className="text-4xl font-bold text-[#194EFF] mb-2">{t('web_development.maintenance.premium.price')}<span className="text-xl text-white/60">{t('web_development.maintenance.premium.period')}</span></div>
                <p className="text-sm text-white/60">{t('web_development.maintenance.premium.subtitle')}</p>
              </div>
              
              {/* Highlighted Features */}
              <div className="bg-[#194EFF]/10 border border-[#194EFF]/20 rounded-2xl p-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#194EFF] mb-1">{t('web_development.maintenance.premium.hours')}</div>
                  <div className="text-sm text-white/80">{t('web_development.maintenance.premium.hours_label')}</div>
                </div>
              </div>
              
              <div className="space-y-3 mb-6 flex-1">
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  {t('web_development.maintenance.features.everything_in_professional')}
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  {t('web_development.maintenance.features.ecommerce_support')}
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  {t('web_development.maintenance.features.payment_maintenance')}
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  {t('web_development.maintenance.features.email_automation')}
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  {t('web_development.maintenance.features.monthly_strategy')}
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  <span className="text-[#194EFF] font-semibold">{t('web_development.maintenance.features.priority_support_12h')}</span>
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full mr-3"></div>
                  {t('web_development.maintenance.features.instant_changes')}
                </div>
                
              </div>
              
              <button
                onClick={() => handleAddonToggle(maintenancePlans.premium, true)}
                className={`w-full py-4 text-sm font-semibold rounded-2xl transition-all duration-300 border-2 mt-auto ${
                  selectedAddons.includes(maintenancePlans.premium)
                    ? 'bg-[#194EFF] border-[#194EFF] text-white shadow-lg shadow-[#194EFF]/30 hover:shadow-[#194EFF]/50'
                    : 'bg-transparent border-[#194EFF]/30 text-[#194EFF] hover:bg-[#194EFF]/10 hover:border-[#194EFF]/50'
                }`}
              >
                {selectedAddons.includes(maintenancePlans.premium) ? t('web_development.buttons.selected') : t('web_development.buttons.add_to_project')}
              </button>
            </div>
          </div>
        </div>

        {/* Quote Submission Form */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">{t('web_development.quote_form.title')}</h3>
          
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
                    <h3 className="text-green-400 font-semibold text-lg">{t('web_development.quote_form.success_title')}</h3>
                    <p className="text-green-300 text-sm">{t('web_development.quote_form.success_message')}</p>
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
                    <h3 className="text-red-400 font-semibold text-lg">{t('web_development.quote_form.error_title')}</h3>
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
                <h4 className="text-xl font-bold text-white mb-6">{t('web_development.quote_form.summary_title')}</h4>
                
                {/* Package Selection */}
                <div className="mb-6">
                  <div className="text-sm text-white/60 mb-2">{t('web_development.quote_form.selected_package')}</div>
                  {selectedPackage ? (
                    <div className="bg-[#194EFF]/10 border border-[#194EFF]/30 rounded-xl p-4">
                      <div className="text-[#194EFF] font-semibold">{selectedPackage}</div>
                    </div>
                  ) : (
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <div className="text-white/40">{t('web_development.summary.no_package')}</div>
                    </div>
                  )}
                </div>

                {/* Add-ons Selection */}
                <div className="mb-6">
                  <div className="text-sm text-white/60 mb-2">{t('web_development.quote_form.selected_addons')}</div>
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
                      <div className="text-white/40">{t('web_development.summary.no_addons')}</div>
                    </div>
                  )}
                </div>

                {/* Total Items */}
                <div className="pt-4 border-t border-white/10">
                  <div className="text-sm text-white/60">{t('web_development.quote_form.total_items')}</div>
                  <div className="text-white font-semibold">
                    {selectedPackage ? 1 : 0} {t('web_development.summary.package_word')} + {selectedAddons.length} {t('web_development.summary.addons_word')}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-3xl p-8 shadow-xl backdrop-blur-xl">
                <h4 className="text-xl font-bold text-white mb-6">{t('web_development.quote_form.contact_title')}</h4>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-white font-semibold text-base mb-3 block">{t('web_development.quote_form.full_name')}</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-[#194EFF]/50 focus:outline-none transition-colors"
                      placeholder={t('web_development.quote_form.placeholder_name')}
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label className="text-white font-semibold text-base mb-3 block">{t('web_development.quote_form.email')}</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-[#194EFF]/50 focus:outline-none transition-colors"
                      placeholder={t('web_development.quote_form.placeholder_email')}
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label className="text-white font-semibold text-base mb-3 block">{t('web_development.quote_form.phone')}</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-[#194EFF]/50 focus:outline-none transition-colors"
                      placeholder={t('web_development.quote_form.placeholder_phone')}
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label className="text-white font-semibold text-base mb-3 block">{t('web_development.quote_form.project_description')}</label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 min-h-[100px] focus:border-[#194EFF]/50 focus:outline-none transition-colors resize-vertical"
                      placeholder={t('web_development.quote_form.placeholder_description')}
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
                        <span>{t('web_development.quote_form.sending')}</span>
                      </div>
                    ) : (
                      <span>{t('web_development.quote_form.submit_button')}</span>
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