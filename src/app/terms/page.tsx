import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms placeholder for the Cyborg Nexus landing page concept.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-28 text-white">
      <div className="mx-auto max-w-3xl">
        <Link className="font-mono text-sm font-bold text-primary" href="/">
          Back to Cyborg Nexus
        </Link>
        <h1 className="mt-8 text-4xl font-black sm:text-6xl">Terms</h1>
        <p className="mt-6 leading-8 text-muted">
          These terms are a production placeholder. Before launch, replace this
          route with legal language that covers availability, acceptable use,
          warranties, liability, intellectual property, and governing law.
        </p>
      </div>
    </main>
  );
}
