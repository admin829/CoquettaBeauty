
export default function CollectionsPage() {
  return (
    <section className="container mt-10">
      <h1 className="text-2xl font-semibold">Collections</h1>
      <p className="text-sm text-[var(--muted)] mt-2">Create curated groupings (Hydration, SPF, Sleep, etc.).</p>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="card p-6">Hydration</div>
        <div className="card p-6">SPF</div>
        <div className="card p-6">Calming</div>
      </div>
    </section>
  );
}
