
import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";

export default function CtaSection() {
    return (
        <section className="border-t border-slate-800/70">
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
                <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-linear-to-br from-emerald-500/10 via-slate-900 to-blue-500/10 px-6 py-16 text-center sm:px-12">
                    <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

                    <div className="relative">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                            <Building2 size={28} />
                        </div>

                        <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
                            Ready to Find Your Perfect Space?
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
                            Explore inspiring studios or share your own space
                            with creators looking for their next great location.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                            <Link
                                href="/studios"
                                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-emerald-500 px-7 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
                            >
                                Explore Studios
                                <ArrowRight size={18} />
                            </Link>

                            <Link
                                href="/register"
                                className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-700 px-7 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-800"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
