import ProductCard, { type Product } from "@/components/ProductCard";

const products: Product[] = [
  { handle: "hydration-serum", title: "Hydration Serum", price: "$42", image: "/p1.jpg", badges: ["Clean"] },
  { handle: "radiance-mask", title: "Radiance Mask", price: "$36", image: "/p2.jpg" },
  { handle: "calming-cream", title: "Calming Cream", price: "$48", image: "/p3.jpg" },
  { handle: "vitamin-c", title: "Vitamin C Booster", price: "$40", image: "/p4.jpg" },
  { handle: "overnight-balm", title: "Overnight Balm", price: "$44", image: "/p5.jpg" },
  { handle: "spf-veil", title: "SPF Veil SPF 30", price: "$38", image: "/p6.jpg" },
  { handle: "clay-cleanser", title: "Purifying Clay Cleanser", price: "$29", image: "/p7.jpg" },
  { handle: "eye-cream", title: "Peptide Eye Cream", price: "$34", image: "/p8.jpg" },
];

export default function ShopPage() {
  return (
    <section className="container mt-10">
      <div className="flex items-end justify-between mb-4">
        <h1 className="text-2xl font-semibold">Shop</h1>
        <p className="text-sm text-[var(--muted)]">Replace product data later or connect Shopify.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {products.map(p => <ProductCard key={p.handle} product={p} />)}
      </div>
    </section>
  );
}
