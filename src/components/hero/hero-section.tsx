"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { ArrowDown, Cpu, MoveRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useMouseParallax } from "@/hooks/use-mouse-parallax";
import { cn } from "@/lib/utils";

const CyborgScene = dynamic(
  () => import("@/components/hero/cyborg-scene").then((mod) => mod.CyborgScene),
  { ssr: false },
);

const NeuralParticles = dynamic(
  () =>
    import("@/components/hero/neural-particles").then(
      (mod) => mod.NeuralParticles,
    ),
  { ssr: false },
);

function MagneticLink({
  href,
  children,
  variant = "default",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "outline";
}) {
  return (
    <motion.a
      href={href}
      className={cn(
        buttonVariants({
          variant: variant === "default" ? "default" : "outline",
          size: "lg",
        }),
        "w-full sm:w-auto",
      )}
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}

export function HeroSection() {
  const parallax = useMouseParallax(18);
  const phrase = "Synthetic cognition. Organic command.";
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(phrase);
      return;
    }

    let index = 0;
    const interval = window.setInterval(() => {
      index = (index + 1) % (phrase.length + 1);
      setTyped(phrase.slice(0, index));
    }, 70);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[92svh] items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 cyber-grid animate-grid opacity-40" />
      <div className="absolute inset-0 scanlines" />
      <NeuralParticles />

      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 top-24 mx-auto h-[44rem] max-h-[76svh] w-full max-w-7xl"
        style={{ x: parallax.x, y: parallax.y }}
      >
        <CyborgScene />
      </motion.div>

      <div className="section-shell relative z-10 grid items-end gap-10 pb-14 pt-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <Badge variant="accent">Neural Systems Online</Badge>
          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-none text-white sm:text-7xl lg:text-8xl">
            THE FUTURE IS <span className="text-chrome">HUMAN + AI</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            Enhancing intelligence through next-generation cybernetic systems.
          </p>
          <p className="mt-5 min-h-7 font-mono text-sm font-bold text-primary sm:text-base">
            {typed}
            <span className="ml-1 inline-block h-5 w-2 translate-y-1 bg-primary" />
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <MagneticLink href="#cta">
              Get Started
              <MoveRight className="h-5 w-5" />
            </MagneticLink>
            <MagneticLink href="#technology" variant="outline">
              Explore Technology
              <ArrowDown className="h-5 w-5" />
            </MagneticLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="grid gap-3 self-end sm:grid-cols-2 lg:grid-cols-1"
        >
          {[
            { icon: Cpu, label: "Edge AI Core", value: "900 TOPS" },
            {
              icon: ShieldCheck,
              label: "Encrypted Bio-Link",
              value: "Zero Trust",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="glass-panel flex items-center justify-between rounded-lg p-4"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-md border border-primary/30 bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </span>
                <span className="text-sm font-semibold text-muted">
                  {item.label}
                </span>
              </div>
              <span className="font-mono text-sm font-black text-white">
                {item.value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
