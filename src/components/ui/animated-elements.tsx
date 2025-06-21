import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';

// Fade in animation wrapper
export const FadeIn = ({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  direction = 'up' 
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

// Stagger animation for lists
export const StaggerContainer = ({ 
  children, 
  staggerDelay = 0.1 
}: {
  children: React.ReactNode;
  staggerDelay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children }: { children: React.ReactNode }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div variants={itemVariants}>
      {children}
    </motion.div>
  );
};

// Glowing button with hover effects
export const GlowButton = ({ 
  children, 
  onClick, 
  className = "" 
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 0 25px rgba(124, 58, 237, 0.6)",
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 opacity-0"
        whileHover={{ opacity: 0.1 }}
        transition={{ duration: 0.3 }}
      />
      {children}
    </motion.button>
  );
};

// Floating animation wrapper
export const FloatingElement = ({ 
  children, 
  intensity = 10,
  duration = 3 
}: {
  children: React.ReactNode;
  intensity?: number;
  duration?: number;
}) => {
  return (
    <motion.div
      animate={{
        y: [-intensity, intensity, -intensity],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

// Typewriter effect
export const TypewriterText = ({ 
  text, 
  delay = 0,
  speed = 0.05 
}: {
  text: string;
  delay?: number;
  speed?: number;
}) => {
  const [displayText, setDisplayText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, speed * 1000);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, speed]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="text-purple-60"
      >
        |
      </motion.span>
    </motion.span>
  );
};

// Digital rain effect background
export const DigitalRain = () => {
  const raindrops = Array.from({ length: 50 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {raindrops.map((drop) => (
        <motion.div
          key={drop}
          className="absolute w-px h-20 bg-gradient-to-b from-purple-600 to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: ['0vh', '100vh'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

// Parallax scroll effect
export const ParallaxElement = ({ 
  children, 
  speed = 0.5 
}: {
  children: React.ReactNode;
  speed?: number;
}) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 1000 * speed]);

  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
};

// Simple text wrapper (replaces GlitchText)
export const SimpleText = ({ 
  children, 
  className = "" 
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
};

// Circuit board animation
export const CircuitAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg
        className="w-full h-full"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M50 50 L350 50 L350 150 L200 150 L200 250 L350 250 L350 350"
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          initial={{ strokeDashoffset: 1000 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.path
          d="M100 100 L300 100 L300 200 L150 200 L150 300 L300 300"
          stroke="url(#gradient)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="3,3"
          initial={{ strokeDashoffset: 800 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
            <stop offset="50%" stopColor="#7c3aed" stopOpacity="1" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// Matrix-style text effect
export const MatrixText = ({ 
  text, 
  className = "" 
}: {
  text: string;
  className?: string;
}) => {
  const [scrambledText, setScrambledText] = React.useState(text);
  const characters = '01';

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setScrambledText(
        text
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={`font-mono ${className}`}>
      {scrambledText}
    </span>
  );
};

// Data stream animation
export const DataStream = () => {
  const streams = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {streams.map((stream) => (
        <motion.div
          key={stream}
          className="absolute w-0.5 h-2 bg-purple-600 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}; 