"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function F1BuildPage() {
  return (
    <div className="min-h-screen bg-[#07080c] px-5 py-16 text-white">
      <div className="mx-auto max-w-7xl">

        <a
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-zinc-400 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </a>

        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-400">
            Homemade Engineering Build
          </p>

          <h1 className="text-5xl font-black md:text-7xl">
            Homemade F1 Car
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            One of Adam’s earliest engineering projects, built using an
            orange juice carton, Lego wheels, wooden skewers, an electric motor
            and an elastic band.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10">
          <img
            src="/images/cardboardcar2.jpeg"
            alt="Homemade F1 Car"
            className="w-full object-cover"
          />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

            <motion.div
  whileHover={{ scale: 1.02 }}
  className="overflow-hidden rounded-[2rem] border border-white/10"
>
  <img
    src="/images/cardboardcar5.jpg"
    alt="Additional F1 build view"
    className="w-full object-cover"
  />
</motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="overflow-hidden rounded-[2rem] border border-white/10"
          >
            <img
              src="/images/cardboardcar1.jpeg"
              alt="F1 build"
              className="w-full object-cover"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="overflow-hidden rounded-[2rem] border border-white/10"
          >
            <img
              src="/images/cardboardcar3.jpeg"
              alt="F1 build"
              className="w-full object-cover"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="overflow-hidden rounded-[2rem] border border-white/10 md:col-span-2"
          >
            <img
              src="/images/cardboardcar4.jpeg"
              alt="F1 build"
              className="w-full object-cover"
            />
          </motion.div>

        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-black">
          <video
            className="mx-auto max-h-[800px] w-full object-contain"
            autoPlay
            muted
            loop
            playsInline
            controls
          >
            <source
              src="/videos/cardboardcar5.mp4"
              type="video/mp4"
            />
          </video>
        </div>

      </div>
    </div>
  );
}