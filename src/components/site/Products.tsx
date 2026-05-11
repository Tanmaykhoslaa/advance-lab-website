import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { ArrowRight, Tag } from "lucide-react";

export const Products = () => {
  return (
    <section id="products" className="py-24 bg-[hsl(215_20%_96%)]">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="section-eyebrow justify-center mb-4">
            Our Portfolio
          </p>
          <h2 className="text-4xl sm:text-6xl font-bold text-[hsl(222_55%_18%)] mb-6 tracking-tight">
            Complete Range of{" "}
            <span className="text-gold-gradient">Lab Instruments</span>
          </h2>
          <p className="text-[hsl(220_15%_46%)] text-lg leading-relaxed max-w-2xl mx-auto">
            From analytical to pharmaceutical — every instrument is engineered for extreme accuracy
            and built to withstand rigorous laboratory environments.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-[hsl(215_20%_90%)] shadow-soft hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                {/* Image Section */}
                <div className="relative h-[320px] w-full overflow-hidden bg-gradient-to-b from-white to-[#f3f6fb] px-2 py-1 flex items-center justify-center border-b border-[hsl(215_20%_92%)]">
                  {p.mainImage ? (
                    <img
                      src={p.mainImage}
                      alt={p.name}
                      className="w-full h-full object-contain scale-[1.12] transition-transform duration-700 group-hover:scale-[1.18]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[hsl(222_55%_14%)] rounded-xl">
                      <Icon className="h-16 w-16 text-[hsl(43_72%_60%)] opacity-20" />
                    </div>
                  )}

                  {/* Glassmorphism Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest shadow-xl">
                    <Tag className="h-3 w-3" /> {p.category}
                  </div>

                  {/* Floating Icon */}
                  <div className="absolute -bottom-6 right-8 h-14 w-14 rounded-2xl bg-[hsl(222_55%_14%)] flex items-center justify-center text-[hsl(43_72%_49%)] shadow-2xl group-hover:bg-[hsl(43_72%_49%)] group-hover:text-[hsl(222_55%_14%)] transition-all duration-500 group-hover:rotate-12">
                    <Icon className="h-7 w-7" />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222_55%_14%/0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Section */}
                <div className="p-8 pt-10">
                  <h3 className="text-2xl font-bold text-[hsl(222_55%_18%)] mb-3 group-hover:text-[hsl(43_72%_49%)] transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-[hsl(220_12%_50%)] text-base leading-relaxed mb-8 line-clamp-2">
                    {p.desc}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[hsl(222_55%_14%)] group-hover:translate-x-2 transition-transform duration-300">
                      Explore Models <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[hsl(43_72%_49%)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
