
export default function IngredientsPage() {
  return (
    <section className="container mt-10">
      <h1 className="text-2xl font-semibold">Ingredient Glossary</h1>
      <p className="text-sm text-[var(--muted)] mt-2">A → Z glossary. Each entry can be a page later.</p>
      <ul className="mt-6 grid md:grid-cols-2 gap-4">
        <li className="card p-4">Niacinamide — supports skin barrier</li>
        <li className="card p-4">Hyaluronic Acid — hydrates, plumps appearance</li>
        <li className="card p-4">Peptides — support firmness (cosmetic claim)</li>
        <li className="card p-4">Vitamin C — brightens the appearance</li>
      </ul>
    </section>
  );
}
