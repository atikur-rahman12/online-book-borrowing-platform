"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <div className="text-center max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-7xl md:text-8xl font-extrabold bg-linear-to-r from-primary to-secondary text-transparent bg-clip-text"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-semibold mt-4"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-base-content/70 mt-3"
        >
          The page you’re looking for doesn’t exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 flex justify-center gap-3"
        >
          <Link href="/" className="btn btn-primary rounded-xl px-6">
            Back to Home
          </Link>
        </motion.div>

        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 blur-3xl rounded-full"></div>
      </div>
    </div>
  );
}
