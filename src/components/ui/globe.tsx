"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { cn } from "../../lib/utils";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0.3,
  diffuse: 1.8,
  mapSamples: 16000,
  mapBrightness: 8,
  baseColor: [0.05, 0.2, 0.6],
  markerColor: [1, 1, 1],
  glowColor: [0.2, 0.5, 1],
  markers: [
    { location: [40.7128, -74.006], size: 0.08 }, // New York
    { location: [51.5074, -0.1278], size: 0.07 }, // London  
    { location: [35.6762, 139.6503], size: 0.08 }, // Tokyo
    { location: [-33.8688, 151.2093], size: 0.06 }, // Sydney
    { location: [48.8566, 2.3522], size: 0.06 }, // Paris
    { location: [52.52, 13.405], size: 0.05 }, // Berlin
    { location: [19.076, 72.8777], size: 0.07 }, // Mumbai
    { location: [-23.5505, -46.6333], size: 0.07 }, // São Paulo
    { location: [37.7749, -122.4194], size: 0.06 }, // San Francisco
    { location: [55.7558, 37.6176], size: 0.05 }, // Moscow
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    try {
      const globe = createGlobe(canvasRef.current, {
        ...config,
        width: width * 2,
        height: width * 2,
        onRender: (state) => {
          if (!pointerInteracting.current) phi += 0.005;
          state.phi = phi + rs.get();
          state.width = width * 2;
          state.height = width * 2;
        },
      });

      // Make canvas visible and mark as loaded
      setTimeout(() => {
        if (canvasRef.current) {
          canvasRef.current.style.opacity = "1";
          setIsLoaded(true);
        }
      }, 100);

      return () => {
        globe.destroy();
        window.removeEventListener("resize", onResize);
      };
    } catch (error) {
      console.error("Globe creation failed:", error);
      setIsLoaded(false);
    }
  }, [rs, config]);

  return (
    <div
      className={cn(
        "relative w-full h-full flex items-center justify-center",
        className,
      )}
    >
      {/* Fallback while loading or if globe fails */}
      {!isLoaded && (
        <div className="w-[400px] h-[400px] rounded-full border-2 border-[#194EFF]/30 bg-gradient-to-br from-[#194EFF]/10 to-transparent backdrop-blur-sm flex items-center justify-center">
          <div className="text-[#194EFF] text-sm font-medium animate-pulse">Loading Globe...</div>
        </div>
      )}
      
      <canvas
        className={cn(
          "w-full h-full max-w-[500px] max-h-[500px] transition-opacity duration-500",
          !isLoaded ? "opacity-0" : "opacity-100"
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
} 