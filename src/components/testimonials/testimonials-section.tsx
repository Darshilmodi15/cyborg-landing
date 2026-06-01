"use client";

import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/lib/site-data";

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  const testimonial = testimonials[active];

  return (
    <section className="py-24 sm:py-32">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <Badge>Testimonials</Badge>
          <h2 className="section-title mt-5">
            Trusted by builders of human systems.
          </h2>
          <p className="section-copy mt-6">
            Glassmorphism cards and smooth transitions keep social proof
            readable without breaking the cybernetic atmosphere.
          </p>
        </div>

        <Card className="relative min-h-[22rem] overflow-hidden rounded-lg p-7 sm:p-10">
          <Quote className="h-10 w-10 text-primary" />
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
              transition={{ duration: 0.45 }}
              className="mt-8"
            >
              <p className="text-2xl font-bold leading-snug text-white sm:text-3xl">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="font-mono text-sm font-black text-primary">
                  {testimonial.author}
                </p>
                <p className="mt-2 text-sm text-muted">{testimonial.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-6 right-6 flex gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.author}
                className={`h-2.5 rounded-full transition-all ${
                  index === active ? "w-9 bg-primary" : "w-2.5 bg-white/25"
                }`}
                onClick={() => setActive(index)}
                aria-label={`Show testimonial from ${item.author}`}
              />
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
