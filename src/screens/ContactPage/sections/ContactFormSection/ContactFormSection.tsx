import React, { useState } from "react";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem,
  GlowButton
} from "../../../../components/ui/animated-elements";

export const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const services = [
    "Web Development",
    "UI/UX Design",
    "Digital Advertising",
    "SEO Services",
    "Copywriting",
    "Cloud Solutions",
    "AI & Machine Learning",
    "Other"
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
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" id="contact-form">
              Get In <span className="bg-gradient-to-r from-[#194EFF] via-[#194EFF]/90 to-[#194EFF]/70 bg-clip-text text-transparent">Touch</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.3} direction="up">
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Ready to start your next project? Fill out the form below.
            </p>
          </FadeIn>
        </div>

        {/* Contact Form */}
        <FadeIn delay={0.4} direction="up">
          <div 
            className="bg-white/[0.03] border border-white/10 rounded-2xl p-10 backdrop-blur-xl shadow-xl shadow-black/20 hover:shadow-[#194EFF]/10 transition-all duration-500"
          >
            <form onSubmit={handleSubmit} className="space-y-14">
              <StaggerContainer staggerDelay={0.1}>
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <StaggerItem>
                    <div className="space-y-7 mb-7">
                      <label className="text-white font-semibold text-base mb-2 block">Full Name *</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[#00041F]/50 border border-[#194EFF]/30 text-white placeholder:text-white/40 focus:border-[#194EFF]/60 rounded-xl backdrop-blur-sm h-16 text-lg"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="space-y-7 mb-7">
                      <label className="text-white font-semibold text-base mb-2 block">Email Address *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[#00041F]/50 border border-[#194EFF]/30 text-white placeholder:text-white/40 focus:border-[#194EFF]/60 rounded-xl backdrop-blur-sm h-16 text-lg"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </StaggerItem>
                </div>

                {/* Company Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <StaggerItem>
                    <div className="space-y-7 mb-7">
                      <label className="text-white font-semibold text-base mb-2 block">Company Name</label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-[#00041F]/50 border border-[#194EFF]/30 text-white placeholder:text-white/40 focus:border-[#194EFF]/60 rounded-xl backdrop-blur-sm h-16 text-lg"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="space-y-7 mb-7">
                      <label className="text-white font-semibold text-base mb-2 block">Phone Number</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-[#00041F]/50 border border-[#194EFF]/30 text-white placeholder:text-white/40 focus:border-[#194EFF]/60 rounded-xl backdrop-blur-sm h-16 text-lg"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </StaggerItem>
                </div>

                {/* Service Selection */}
                <StaggerItem>
                  <div className="space-y-7 mb-7">
                    <label className="text-white font-semibold text-base">Service Interested In *</label>
                      <div className="relative group">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[#00041F]/50 border border-[#194EFF]/30 text-white focus:border-[#194EFF]/60 rounded-xl backdrop-blur-sm h-16 px-4 text-lg appearance-none cursor-pointer transition-all duration-300 hover:border-[#194EFF]/50 focus:shadow-lg focus:shadow-[#194EFF]/20 group-hover:bg-[#00041F]/70"
                      >
                        <option value="" className="bg-[#00041F] text-white">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service} className="bg-[#00041F] text-white">
                            {service}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                        <svg className="w-5 h-5 text-[#194EFF] transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </StaggerItem>

                {/* Message */}
                <StaggerItem>
                  <div className="space-y-7 mb-7">
                    <label className="text-white font-semibold text-sm">Project Details *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full bg-[#00041F]/50 border border-[#194EFF]/30 text-white placeholder:text-white/40 focus:border-[#194EFF]/60 rounded-xl backdrop-blur-sm p-4 resize-none"
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    />
                  </div>
                </StaggerItem>

                {/* Submit Button */}
                <StaggerItem>
                  <div className="pt-6">
                    <Button
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 text-white font-semibold text-lg rounded-2xl hover:from-[#194EFF]/90 hover:to-[#194EFF]/80 transition-all duration-300 shadow-xl shadow-[#194EFF]/25 hover:shadow-[#194EFF]/40 hover:scale-105 transform"
                    >
                      Send Message
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