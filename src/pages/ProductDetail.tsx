import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Download, FileText, MessageSquare, CheckCircle2, Phone } from "lucide-react";
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
          <h1 className="text-3xl font-bold mb-4">Product not found</h1>
          <Button asChild variant="hero"><Link to="/#products">Back to Products</Link></Button>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = product.icon;
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  const requestQuote = () => {
    navigate(`/?product=${encodeURIComponent(product.name)}#contact`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="gradient-soft border-b border-border">
        <div className="container py-10">
          <Link to="/#products" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="h-4 w-4 mr-1" /> All Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                {product.category}
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4">{product.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">{product.overview}</p>

              <div className="flex flex-wrap gap-3">
                <Button variant="hero" size="lg" onClick={requestQuote}>
                  <MessageSquare className="mr-2 h-4 w-4" /> Request a Quote
                </Button>
                <Button variant="outline" size="lg" onClick={() => downloadDatasheet(product)}>
                  <Download className="mr-2 h-4 w-4" /> Download Datasheet
                </Button>
                <Button variant="ghost" size="lg" asChild>
                  <a href="tel:+917988927387"><Phone className="mr-2 h-4 w-4" /> Call</a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 gradient-hero opacity-20 blur-3xl rounded-full" />
              <div className="relative aspect-square max-w-md mx-auto rounded-3xl gradient-card border border-border shadow-card flex items-center justify-center">
                <div className="h-32 w-32 rounded-3xl gradient-hero flex items-center justify-center shadow-glow animate-float">
                  <Icon className="h-16 w-16 text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-5">Key Features</h2>
              <div className="grid sm:grid-cols-2 gap-3 stagger">
                {product.features.map((f) => (
                  <div key={f} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card lift-on-hover">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-5">Applications</h2>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((a) => (
                  <span key={a} className="px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-sm font-medium text-primary">
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-5">Technical Specifications</h2>
              <div className="rounded-2xl border border-border overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {Object.entries(product.specs).map(([k, v], i) => (
                      <tr key={k} className={i % 2 === 0 ? "bg-muted/40" : "bg-card"}>
                        <td className="px-5 py-3 font-medium w-1/2">{k}</td>
                        <td className="px-5 py-3 text-muted-foreground">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-border gradient-card shadow-soft p-6">
              <FileText className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold text-lg mb-2">Product Datasheet</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Download the complete technical datasheet with specifications and features.
              </p>
              <Button variant="outline" className="w-full" onClick={() => downloadDatasheet(product)}>
                <Download className="mr-2 h-4 w-4" /> Download
              </Button>
            </div>

            <div className="rounded-2xl gradient-hero shadow-glow p-6 text-primary-foreground">
              <h3 className="font-bold text-lg mb-2">Need a Quote?</h3>
              <p className="text-sm opacity-90 mb-4">
                Get the best pricing and a fast response from our expert team.
              </p>
              <Button variant="secondary" className="w-full bg-white text-primary hover:bg-white/90" onClick={requestQuote}>
                Request a Quote
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((p) => {
              const RIcon = p.icon;
              return (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}`}
                  className="group gradient-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth"
                >
                  <div className="h-12 w-12 rounded-xl gradient-hero flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                    <RIcon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold leading-tight mb-1">{p.name}</h3>
                  <p className="text-xs text-muted-foreground">{p.desc}</p>
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
