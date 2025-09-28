import Link from "next/link";

export default function Hero() {
  return (
    <section className="container mt-12 md:mt-16">
      <div className="card p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Clean beauty, thoughtfully curated.</h1>
          <p className="text-[var(--muted)] mt-4 max-w-xl">
            Replace this hero copy. Add your brand’s promise and a short value proposition.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/shop" className="rounded-full bg-black text-white px-5 py-3 text-sm">Shop now</Link>
            <Link href="/clean" className="rounded-full border border-[var(--border)] px-5 py-3 text-sm">Our Standard</Link>
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg)]">
            <img src="/hero-placeholder.jpg" alt="Upload your hero image to /public" className="w-full h-full object-cover" />
          </div>
          <p className="text-xs text-[var(--muted)] mt-2">Upload <code>hero-placeholder.jpg</code> to <code>/public</code>.</p>
        </div>
      </div>
    </section>
  );
}
