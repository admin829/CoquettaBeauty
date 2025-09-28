import Link from "next/link";

export type Product = {
  handle: string;
  title: string;
  price: string;
  image: string;
  badges?: string[];
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.handle}`} className="card block overflow-hidden group">
      <div className="aspect-[4/5] bg-[var(--bg)] relative">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {product.badges?.length ? (
          <div className="absolute top-3 left-3 flex gap-2">
            {product.badges.map((b) => (
              <span key={b} className="text-xs rounded-full bg-white/90 border border-[var(--border)] px-2 py-1">{b}</span>
            ))}
          </div>
        ) : null}
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium">{product.title}</h3>
        <p className="text-sm text-[var(--muted)]">{product.price}</p>
      </div>
    </Link>
  );
}
