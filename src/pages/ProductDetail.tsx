import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Download, FileText, MessageSquare, CheckCircle2, Phone, Tag, Layers, ChevronRight, ChevronLeft, Pipette, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { getProduct, products, type ProductModel } from "@/data/products";
import { downloadDatasheet } from "@/lib/datasheet";
import { useEffect, useState } from "react";

const ProductVideoSlider = ({ videos }: { videos: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative group w-full h-full flex items-center justify-center">
      <video
        key={videos[currentIndex]}
        autoPlay
        muted
        loop
        playsInline
        className="w-auto h-auto max-w-full max-h-full object-contain"
      >
        <source src={videos[currentIndex]} type="video/mp4" />
      </video>
      
      {videos.length > 1 && (
        <>
          <button 
            onClick={(e) => { e.preventDefault(); setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 bg-black/40 backdrop-blur-md border border-border text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-primary hover:text-primary-foreground clip-hexagon"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={(e) => { e.preventDefault(); setCurrentIndex((prev) => (prev + 1) % videos.length); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 bg-black/40 backdrop-blur-md border border-border text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-primary hover:text-primary-foreground clip-hexagon"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {videos.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 transition-all duration-300 rounded-none ${idx === currentIndex ? 'w-8 bg-primary' : 'w-4 bg-white/30 hover:bg-white/50'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const ProductDetail = () => {
  const { slug = "" } = useParams();
  const navigate = useNavigate();
  const product = getProduct(slug);
  const [selectedModel, setSelectedModel] = useState<ProductModel | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setSelectedModel(null); // reset when product changes
    if (product) document.title = `${product.name} – Advance Lab Equipments`;
  }, [product, slug]);

  useEffect(() => {
    if (zoomedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [zoomedImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-1 container py-24 text-center">
          <h1 className="text-3xl font-black text-foreground mb-4 uppercase">Product not found</h1>
          <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary text-sm font-black uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all shadow-orange">
            Back to Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = product.icon;
  const requestQuote = () => {
    const itemName = selectedModel ? `${product.name} - ${selectedModel.name}` : product.name;
    navigate(`/?product=${encodeURIComponent(itemName)}`);
  };

  const handleDownload = () => {
    const brochureUrl = selectedModel?.brochure || product.brochure;
    if (brochureUrl) {
      const a = document.createElement("a");
      a.href = brochureUrl;
      // Extract filename from URL or use a default
      const fileName = brochureUrl.split('/').pop() || `${product.slug}-brochure.pdf`;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      downloadDatasheet(product);
    }
  };

  const hasModels = product.models && product.models.length > 0;
  const isModelSelected = selectedModel !== null;
  const showModelsGrid = hasModels && !isModelSelected;

  const displayFeatures = isModelSelected && selectedModel.features ? selectedModel.features : product.features;
  const displaySpecs = isModelSelected ? selectedModel.specs : product.specs;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Strip */}
      <section className="bg-card relative overflow-hidden transition-all duration-500 border-b-2 border-border">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[80px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 blur-[50px] pointer-events-none" />

        <div className="container py-12 relative z-10">
          {isModelSelected ? (
            <button onClick={() => setSelectedModel(null)} className="inline-flex items-center text-sm font-bold text-muted-foreground hover:text-primary mb-8 transition-colors gap-1.5 uppercase tracking-wider">
              <ArrowLeft className="h-4 w-4" /> Back to Models
            </button>
          ) : (
            <Link to="/products" className="inline-flex items-center text-sm font-bold text-muted-foreground hover:text-primary mb-8 transition-colors gap-1.5 uppercase tracking-wider">
              <ArrowLeft className="h-4 w-4" /> All Products
            </Link>
          )}

          <div className="grid lg:grid-cols-2 gap-12 items-center pb-8">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.12em] text-primary bg-primary/10 border-2 border-primary/20 px-3 py-1.5 clip-hexagon">
                  <Tag className="h-3 w-3" /> {product.category}
                </span>
                {isModelSelected && (
                  <>
                    <ChevronRight className="h-4 w-4 text-muted-foreground/80" />
                    <span className="text-sm font-bold text-foreground/80 uppercase tracking-widest">{product.name}</span>
                  </>
                )}
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-foreground mb-6 uppercase tracking-tight font-serif">
                {isModelSelected ? selectedModel.name : product.name}
              </h1>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl font-medium border-l-2 border-primary pl-4">
                {isModelSelected ? selectedModel.description : product.overview}
              </p>

              {!showModelsGrid && (
                <div className="flex flex-wrap gap-4 animate-fade-in">
                  <button onClick={requestQuote} className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-black uppercase tracking-widest hover:bg-primary/90 shadow-orange transition-all duration-300">
                    <MessageSquare className="h-4 w-4" /> Request a Quote
                  </button>
                  <button onClick={handleDownload} className="inline-flex items-center gap-2 px-8 py-4 bg-background border-2 border-border text-foreground text-sm font-black uppercase tracking-widest hover:bg-card hover:border-primary transition-all duration-300 shadow-dark">
                    <Download className="h-4 w-4" /> Download Datasheet
                  </button>
                </div>
              )}
            </div>

            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-2xl">
                <div className="absolute -inset-10 bg-primary/10 blur-[100px] animate-pulse pointer-events-none" />
                <div className={`relative aspect-square sm:aspect-video w-full border-2 overflow-hidden shadow-dark transition-all duration-500 ${
                  (isModelSelected && selectedModel.image) || (!isModelSelected && product.mainImage)
                    ? "bg-background border-border"
                    : "bg-muted border-border"
                }`}>
                  {isModelSelected && selectedModel.image ? (
                    <img 
                      src={selectedModel.image} 
                      alt={selectedModel.name} 
                      className="w-full h-full object-contain p-2 sm:p-4 cursor-zoom-in hover:scale-[1.02] transition-transform duration-300 bg-white"
                      onClick={() => setZoomedImage(selectedModel.image)}
                    />
                  ) : product.videos && product.videos.length > 0 && !isModelSelected ? (
                    <ProductVideoSlider videos={product.videos} />
                  ) : product.mainImage ? (
                    <img 
                      src={product.mainImage} 
                      alt={product.name} 
                      className="w-full h-full object-contain p-3 sm:p-8 cursor-zoom-in hover:scale-[1.02] transition-transform duration-300 bg-white"
                      onClick={() => setZoomedImage(product.mainImage)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="h-28 w-28 bg-primary flex items-center justify-center shadow-orange animate-float clip-hexagon">
                        <Icon className="h-14 w-14 text-primary-foreground" />
                      </div>
                    </div>
                  )}
                  {/* Corner accents for image container */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body Section */}
      <section className="py-16 min-h-[50vh]">
        {showModelsGrid ? (
          <div className="container">
            <h2 className="text-3xl font-black text-foreground mb-10 flex items-center gap-3 uppercase font-serif">
              <Layers className="h-8 w-8 text-primary" /> Select a Model
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.models!.map((model) => (
                <div key={model.id} onClick={() => setSelectedModel(model)} className="group relative flex flex-col bg-background border-2 border-border overflow-hidden hover:border-primary hover:shadow-orange transition-all duration-300 cursor-pointer clip-hexagon-sm">
                  <div className="h-[240px] w-full overflow-hidden bg-white p-2 flex items-center justify-center border-b-2 border-border">
                    {model.image ? <img src={model.image} alt={model.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" /> : <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground/50"><Icon className="h-12 w-12" /></div>}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-black text-foreground mb-2 uppercase tracking-wide">{model.name}</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="h-3 w-3 text-primary" />
                      <span className="text-[10px] font-mono font-black tracking-wider text-foreground bg-primary/10 px-2 py-0.5 border border-primary/20">{model.modelNumber}</span>
                    </div>
                    <p className="text-sm font-bold text-muted-foreground leading-relaxed mb-6 line-clamp-3">{model.description}</p>
                    <span className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-1 group-hover:translate-x-2 transition-transform">View Details <ChevronRight className="h-4 w-4" /></span>
                  </div>
                  <div className="absolute top-0 right-0 w-8 h-8 bg-primary transform translate-x-4 -translate-y-4 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="container grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Features */}
                <div className="bg-card border-2 border-border shadow-dark p-8">
                  <h2 className="text-2xl font-black text-foreground mb-8 flex items-center gap-3 uppercase font-serif">
                    <CheckCircle2 className="h-6 w-6 text-primary" /> Key Features
                  </h2>
                  <div className="space-y-3">
                    {displayFeatures.map((f) => (
                      <div key={f} className="flex items-start gap-3 p-4 border-2 border-border bg-background group hover:border-primary transition-colors">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Accessories */}
                {(isModelSelected && selectedModel.accessories || product.accessories) && (
                  <div className="bg-card border-2 border-border shadow-dark p-8">
                    <h2 className="text-2xl font-black text-foreground mb-8 flex items-center gap-3 uppercase font-serif">
                      <Pipette className="h-6 w-6 text-primary" /> Standard Accessories
                    </h2>
                    <div className="space-y-3">
                      {(isModelSelected ? selectedModel.accessories : product.accessories)?.map((a) => (
                        <div key={a} className="flex items-start gap-3 p-4 border-2 border-border bg-background group hover:border-primary transition-colors">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors">{a}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-card border-2 border-border shadow-dark overflow-hidden">
                <div className="px-4 sm:px-8 py-4 sm:py-6 border-b-2 border-border bg-background">
                  <h2 className="text-xl font-black text-foreground uppercase tracking-widest">Technical Specifications</h2>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    {Object.entries(displaySpecs).map(([k, v], i) => (
                      <tr key={k} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-muted/30" : "bg-card"}`}>
                        <td className="px-4 sm:px-8 py-4 font-black text-foreground w-[40%]">{k}</td>
                        <td className="px-4 sm:px-8 py-4 font-bold text-muted-foreground">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <aside className="space-y-8">
              <div className="bg-card border-2 border-border shadow-dark p-8 group hover:border-primary transition-colors">
                <div className="h-14 w-14 bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 clip-hexagon"><FileText className="h-6 w-6 text-primary" /></div>
                <h3 className="font-black uppercase tracking-wider text-foreground mb-2">Technical Datasheet</h3>
                <p className="text-sm font-bold text-muted-foreground mb-8">Download the full catalog details in PDF format.</p>
                <button onClick={handleDownload} className="w-full py-4 border-2 border-primary text-foreground font-black uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center gap-2 shadow-orange">
                  <Download className="h-4 w-4" /> Download PDF
                </button>
              </div>

              <div className="bg-card border-2 border-primary p-8 text-foreground relative overflow-hidden shadow-dark group">
                {/* Diagonal Accent */}
                <div className="absolute -right-12 -top-12 w-32 h-32 bg-primary transform rotate-45 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none" />
                
                <h3 className="font-black uppercase tracking-wider text-xl mb-3 relative z-10">Request a Quote</h3>
                <p className="text-sm font-bold text-muted-foreground mb-8 relative z-10">Get specialized pricing for your laboratory requirements.</p>
                <button onClick={requestQuote} className="w-full py-4 bg-primary text-primary-foreground font-black uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 shadow-orange hover:-translate-y-1">
                  Contact Sales
                </button>
              </div>

              {/* Sidebar Video Card */}
              {(isModelSelected && (selectedModel.video || (product.videos && product.videos.length > 0))) && (
                <div className="bg-card border-2 border-border shadow-dark overflow-hidden p-2 group hover:border-primary transition-colors">
                  <div className="aspect-video bg-black/5 overflow-hidden">
                    {selectedModel.video ? (
                      <video key={selectedModel.video} autoPlay muted loop playsInline className="w-full h-full object-contain">
                        <source src={selectedModel.video} type="video/mp4" />
                      </video>
                    ) : product.videos ? (
                      <ProductVideoSlider videos={product.videos} />
                    ) : null}
                  </div>
                  <div className="p-5 bg-background border-t-2 border-border">
                    <h4 className="font-black uppercase tracking-wider text-foreground text-sm mb-1">Product Showcase</h4>
                    <p className="text-xs font-bold text-muted-foreground">Watch the demonstration of this instrument.</p>
                  </div>
                </div>
              )}
            </aside>
          </div>
        )}
      </section>

      <Footer />
      <WhatsAppButton />

      {/* Lightbox / Zoom Modal */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-md transition-all duration-300"
          onClick={() => setZoomedImage(null)}
        >
          {/* Close button */}
          <button 
            onClick={(e) => { e.stopPropagation(); setZoomedImage(null); }}
            className="absolute top-6 right-6 h-12 w-12 border-2 border-primary bg-background text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all z-[110] clip-hexagon shadow-orange"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-[95%] max-h-[85vh] md:max-w-[85%] md:max-h-[90vh] bg-white border-4 border-primary p-4 md:p-8 overflow-hidden shadow-dark flex items-center justify-center animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary" />
            
            <img 
              src={zoomedImage} 
              alt="Expanded product view" 
              className="max-w-full max-h-[75vh] md:max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
