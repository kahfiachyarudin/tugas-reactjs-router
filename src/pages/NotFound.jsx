import { motion } from "framer-motion";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center rounded-4xl bg-gradient-to-br from-[#140f2d] via-[#1f1a45] to-[#0c0c1d] overflow-hidden text-white px-6">

      <div className="absolute w-[500px] h-[500px] bg-purple-700/20 blur-[140px] rounded-full -top-20 -left-20"></div>
      <div className="absolute w-[400px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full bottom-0 right-0"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-12 max-w-xl w-full">
        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 drop-shadow-lg mb-4">
          404
        </h1>

        <h2 className="text-2xl font-semibold text-purple-300 mb-4">
          ✦ Lost in the Abyss
        </h2>

        <p className="text-gray-300 mb-8 leading-relaxed">
          The path you seek does not exist in this realm.
          Perhaps the archives have shifted... or destiny guides you elsewhere.
        </p>

        <Link to="/" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500  hover:scale-105 transition transform shadow-lg">
          ✦ Return to Sanctuary
        </Link>
      </motion.div>
    </div>
  );
}