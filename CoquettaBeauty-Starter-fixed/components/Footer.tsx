import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--border)]">
      <div className="container py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <h4 className="font-semibold mb-3">{site.name}</h4>
          <p className="text-sm text-[var(--muted)] max-w-sm">
            {site.tagline}. Replace this copy in <code>/lib/site.ts</code>.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            {site.nav.map(n => (
              <li key={n.href}><Link href={n.href} className="hover:underline underline-offset-4">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Newsletter</h4>
          <form className="flex gap-2">
            <input placeholder="Email address" className="flex-1 rounded-xl border border-[var(--border)] px-3 py-2" />
            <button className="rounded-xl bg-black text-white px-4">Join</button>
          </form>
          <p className="text-xs text-[var(--muted)] mt-2">Connect email later (Klaviyo/Mailchimp).</p>
        </div>
      </div>
      <div className="border-t border-[var(--border)]">
        <div className="container text-xs text-[var(--muted)] py-4 flex justify-between">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>Design starter by you + ChatGPT</span>
        </div>
      </div>
    </footer>
  );
}
