"use client";

import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { stats } from "@/lib/site-data";

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="py-20 sm:py-28">
      <div
        ref={ref}
        className="section-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="border-y border-white/10 py-8"
          >
            <div className="text-5xl font-black text-white">
              {inView ? (
                <CountUp end={stat.value} duration={2.2} separator="," />
              ) : (
                0
              )}
              <span className="text-primary">{stat.suffix}</span>
            </div>
            <p className="mt-3 font-mono text-sm font-bold uppercase text-muted">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
