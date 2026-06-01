import { AtSign, Code2, Network, Shield } from "lucide-react";

import { socialLinks } from "@/lib/site-data";

const icons = [AtSign, Network, Code2];

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md border border-primary/40 bg-primary/10">
            <Shield className="h-5 w-5 text-primary" />
          </span>
          <div>
            <p className="font-mono text-sm font-black uppercase text-white">
              Cyborg Nexus
            </p>
            <p className="mt-1 text-sm text-muted">
              Copyright 2050 Cyborg Nexus. All rights reserved.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm font-semibold text-muted">
          <a className="transition hover:text-primary" href="/privacy">
            Privacy Policy
          </a>
          <a className="transition hover:text-primary" href="/terms">
            Terms
          </a>
          {socialLinks.map((link, index) => {
            const Icon = icons[index];

            return (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 transition hover:text-primary"
                target="_blank"
                rel="noreferrer"
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
