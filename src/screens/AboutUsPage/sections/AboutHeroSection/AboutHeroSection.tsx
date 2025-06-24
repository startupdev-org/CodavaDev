import React, { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TypewriterText,
  FloatingElement,
  GlowButton,
  ParallaxElement,
  MatrixText,
} from "../../../../components/ui/animated-elements";

const typingTexts = [
  "Through Technology",
  "With Innovation",
  "For The Future",
  "Beyond Limits",
];

function scrollToTeamLeadership() {
  const el = document.getElementById("team-leadership");
  if (el) {
    const yOffset = -80; // adjust for sticky headers if needed
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({
      top: y,
      behavior: "smooth"
    });
  }
}

const PatternGraphic = ({ className }: { className?: string }) => (
  <div
    className={`w-[320px] h-[180px] md:w-[450px] md:h-[250px] flex items-center justify-center ${className}`}
  >
    <div className="w-full h-full flex gap-2 md:gap-3 -skew-x-12 transform-gpu group">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="w-1/5 h-full rounded-3xl bg-cover bg-center transition-all duration-500 group-hover:scale-105"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg)`,
          }}
        />
      ))}
    </div>
  </div>
);

export const AboutHeroSection = (): JSX.Element => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typingTexts[textIndex];
    let typingSpeed = isDeleting ? 70 : 90;

    if (!isDeleting && charIndex === currentText.length) {
      typingSpeed = 1800; // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
      typingSpeed = 500; // Pause before typing next
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayedText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % typingTexts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  // Company stats data
  const companyStats = [
    {
      value: "10+",
      label: "Projects Completed",
      description: "Across diverse industries",
    },
    {
      value: "10+",
      label: "Enterprise Clients",
      description: "Trusting our expertise",
    },
    {
      value: "24/7",
      label: "Support Available",
      description: "Always here for you",
    },
  ];

  // Core values data
  const coreValues = [
    {
      title: "Innovation & Creativity",
      description:
        "We are driven by a passion for fresh ideas and groundbreaking solutions. Our team constantly explores new technologies and approaches to ensure we deliver unique, cutting-edge results. By challenging the status quo, we aim to create impactful software that pushes boundaries.",
    },
    {
      title: "Customer-Centric Focus",
      description:
        "We prioritize our clients in every aspect of our work. By truly understanding their needs, we create tailored solutions that not only meet but exceed their expectations. Our goal is to build long-lasting relationships through exceptional service and results.",
    },
    {
      title: "Integrity & Transparency",
      description:
        "We value honesty and open communication in all our interactions. By adhering to ethical practices and providing clear, transparent processes, we build trust with our clients. Our commitment to consistency ensures reliability and long-term partnerships.",
    },
    {
      title: "Excellence in Execution",
      description:
        "We strive for perfection in every project, delivering high-quality solutions that meet deadlines and stay within budget. Our focus is on ensuring optimal results and exceeding client expectations.",
    },
    {
      title: "Collaboration & Teamwork",
      description:
        "We believe that great ideas come from working together. By fostering a collaborative environment, both internally and with our clients, we encourage creativity and problem-solving to achieve shared success.",
    },
    {
      title: "Agility & Adaptability",
      description:
        "We embrace change and remain flexible in an ever-evolving industry. Our ability to quickly respond to new challenges and opportunities ensures that our solutions stay relevant and scalable.",
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-[1596px] items-start gap-20 mx-auto relative overflow-hidden py-10 md:py-20 px-4 sm:px-8">
      {/* Main Hero Content */}
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10 md:gap-[60px] lg:gap-[100px] relative self-stretch w-full">
        {/* Left: Text */}
        <div className="flex flex-col items-start gap-6 md:gap-8 relative flex-1 w-full md:ml-8">
          <FadeIn delay={0.2} direction="up">
            <div className="flex items-center gap-3"></div>
          </FadeIn>

          <FadeIn delay={0.5} direction="up">
            {/* Responsive text size and prevent overlap */}
            <div
              className="
                relative self-stretch
                [font-family:'Urbanist',Helvetica]
                font-semibold
                text-transparent
                bg-gradient-to-r from-purple-400 via-white to-purple-400
                bg-clip-text
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                tracking-[0]
                leading-tight
                md:leading-[60px]
                lg:leading-[80px]
                animate-gradient-shift
                bg-[length:200%_auto]
                z-10
                w-full
                break-words
                "
              style={{
                minHeight: "3.5em", // Reserve space for 2 lines, prevents overlap on load
                maxWidth: "100%",
                wordBreak: "break-word",
              }}
            >
              <MatrixText text="Transforming Businesses" />
              <br />
              <span className="text-white">{displayedText}<br /></span>
            </div>
          </FadeIn>

          <FadeIn delay={0.6} direction="up">
            <div className="font-medium text-grey-60 tracking-[0] relative self-stretch [font-family:'Urbanist',Helvetica] text-base sm:text-lg md:text-xl leading-[28px] md:leading-[32px] max-w-full md:max-w-[600px]">
              We are a forward-thinking IT solutions company dedicated to empowering businesses with innovative technology solutions and drive digital transformation and create lasting value for our clients.
            </div>
          </FadeIn>

          <FadeIn delay={0.4} direction="up">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
              <GlowButton className="px-6 sm:px-8 py-3 sm:py-4 h-auto bg-gradient-to-r from-purple-60 to-purple-70 rounded-[10px] border border-solid border-purple-60 hover:border-purple-75 hover:shadow-md hover:shadow-purple-600/20 transition-all duration-300 w-full sm:w-auto">
                <span className="[font-family:'Urbanist',Helvetica] font-medium text-white text-base sm:text-lg tracking-[0] leading-[27px]">
                  Our Story
                </span>
              </GlowButton>
              <GlowButton
                className="px-6 sm:px-8 py-3 sm:py-4 h-auto bg-gradient-to-r from-grey-10 to-grey-08 rounded-[10px] border border-solid border-purple-60/50 hover:border-purple-60 hover:shadow-md hover:shadow-purple-600/20 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
                onClick={scrollToTeamLeadership}
              >
                <span className="[font-family:'Urbanist',Helvetica] font-medium text-purple-200 hover:text-white text-base sm:text-lg tracking-[0] leading-[27px] transition-colors duration-300">
                  Meet Our Team
                </span>
              </GlowButton>
            </div>
          </FadeIn>

          <div className="hidden md:block">
            <FloatingElement intensity={8} duration={4}>
              <div className="relative w-[68px] h-[30px] -top-10 -left-5">
                <div className="bg-[url(/group-4.png)] absolute w-[30px] h-[30px] top-0 left-0 bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
                <div className="bg-[url(/group-5.png)] absolute w-[18px] h-[18px] top-1.5 left-9 bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
                <div className="bg-[url(/group-6.png)] absolute w-2 h-2 top-[11px] left-[60px] bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
              </div>
            </FloatingElement>
          </div>
        </div>

        {/* Right: Image */}
        <FadeIn delay={0.7} direction="up">
          <ParallaxElement speed={0.1}>
            <div className="h-0 md:h-20"></div>
            <Card className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] h-[220px] sm:h-[320px] md:h-[450px] bg-gradient-to-br from-grey-08 to-grey-10 rounded-xl border border-solid border-purple-60/30 hover:border-purple-60/60 transition-all duration-500 shadow-lg shadow-purple-600/10 hover:shadow-purple-600/20 backdrop-blur-sm relative overflow-hidden mx-auto md:mx-0">
              <CardContent className="p-2 sm:p-4 md:p-6 relative z-10 h-full">
                <img
                  src="https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg"
                  alt="Mission Vision Icon"
                  className="w-full h-full object-cover rounded-lg"
                />
              </CardContent>
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-purple-600/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-digital-grid bg-[size:30px_30px] opacity-0 hover:opacity-10 transition-opacity duration-500" />
            </Card>
          </ParallaxElement>
        </FadeIn>
      </div>

      {/* Company Stats */}
      <FadeIn delay={0.8} direction="up">
        <div className="flex items-center justify-center md:justify-end gap-4 md:gap-6 relative self-stretch w-full pr-0 md:pr-20">
          <StaggerContainer staggerDelay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-4 md:gap-6 w-full ml-0 md:ml-auto">
              {companyStats.map((stat, index) => (
                <StaggerItem key={index}>
                  <Card className="bg-gradient-to-br from-grey-08 to-grey-10 rounded-xl border border-solid border-purple-60/30 hover:border-purple-60/60 transition-all duration-500 shadow-lg shadow-purple-600/10 hover:shadow-purple-600/25 backdrop-blur-sm group flex-1 min-w-[220px] max-w-[320px] mx-auto">
                    <CardContent className="flex flex-col items-center gap-2 md:gap-4 p-4 md:p-6 text-center">
                      <div className="text-2xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-white bg-clip-text group-hover:from-purple-300 group-hover:to-purple-100 transition-all duration-300">
                        {stat.value}
                      </div>
                      <div className="font-semibold text-white text-lg md:text-xl [font-family:'Urbanist',Helvetica] group-hover:text-purple-200 transition-colors duration-300">
                        {stat.label}
                      </div>
                      <div className="font-medium text-grey-60 text-xs md:text-sm [font-family:'Urbanist',Helvetica]">
                        {stat.description}
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </FadeIn>

      {/* Mission & Vision Sections */}
      <div className="flex flex-col gap-16 md:gap-24 w-full">
        {/* Our Mission */}
        <FadeIn direction="right" delay={0.2}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full">
            <div className="max-w-2xl w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 uppercase">
                Our Mission
              </h2>
              <p className="font-medium text-grey-60 text-base md:text-lg leading-[24px] md:leading-[27px] [font-family:'Urbanist',Helvetica]">
                To empower businesses with innovative, high-quality software solutions that drive growth and efficiency. We are committed to leveraging cutting-edge technology, creative problem-solving, and industry best practices to deliver scalable and future-ready digital solutions. Our goal is to help clients transform their ideas into reality, enhance their digital presence, and achieve long-term success in an ever-evolving technological landscape.
              </p>
            </div>
            <div className="relative flex-shrink-0">
              <PatternGraphic />
            </div>
          </div>
        </FadeIn>

        {/* Our Vision */}
        <FadeIn direction="left" delay={0.2}>
          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16 w-full">
            <div className="relative flex-shrink-0">
              <PatternGraphic />
            </div>
            <div className="max-w-2xl w-full text-right md:text-right">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 uppercase">
                Our Vision
              </h2>
              <p className="font-medium text-grey-60 text-base md:text-lg leading-[24px] md:leading-[27px] [font-family:'Urbanist',Helvetica]">
                Our vision is to be a global leader in software development, driving digital transformation and innovation across industries. We strive to create cutting-edge solutions that empower businesses, enhance user experiences, and set new standards in technology. Our goal is to continuously evolve, adapt to emerging trends, and build a future where technology seamlessly integrates with business success, making a lasting impact worldwide.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Core Values */}
      <FadeIn delay={0.9} direction="up">
        <div className="flex flex-col items-start gap-8 md:gap-12 relative self-stretch w-full mt-10 md:mt-20">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase">
              Our Values
            </h2>
            <div className="flex items-center gap-4">
              <GlowButton className="px-6 md:px-10 py-3 md:py-4 h-auto bg-purple-600 hover:bg-purple-700 rounded-full text-white font-bold whitespace-nowrap mr-0 md:mr-10">
                Free Consultation
              </GlowButton>
            </div>
          </div>

          {/* Grid */}
          <StaggerContainer staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
              {coreValues.map((value, index) => (
                <StaggerItem key={index}>
                  <Card className="bg-grey-10 p-6 md:p-8 rounded-2xl border border-solid border-neutral-800 h-full hover:border-purple-600/50 transition-colors duration-300">
                    <CardContent className="flex flex-col items-start gap-3 md:gap-4 p-0">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-purple-600 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                        </div>
                        <h3 className="font-bold text-lg md:text-xl text-white">
                          {value.title}
                        </h3>
                      </div>
                      <p className="font-medium text-grey-60 text-base md:text-lg leading-[22px] md:leading-[27px] [font-family:'Urbanist',Helvetica]">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </FadeIn>
    </section>
  );
};