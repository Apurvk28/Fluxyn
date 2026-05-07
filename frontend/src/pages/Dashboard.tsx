import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUp,
  Mic,
  Plus,
  LayoutTemplate,
  Loader2,
  Code2,
  Eye,
  AlertCircle,
} from "lucide-react";
import { DashboardLayout } from "../components/dashboard/DashboardLayout";
import { generateWebsite } from "../services/api";
import { VideoBackground } from "../components/VideoBackground";

const MOCK_PROJECTS: any[] = [];

const TEMPLATES = [
  { label: "Portfolio", emoji: "🎨" },
  { label: "SaaS Landing", emoji: "🚀" },
  { label: "E-commerce", emoji: "🛍️" },
  { label: "Blog", emoji: "✍️" },
  { label: "Dashboard", emoji: "📊" },
  { label: "Agency", emoji: "💼" },
];

type ViewMode = "preview" | "code";

export function Dashboard() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("preview");
  const [error, setError] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const userStr = localStorage.getItem("fluxyn_user");
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        setUserName(user.name);
      } catch (e) {}
    } else {
      window.location.href = "/login";
    }
  }, []);

  // Auto-grow textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [prompt]);

  // Inject generated code into iframe via srcdoc
  useEffect(() => {
    if (!generatedCode || !iframeRef.current) return;

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Preview</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script type="importmap">
    {
      "imports": {
        "react": "https://esm.sh/react@18.2.0?dev",
        "react-dom/client": "https://esm.sh/react-dom@18.2.0/client?dev",
        "react-dom": "https://esm.sh/react-dom@18.2.0?dev",
        "framer-motion": "https://esm.sh/framer-motion@11.1.7?dev",
        "lucide-react": "https://esm.sh/lucide-react@0.370.0?dev"
      }
    }
  </script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <style>body { margin: 0; background: #09090b; color: white; font-family: system-ui, sans-serif; }</style>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel" data-type="module" data-presets="react">
    ${generatedCode}
    
    import { createRoot as __createRoot } from 'react-dom/client';
    const __root = __createRoot(document.getElementById('root'));
    if (typeof App !== 'undefined') {
      __root.render(React.createElement(App));
    } else {
      document.getElementById('root').innerHTML = '<div style="color:red;padding:20px;">Error: App component not found in generated code.</div>';
    }
  </script>
</body>
</html>`;

    iframeRef.current.srcdoc = html;
  }, [generatedCode, viewMode]);

  const handleSubmit = async () => {
    if (!prompt.trim() || loading) return;
    setLoading(true);
    setError(null);
    setGeneratedCode(null);

    try {
      const { code } = await generateWebsite(prompt.trim());
      setGeneratedCode(code);
      setViewMode("preview");
    } catch (err: any) {
      const msg =
        err?.response?.data?.error || "Failed to generate. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <DashboardLayout projects={MOCK_PROJECTS}>
      <div className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Video Background */}
        <VideoBackground
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4"
          className="absolute inset-0 w-full h-full z-0"
          overlayOpacity={0}
        />

        {/* Animated gradient overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,92,246,0.2) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 60%, rgba(236,72,153,0.1) 0%, transparent 50%)",
            mixBlendMode: "overlay"
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 pt-16 pb-8">
          {/* Greeting */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-semibold text-white mb-8 text-center"
          >
            Ready to build,{" "}
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              {userName ? userName.split(" ")[0] : "there"}?
            </span>
          </motion.h1>

          {/* Prompt input card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="w-full max-w-2xl"
          >
            <div className="bg-[#1a1a1e]/90 border border-white/10 rounded-2xl shadow-2xl p-4">
              <textarea
                ref={textareaRef}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Describe the website you want to build..."
                rows={1}
                className="w-full bg-transparent text-white placeholder:text-zinc-500 text-sm resize-none focus:outline-none min-h-[40px] max-h-[200px] leading-relaxed"
              />
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1.5 text-zinc-400 hover:text-white text-xs transition-colors px-2 py-1 rounded-lg hover:bg-white/5">
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </button>
                  <div className="flex items-center gap-1.5 text-zinc-400 text-xs px-2 py-1 rounded-lg bg-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                    <LayoutTemplate className="w-3.5 h-3.5" />
                    <span>Build</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 flex items-center justify-center rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                    <Mic className="w-4 h-4" />
                  </button>
                  <motion.button
                    onClick={handleSubmit}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-8 h-8 flex items-center justify-center rounded-full transition-all ${
                      prompt.trim() && !loading
                        ? "bg-white text-black hover:bg-zinc-200"
                        : "bg-white/10 text-zinc-600 cursor-not-allowed"
                    }`}
                    disabled={!prompt.trim() || loading}
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <ArrowUp className="w-4 h-4" />
                    )}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Template chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="flex flex-wrap gap-2 mt-4 justify-center max-w-2xl"
          >
            {TEMPLATES.map((t) => (
              <button
                key={t.label}
                onClick={() => setPrompt(`Build a ${t.label} website`)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm font-medium hover:bg-white/30 hover:border-white/30 transition-all shadow-lg"
              >
                <span>{t.emoji}</span>
                <span>{t.label}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Error state */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="relative z-10 mx-6 mb-4"
            >
              <div className="flex items-center gap-3 bg-red-950/50 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading state */}
        <AnimatePresence>
          {loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="relative z-10 mx-6 mb-6"
            >
              <div className="bg-[#111113]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-8 flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full border-2 border-violet-500/30 border-t-violet-500 animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-violet-400" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-white font-medium text-sm">
                    Fluxyn is building your website...
                  </p>
                  <p className="text-zinc-500 text-xs mt-1">
                    This usually takes 10–20 seconds
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Preview panel */}
        <AnimatePresence>
          {generatedCode && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 mx-6 mb-8"
            >
              {/* Panel header */}
              <div className="bg-[#111113]/80 backdrop-blur-xl border border-white/5 rounded-t-2xl px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <span className="text-zinc-500 text-xs truncate max-w-[300px]">
                    {prompt}
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("preview")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs transition-all ${
                      viewMode === "preview"
                        ? "bg-white/10 text-white"
                        : "text-zinc-500 hover:text-white"
                    }`}
                  >
                    <Eye className="w-3 h-3" /> Preview
                  </button>
                  <button
                    onClick={() => setViewMode("code")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs transition-all ${
                      viewMode === "code"
                        ? "bg-white/10 text-white"
                        : "text-zinc-500 hover:text-white"
                    }`}
                  >
                    <Code2 className="w-3 h-3" /> Code
                  </button>
                </div>
              </div>

              {/* Panel body */}
              <div
                className="bg-[#0d0d0f] border border-white/5 border-t-0 rounded-b-2xl overflow-hidden shadow-2xl"
                style={{ height: "600px" }}
              >
                {viewMode === "preview" ? (
                  <iframe
                    ref={iframeRef}
                    title="Website Preview"
                    className="w-full h-full border-0"
                    sandbox="allow-scripts"
                  />
                ) : (
                  <pre className="w-full h-full overflow-auto p-4 text-xs text-zinc-300 leading-relaxed font-mono">
                    {generatedCode}
                  </pre>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>


      </div>
    </DashboardLayout>
  );
}
