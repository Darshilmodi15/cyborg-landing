import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy principles for the Cyborg Nexus landing page concept.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-28 text-white">
      <div className="mx-auto max-w-3xl">
        <Link className="font-mono text-sm font-bold text-primary" href="/">
          Back to Cyborg Nexus
        </Link>
        <h1 className="mt-8 text-4xl font-black sm:text-6xl">Privacy Policy</h1>
        <p className="mt-6 leading-8 text-muted">
          This concept page is built to be connected to privacy-aware data
          flows. A production implementation should disclose what is collected,
          how it is processed, retention periods, regional rights, and opt-out
          controls.
        </p>
      </div>
    </main>
  );
}
