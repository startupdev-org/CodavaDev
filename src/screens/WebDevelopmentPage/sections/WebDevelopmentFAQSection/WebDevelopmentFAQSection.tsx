import React, { useState, useEffect, useRef } from "react";

const faqData = [
  {
    block: "General Questions",
    faqs: [
      {
        q: "What's included in the 50% launch offer?",
        a: (
          <span>This is a limited-time launch promotion where you save 50% on all packages:<ul className="list-disc ml-5 mt-2"><li><b>Starter:</b> €199 (was €399) - Save €200</li><li><b>Pro:</b> €349 (was €699) - Save €350</li><li><b>Premium:</b> €649 (was €1,299) - Save €600</li></ul></span>
        ),
      },
      {
        q: "What platform do you use to build websites?",
        a: "I build websites using React, Tailwind CSS, and modern web technologies — a cutting-edge tech stack that ensures maximum performance, full customization, and scalability as your business grows.",
      },
      {
        q: "Is hosting really included for free?",
        a: (
          <span>Yes! All packages include free hosting:<ul className="list-disc ml-5 mt-2"><li><b>Starter:</b> 1 month free hosting</li><li><b>Business:</b> 3 months free hosting</li><li><b>Professional:</b> 6 months free hosting</li></ul></span>
        ),
      },
      {
        q: "Can you connect my own domain?",
        a: "Yes, I can connect your existing domain or help you purchase and set up a new one if needed. Domain + SSL certificate is included in all packages.",
      },
      {
        q: "How long does it take to get my website?",
        a: (
          <span><ul className="list-disc ml-5 mt-2"><li><b>Starter:</b> 3-5 business days</li><li><b>Pro:</b> 5-7 business days</li><li><b>Premium:</b> 7-14 business days</li></ul></span>
        ),
      },
      {
        q: "What happens after my website is delivered?",
        a: "You get 7 days of free support after delivery for any bugs or minor adjustments. Ongoing maintenance and updates can be arranged as a monthly service.",
      },
      {
        q: "Do you offer custom solutions outside these packages?",
        a: "Absolutely! Every business is unique. If you need custom features or a mix of different package elements, I'll create a tailored solution just for you.",
      },
    ],
  },
  {
    block: "Feature Explanations",
    faqs: [
      // Only keep hard features
      {
        q: "What is SEO Optimization?",
        a: "SEO Optimization refers to techniques and best practices that help your website rank higher in search engines, making it easier for potential customers to find you online.",
      },
      {
        q: "What is a CMS?",
        a: (
          <span>
            A CMS (Content Management System) allows you to easily update and manage your website content (such as text, images, and blog posts) without needing to write any code.<br/>
            <br/>
            <b>Basic CMS:</b> Lets you edit main pages and simple content (text, images, contact info) through an easy-to-use admin panel.<br/>
            <b>Advanced CMS:</b> Includes all Basic features plus blog management, media galleries, user roles, custom fields, and more advanced editing and publishing tools.
          </span>
        ),
      },
      {
        q: "What is E-commerce?",
        a: "E-commerce functionality allows you to sell products or services online, including product listings, shopping cart, secure checkout, and payment processing.",
      },
      {
        q: "What is Google Analytics?",
        a: "Google Analytics is a tool that tracks and reports website traffic, helping you understand your audience and measure marketing effectiveness.",
      },
      {
        q: "What is Google Search Console?",
        a: "Google Search Console is a free tool from Google that helps you monitor, maintain, and troubleshoot your site's presence in Google Search results.",
      },
      {
        q: "What is Live Chat & AI Chatbot?",
        a: "Live Chat & AI Chatbot allows you to provide instant support and automated responses to your website visitors, improving customer service and engagement.",
      },
      {
        q: "What is Inventory Management?",
        a: "Inventory Management lets you track, manage, and organize your product stock levels, orders, sales, and deliveries—essential for e-commerce businesses.",
      },
      {
        q: "What is a Booking/Appointment System?",
        a: "A Booking/Appointment System lets your customers schedule appointments or services directly through your website, with features like calendar integration and automated reminders.",
      },
      {
        q: "What is Priority Support?",
        a: "Priority Support gives you faster response times and higher priority for technical support requests, ensuring your issues are resolved quickly.",
      },
      {
        q: "What is Maintenance Included?",
        a: "Maintenance Included means your package comes with a set period of free technical support, updates, and minor adjustments after your website is delivered.",
      },
      {
        q: "What is SSL Certificate & Security?",
        a: "An SSL Certificate encrypts data between your website and visitors, ensuring secure communication. Security features also include firewalls, malware protection, and regular updates to keep your site safe.",
      },
    ],
  },
  {
    block: "Website Starter (€299)",
    faqs: [
      {
        q: "Who is the Starter package best for?",
        a: (
          <span>The Starter package is perfect for:<ul className="list-disc ml-5 mt-2"><li>Local businesses and professionals who need a simple, professional online presence</li><li>Freelancers and consultants</li><li>Personal brands and portfolios</li><li>Service-based businesses (e.g., salons, repair shops, tutors)</li><li>Anyone who wants a fast, secure, and affordable website to establish credibility online</li></ul></span>
        ),
      },
      {
        q: "Can I update content myself with Starter?",
        a: "The Starter package doesn't include a content management system. If you need to regularly update content, consider upgrading to Pro which includes a custom admin panel.",
      },
      {
        q: "What SEO is included in Starter?",
        a: (
          <span>Basic SEO essentials:<ul className="list-disc ml-5 mt-2"><li>Optimized page titles and meta descriptions</li><li>XML sitemap creation</li><li>Mobile-responsive design</li><li>Fast loading speeds</li><li>Search engine visibility setup</li></ul></span>
        ),
      },
    ],
  },
  {
    block: "Website Pro (€349)",
    faqs: [
      {
        q: "Who is the Pro package best for?",
        a: (
          <span>The Pro package is ideal for businesses and professionals who want to take their site to the next level with more features and flexibility. It's perfect for:<ul className="list-disc ml-5 mt-2"><li>Growing businesses and agencies</li><li>Consultants, coaches, and educators</li><li>Medical clinics, law firms, and real estate agencies</li><li>Bloggers and content creators who want a CMS</li><li>Service providers who need custom forms, professional email, and analytics</li><li>Anyone who needs to update content regularly and wants advanced SEO</li></ul></span>
        ),
      },
      {
        q: "What can I do with the custom admin panel?",
        a: (
          <span>The admin panel lets you:<ul className="list-disc ml-5 mt-2"><li>Edit text content and images</li><li>Add/edit/delete blog posts</li><li>Manage contact form submissions</li><li>Update business information</li><li>Upload new photos to galleries</li></ul></span>
        ),
      },
      {
        q: "How does the blog system work?",
        a: (
          <span>You get a full content management system where you can:<ul className="list-disc ml-5 mt-2"><li>Write and publish blog posts</li><li>Add images and videos</li><li>Organize posts by categories</li><li>Schedule posts for future publication</li><li>Manage comments (if enabled)</li></ul></span>
        ),
      },
      {
        q: "What's included in \"Advanced SEO\"?",
        a: (
          <span>Pro SEO includes everything in Starter plus:<ul className="list-disc ml-5 mt-2"><li>Speed optimization techniques</li><li>Schema markup implementation</li><li>Advanced meta tag optimization</li><li>Image alt text optimization</li><li>Internal linking structure</li><li>Google Search Console setup</li></ul></span>
        ),
      },
      {
        q: "Will I be able to see my website traffic?",
        a: (
          <span>Yes! Google Analytics integration is included, so you can track:<ul className="list-disc ml-5 mt-2"><li>Number of visitors</li><li>Most popular pages</li><li>Where visitors come from</li><li>User behavior on your site</li></ul></span>
        ),
      },
    ],
  },
  {
    block: "Website Premium (€649)",
    faqs: [
      {
        q: "Who is the Premium package best for?",
        a: (
          <span>The Premium package is designed for businesses that need a powerful, scalable online presence with advanced features. It's perfect for:<ul className="list-disc ml-5 mt-2"><li>Online shops and e-commerce businesses</li><li>Booking and registration-based businesses (e.g., clinics, fitness studios, travel agencies)</li><li>Large service providers and agencies</li><li>Companies needing user logins, product/order management, and automation</li><li>Businesses wanting live chat, AI chatbot, and advanced email marketing</li><li>Any business that needs the most comprehensive, scalable web solution</li></ul></span>
        ),
      },
      {
        q: "What does \"Full E-commerce Integration\" include?",
        a: (
          <span>Complete online store functionality:<ul className="list-disc ml-5 mt-2"><li>Product catalog with unlimited products</li><li>Shopping cart and secure checkout</li><li>Payment processing (Stripe, PayPal, Crypto)</li><li>Order management system</li><li>Customer accounts and profiles</li><li>Inventory tracking</li><li>Automated order confirmation emails</li></ul></span>
        ),
      },
      {
        q: "How does the AI chatbot work?",
        a: (
          <span>The AI chatbot provides:<ul className="list-disc ml-5 mt-2"><li>24/7 customer support</li><li>Instant answers to common questions</li><li>Lead capture and qualification</li><li>Integration with your contact forms</li><li>Customizable responses for your business</li><li><b>Admin has the option for instant live answering to website visitors</b></li></ul><b>Note:</b> The chatbot requires a third-party AI service (like Tidio, LiveChatInc, or similar). I'll set it up and configure it for your business, but you'll need their subscription (typically €15-50/month depending on features and message volume).</span>
        ),
      },
      {
        q: "What kind of email automation is included?",
        a: (
          <span>Professional email marketing features:<ul className="list-disc ml-5 mt-2"><li>Order confirmation and shipping updates</li><li>New offers and promotions</li><li>Newsletter management</li><li>Customer segmentation</li><li>Automated follow-up campaigns</li></ul><b>Note:</b> Email automation requires a third-party service (like Mailchimp, EmailJS, or similar). Basic setup is included, but you'll need to subscribe to their service (typically €10-30/month depending on your subscriber count).</span>
        ),
      },
      {
        q: "Can I manage bookings and appointments?",
        a: (
          <span>Yes! The booking system includes:<ul className="list-disc ml-5 mt-2"><li>Online appointment scheduling</li><li>Calendar integration</li><li>Automated booking confirmations</li><li>Customer reminders</li><li>Staff scheduling (if applicable)</li><li>Payment collection for bookings</li></ul></span>
        ),
      },
      {
        q: "What makes Premium's SEO the \"best\"?",
        a: (
          <span>Premium includes comprehensive SEO:<ul className="list-disc ml-5 mt-2"><li>Everything from Pro package</li><li>E-commerce SEO optimization</li><li>Local SEO setup (if applicable)</li><li>Advanced schema markup</li><li>Conversion tracking</li><li>SEO performance monitoring</li><li>Monthly SEO reports</li></ul></span>
        ),
      },
      {
        q: "What's the difference between Pro and Premium priority support?",
        a: (
          <span><b>Pro:</b> Fast Support within 4-hour response time, including project changes.<br/><b>Premium:</b> Instant Support within 1-2 hours response time, including project changes.</span>
        ),
      },
    ],
  },
  {
    block: "Additional Service Costs & Requirements",
    faqs: [
      {
        q: "Are there any ongoing costs I should know about?",
        a: (
          <span>Yes, some advanced features require third-party services. For example:<ul className="list-disc ml-5 mt-2"><li><b>Email Marketing (Pro & Premium Package):</b> Requires a service provider such as Mailchimp, EmailJS, or similar. I handle setup and integration, but ongoing use will have additional costs billed by the provider.</li><li><b>AI Chatbot & Live Chat (Premium Package):</b> Requires a service provider such as Tidio, Intercom, Crisp, or similar. I handle setup and configuration, but ongoing use will have additional costs billed by the provider.</li><li><b>Domain renewal:</b> ~€10-25/year (standard)</li><li><b>Private GitHub Repository (Optional):</b> ~4€ monthly. Included for all packages for security reasons. Provides secure backup, full version control, and makes it easy to collaborate or transfer your website to another developer in the future.</li><li><b>Professional email installation (Optional):</b> ~10€ monthly (if you need a professional email address with your domain)</li></ul>These costs are billed directly by the third-party service providers and are not included in my development fee.</span>
        ),
      },
      {
        q: "Do I own my website and code?",
        a: (
          <span>You get:<ul className="list-disc ml-5 mt-2"><li><b>Full ownership of your website</b></li><li><b>Complete source code</b></li><li><b>All design files and assets</b></li><li><b>No ongoing licensing fees to me</b></li></ul></span>
        ),
      },
    ],
  },
  {
    block: "Payment & Process",
    faqs: [
      {
        q: "What payment methods do you accept?",
        a: (
          <span>I accept:<ul className="list-disc ml-5 mt-2"><li>Bank transfers</li><li>PayPal</li><li>Credit/Debit cards</li><li>Cryptocurrency payments</li></ul></span>
        ),
      },
      {
        q: "When do I need to pay?",
        a: (
          <span><ul className="list-disc ml-5 mt-2"><li><b>40% upfront:</b> This secures your commitment and covers all design work.</li><li><b>40% at development start:</b> This keeps the project moving and covers the main development phase.</li><li><b>20% final payment:</b> This is only due once your website is complete, approved, and ready to launch—so you have peace of mind and full control before the final step.</li></ul></span>
        ),
      },
      {
        q: "What if I'm not satisfied with the result?",
        a: "I offer unlimited revisions during the development process and 7-day free support after delivery, for any adjustments or minor fixes.",
      },
      {
        q: "Do you provide training on how to use my new website?",
        a: (
          <span>Yes! After delivery, I provide:<ul className="list-disc ml-5 mt-2"><li>Video tutorials for your specific admin panel</li><li>1-hour training call (Pro and Premium packages)</li><li>Ongoing support during development process and the first 7 days after delivery</li></ul></span>
        ),
      },
    ],
  },
  {
    block: "Technical Questions",
    faqs: [
      {
        q: "Will my website work on mobile phones?",
        a: (
          <span>Absolutely! All websites are fully responsive and optimized for:<ul className="list-disc ml-5 mt-2"><li>Desktop computers</li><li>Tablets</li><li>Mobile phones</li><li>All major browsers</li></ul></span>
        ),
      },
      {
        q: "How fast will my website load?",
        a: (
          <span>Very fast! I optimize for speed using:<ul className="list-disc ml-5 mt-2"><li>Modern coding techniques</li><li>Image optimization</li><li>Fast hosting infrastructure</li><li>Performance monitoring</li><li>Speed scores typically 90+ on Google PageSpeed</li></ul></span>
        ),
      },
      {
        q: "Is my website secure?",
        a: (
          <span>Yes! Security features include:<ul className="list-disc ml-5 mt-2"><li>SSL certificates (HTTPS)</li><li>Regular security updates</li><li>Secure payment processing</li><li>Data encryption</li><li>Backup systems</li></ul>For ongoing protection and peace of mind, I offer three maintenance plans:<ul className="list-disc ml-5 mt-2"><li><b>Basic Maintenance:</b> Essential security updates and monthly backups</li><li><b>Professional Maintenance:</b> Includes everything in Basic, plus SEO monitoring, analytics, and priority support</li><li><b>Premium Maintenance:</b> Comprehensive coverage with e-commerce support, payment system maintenance, advanced reporting, and the fastest support</li></ul>These plans ensure your website stays secure, up-to-date, and running smoothly.</span>
        ),
      },
      {
        q: "Can I move my website to another host later?",
        a: "Yes, you own your website completely. I can help transfer it to any hosting provider if needed (additional fees may apply).",
      },
    ],
  },
  {
    block: "Monthly Maintenance FAQ",
    faqs: [
      {
        q: "Do I need monthly maintenance?",
        a: "While not required, maintenance ensures your website stays secure, fast, and up-to-date. Modern websites need regular updates for security patches, performance optimization, and third-party service management.",
      },
      {
        q: "What happens if I don't get maintenance?",
        a: (
          <span>Your website will continue working, but you may experience:<ul className="list-disc ml-5 mt-2"><li>Security vulnerabilities</li><li>Slower loading speeds</li><li>Broken third-party integrations</li><li>Outdated plugins and dependencies</li></ul></span>
        ),
      },
      {
        q: "Can I pause maintenance service?",
        a: "Yes, you can pause or cancel anytime. No long-term contracts required.",
      },
      {
        q: "Basic Maintenance - €29/month (Perfect for Starter Websites)",
        a: (
          <span><ul className="list-disc ml-5 mt-2"><li>Security updates and patches</li><li>Performance monitoring</li><li>Monthly backups</li><li>Minor content updates (2 hours included)</li><li>Support (48-hour response)</li></ul></span>
        ),
      },
      {
        q: "Professional Maintenance - €59/month (Ideal for Pro Websites)",
        a: (
          <span><ul className="list-disc ml-5 mt-2"><li>Everything in Basic</li><li>Blog post assistance (1 post/month)</li><li>SEO monitoring</li><li>Analytics reporting</li><li>CMS troubleshooting</li><li>Priority support (24-hour response)</li><li>Up to 5 hours updates/changes</li><li>Changes appear instantly on your site</li></ul></span>
        ),
      },
      {
        q: "Premium Maintenance - €99/month (Comprehensive for Premium Websites)",
        a: (
          <span><ul className="list-disc ml-5 mt-2"><li>Everything in Professional</li><li>E-commerce support</li><li>Payment system maintenance</li><li>Email automation management</li><li>Chatbot optimization</li><li>Advanced reporting</li><li>Priority support (12-hour response)</li><li>Up to 8 hours updates/changes</li><li>Changes appear instantly on your site</li><li>Monthly strategy call</li></ul></span>
        ),
      },
      {
        q: "What if I need more updates than included?",
        a: "Extra content updates: +€10/hour beyond package limits.",
      },
      {
        q: "Do you offer emergency support?",
        a: "Yes, emergency support available at +€25/hour for urgent issues outside business hours.",
      },
      {
        q: "Can you add new features during maintenance?",
        a: "New features are quoted and calculated separately based on complexity. Maintenance covers updates to existing functionality.",
      },
      {
        q: "How do I pay for maintenance?",
        a: "Monthly billing via Bank Transfer, PayPal, Card or Crypto. First payment due when service begins.",
      },
      {
        q: "Can I change packages?",
        a: "Yes, you can upgrade or downgrade anytime. Changes take effect next billing cycle.",
      },
      {
        q: "What's your response time guarantee?",
        a: (
          <span><ul className="list-disc ml-5 mt-2"><li>Basic: 72 hours</li><li>Professional: 48 hours (priority support)</li><li>Premium: 24 hours (priority support)</li></ul></span>
        ),
      },
      {
        q: "Do you provide maintenance reports?",
        a: (
          <span>Yes, monthly reports included showing:<ul className="list-disc ml-5 mt-2"><li>Updates performed</li><li>Performance metrics</li><li>Security status</li><li>Recommendations</li></ul></span>
        ),
      },
      {
        q: "How quickly do changes appear on my website?",
        a: "All content updates and changes appear instantly on your website once completed.",
      },
    ],
  },
];

// Update package FAQ block names
faqData.forEach(block => {
  if (block.block.startsWith('Website Starter')) block.block = 'Website Starter (€299)';
  if (block.block.startsWith('Website Pro')) block.block = 'Website Business (€599)';
  if (block.block.startsWith('Website Premium')) block.block = 'Website Professional (€999)';
});
// Update hosting FAQ answer
const generalBlock = faqData.find(b => b.block === 'General Questions');
if (generalBlock) {
  const hostingFaq = generalBlock.faqs.find(faq => faq.q === 'Is hosting really included for free?');
  if (hostingFaq) {
    hostingFaq.a = (
      <span>Yes! All packages include free hosting:<ul className="list-disc ml-5 mt-2"><li><b>Starter:</b> 1 month free hosting</li><li><b>Business:</b> 3 months free hosting</li><li><b>Professional:</b> 6 months free hosting</li></ul></span>
    );
  }
}

faqData.forEach(block => {
  if (block.block === 'Feature Explanations') {
    block.faqs = block.faqs.filter(faq => faq.q !== 'What is Analytics & Reporting?');
  }
});

export const WebDevelopmentFAQSection: React.FC = () => {
  const [open, setOpen] = useState<{[key: string]: number | null}>({});
  const faqSectionRef = useRef<HTMLDivElement>(null);
  // Add refs for each FAQ question
  const questionRefs = useRef<(HTMLDivElement | null)[][]>([]);

  // Map feature FAQ keys to actual question text
  const featureFaqKeyToQuestion: Record<string, string> = {
    ssl: "What is SSL Certificate & Security?",
    seo: "What is SEO Optimization?",
    cms: "What is a CMS?",
    ecommerce: "What is E-commerce?",
    analytics: "What is Google Analytics?",
    searchconsole: "What is Google Search Console?",
    chatbot: "What is Live Chat & AI Chatbot?",
    inventory: "What is Inventory Management?",
    booking: "What is a Booking/Appointment System?",
    integrations: "What are Custom Integrations?",
    analyticsreporting: "What is Analytics & Reporting?",
    support: "What is Priority Support?",
    maintenance: "What is Maintenance Included?",
    socialstrategy: "What is Social Media Strategy?",
  };

  // Map question text to block and index
  const questionToBlockIdx: Record<string, { blockIdx: number; faqIdx: number }> = {};
  faqData.forEach((block, blockIdx) => {
    block.faqs.forEach((faq, faqIdx) => {
      questionToBlockIdx[faq.q] = { blockIdx, faqIdx };
    });
  });

  useEffect(() => {
    const handler = (e: any) => {
      const { faqKey } = e.detail;
      const question = featureFaqKeyToQuestion[faqKey];
      const match = question ? questionToBlockIdx[question] : undefined;
      if (match) {
        const el = questionRefs.current[match.blockIdx]?.[match.faqIdx];
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          setTimeout(() => {
            setOpen((prev) => ({ ...prev, [match.blockIdx]: match.faqIdx }));
          }, 700);
        } else if (faqSectionRef.current) {
          faqSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
          setTimeout(() => {
            setOpen((prev) => ({ ...prev, [match.blockIdx]: match.faqIdx }));
          }, 500);
        }
      }
    };
    window.addEventListener("open-faq", handler);
    return () => window.removeEventListener("open-faq", handler);
  }, []);

  const toggle = (blockIdx: number, faqIdx: number) => {
    setOpen((prev) => ({
      ...prev,
      [blockIdx]: prev[blockIdx] === faqIdx ? null : faqIdx
    }));
  };

  return (
    <section ref={faqSectionRef} className="relative py-20 bg-gradient-to-b from-[#00041F] via-[#00020F] to-[#00041F]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-12">
          {faqData.map((block, blockIdx) => (
            <div key={block.block} className="s-faq__block">
              <h3 className="s-faq__block-title text-2xl font-semibold text-[#194EFF] mb-6">{block.block}</h3>
              <div className="faq-list space-y-4">
                {block.faqs.map((faq, faqIdx) => (
                  <div
                    key={faq.q}
                    ref={el => {
                      if (!questionRefs.current[blockIdx]) questionRefs.current[blockIdx] = [];
                      questionRefs.current[blockIdx][faqIdx] = el;
                    }}
                    className="faq-item bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-[#194EFF]/30 hover:bg-white/[0.06] transition-all duration-500 backdrop-blur-xl shadow-lg"
                  >
                    <button
                      className="faq-question w-full px-6 py-4 text-left flex justify-between items-center text-lg font-medium text-white group hover:text-[#194EFF] transition-colors duration-300"
                      onClick={() => toggle(blockIdx, faqIdx)}
                    >
                      <span>{faq.q}</span>
                      <svg className={`w-5 h-5 ml-4 transition-transform duration-300 ${open[blockIdx] === faqIdx ? 'rotate-180 text-[#194EFF]' : 'text-white/60'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
  className={`faq-answer transition-all duration-500 ease-in-out
    ${open[blockIdx] === faqIdx
      ? 'max-h-none sm:max-h-[700px] opacity-100 px-6 pb-4 border-t border-[#194EFF]/20'
      : 'max-h-0 opacity-0 overflow-hidden p-0 border-0'
    } bg-gradient-to-r from-[#194EFF]/[0.02] via-transparent to-[#194EFF]/[0.02]`}
>
  <div className="pt-4 text-white/80 leading-relaxed text-base">
    {faq.a}
  </div>
</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 