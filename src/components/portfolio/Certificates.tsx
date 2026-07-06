import { m } from "framer-motion";
import { Eye, Lock, AlertTriangle, Loader2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Section, SectionHeader } from "./Section";

type Cert = {
  id: string;
  title: string;
  issuer: string;
  url?: string;
  type?: "image" | "pdf";
  shortName?: string;
  badge?: string;
};

const seed: Cert[] = [
  {
    id: "athe-diploma",
    title: "Level 3 Diploma in Information and Digital Technologies",
    issuer: "Awards for Training and Higher Education (ATHE), UK",
    url: "/athe-level3-diploma.pdf",
    type: "pdf",
    shortName: "ATHE",
    badge: "Diploma"
  },
  {
    id: "cu-dit",
    title: "Diploma in Information Technology",
    issuer: "Central University, Ghana",
    shortName: "CU",
    badge: "Diploma"
  },
];

export function Certificates() {
  const [certs] = useState<Cert[]>(seed);
  const [view, setView] = useState<Cert | null>(null);

  return (
    <Section id="certificates" className="bg-muted/30">
      <SectionHeader
        eyebrow="Certificates"
        title="Credentials — view only"
        desc="Protected viewer. Downloads and screenshots are blocked."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => (
          <m.div
            key={c.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass card-lift shine-border group relative overflow-hidden rounded-2xl p-5"
          >
            <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-[10px] font-semibold text-primary">
              <Lock className="h-3 w-3" /> Protected
            </div>
            <div className="mb-4 h-40 overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="text-center transition-transform duration-500 group-hover:-translate-y-1">
                <div className="font-display text-4xl font-bold text-gradient">{c.shortName || "CERT"}</div>
                <div className="text-xs text-muted-foreground">{c.badge || "Credential"}</div>
              </div>
            </div>

            <div className="font-display font-semibold">{c.title}</div>
            <div className="text-sm text-muted-foreground">{c.issuer}</div>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                disabled={!c.url}
                onClick={() => c.url && setView(c)}
                className="btn-shine inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-sm text-primary-foreground disabled:opacity-40 disabled:pointer-events-none"
              >
                <Eye className="h-4 w-4" /> View
              </button>
            </div>
          </m.div>
        ))}
      </div>

      <Dialog open={!!view} onOpenChange={(v) => !v && setView(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 font-display">
              <Lock className="h-4 w-4" /> {view?.title} — view only
            </DialogTitle>
          </DialogHeader>
          {view?.url && (
            <div className="mt-4">
              <SecurePdfViewer url={view.url} title={view.title} />
              <p className="mt-3 text-center text-xs text-muted-foreground">
                <Lock className="mr-1 inline h-3 w-3" /> Download, screenshot protection, and right-click are enabled on this certificate.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}

type SecurePdfViewerProps = {
  url: string;
  title: string;
};

function SecurePdfViewer({ url, title }: SecurePdfViewerProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pdfjs, setPdfjs] = useState<any>(null);
  const [isFocused, setIsFocused] = useState<boolean>(true);

  // Load pdf.js from CDN dynamically to avoid compilation/worker bundling issues in Vite/SSR
  useEffect(() => {
    let active = true;
    
    const loadPdfjs = async () => {
      try {
        if ((window as any).pdfjsLib) {
          if (active) setPdfjs((window as any).pdfjsLib);
          return;
        }

        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
        script.async = true;
        
        const loadPromise = new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
        });

        document.head.appendChild(script);
        await loadPromise;

        const pdfjsLib = (window as any).pdfjsLib;
        pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
        if (active) setPdfjs(pdfjsLib);
      } catch (err) {
        console.error("Failed to load PDF library:", err);
        if (active) setError("Could not load PDF viewer library. Please check your internet connection.");
      }
    };

    loadPdfjs();

    return () => {
      active = false;
    };
  }, []);

  // Listen for window blur/focus events to blur the certificate when screenshotting or losing focus
  useEffect(() => {
    const handleBlur = () => setIsFocused(false);
    const handleFocus = () => setIsFocused(true);

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    // Also, block keyboard shortcuts for Print (Ctrl+P), Save (Ctrl+S), PrintScreen, Copying, and DevTools
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl + P
      if ((e.ctrlKey || e.metaKey) && e.key === "p") {
        e.preventDefault();
        alert("Printing is disabled for this secure document.");
      }
      // Ctrl + S
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        alert("Saving/downloading is disabled for this secure document.");
      }
      // Print Screen
      if (e.key === "PrintScreen") {
        navigator.clipboard.writeText(""); // clear clipboard
        alert("Screenshots are protected. PrintScreen is disabled.");
      }
    };

    window.addEventListener("keydown", handleKeyDown, true);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("keydown", handleKeyDown, true);
    };
  }, []);

  // Render the PDF onto canvases
  useEffect(() => {
    if (!pdfjs || !url || !containerRef.current) return;

    let active = true;
    setLoading(true);
    setError(null);

    const renderPdf = async () => {
      try {
        // Fetch PDF as array buffer
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.arrayBuffer();

        // Load document
        const loadingTask = pdfjs.getDocument({ data });
        const pdf = await loadingTask.promise;
        
        if (!active) return;
        setLoading(false);

        // Render each page
        const container = containerRef.current;
        if (!container) return;
        container.innerHTML = ""; // Clear loader/previous renders

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          const page = await pdf.getPage(pageNum);
          if (!active) return;

          // Setup canvas
          const viewport = page.getViewport({ scale: 1.5 });
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          if (!context) continue;

          canvas.height = viewport.height;
          canvas.width = viewport.width;
          canvas.className = "w-full shadow-lg rounded-lg mb-6 bg-white select-none pointer-events-none";

          // Container for canvas with relative positioning (for watermark/overlay)
          const pageWrapper = document.createElement("div");
          pageWrapper.className = "relative select-none mb-6 overflow-hidden rounded-lg";
          pageWrapper.style.maxWidth = "100%";

          // Append canvas to page wrapper
          pageWrapper.appendChild(canvas);

          // Append watermark overlay
          const watermark = document.createElement("div");
          watermark.className = "cert-watermark-overlay";
          watermark.innerHTML = `<span class="cert-watermark-text">Yaw Twumasi Portfolio — View Only</span>`;
          pageWrapper.appendChild(watermark);

          // Append page wrapper to container
          container.appendChild(pageWrapper);

          // Render page to canvas
          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          };
          await page.render(renderContext).promise;

          // Draw watermark directly on the canvas (burned into the pixels!)
          context.save();
          context.translate(canvas.width / 2, canvas.height / 2);
          context.rotate(-Math.PI / 6); // 30 degrees
          context.font = "bold 24px 'Space Grotesk', sans-serif";
          context.fillStyle = "rgba(0, 0, 0, 0.04)";
          context.textAlign = "center";
          
          // Draw repeated watermarks across the page
          for (let y = -canvas.height; y < canvas.height; y += 180) {
            for (let x = -canvas.width; x < canvas.width; x += 300) {
              context.fillText("Yaw Twumasi Portfolio — View Only", x, y);
            }
          }
          context.restore();
        }
      } catch (err) {
        console.error("PDF rendering error:", err);
        if (active) {
          setError("Failed to render certificate. Downloads are disabled.");
          setLoading(false);
        }
      }
    };

    renderPdf();

    return () => {
      active = false;
    };
  }, [pdfjs, url]);

  return (
    <div 
      className="relative select-none bg-muted/20 p-2 md:p-6 rounded-xl overflow-hidden"
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      {/* Focus Lost Overlay */}
      {!isFocused && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-background/80 backdrop-blur-xl p-4 text-center rounded-xl transition-all duration-300">
          <AlertTriangle className="h-10 w-10 text-yellow-500 mb-3 animate-bounce" />
          <div className="font-display font-bold text-lg">Viewer Paused</div>
          <p className="text-sm text-muted-foreground max-w-xs mt-1">
            Window lost focus. Click inside the window to restore secure view.
          </p>
        </div>
      )}

      {/* Loading state */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="h-8 w-8 text-primary animate-spin mb-3" />
          <p className="text-sm text-muted-foreground font-medium">Securing and rendering credential...</p>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="flex flex-col items-center justify-center py-20 text-center p-4">
          <AlertTriangle className="h-10 w-10 text-destructive mb-3" />
          <p className="text-sm font-semibold text-destructive">{error}</p>
        </div>
      )}

      {/* PDF Pages Container */}
      <div 
        ref={containerRef} 
        className={`w-full flex flex-col items-center transition-all duration-300 ${
          !isFocused ? "blur-md pointer-events-none select-none" : ""
        }`}
      />
    </div>
  );
}

