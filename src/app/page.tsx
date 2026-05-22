"use client";

export default function HoldingPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#07080c] text-white">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.12),transparent_40%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:42px_42px]" />

      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-black tracking-tight md:text-7xl">
          Adam Keogh
        </h1>

        <div className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
      </div>

    </main>
  );
}