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
  MatrixText
} from "../../../../components/ui/animated-elements";

const typingTexts = [
  "Through Technology",
  "With Innovation",
  "For The Future",
  "Beyond Limits",
];

const PatternGraphic = ({ className }: { className?: string }) => (
  <div className={`w-[450px] h-[250px] flex items-center justify-center ${className}`}>
    <div className="w-full h-full flex gap-3 -skew-x-12 transform-gpu group">
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

  const [displayedText, setDisplayedText] = useState('');
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
    // {
    //   value: "10+",
    //   label: "Years of Excellence",
    //   description: "Delivering innovative solutions"
    // },
    {
      value: "10+",
      label: "Projects Completed",
      description: "Across diverse industries"
    },
    {
      value: "10+",
      label: "Enterprise Clients",
      description: "Trusting our expertise"
    },
    {
      value: "24/7",
      label: "Support Available",
      description: "Always here for you"
    },
  ];

  // Core values data
  const coreValues = [
    {
      title: "Innovation & Creativity",
      description: "We are driven by a passion for fresh ideas and groundbreaking solutions. Our team constantly explores new technologies and approaches to ensure we deliver unique, cutting-edge results. By challenging the status quo, we aim to create impactful software that pushes boundaries."
    },
    {
      title: "Customer-Centric Focus",
      description: "We prioritize our clients in every aspect of our work. By truly understanding their needs, we create tailored solutions that not only meet but exceed their expectations. Our goal is to build long-lasting relationships through exceptional service and results."
    },
    {
      title: "Integrity & Transparency",
      description: "We value honesty and open communication in all our interactions. By adhering to ethical practices and providing clear, transparent processes, we build trust with our clients. Our commitment to consistency ensures reliability and long-term partnerships."
    },
    {
      title: "Excellence in Execution",
      description: "We strive for perfection in every project, delivering high-quality solutions that meet deadlines and stay within budget. Our focus is on ensuring optimal results and exceeding client expectations."
    },
    {
      title: "Collaboration & Teamwork",
      description: "We believe that great ideas come from working together. By fostering a collaborative environment, both internally and with our clients, we encourage creativity and problem-solving to achieve shared success."
    },
    {
      title: "Agility & Adaptability",
      description: "We embrace change and remain flexible in an ever-evolving industry. Our ability to quickly respond to new challenges and opportunities ensures that our solutions stay relevant and scalable."
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-[1596px] items-start gap-20 mx-auto relative overflow-hidden py-20">
      {/* Main Hero Content */}
      <div className="flex items-start gap-[100px] relative self-stretch w-full">
        <div className="flex flex-col items-start gap-8 relative flex-1">
          <FadeIn delay={0.2} direction="up">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-60 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-purple-60 font-semibold text-lg">About us</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.5} direction="up">
            <div className="relative self-stretch [font-family:'Urbanist',Helvetica] font-semibold text-transparent bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text text-6xl tracking-[0] leading-[80px] animate-gradient-shift bg-[length:200%_auto]">
              <MatrixText text="Transforming Businesses" />
              <br />
              <span className="text-white">{displayedText}<br/></span>
            </div>
          </FadeIn>

          <FadeIn delay={0.6} direction="up">
            <div className="font-medium text-grey-60 tracking-[0] relative self-stretch [font-family:'Urbanist',Helvetica] text-xl leading-[32px] max-w-[600px]">
              We are a forward-thinking IT solutions company dedicated to empowering businesses with innovative technology solutions and drive digital transformation and create lasting value for our clients.
            </div>
          </FadeIn>

          <FadeIn delay={0.4} direction="up">
            <div className="flex items-center gap-4">
              <GlowButton className="px-8 py-4 h-auto bg-gradient-to-r from-purple-60 to-purple-70 rounded-[10px] border border-solid border-purple-60 hover:border-purple-75 hover:shadow-lg hover:shadow-purple-600/25 transition-all duration-300">
                <span className="[font-family:'Urbanist',Helvetica] font-medium text-white text-lg tracking-[0] leading-[27px]">
                  Our Story
                </span>
              </GlowButton>
              <GlowButton className="px-8 py-4 h-auto bg-gradient-to-r from-grey-10 to-grey-08 rounded-[10px] border border-solid border-purple-60/50 hover:border-purple-60 hover:shadow-lg hover:shadow-purple-600/25 transition-all duration-300 backdrop-blur-sm">
                <span className="[font-family:'Urbanist',Helvetica] font-medium text-purple-200 hover:text-white text-lg tracking-[0] leading-[27px] transition-colors duration-300">
                  Meet Our Team
                </span>
              </GlowButton>
            </div>
          </FadeIn>

          <FloatingElement intensity={8} duration={4}>
            <div className="relative w-[68px] h-[30px] -top-10 -left-5">
              <div className="bg-[url(/group-4.png)] absolute w-[30px] h-[30px] top-0 left-0 bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
              <div className="bg-[url(/group-5.png)] absolute w-[18px] h-[18px] top-1.5 left-9 bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
              <div className="bg-[url(/group-6.png)] absolute w-2 h-2 top-[11px] left-[60px] bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
            </div>
          </FloatingElement>
        </div>



        <FadeIn delay={0.7} direction="up">
          <ParallaxElement speed={0.1}>
            <div className="h-20"></div>
            <Card className="w-[600px] h-[450px] bg-gradient-to-br from-grey-08 to-grey-10 rounded-xl border border-solid border-purple-60/30 hover:border-purple-60/60 transition-all duration-500 shadow-lg shadow-purple-600/10 hover:shadow-purple-600/20 backdrop-blur-sm relative overflow-hidden mt-8">
              <CardContent className="p-6 relative z-10 h-full">
                <img src="https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg" alt="Mission Vision Icon" className="w-full h-full object-cover rounded-lg" />
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
        <div className="flex items-center justify-center gap-6 relative self-stretch w-full">
          <StaggerContainer staggerDelay={0.1}>
            <div className="flex items-center justify-center gap-6 w-full max-w-4xl mx-auto">
              {companyStats.map((stat, index) => (
                <StaggerItem key={index}>
                  <Card className="bg-gradient-to-br from-grey-08 to-grey-10 rounded-xl border border-solid border-purple-60/30 hover:border-purple-60/60 transition-all duration-500 shadow-lg shadow-purple-600/10 hover:shadow-purple-600/25 backdrop-blur-sm group flex-1">
                    <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                      <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-white bg-clip-text group-hover:from-purple-300 group-hover:to-purple-100 transition-all duration-300">
                        {stat.value}
                      </div>
                      <div className="font-semibold text-white text-xl [font-family:'Urbanist',Helvetica] group-hover:text-purple-200 transition-colors duration-300">
                        {stat.label}
                      </div>
                      <div className="font-medium text-grey-60 text-sm [font-family:'Urbanist',Helvetica]">
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
      <div className="flex flex-col gap-24 w-full">
        {/* Our Mission */}
        <FadeIn direction="right" delay={0.2}>
          <div className="flex items-center justify-center gap-16 w-full">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 uppercase">Our Mission</h2>
              <p className="font-medium text-grey-60 text-lg leading-[27px] [font-family:'Urbanist',Helvetica]">
                To empower businesses with innovative, high-quality software solutions that drive growth and efficiency. We are committed to leveraging cutting-edge technology, creative problem-solving, and industry best practices to deliver scalable and future-ready digital solutions. Our goal is to help clients transform their ideas into reality, enhance their digital presence, and achieve long-term success in an ever-evolving technological landscape.
              </p>
            </div>
            <div className="relative">
              <PatternGraphic />
              {/* <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full border-2 border-purple-60 flex items-center justify-center bg-grey-08">
                  <div className="w-4 h-4 rounded-full bg-purple-60"></div>
              </div> */}
            </div>
          </div>
        </FadeIn>

        {/* Our Vision */}
        <FadeIn direction="left" delay={0.2}>
          <div className="flex items-center justify-center gap-16 w-full">
            <div className="relative">
              <PatternGraphic />
              {/* <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full border-2 border-purple-60 flex items-center justify-center bg-grey-08">
                  <div className="w-4 h-4 rounded-full bg-purple-60"></div>
              </div> */}
            </div>
            <div className="max-w-2xl text-right">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 uppercase">Our Vision</h2>
              <p className="font-medium text-grey-60 text-lg leading-[27px] [font-family:'Urbanist',Helvetica]">
                Our vision is to be a global leader in software development, driving digital transformation and innovation across industries. We strive to create cutting-edge solutions that empower businesses, enhance user experiences, and set new standards in technology. Our goal is to continuously evolve, adapt to emerging trends, and build a future where technology seamlessly integrates with business success, making a lasting impact worldwide.
              </p>
            </div>
          </div>  
        </FadeIn>
      </div>

      {/* Core Values */}
      <FadeIn delay={1.4} direction="up">
        <div className="flex flex-col items-start gap-12 relative self-stretch w-full">
          {/* Header */}
          <div className="flex justify-between items-center w-full">
            <h2 className="text-5xl font-bold text-white uppercase">Our Values</h2>
            <div className="flex items-center gap-6">
              {/* <p className="font-medium text-grey-60 text-lg leading-[27px] [font-family:'Urbanist',Helvetica] max-w-[600px]">
                Our team prioritizes customer satisfaction above all, ensuring their needs always come first.
              </p> */}
              <GlowButton className="px-10 py-4 h-auto bg-purple-600 hover:bg-purple-700 rounded-full text-white font-bold whitespace-nowrap -ml-4">
                Free Consultation
              </GlowButton>
            </div>
          </div>

          {/* Grid */}
          <StaggerContainer staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {coreValues.map((value, index) => (
                <StaggerItem key={index}>
                  <Card className="bg-grey-10 p-8 rounded-2xl border border-solid border-neutral-800 h-full hover:border-purple-600/50 transition-colors duration-300">
                    <CardContent className="flex flex-col items-start gap-4 p-0">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-purple-600 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                        </div>
                        <h3 className="font-bold text-xl text-white">
                          {value.title}
                        </h3>
                      </div>
                      <p className="font-medium text-grey-60 text-lg leading-[27px] [font-family:'Urbanist',Helvetica]">
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