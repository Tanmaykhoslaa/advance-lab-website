import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Download, FileText, MessageSquare, CheckCircle2, Phone, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { getProduct, products } from "@/data/products";
import { downloadDatasheet } from "@/lib/datasheet";
import { useEffect } from "react";

const ProductDetail = () => {
  const { slug = "" } = useParams();
  const navigate = useNavigate();
  const product = getProduct(slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    if (product) document.title = `${product.name} – Advance Lab Equipments`;
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 container py-24 text-center">
          <h1 className="text-3xl font-bold text-[hsl(222_55%_18%)] mb-4">Product not found</h1>
          <Link
            to="/#products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[hsl(222_55%_20%)] text-white text-sm font-semibold hover:bg-[hsl(222_55%_26%)] transition-all"
          >
            Back to Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = product.icon;
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  const requestQuote = () => {
    navigate(`/?product=${encodeURIComponent(product.name)}`);
  };

  return (
    <div className="min-h-screen bg-[hsl(215_20%_96%)]">
      <Navbar />

      {/* Hero strip */}
      <section className="bg-[hsl(222_55%_14%)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[hsl(43_72%_49%/0.05)] blur-[80px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[hsl(43_72%_49%)] to-transparent" />

        <div className="container py-10">
          <Link
            to="/#products"
            className="inline-flex items-center text-sm text-[hsl(220_15%_65%)] hover:text-[hsl(43_72%_60%)] mb-8 transition-colors gap-1.5"
          >
            <ArrowLeft className="h-4 w-4" /> All Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center pb-4">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[hsl(43_72%_65%)] bg-[hsl(43_72%_49%/0.12)] border border-[hsl(43_72%_49%/0.25)] px-3 py-1.5 rounded-full mb-5">
                <Tag className="h-3 w-3" /> {product.category}
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-white mb-5">
                {product.name}
              </h1>
              <p className="text-[hsl(220_15%_68%)] text-base leading-relaxed mb-8 max-w-lg">
                {product.overview}
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={requestQuote}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[hsl(43_72%_49%)] text-[hsl(222_55%_14%)] text-sm font-semibold hover:bg-[hsl(43_80%_55%)] shadow-gold transition-all duration-300"
                >
                  <MessageSquare className="h-4 w-4" /> Request a Quote
                </button>
                <button
                  onClick={() => downloadDatasheet(product)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/20 text-white text-sm font-medium hover:bg-white/8 hover:border-white/35 transition-all duration-300"
                >
                  <Download className="h-4 w-4" /> Download Datasheet
                </button>
                <a
                  href="tel:+917988927387"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/20 text-white text-sm font-medium hover:bg-white/8 hover:border-white/35 transition-all duration-300"
                >
                  <Phone className="h-4 w-4" /> Call
                </a>
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <div className="absolute -inset-6 bg-[hsl(43_72%_49%/0.06)] rounded-full blur-3xl" />
                <div className="relative aspect-square w-72 rounded-2xl border border-white/10 bg-[hsl(222_50%_18%)] flex items-center justify-center shadow-navy animate-float">
                  <div className="h-28 w-28 rounded-2xl bg-[hsl(43_72%_49%)] flex items-center justify-center shadow-gold">
                    <Icon className="h-14 w-14 text-[hsl(222_55%_14%)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16">
        <div className="container grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Key Features */}
            <div className="bg-white rounded-xl border border-[hsl(215_20%_88%)] shadow-soft p-8">
              <h2 className="text-2xl font-bold text-[hsl(222_55%_18%)] mb-6">Key Features</h2>
              <div className="grid sm:grid-cols-2 gap-3 stagger">
                {product.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-start gap-3 p-4 rounded-lg border border-[hsl(215_20%_90%)] bg-[hsl(215_20%_98%)] hover:border-[hsl(43_72%_49%/0.4)] transition-colors duration-200"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[hsl(43_72%_44%)] shrink-0 mt-0.5" />
                    <span className="text-sm text-[hsl(222_25%_30%)]">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="bg-white rounded-xl border border-[hsl(215_20%_88%)] shadow-soft p-8">
              <h2 className="text-2xl font-bold text-[hsl(222_55%_18%)] mb-6">Applications</h2>
              <div className="flex flex-wrap gap-2.5">
                {product.applications.map((a) => (
                  <span
                    key={a}
                    className="px-4 py-2 rounded-full bg-[hsl(222_30%_96%)] border border-[hsl(222_30%_85%)] text-sm font-medium text-[hsl(222_45%_28%)]"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Specs */}
            <div className="bg-white rounded-xl border border-[hsl(215_20%_88%)] shadow-soft overflow-hidden">
              <div className="px-8 py-6 border-b border-[hsl(215_20%_90%)]">
                <h2 className="text-2xl font-bold text-[hsl(222_55%_18%)]">Technical Specifications</h2>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {Object.entries(product.specs).map(([k, v], i) => (
                    <tr
                      key={k}
                      className={i % 2 === 0 ? "bg-[hsl(215_20%_98%)]" : "bg-white"}
                    >
                      <td className="px-8 py-3.5 font-medium text-[hsl(222_35%_25%)] w-2/5">{k}</td>
                      <td className="px-8 py-3.5 text-[hsl(220_15%_48%)]">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            {/* Datasheet */}
            <div className="bg-white rounded-xl border border-[hsl(215_20%_88%)] shadow-soft p-6">
              <div className="h-10 w-10 rounded-lg bg-[hsl(222_30%_95%)] flex items-center justify-center mb-4">
                <FileText className="h-5 w-5 text-[hsl(222_45%_35%)]" />
              </div>
              <h3 className="font-bold text-[hsl(222_50%_18%)] text-base mb-1.5">Product Datasheet</h3>
              <p className="text-sm text-[hsl(220_12%_50%)] mb-5">
                Download the complete technical datasheet with specifications and features.
              </p>
              <button
                onClick={() => downloadDatasheet(product)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-[hsl(215_20%_85%)] text-[hsl(222_45%_28%)] text-sm font-medium hover:border-[hsl(222_45%_55%)] hover:bg-[hsl(222_30%_97%)] transition-all duration-200"
              >
                <Download className="h-4 w-4" /> Download PDF
              </button>
            </div>

            {/* Quote CTA */}
            <div className="rounded-xl bg-[hsl(222_55%_16%)] relative overflow-hidden p-6 shadow-navy">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[hsl(43_72%_49%)] to-transparent" />
              <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-[hsl(43_72%_49%/0.07)] blur-xl" />
              <h3 className="font-bold text-white text-base mb-1.5 relative">Need a Quote?</h3>
              <p className="text-sm text-[hsl(220_15%_68%)] mb-5 relative">
                Get the best pricing and a fast response from our expert team.
              </p>
              <button
                onClick={requestQuote}
                className="relative w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[hsl(43_72%_49%)] text-[hsl(222_55%_14%)] text-sm font-semibold hover:bg-[hsl(43_80%_55%)] shadow-gold transition-all duration-300"
              >
                <MessageSquare className="h-4 w-4" /> Request a Quote
              </button>
            </div>

            {/* Call */}
            <div className="bg-white rounded-xl border border-[hsl(215_20%_88%)] shadow-soft p-6">
              <h3 className="font-bold text-[hsl(222_50%_18%)] text-base mb-1.5">Prefer to Call?</h3>
              <p className="text-sm text-[hsl(220_12%_50%)] mb-4">Speak directly with our sales team.</p>
              <a
                href="tel:+917988927387"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-[hsl(222_30%_82%)] text-[hsl(222_45%_28%)] text-sm font-medium hover:bg-[hsl(222_30%_97%)] transition-all duration-200"
              >
                <Phone className="h-4 w-4" /> +91 79889 27387
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Related products */}
      <section className="py-16 bg-white border-t border-[hsl(215_20%_88%)]">
        <div className="container">
          <h2 className="text-2xl font-bold text-[hsl(222_55%_18%)] mb-8">Related Products</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {related.map((p) => {
              const RIcon = p.icon;
              return (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}`}
                  className="group flex flex-col bg-[hsl(215_20%_97%)] border border-[hsl(215_20%_88%)] rounded-xl p-6 hover:border-[hsl(43_72%_49%/0.4)] hover:shadow-card hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-11 w-11 rounded-lg bg-[hsl(222_55%_14%)] flex items-center justify-center mb-4 group-hover:bg-[hsl(43_72%_49%)] transition-all duration-300">
                    <RIcon className="h-5 w-5 text-[hsl(43_72%_60%)] group-hover:text-[hsl(222_55%_14%)] transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-[hsl(222_40%_20%)] text-sm leading-snug mb-1">
                    {p.name}
                  </h3>
                  <p className="text-xs text-[hsl(220_12%_52%)]">{p.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetail;
