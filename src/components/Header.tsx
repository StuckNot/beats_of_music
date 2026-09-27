import Link from "next/link";
import { site } from "@/content/site";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/why-us", label: "Why Us" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-lg font-semibold text-brand">{site.name}</span>
          <span className="text-xs text-muted">{site.tagline}</span>
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-ink md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-cream hover:bg-brand-dark"
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
