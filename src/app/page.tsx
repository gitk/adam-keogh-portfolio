"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Trophy,
  Wrench,
  Gauge,
  Wind,
  Play,
  FileText,
  Zap,
  Cpu,
  Dumbbell,
  Mail,
  MapPin,
  Video,
  Car,
  Users,
  Goal,
  Lightbulb,
  Rocket,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const cbas = [
  {
    title: "Science CBA",
    subtitle: "Aerodynamics in Formula 1",
    description:
      "A homemade wind tunnel experiment testing how airflow behaves around different shapes, using tissue paper and a cotton ball to observe turbulence and air movement.",
    tag: "Wind Tunnel Testing",
    icon: Wind,
  },
  {
    title: "Maths CBA",
    subtitle: "Circuit Layout & Fuel Load",
    description:
      "An analysis of how Silverstone's circuit layout and F1 fuel load affect lap times, using real racing data, calculations, comparisons and estimated time loss.",
    tag: "Data & Lap Time Analysis",
    icon: Gauge,
  },
  {
    title: "History CBA",
    subtitle: "Eddie Jordan, Irish Motorsport Legend",
    description:
      "A research project exploring Eddie Jordan's early life, Jordan Grand Prix and his impact on Irish motorsport and Formula 1 history.",
    tag: "Motorsport History",
    icon: Trophy,
  },
  {
    title: "Art CBA",
    subtitle: "Charles Leclerc Puppet",
    description:
      "A hands-on character creation project inspired by Charles Leclerc, using cardboard, paper, paint and sculptural problem solving.",
    tag: "Creative Making",
    icon: Lightbulb,
  },
  {
    title: "English CBA",
    subtitle: "My Silverstone F1 Experience",
    description:
      "A personal presentation about travelling to Silverstone, camping at the Grand Prix, seeing Formula 1 up close and being inspired by the race weekend.",
    tag: "Storytelling",
    icon: FileText,
  },
  {
    title: "PE CBA",
    subtitle: "Fitness Programme & Reflection",
    description:
      "A personal fitness project tracking activity, strength, routine, challenges, progress and confidence through a structured programme.",
    tag: "Discipline & Fitness",
    icon: Dumbbell,
  },
];

const skills = [
  "Engineering curiosity",
  "Physical prototyping",
  "Problem solving",
  "Aerodynamics",
  "Data analysis",
  "Presentation design",
  "Motorsport knowledge",
  "Teamwork",
  "Creative making",
  "Video documentation",
];

const timeline = [
  {
    year: "6th Class",
    title: "Homemade F1 Car Build",
    text: "Built from an orange juice carton, large Lego wheels, a small electric motor and an elastic band.",
  },
  {
    year: "2nd Year",
    title: "F1 Inspired School Projects",
    text: "Explored motorsport through art, science, history, English and maths CBAs.",
  },
  {
    year: "3rd Year",
    title: "Motorised Fairground Ride",
    text: "Latest engineering project, a working motorised model demonstrating movement, structure and design thinking.",
  },
  {
    year: "TY Goal",
    title: "Engineering Placement",
    text: "Looking for opportunities to learn from real engineering, design and technology environments.",
  },
];

function TelemetryBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.18),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px]" />
      {[...Array(9)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px w-80 bg-gradient-to-r from-transparent via-white to-transparent"
          style={{ top: `${12 + i * 10}%`, left: `${-30 + i * 12}%` }}
          animate={{ x: [0, 180, 0], opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-red-300">
      <Zap className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="text-2xl font-black text-white">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-zinc-500">{label}</div>
    </div>
  );
}

export default function AdamPortfolioWebsite() {
  return (
    <div className="min-h-screen bg-[#07080c] text-zinc-100">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#07080c]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-red-600 shadow-lg shadow-red-600/25">
              <Car className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-black uppercase tracking-[0.24em]">Adam Keogh</div>
              <div className="text-xs text-zinc-500">Engineering Portfolio</div>
            </div>
          </div>
          <div className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#cbas" className="hover:text-white">CBAs</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#placement" className="hover:text-white">TY Placement</a>
          </div>
          <Button className="rounded-full bg-white text-black hover:bg-zinc-200">
            Contact <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </nav>

      <header className="relative overflow-hidden">
        <TelemetryBackground />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-200">
              <Rocket className="h-4 w-4" />
              TY Engineering Placement Portfolio
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Future Engineer. <span className="text-red-500">F1 Fan.</span> Builder.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              I’m Adam Keogh, a student interested in engineering, motorsport and how things work. This portfolio brings together my F1-inspired CBAs, hands-on builds, experiments, videos and project work for Transition Year placement opportunities.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="rounded-full bg-red-600 hover:bg-red-500">
                View Engineering Projects <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10">
                Explore CBA Portfolio
              </Button>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              <Stat value="6" label="CBAs" />
              <Stat value="2" label="Major Builds" />
              <Stat value="1" label="Clear Goal" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-red-600/30 to-blue-600/10 blur-2xl" />
            <Card className="relative overflow-hidden rounded-[2rem] border-white/10 bg-zinc-950/70 shadow-2xl shadow-black/50 backdrop-blur">
              <CardContent className="p-0">
                <div className="relative aspect-[4/5] overflow-hidden bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.25),transparent_35%),linear-gradient(135deg,#111827,#050505)]">
                  <div className="absolute inset-6 rounded-[1.5rem] border border-white/10" />
                  <div className="absolute left-8 top-8 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-300">
                    Featured Build
                  </div>
                  <div className="absolute inset-x-8 bottom-8">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 shadow-xl shadow-red-600/25">
                      <Play className="ml-1 h-7 w-7 text-white" />
                    </div>
                    <h2 className="text-3xl font-black">Motorised Fairground Ride</h2>
                    <p className="mt-3 text-sm leading-6 text-zinc-300">
                      Latest 3rd Year Engineering Project, video showcase coming here with build process, movement, mechanism and design explanation.
                    </p>
                  </div>
                  <motion.div
                    className="absolute right-8 top-28 h-52 w-52 rounded-full border border-red-400/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-red-500" />
                    <div className="absolute bottom-0 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-white" />
                    <div className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white" />
                    <div className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white" />
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </header>

      <main>
        <section id="projects" className="mx-auto max-w-7xl px-5 py-20">
          <SectionLabel>Featured Engineering Projects</SectionLabel>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.04]">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-red-600/30 via-zinc-900 to-black p-6">
                  <div className="aspect-video overflow-hidden rounded-3xl border border-white/10 bg-black">
  <video
    className="h-full w-full object-cover"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/videos/engineering_project.mp4" type="video/mp4" />
  </video>
</div>
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-black text-white">Motorised Fairground Ride</h3>
                  <p className="mt-3 text-zinc-300">
                    A working engineering model showing motion, structure and mechanical thinking. This project should be the main video-led feature of the portfolio.
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-zinc-400">
                    <div className="rounded-2xl bg-white/5 p-4"><Wrench className="mb-2 h-5 w-5 text-red-400" />Mechanism</div>
                    <div className="rounded-2xl bg-white/5 p-4"><Cpu className="mb-2 h-5 w-5 text-red-400" />Motorised movement</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.04]">
              <CardContent className="p-0">
<div className="aspect-video bg-gradient-to-br from-blue-600/20 via-zinc-900 to-black p-6">
  <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-black">
    <img
      src="/images/cardboardcar5.jpeg"
      alt="Homemade F1 car build"
      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

    <div className="absolute bottom-4 left-4 right-4">
      <div className="inline-flex items-center gap-2 rounded-full bg-black/50 px-3 py-1 text-xs text-zinc-200 backdrop-blur">
        <Video className="h-3 w-3" />
        Photos + Build Video
      </div>
    </div>
  </div>
</div>
                <div className="p-7">
                  <h3 className="text-2xl font-black text-white">Homemade F1 Car Build</h3>
                  <p className="mt-3 text-zinc-300">
                    One of my earliest engineering builds, made from an orange juice carton, large Lego car wheels, wooden skewa small electric motor and an elastic band.
                  </p>
                 <div className="mt-5 flex flex-wrap gap-2">
  {['OJ carton', 'Lego wheels', 'Electric motor', 'Elastic band', 'Wood skewers'].map((item) => (
    <span
      key={item}
      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300"
    >
      {item}
    </span>
  ))}
</div>

<div className="mt-6">
  <a
    href="/projects/f1-build"
    className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
  >
    <Video className="h-4 w-4" />
    View Project Gallery
  </a>
</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="cbas" className="border-y border-white/10 bg-white/[0.025] py-20">
          <div className="mx-auto max-w-7xl px-5">
            <SectionLabel>CBA Portfolio</SectionLabel>
            <div className="mb-10 max-w-3xl">
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">School projects with a clear engineering thread.</h2>
              <p className="mt-4 text-lg leading-8 text-zinc-400">
                Adam’s CBAs are presented as evidence of curiosity, research, testing, making and communication, with Formula 1 and engineering running through the strongest pieces.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {cbas.map((cba) => {
                const Icon = cba.icon;
                return (
                  <motion.div key={cba.title} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
                    <Card className="h-full rounded-[1.6rem] border-white/10 bg-zinc-950/70 hover:border-red-500/40">
                      <CardContent className="p-6">
                        <div className="mb-5 flex items-center justify-between">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-300">
                            <Icon className="h-6 w-6" />
                          </div>
                          <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400">{cba.tag}</span>
                        </div>
                        <h3 className="text-xl font-black">{cba.title}</h3>
                        <p className="mt-1 font-semibold text-red-300">{cba.subtitle}</p>
                        <p className="mt-4 text-sm leading-6 text-zinc-400">{cba.description}</p>
                       <div className="mt-5 flex flex-wrap gap-3">

  <a
    href={
      cba.title === "Science CBA"
        ? "/pdfs/science-cba.pdf"
        : cba.title === "Maths CBA"
        ? "/pdfs/maths-cba.pdf"
        : cba.title === "History CBA"
        ? "/pdfs/history-cba.pdf"
        : cba.title === "Art CBA"
        ? "/pdfs/art-cba.pdf"
        : cba.title === "English CBA"
        ? "/pdfs/english-cba.pdf"
        : "/pdfs/pe-cba.pdf"
    }
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-200 transition hover:bg-red-500/20"
  >
    <FileText className="h-4 w-4" />
    View PDF
  </a>

  {cba.title === "Science CBA" && (
    <a
      href="/projects/science-gallery"
      className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500"
    >
      <Video className="h-4 w-4" />
      View Videos
    </a>
  )}

</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>About Adam</SectionLabel>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">Driven by engineering, motorsport and teamwork.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-400">
              I am interested in engineering, Formula 1 and building working models. He enjoys learning about engineering in school and understanding the technology and design behind Formula 1 cars. He also plays football for Longwood AFC and regularly goes to the gym, developing teamwork, discipline, consistency and commitment outside the classroom.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <Goal className="mb-3 h-7 w-7 text-green-300" />
                <div className="font-black">Longwood AFC</div>
                <div className="mt-1 text-sm text-zinc-400">Football, teamwork and commitment</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <Car className="mb-3 h-7 w-7 text-red-300" />
                <div className="font-black">Formula 1</div>
                <div className="mt-1 text-sm text-zinc-400">Engineering, speed and design</div>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <h3 className="mb-5 text-2xl font-black">Skills & Interests</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center gap-3 rounded-2xl bg-black/30 p-4 text-sm text-zinc-300">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-black/30 py-20">
          <div className="mx-auto max-w-7xl px-5">
            <SectionLabel>Project Timeline</SectionLabel>
            <div className="grid gap-5 md:grid-cols-4">
              {timeline.map((item, index) => (
                <div key={item.title} className="relative rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 font-black">{index + 1}</div>
                  <div className="text-xs uppercase tracking-[0.22em] text-red-300">{item.year}</div>
                  <h3 className="mt-3 text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="placement" className="relative overflow-hidden py-20">
          <TelemetryBackground />
          <div className="relative mx-auto max-w-5xl px-5 text-center">
            <SectionLabel>TY Placement Goal</SectionLabel>
            <h2 className="text-4xl font-black tracking-tight md:text-6xl">Looking for a real engineering environment to learn from.</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              I’m interested in a TY placement where I can see how engineering, design, technology or manufacturing work in the real world. I want to learn from people who solve practical problems, build systems and improve how things work.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" className="rounded-full bg-red-600 hover:bg-red-500">
                <Mail className="mr-2 h-4 w-4" /> Contact About Placement
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10">
                Download PDF Portfolio
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-zinc-500">
              <MapPin className="h-4 w-4" /> Longwood, Co. Meath
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-zinc-500">
        © Adam Keogh, Engineering & TY Placement Portfolio
      </footer>
    </div>
  );
}
