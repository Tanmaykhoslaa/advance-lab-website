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
            className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[hsl(43_72%_49%)] hover:text-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={(e) => { e.preventDefault(); setCurrentIndex((prev) => (prev + 1) % videos.length); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[hsl(43_72%_49%)] hover:text-white"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {videos.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-[hsl(43_72%_49%)]' : 'w-2 bg-white/30 hover:bg-white/50'}`}
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
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 container py-24 text-center">
          <h1 className="text-3xl font-bold text-[hsl(222_55%_18%)] mb-4">Product not found</h1>
          <Link to="/#products" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[hsl(222_55%_20%)] text-white text-sm font-semibold hover:bg-[hsl(222_55%_26%)] transition-all">
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
    <div className="min-h-screen bg-[hsl(215_20%_96%)]">
      <Navbar />

      {/* Hero Strip */}
      <section className="bg-[hsl(222_55%_14%)] relative overflow-hidden transition-all duration-500">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[hsl(43_72%_49%/0.05)] blur-[80px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[hsl(43_72%_49%)] to-transparent" />

        <div className="container py-12">
          {isModelSelected ? (
            <button onClick={() => setSelectedModel(null)} className="inline-flex items-center text-sm text-[hsl(220_15%_65%)] hover:text-[hsl(43_72%_60%)] mb-8 transition-colors gap-1.5">
              <ArrowLeft className="h-4 w-4" /> Back to Models
            </button>
          ) : (
            <Link to="/#products" className="inline-flex items-center text-sm text-[hsl(220_15%_65%)] hover:text-[hsl(43_72%_60%)] mb-8 transition-colors gap-1.5">
              <ArrowLeft className="h-4 w-4" /> All Products
            </Link>
          )}

          <div className="grid lg:grid-cols-2 gap-12 items-center pb-8">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[hsl(43_72%_65%)] bg-[hsl(43_72%_49%/0.12)] border border-[hsl(43_72%_49%/0.25)] px-3 py-1.5 rounded-full">
                  <Tag className="h-3 w-3" /> {product.category}
                </span>
                {isModelSelected && (
                  <>
                    <ChevronRight className="h-4 w-4 text-[hsl(220_15%_50%)]" />
                    <span className="text-sm font-medium text-white/80">{product.name}</span>
                  </>
                )}
              </div>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                {isModelSelected ? selectedModel.name : product.name}
              </h1>
              
              <p className="text-[hsl(220_15%_68%)] text-lg leading-relaxed mb-8 max-w-xl">
                {isModelSelected ? selectedModel.description : product.overview}
              </p>

              {!showModelsGrid && (
                <div className="flex flex-wrap gap-3 animate-fade-in">
                  <button onClick={requestQuote} className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[hsl(43_72%_49%)] text-[hsl(222_55%_14%)] text-sm font-semibold hover:bg-[hsl(43_80%_55%)] shadow-gold transition-all duration-300">
                    <MessageSquare className="h-4 w-4" /> Request a Quote
                  </button>
                  <button onClick={handleDownload} className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/20 text-white text-sm font-medium hover:bg-white/8 hover:border-white/35 transition-all duration-300">
                    <Download className="h-4 w-4" /> Download Datasheet
                  </button>
                </div>
              )}
            </div>

            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-2xl">
                <div className="absolute -inset-10 bg-[hsl(43_72%_49%/0.08)] rounded-full blur-[100px] animate-pulse pointer-events-none" />
                <div className={`relative aspect-square sm:aspect-video w-full rounded-2xl border overflow-hidden shadow-2xl transition-all duration-500 ${
                  (isModelSelected && selectedModel.image) || (!isModelSelected && product.mainImage)
                    ? "bg-white border-white/20"
                    : "bg-black/20 border-white/10"
                }`}>
                  {isModelSelected && selectedModel.image ? (
                    <img 
                      src={selectedModel.image} 
                      alt={selectedModel.name} 
                      className="w-full h-full object-contain p-2 sm:p-4 cursor-zoom-in hover:scale-[1.02] transition-transform duration-300"
                      onClick={() => setZoomedImage(selectedModel.image)}
                    />
                  ) : product.videos && product.videos.length > 0 && !isModelSelected ? (
                    <ProductVideoSlider videos={product.videos} />
                  ) : product.mainImage ? (
                    <img 
                      src={product.mainImage} 
                      alt={product.name} 
                      className="w-full h-full object-contain p-3 sm:p-8 cursor-zoom-in hover:scale-[1.02] transition-transform duration-300"
                      onClick={() => setZoomedImage(product.mainImage)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="h-28 w-28 rounded-2xl bg-[hsl(43_72%_49%)] flex items-center justify-center shadow-gold animate-float">
                        <Icon className="h-14 w-14 text-[hsl(222_55%_14%)]" />
                      </div>
                    </div>
                  )}
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
            <h2 className="text-3xl font-bold text-[hsl(222_55%_18%)] mb-10 flex items-center gap-3">
              <Layers className="h-8 w-8 text-[hsl(43_72%_49%)]" /> Select a Model
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.models!.map((model) => (
                <div key={model.id} onClick={() => setSelectedModel(model)} className="group relative flex flex-col bg-white rounded-2xl border border-[hsl(215_20%_90%)] overflow-hidden hover:border-[hsl(43_72%_49%/0.5)] hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="h-[240px] w-full overflow-hidden bg-white p-2 flex items-center justify-center border-b border-[hsl(215_20%_94%)]">
                    {model.image ? <img src={model.image} alt={model.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" /> : <div className="w-full h-full flex items-center justify-center bg-[hsl(215_20%_97%)] rounded-xl text-[hsl(215_20%_80%)]"><Icon className="h-12 w-12" /></div>}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[hsl(222_50%_18%)] mb-1">{model.name}</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="h-3 w-3 text-[hsl(43_72%_49%)]" />
                      <span className="text-[10px] font-mono font-bold tracking-wider text-[hsl(222_55%_14%)] bg-[hsl(43_72%_49%/0.1)] px-2 py-0.5 rounded border border-[hsl(43_72%_49%/0.2)]">{model.modelNumber}</span>
                    </div>
                    <p className="text-sm text-[hsl(220_12%_48%)] leading-relaxed mb-6 line-clamp-3">{model.description}</p>
                    <span className="text-xs font-bold text-[hsl(43_72%_44%)] flex items-center gap-1">View Details <ChevronRight className="h-3 w-3" /></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="container grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Features */}
                <div className="bg-white rounded-2xl border border-[hsl(215_20%_90%)] shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-[hsl(222_55%_18%)] mb-8 flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[hsl(43_72%_49%)]" /> Key Features
                  </h2>
                  <div className="space-y-3">
                    {displayFeatures.map((f) => (
                      <div key={f} className="flex items-start gap-3 p-3 rounded-xl border border-[hsl(215_20%_94%)] bg-[hsl(215_20%_98%)] group hover:border-[hsl(43_72%_49%/0.3)] transition-colors">
                        <CheckCircle2 className="h-4 w-4 text-[hsl(43_72%_49%)] shrink-0 mt-0.5" />
                        <span className="text-sm text-[hsl(222_25%_30%)]">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Accessories */}
                {(isModelSelected && selectedModel.accessories || product.accessories) && (
                  <div className="bg-white rounded-2xl border border-[hsl(215_20%_90%)] shadow-sm p-8">
                    <h2 className="text-2xl font-bold text-[hsl(222_55%_18%)] mb-8 flex items-center gap-3">
                      <Pipette className="h-6 w-6 text-[hsl(43_72%_49%)]" /> Standard Accessories
                    </h2>
                    <div className="space-y-3">
                      {(isModelSelected ? selectedModel.accessories : product.accessories)?.map((a) => (
                        <div key={a} className="flex items-start gap-3 p-3 rounded-xl border border-[hsl(215_20%_94%)] bg-[hsl(215_20%_98%)] group hover:border-[hsl(43_72%_49%/0.3)] transition-colors">
                          <CheckCircle2 className="h-4 w-4 text-[hsl(43_72%_49%)] shrink-0 mt-0.5" />
                          <span className="text-sm text-[hsl(222_25%_30%)]">{a}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-2xl border border-[hsl(215_20%_90%)] shadow-sm overflow-hidden">
                <div className="px-4 sm:px-8 py-4 sm:py-6 border-b border-[hsl(215_20%_94%)] bg-[hsl(215_20%_98%)]">
                  <h2 className="text-xl font-bold text-[hsl(222_55%_18%)]">Technical Specifications</h2>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    {Object.entries(displaySpecs).map(([k, v], i) => (
                      <tr key={k} className={i % 2 === 0 ? "bg-[hsl(215_20%_99%)]" : "bg-white"}>
                        <td className="px-4 sm:px-8 py-3 sm:py-4 font-bold text-[hsl(222_35%_25%)] w-[40%]">{k}</td>
                        <td className="px-4 sm:px-8 py-3 sm:py-4 text-[hsl(220_12%_45%)]">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="bg-white rounded-2xl border border-[hsl(215_20%_90%)] shadow-sm p-6">
                <div className="h-12 w-12 rounded-xl bg-[hsl(43_72%_49%/0.1)] flex items-center justify-center mb-4"><FileText className="h-6 w-6 text-[hsl(43_72%_49%)]" /></div>
                <h3 className="font-bold text-[hsl(222_55%_18%)] mb-2">Technical Datasheet</h3>
                <p className="text-sm text-[hsl(220_12%_48%)] mb-6">Download the full catalog details in PDF format.</p>
                <button onClick={handleDownload} className="w-full py-3 rounded-lg border-2 border-[hsl(222_55%_14%)] text-[hsl(222_55%_14%)] font-bold hover:bg-[hsl(222_55%_14%)] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  <Download className="h-4 w-4" /> Download PDF
                </button>
              </div>

              <div className="bg-[hsl(222_55%_14%)] rounded-2xl p-6 text-white relative overflow-hidden shadow-navy">
                <h3 className="font-bold text-lg mb-2 relative z-10">Request a Quote</h3>
                <p className="text-sm text-white/70 mb-6 relative z-10">Get specialized pricing for your laboratory requirements.</p>
                <button onClick={requestQuote} className="w-full py-3 rounded-lg bg-[hsl(43_72%_49%)] text-[hsl(222_55%_14%)] font-bold hover:bg-[hsl(43_80%_55%)] transition-all duration-300">
                  Contact Sales
                </button>
              </div>

              {/* Sidebar Video Card */}
              {(isModelSelected && (selectedModel.video || (product.videos && product.videos.length > 0))) && (
                <div className="bg-white rounded-2xl border border-[hsl(215_20%_90%)] shadow-sm overflow-hidden p-2">
                  <div className="aspect-video rounded-xl overflow-hidden bg-black/5">
                    {selectedModel.video ? (
                      <video key={selectedModel.video} autoPlay muted loop playsInline className="w-full h-full object-contain">
                        <source src={selectedModel.video} type="video/mp4" />
                      </video>
                    ) : product.videos ? (
                      <ProductVideoSlider videos={product.videos} />
                    ) : null}
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-[hsl(222_50%_18%)] text-sm mb-1">Product Showcase</h4>
                    <p className="text-xs text-[hsl(220_12%_48%)]">Watch the demonstration of this instrument.</p>
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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md transition-all duration-300"
          onClick={() => setZoomedImage(null)}
        >
          {/* Close button */}
          <button 
            onClick={(e) => { e.stopPropagation(); setZoomedImage(null); }}
            className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition-all z-[110]"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-[95%] max-h-[85vh] md:max-w-[85%] md:max-h-[90vh] bg-white rounded-2xl p-4 md:p-6 overflow-hidden shadow-2xl flex items-center justify-center animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
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
