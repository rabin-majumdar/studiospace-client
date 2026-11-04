
import Link from "next/link";
import {
    Camera,
    Mic,
    PartyPopper,
    Video,
    Palette,
    BriefcaseBusiness,
    ArrowUpRight,
} from "lucide-react";

const categories = [
    { name: "Photography", icon: Camera },
    { name: "Podcast", icon: Mic },
    { name: "Events", icon: PartyPopper },
    { name: "Video Production", icon: Video },
    { name: "Creative Space", icon: Palette },
    { name: "Meeting Space", icon: BriefcaseBusiness },
];

export default function CategoriesSection() {
    return (
        <section className="border-t border-slate-800/70">
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
                <div className="text-center">
                    <p className="text-sm font-semibold tracking-widest text-emerald-400 uppercase">
                        Browse By Category
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                        Find a Space for Every Idea
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-slate-400">
                        Explore different types of studios designed for your
                        creative and professional needs.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                    {categories.map((category) => {
                        const Icon = category.icon;

                        return (
                            <Link
                                key={category.name}
                                href="/studios"
                                className="group relative flex min-h-36 flex-col items-center justify-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-slate-900"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 transition-colors group-hover:bg-emerald-500/20">
                                    <Icon size={24} />
                                </div>

                                <span className="text-sm font-medium text-slate-200">
                                    {category.name}
                                </span>

                                <ArrowUpRight
                                    size={15}
                                    className="absolute right-3 top-3 text-slate-600 transition-colors group-hover:text-emerald-400"
                                />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
