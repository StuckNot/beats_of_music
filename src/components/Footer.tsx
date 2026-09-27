import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5 bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold">{site.name}</p>
          <p className="mt-2 text-sm text-cream/70">{site.description}</p>
          <p className="mt-4 text-xs uppercase tracking-wide text-accent">
            MSME Registered &middot; {site.msmeNumber}
          </p>
        </div>
        <div className="text-sm text-cream/80">
          <p className="font-semibold text-cream">Contact</p>
          <p className="mt-2">{site.address}</p>
          <p className="mt-1">
            <a href={`tel:${site.phone}`} className="hover:text-accent">
              {site.phone}
            </a>
          </p>
          <p className="mt-1">
            <a href={`mailto:${site.email}`} className="hover:text-accent">
              {site.email}
            </a>
          </p>
        </div>
        <div className="text-sm text-cream/80">
          <p className="font-semibold text-cream">Explore</p>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/portfolio" className="hover:text-accent">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-accent">
                Services
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:text-accent">
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 px-6 py-4 text-center text-xs text-cream/50">
        &copy; {new Date().getFullYear()} {site.name}. Since {site.foundedYear}.
      </div>
    </footer>
  );
}
