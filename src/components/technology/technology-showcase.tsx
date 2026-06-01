"use client";

import { useEffect, useRef } from "react";
import { Brain, Cpu, Eye, ScanLine } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Badge } from "@/components/ui/badge";
import { showcases } from "@/lib/site-data";

const icons = [Brain, Eye, ScanLine, Cpu];

export function TechnologyShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (
      !section ||
      !track ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const getDistance = () =>
        Math.max(0, track.scrollWidth - window.innerWidth);

      // ScrollTrigger pins this section while translating the wider panel track.
      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          end: () => `+=${getDistance() + window.innerHeight * 0.65}`,
        },
      });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      id="technology"
      ref={sectionRef}
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="absolute inset-0 cyber-grid opacity-25" />
      <div className="section-shell relative">
        <Badge variant="secondary">Technology Showcase</Badge>
        <h2 className="section-title mt-5">
          Hardware that disappears into intent.
        </h2>
        <p className="section-copy mt-6">
          Horizontal scroll reveals the core cybernetic stack: neural input,
          visual expansion, physical amplification, and private AI reasoning.
        </p>
      </div>

      <div
        ref={trackRef}
        className="relative mt-12 flex w-max gap-5 px-[max(1rem,calc((100vw-1180px)/2+2rem))]"
      >
        {showcases.map((item, index) => {
          const Icon = icons[index];

          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="tech-panel glass-panel shine-card flex h-[31rem] w-[86vw] max-w-[42rem] flex-col justify-between rounded-lg p-6 sm:p-8 md:w-[64vw] lg:w-[42rem]"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="section-kicker">{item.eyebrow}</span>
                  <span className="font-mono text-sm font-black text-accent">
                    {item.stat}
                  </span>
                </div>
                <h3 className="mt-7 text-4xl font-black text-white sm:text-5xl">
                  {item.title}
                </h3>
                <p className="mt-5 max-w-lg text-base leading-8 text-muted">
                  {item.copy}
                </p>
              </div>
              <div className="relative flex h-48 items-center justify-center">
                <span className="hologram-ring absolute h-40 w-40 rounded-full" />
                <span className="relative flex h-28 w-28 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 shadow-[0_0_70px_rgba(0,245,255,0.28)]">
                  <Icon className="h-12 w-12 text-primary" />
                </span>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
