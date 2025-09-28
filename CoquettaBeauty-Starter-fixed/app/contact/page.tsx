
export default function ContactPage() {
  return (
    <section className="container mt-10">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <div className="card p-6 mt-4">
        <form className="grid gap-3 max-w-lg">
          <input placeholder="Name" className="rounded-xl border border-[var(--border)] px-3 py-2" />
          <input placeholder="Email" className="rounded-xl border border-[var(--border)] px-3 py-2" />
          <textarea placeholder="Message" className="rounded-xl border border-[var(--border)] px-3 py-2 min-h-[120px]" />
          <button className="rounded-full bg-black text-white px-5 py-3 text-sm w-max">Send</button>
        </form>
        <p className="text-xs text-[var(--muted)] mt-3">Wire this to a form service later (Formspree, Basin, etc.).</p>
      </div>
    </section>
  );
}
