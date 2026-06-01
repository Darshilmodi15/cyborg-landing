"use client";

import { useState } from "react";
import { BrainCircuit, Cpu, Eye, Network } from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { capabilities } from "@/lib/site-data";

const icons = [BrainCircuit, Cpu, Eye, Network];

function TiltCapabilityCard({
  capability,
  index,
}: {
  capability: (typeof capabilities)[number];
  index: number;
}) {
  const Icon = icons[index];
  const [transform, setTransform] = useState(
    "perspective(900px) rotateX(0deg) rotateY(0deg)",
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = (x / rect.width - 0.5) * 10;
        const rotateX = (y / rect.height - 0.5) * -10;
        setTransform(
          `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
        );
      }}
      onMouseLeave={() =>
        setTransform("perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)")
      }
      style={{ transform }}
      className="h-full transition-transform duration-200"
    >
      <Card className="shine-card h-full rounded-lg p-0">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-md border border-primary/30 bg-primary/10">
              <Icon className="h-6 w-6 text-primary" />
            </span>
            <span className="font-mono text-sm font-black text-accent">
              {capability.metric}
            </span>
          </div>
          <CardTitle>{capability.title}</CardTitle>
          <CardDescription>{capability.copy}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-1 rounded-full bg-white/10">
            <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-primary via-accent to-secondary" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <Badge>Cybernetic Capabilities</Badge>
          <h2 className="section-title mt-5">
            Built for operators who need cognition at machine speed.
          </h2>
          <p className="section-copy mt-6">
            Every module is designed around low-latency perception, private
            inference, and a direct path from signal to action.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((capability, index) => (
            <TiltCapabilityCard
              capability={capability}
              index={index}
              key={capability.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
