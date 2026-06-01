"use client";

import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { faqs } from "@/lib/site-data";

export function FaqSection() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary">FAQ</Badge>
          <h2 className="section-title mt-5">Questions before the merge.</h2>
          <p className="section-copy mt-6">
            Clear answers for accessibility, privacy, adaptation, and the
            difference between ordinary wearables and closed-loop augmentation.
          </p>
        </motion.div>

        <Accordion
          type="single"
          collapsible
          className="glass-panel rounded-lg px-5 sm:px-7"
        >
          {faqs.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
