
export default function BlogPage() {
  return (
    <section className="container mt-10">
      <h1 className="text-2xl font-semibold">Journal</h1>
      <p className="text-sm text-[var(--muted)] mt-2">Post routines, ingredient spotlights, brand stories.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <article className="card p-6">Post One (placeholder)</article>
        <article className="card p-6">Post Two (placeholder)</article>
        <article className="card p-6">Post Three (placeholder)</article>
      </div>
    </section>
  );
}
