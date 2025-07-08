import React, { useState } from "react";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem,
  GlowButton
} from "../../../../components/ui/animated-elements";
import emailjs from '@emailjs/browser';

export const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setIsSuccess(false);

    try {
      const result = await emailjs.send(
        'service_glh9iss', // Service ID
        'template_vttl4v7', // Template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'dj1hZBH9DC_l229_T' // You'll need to replace this with your actual public key
      );

      if (result.status === 200) {
        setIsSuccess(true);
        clearForm();
        // Reset success state after 5 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const services = [
    {
      category: "DEVELOPMENT & DESIGN",
      items: [
        { name: "Web Development", description: "Custom websites & applications" },
        { name: "Full Stack Development", description: "End-to-end development solutions" },
        { name: "Design", description: "UI/UX & brand identity" },
        { name: "Bot Automation", description: "AI chatbots & automation" }
      ]
    },
    {
      category: "MARKETING & CONTENT",
      items: [
        { name: "Digital Advertising", description: "Google & Facebook Ads" },
        { name: "SEO", description: "Search engine optimization" },
        { name: "Copywriting", description: "Content that converts" }
      ]
    }
  ];

  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn delay={0.1} direction="up">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/8 border border-[#194EFF]/25 rounded-full mb-8 backdrop-blur-lg shadow-lg shadow-[#194EFF]/10">
              <div className="w-2.5 h-2.5 bg-[#194EFF] rounded-full animate-pulse shadow-sm shadow-[#194EFF]/50"></div>
              <span className="text-[#194EFF] text-sm font-semibold tracking-wide">CONTACT FORM</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Get In <span className="bg-gradient-to-r from-[#194EFF] via-[#194EFF]/90 to-[#194EFF]/70 bg-clip-text text-transparent">Touch</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.3} direction="up">
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light">
              Ready to start your next project? Fill out the form below.
            </p>
          </FadeIn>
        </div>

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
                  <h3 className="text-green-400 font-semibold text-lg">Message Sent Successfully!</h3>
                  <p className="text-green-300 text-sm">Thank you for your message. We'll get back to you soon!</p>
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
                  <h3 className="text-red-400 font-semibold text-lg">Error Sending Message</h3>
                  <p className="text-red-300 text-sm">{error}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {/* Contact Form */}
        <FadeIn delay={0.4} direction="up">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-10 backdrop-blur-xl shadow-xl shadow-black/20 hover:shadow-[#194EFF]/10 transition-all duration-500">
            <form onSubmit={handleSubmit} className="space-y-14">
              <StaggerContainer staggerDelay={0.1}>
                {/* Personal Information */}
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="text-white font-semibold text-base mb-2 block">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-[#194EFF]/50 focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div>
                    <label className="text-white font-semibold text-base mb-2 block">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-[#194EFF]/50 focus:outline-none transition-colors"
                      placeholder="Enter your email address"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div>
                    <label className="text-white font-semibold text-base mb-2 block">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#194EFF]/50 focus:outline-none transition-colors"
                      required
                      disabled={isLoading}
                    >
                      <option value="" className="bg-[#00041F] text-white">Select a service</option>
                      {services.map((category, categoryIndex) => (
                        <optgroup key={categoryIndex} label={category.category} className="bg-[#00041F] text-white">
                          {category.items.map((service, serviceIndex) => (
                            <option 
                              key={serviceIndex} 
                              value={service.name}
                              className="bg-[#00041F] text-white py-2"
                            >
                              {service.name} - {service.description}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-white font-semibold text-base mb-2 block">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 min-h-[120px] focus:border-[#194EFF]/50 focus:outline-none transition-colors resize-vertical"
                      placeholder="Enter your message"
                      required
                      disabled={isLoading}
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <StaggerItem>
                  <div className="pt-6">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full px-8 py-6 font-semibold text-lg rounded-2xl transition-all duration-300 shadow-xl hover:scale-105 transform ${
                        isLoading 
                          ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 text-white hover:from-[#194EFF]/90 hover:to-[#194EFF]/80 hover:shadow-[#194EFF]/40'
                      }`}
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending Message...</span>
                        </div>
                      ) : (
                        <span>Send Message</span>
                      )}
                    </Button>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}; 