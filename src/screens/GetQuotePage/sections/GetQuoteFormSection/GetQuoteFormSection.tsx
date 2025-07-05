import React, { useState } from "react";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem
} from "../../../../components/ui/animated-elements";

export const GetQuoteFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    description: ""
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
    console.log("Quote form submitted:", formData);
  };

  const services = [
    "Web Development",
    "UI/UX Design",
    "Digital Advertising",
    "SEO Services",
    "Copywriting",
    "Cloud Solutions",
    "AI & Machine Learning",
    "Mobile App Development",
    "E-commerce Platform",
    "Other"
  ];

  const budgets = [
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
    "Not sure yet"
  ];

  const timelines = [
    "1-2 weeks",
    "1-2 months",
    "3-6 months",
    "6+ months",
    "Flexible",
    "Urgent"
  ];

  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <FadeIn delay={0.1} direction="up">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Request Your
              <span className="block bg-gradient-to-r from-[#194EFF] via-[#194EFF]/90 to-[#194EFF]/70 bg-clip-text text-transparent">
                Custom Quote
              </span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2} direction="up">
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light">
              Tell us about your project and we'll provide you with a detailed, personalized quote within 24 hours.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} direction="up">
          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-10 backdrop-blur-xl shadow-xl shadow-black/20 hover:shadow-[#194EFF]/10 transition-all duration-500">
            <form onSubmit={handleSubmit} className="space-y-8">
              <StaggerContainer staggerDelay={0.1}>
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <StaggerItem>
                    <div className="space-y-2">
                      <label className="text-white font-semibold text-sm">Full Name *</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[#00041F]/50 border border-[#194EFF]/30 text-white placeholder:text-white/40 focus:border-[#194EFF]/60 rounded-xl backdrop-blur-sm h-14"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="space-y-2">
                      <label className="text-white font-semibold text-sm">Email Address *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[#00041F]/50 border border-[#194EFF]/30 text-white placeholder:text-white/40 focus:border-[#194EFF]/60 rounded-xl backdrop-blur-sm h-14"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </StaggerItem>
                </div>

                {/* Company Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <StaggerItem>
                    <div className="space-y-2">
                      <label className="text-white font-semibold text-sm">Company Name</label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-[#00041F]/50 border border-[#194EFF]/30 text-white placeholder:text-white/40 focus:border-[#194EFF]/60 rounded-xl backdrop-blur-sm h-14"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="space-y-2">
                      <label className="text-white font-semibold text-sm">Phone Number</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-[#00041F]/50 border border-[#194EFF]/30 text-white placeholder:text-white/40 focus:border-[#194EFF]/60 rounded-xl backdrop-blur-sm h-14"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </StaggerItem>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <StaggerItem>
                    <div className="space-y-2">
                      <label className="text-white font-semibold text-sm">Service Needed *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[#00041F]/50 border border-[#194EFF]/30 text-white focus:border-[#194EFF]/60 rounded-xl backdrop-blur-sm h-14 px-4"
                      >
                        <option value="" className="bg-[#00041F] text-white">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service} className="bg-[#00041F] text-white">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="space-y-2">
                      <label className="text-white font-semibold text-sm">Budget Range *</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[#00041F]/50 border border-[#194EFF]/30 text-white focus:border-[#194EFF]/60 rounded-xl backdrop-blur-sm h-14 px-4"
                      >
                        <option value="" className="bg-[#00041F] text-white">Select budget range</option>
                        {budgets.map((budget, index) => (
                          <option key={index} value={budget} className="bg-[#00041F] text-white">
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="space-y-2">
                      <label className="text-white font-semibold text-sm">Timeline *</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[#00041F]/50 border border-[#194EFF]/30 text-white focus:border-[#194EFF]/60 rounded-xl backdrop-blur-sm h-14 px-4"
                      >
                        <option value="" className="bg-[#00041F] text-white">Select timeline</option>
                        {timelines.map((timeline, index) => (
                          <option key={index} value={timeline} className="bg-[#00041F] text-white">
                            {timeline}
                          </option>
                        ))}
                      </select>
                    </div>
                  </StaggerItem>
                </div>

                {/* Project Description */}
                <StaggerItem>
                  <div className="space-y-2">
                    <label className="text-white font-semibold text-sm">Project Description *</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full bg-[#00041F]/50 border border-[#194EFF]/30 text-white placeholder:text-white/40 focus:border-[#194EFF]/60 rounded-xl backdrop-blur-sm p-4 resize-none"
                      placeholder="Describe your project requirements, goals, and any specific features you need..."
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
                      Get My Quote
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