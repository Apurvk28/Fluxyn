import { motion } from "framer-motion";
import { DashboardLayout } from "../components/dashboard/DashboardLayout";
import { BookOpen } from "lucide-react";

export function Resources() {
  return (
    <DashboardLayout>
      <div className="min-h-screen flex items-center justify-center bg-[#0d0d0f]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8 text-zinc-400" />
          </div>
          <h1 className="text-3xl font-semibold text-white mb-3">Resources</h1>
          <p className="text-zinc-500 text-sm max-w-xs mx-auto">
            Documentation, guides, and learning materials are on their way.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-sm">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            Coming Soon
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
