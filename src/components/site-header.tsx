"use client";

import { Menu, MoveRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-background/62 backdrop-blur-2xl">
      <div className="section-shell flex h-16 items-center justify-between">
        <a
          href="#hero"
          className="group flex items-center gap-3"
          aria-label="Cyborg Nexus home"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-md border border-primary/40 bg-primary/10 shadow-[0_0_28px_rgba(0,245,255,0.22)]">
            <span className="h-3 w-3 rounded-sm bg-primary transition group-hover:bg-accent" />
          </span>
          <span className="font-mono text-sm font-black uppercase text-white">
            Cyborg Nexus
          </span>
        </a>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-muted transition hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm" variant="outline">
            <a href="#cta">
              Join
              <MoveRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="md:hidden"
              size="icon"
              variant="ghost"
              aria-label="Open navigation"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="mt-10 flex flex-col gap-7">
              <span className="font-mono text-sm font-black uppercase text-primary">
                Cyborg Nexus
              </span>
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <a
                    href={item.href}
                    className="border-b border-white/10 pb-4 text-lg font-bold text-white"
                  >
                    {item.label}
                  </a>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild variant="neon">
                  <a href="#cta">Join The Evolution</a>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
