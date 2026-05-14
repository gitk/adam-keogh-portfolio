"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Play } from "lucide-react";

const airflowVideos = [
  {
    title: "Wedge Shape Airflow Test",
    file: "/videos/wedge.mp4",
    description:
      "The wedge shape caused the tissue paper to lift and curl backwards, showing disturbed airflow.",
  },
  {
    title: "Cuboid Shape Airflow Test",
    file: "/videos/cuboid.mp4",
    description:
      "The cuboid shape caused very little visible movement in the tissue paper.",
  },
];

const cottonBallVideos = [
  { title: "5cm Distance", file: "/videos/5cm.mp4" },
  { title: "6cm Distance", file: "/videos/6cm.mp4" },
  { title: "7cm Distance", file: "/videos/7cm.mp4" },
  { title: "8cm Distance", file: "/videos/8cm.mp4" },
  { title: "9cm Distance", file: "/videos/9cm.mp4" },
];

export default function ScienceCBAPage() {
  return (
    <div className="min-h-screen bg-[#07080c] px-5 py-16 text-white">
      <div className="mx-auto max-w-7xl">

        <a
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-zinc-400 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to My Portfolio
        </a>

        <div className="mb-14">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-400">
            Science CBA
          </p>

          <h1 className="text-5xl font-black md:text-7xl">
            Aerodynamics in Formula 1
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-400">
            My Science CBA explored how airflow behaves around different shapes
            using a homemade wind tunnel, tissue paper and a cotton ball.
            These videos show the airflow observations and movement tests
            carried out during the experiment.
          </p>
        </div>

        {/* Airflow Tests */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-black">
            Airflow Shape Tests
          </h2>

          <div className="grid gap-8 md:grid-cols-2">

            {airflowVideos.map((video) => (
              <motion.div
                key={video.title}
                whileHover={{ y: -4 }}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]"
              >
                <video
                  className="aspect-video w-full bg-black object-cover"
                  controls
                  playsInline
                >
                  <source src={video.file} type="video/mp4" />
                </video>

                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-red-300">
                    <Play className="h-4 w-4" />
                    <span className="text-sm uppercase tracking-wider">
                      Experiment Video
                    </span>
                  </div>

                  <h3 className="text-2xl font-black">
                    {video.title}
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-400">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* Cotton Ball Tests */}
        <div>
          <h2 className="mb-8 text-3xl font-black">
            Cotton Ball Movement Tests
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {cottonBallVideos.map((video) => (
              <motion.div
                key={video.title}
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]"
              >
                <video
                  className="aspect-video w-full bg-black object-cover"
                  controls
                  playsInline
                >
                  <source src={video.file} type="video/mp4" />
                </video>

                <div className="p-5">
                  <h3 className="text-xl font-black">
                    {video.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    Airflow observation at {video.title.toLowerCase()} behind
                    the wedge shape.
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}