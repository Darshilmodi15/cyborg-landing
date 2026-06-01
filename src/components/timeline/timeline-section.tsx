"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { timeline } from "@/lib/site-data";

export function TimelineSection() {
  return (
    <section id="roadmap" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <Badge variant="accent">Future Roadmap</Badge>
        <h2 className="section-title mt-5">
          From research lab to planetary infrastructure.
        </h2>
        <div className="relative mt-14">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-secondary md:left-1/2" />
          <div className="grid gap-8">
            {timeline.map((item, index) => (
              <motion.article
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6 }}
                className="relative grid gap-5 pl-12 md:grid-cols-2 md:gap-10 md:pl-0"
              >
                <div
                  className={
                    index % 2 === 0 ? "md:text-right" : "md:col-start-2"
                  }
                >
                  <span className="font-mono text-4xl font-black text-primary">
                    {item.year}
                  </span>
                  <h3 className="mt-3 text-2xl font-black text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-muted">{item.copy}</p>
                </div>
                <span className="absolute left-[0.68rem] top-2 h-7 w-7 rounded-full border border-primary bg-background shadow-[0_0_28px_rgba(0,245,255,0.45)] md:left-[calc(50%-0.875rem)]" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
