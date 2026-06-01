"use client";

import { ArrowRight, Fingerprint } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function FinalCta() {
  return (
    <section id="cta" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 cyber-grid animate-grid opacity-30" />
      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="glass-panel neon-border mx-auto max-w-5xl rounded-lg px-6 py-12 text-center sm:px-12 sm:py-16"
        >
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-md border border-accent/40 bg-accent/10">
            <Fingerprint className="h-7 w-7 text-accent" />
          </div>
          <p className="section-kicker">Operator Access</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-none text-white sm:text-6xl">
            Step Into The Human + AI Era
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Join the early access network for cybernetic systems, neural
            interfaces, and private augmented intelligence.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-8" size="lg" variant="default">
                Join The Evolution
                <ArrowRight className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Access request queued</DialogTitle>
                <DialogDescription>
                  This production-ready landing page can be connected to a CRM,
                  waitlist provider, or server action when you add a backend.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-3 rounded-md border border-white/10 bg-white/5 p-4 font-mono text-sm text-primary">
                <span>STATUS: SECURE CHANNEL READY</span>
                <span>NODE: CYBORG-NEXUS-2050</span>
                <span>ENCRYPTION: QUANTUM-SAFE</span>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </section>
  );
}
