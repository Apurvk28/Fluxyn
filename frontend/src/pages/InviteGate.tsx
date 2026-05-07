import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { VideoBackground } from "../components/VideoBackground";
import { Lock, User, ArrowRight, AlertCircle } from "lucide-react";

export function InviteGate() {
  const [name, setName] = useState("");
  const [inviteKey, setInviteKey] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }
    if (inviteKey !== "Apurvsk") {
      setError("Invalid invitation key");
      return;
    }

    localStorage.setItem("fluxyn_user", JSON.stringify({ name: name.trim() }));
    navigate("/dashboard");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      <VideoBackground
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4"
        className="absolute inset-0 w-full h-full z-0"
        overlayOpacity={0.8}
      />
      
      <div className="relative z-10 w-full max-w-md px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#111113]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
        >
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-violet-600/20 text-violet-400 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-violet-500/20">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-semibold text-white mb-2">
              Currently we are inviting only
            </h1>
            <p className="text-sm text-zinc-400">
              Please enter your name and invitation key to access Fluxyn.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-violet-500/50 focus:bg-white/10 transition-all"
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type="password"
                  value={inviteKey}
                  onChange={(e) => setInviteKey(e.target.value)}
                  placeholder="Invitation Key"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-violet-500/50 focus:bg-white/10 transition-all"
                />
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="flex items-center gap-2 text-red-400 text-xs bg-red-500/10 p-3 rounded-xl border border-red-500/20"
              >
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <p>{error}</p>
              </motion.div>
            )}

            <button
              type="submit"
              className="w-full bg-white text-black font-medium py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors mt-2"
            >
              Access Dashboard
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
