import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative isolate overflow-hidden">
            {/* Background Glow */}
            <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="mx-auto flex min-h-145 max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
                    <Sparkles size={16} />
                    Your Space, Your Creativity
                </div>

                <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    Find the Perfect Space
                    <span className="mt-2 block bg-linear-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                        for Your Creativity
                    </span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                    Discover and book inspiring studio spaces for photography,
                    events, productions, and your next creative project.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <Link
                        href="/studios"
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-emerald-500 px-7 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
                    >
                        Explore Studios
                        <ArrowRight size={18} />
                    </Link>

                    <Link
                        href="/about"
                        className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-700 px-7 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-900"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    );
}
