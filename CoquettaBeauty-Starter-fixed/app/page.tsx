import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";

const featured = [
  { handle: "hydration-serum", title: "Hydration Serum", price: "$42", image: "/p1.jpg", badges: ["Bestseller","Clean"] },
  { handle: "radiance-mask", title: "Radiance Mask", price: "$36", image: "/p2.jpg", badges: ["New"] },
  { handle: "calming-cream", title: "Calming Cream", price: "$48", image: "/p3.jpg" },
  { handle: "vitamin-c", title: "Vitamin C Booster", price: "$40", image: "/p4.jpg" },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="container mt-14">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-xl font-semibold">Featured</h2>
          <a href="/shop" className="text-sm underline underline-offset-4">View all</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {featured.map(p => <ProductCard key={p.handle} product={p} />)}
        </div>
      </section>

      <section className="container mt-16">
        <div className="card p-8 md:p-10 text-center">
          <h3 className="text-2xl font-semibold">Our Clean Standard</h3>
          <p className="text-[var(--muted)] mt-3 max-w-2xl mx-auto">
            Explain your ingredient philosophy and what you avoid. Link to your full policy and glossary.
          </p>
          <div className="mt-6">
            <a href="/clean" className="rounded-full bg-black text-white px-5 py-3 text-sm">Learn more</a>
          </div>
        </div>
      </section>
    </>
  );
}
