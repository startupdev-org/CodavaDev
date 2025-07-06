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
    subject: "",
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
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-white font-semibold text-base mb-2 block">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-white font-semibold text-base mb-2 block">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40"
                      placeholder="Enter subject"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-white font-semibold text-base mb-2 block">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 min-h-[120px]"
                      placeholder="Enter your message"
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <StaggerItem>
                  <div className="pt-6">
                    <Button
                      type="submit"
                      className="w-full px-8 py-6 bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 text-white font-semibold text-lg rounded-2xl hover:from-[#194EFF]/90 hover:to-[#194EFF]/80 transition-all duration-300 shadow-xl shadow-[#194EFF]/25 hover:shadow-[#194EFF]/40 hover:scale-105 transform"
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