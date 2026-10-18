"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { WritingUnderline } from "./writing-underline";
import { heroConfig } from "@/config/hero";
import { siteConfig } from "@/config/site";
import { trackEvent } from "@/lib/analytics";
import { RotatingGlobe } from "./rotating-globe";
import { motion, Variants } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useHaptic } from "react-haptic";

const RESUME_URL = "https://drive.google.com/file/d/1bFqVi04xFWRHssvIjcZ7oqcisKJ00li6/preview"; // <- replace this

const entryTransition = {
  duration: 0.2,
  ease: [0.22, 1, 0.36, 1] as const,
};
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.035, delayChildren: 0 },
  },
};
const wordVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(4px)", y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 360, damping: 28, mass: 0.8 },
  },
};

const locationTimeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: siteConfig.personal.location.timeZone,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
});

export function Hero() {
  const { vibrate } = useHaptic();
  const vibrateAudio = useRef<HTMLAudioElement>(null);
  const lastWaveTrackRef = useRef<number>(0);
  const [isLocationHovered, setIsLocationHovered] = useState(false);
  const [isLocationTooltipOpen, setIsLocationTooltipOpen] = useState(false);
  const [locationTime, setLocationTime] = useState<string | null>(null);

  const [beforeHighlight, afterHighlight] = heroConfig.description.split(
    heroConfig.descriptionHighlight,
  );

  const handleWaveAudio = (
    play: boolean,
    interactionType: "hover" | "touch" = "hover",
  ) => {
    const audio = vibrateAudio.current;
    if (!audio) return;

    if (play) {
      const now = Date.now();
      if (now - lastWaveTrackRef.current > 5000) {
        trackEvent("hero_wave_hovered", { interaction_type: interactionType });
        lastWaveTrackRef.current = now;
      }
      audio.currentTime = 0;
      audio.playbackRate = 1;
      audio.volume = 0.6;
      audio.play().catch(() => {});
      return;
    }

    audio.pause();
    audio.currentTime = 0;
  };

  useEffect(() => {
    if (!isLocationTooltipOpen) return;

    const updateLocationTime = () => {
      setLocationTime(locationTimeFormatter.format(new Date()));
    };

    updateLocationTime();
    const intervalId = window.setInterval(updateLocationTime, 1000);
    return () => window.clearInterval(intervalId);
  }, [isLocationTooltipOpen]);

  useEffect(() => {
    const audio = vibrateAudio.current;
    return () => {
      audio?.pause();
    };
  }, []);

  return (
    <motion.section
      className="no-js-visible relative z-20 space-y-2 px-6 pt-2"
      initial={{ y: 16 }}
      animate={{ y: 0 }}
      transition={entryTransition}
    >
      <div className="flex flex-col items-start gap-4">
        <div className="space-y-1.5">
          <motion.p
            className="no-js-visible mb-3 flex flex-wrap gap-x-1 gap-y-0.5 items-center text-lg sm:text-xl font-mono font-semibold tracking-wide"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {heroConfig.greeting.split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="font-serif inline-block"
              >
                {word}
              </motion.span>
            ))}
            <span
              className="inline-block text-xl hover:animate-wave"
              onMouseEnter={() => {
                vibrate();
                handleWaveAudio(true, "hover");
              }}
              onMouseLeave={() => handleWaveAudio(false)}
              onFocus={() => handleWaveAudio(true, "hover")}
              onBlur={() => handleWaveAudio(false)}
              onTouchStart={() => handleWaveAudio(true, "touch")}
              onTouchEnd={() => handleWaveAudio(false)}
              style={{ transformOrigin: "70% 70%" }}
            >
              {typeof heroConfig.waveEmoji === "string" ? (
                heroConfig.waveEmoji
              ) : (
                <heroConfig.waveEmoji className="fill-current" />
              )}
            </span>
          </motion.p>

          <motion.h1
            className="no-js-visible text-base sm:text-lg md:text-xl font-semibold leading-[1.05] tracking-tight text-balance"
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ ...entryTransition, delay: 0.06 }}
          >
            <span className="block">{heroConfig.headlineBefore}</span>
            <WritingUnderline delay={0.22}>
              {heroConfig.highlightedPhrases[0]}
            </WritingUnderline>{" "}
            {heroConfig.headlineAfter}
          </motion.h1>

          <motion.p
            className="no-js-visible mt-3 text-xs text-muted-foreground max-sm:text-xs"
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ ...entryTransition, delay: 0.1 }}
          >
            {afterHighlight === undefined ? (
              heroConfig.description
            ) : (
              <>
                {beforeHighlight}
                <span className="underline decoration-border/50 underline-offset-4">
                  {heroConfig.descriptionHighlight}
                </span>
                {afterHighlight}
              </>
            )}
          </motion.p>

          {/* Location + Resume, same plain style */}
          <motion.div
            className="no-js-visible mt-2 flex items-center gap-2.5 text-xs text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...entryTransition, delay: 0.15 }}
          >
            <Tooltip onOpenChange={setIsLocationTooltipOpen}>
              <TooltipTrigger
                className="micro-transition flex items-center gap-1.5 rounded-sm px-1 py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/20 hover:text-foreground"
                onMouseEnter={() => setIsLocationHovered(true)}
                onMouseLeave={() => setIsLocationHovered(false)}
                onFocus={() => setIsLocationHovered(true)}
                onBlur={() => setIsLocationHovered(false)}
              >
                <RotatingGlobe isHovered={isLocationHovered} />
                <span className="font-sans">
                  {siteConfig.personal.location.label}
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <span className="font-sans text-xs tracking-wider">
                  {locationTime ?? "--:--:--"}
                </span>
              </TooltipContent>
            </Tooltip>

            <span aria-hidden className="text-border">
              ·
            </span>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="micro-transition rounded-sm px-1 py-0.5 font-sans hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/20"
            >
              View Resume ↗
            </a>
          </motion.div>
        </div>
      </div>

      <audio src="/vibration.mp3" ref={vibrateAudio} loop preload="none" />
    </motion.section>
  );
}