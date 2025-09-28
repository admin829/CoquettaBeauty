import Link from "next/link";

export default function ProductPage({ params }: { params: { handle: string }}) {
  const { handle } = params;
  // Placeholder PDP. Replace with Shopify Storefront API later.
  return (
    <section className="container mt-10">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg)]">
          <img src="/p1.jpg" alt="Upload product image" className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold capitalize">{handle.replaceAll("-", " ")}</h1>
          <p className="text-lg mt-1">$42.00</p>
          <p className="text-sm text-[var(--muted)] mt-4">Short product description. Benefits, skin types, routine.</p>
          <button className="mt-6 rounded-full bg-black text-white px-6 py-3 text-sm">Add to cart</button>
          <div className="mt-8 space-y-4">
            <details className="card p-4">
              <summary className="font-medium cursor-pointer">Ingredients</summary>
              <div className="text-sm text-[var(--muted)] mt-2">List ingredients and link to glossary entries.</div>
            </details>
            <details className="card p-4">
              <summary className="font-medium cursor-pointer">How to use</summary>
              <div className="text-sm text-[var(--muted)] mt-2">Routine guidance and usage tips.</div>
            </details>
            <details className="card p-4">
              <summary className="font-medium cursor-pointer">Clean Standard</summary>
              <div className="text-sm text-[var(--muted)] mt-2">Compliant wording. No medical claims.</div>
            </details>
          </div>
          <p className="text-xs text-[var(--muted)] mt-6">Cart/checkout will connect to Shopify later.</p>
          <p className="text-xs mt-2"><Link href="/shop" className="underline underline-offset-4">← Back to shop</Link></p>
        </div>
      </div>
    </section>
  );
}
