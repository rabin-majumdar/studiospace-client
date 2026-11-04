
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const featuredStudios = [
    {
        id: 1,
        name: "Creative Photography Studio",
        location: "Dhaka, Bangladesh",
        category: "Photography",
        price: 1500,
    },
    {
        id: 2,
        name: "Professional Podcast Studio",
        location: "Gulshan, Dhaka",
        category: "Podcast",
        price: 2000,
    },
    {
        id: 3,
        name: "Modern Event Space",
        location: "Banani, Dhaka",
        category: "Event",
        price: 3000,
    },
];

export default function FeaturedStudios() {
    return (
        <section className="border-t border-slate-800/70 bg-slate-900/30">
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
                <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                        <p className="text-sm font-semibold tracking-widest text-emerald-400 uppercase">
                            Explore Spaces
                        </p>

                        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                            Featured Studios
                        </h2>

                        <p className="mt-3 max-w-xl text-slate-400">
                            Discover spaces selected for your next creative project.
                        </p>
                    </div>

                    <Link
                        href="/studios"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
                    >
                        View All Studios
                        <ArrowRight size={17} />
                    </Link>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {featuredStudios.map((studio) => (
                        <article
                            key={studio.id}
                            className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-colors hover:border-emerald-500/30"
                        >
                            <div className="flex h-48 items-center justify-center bg-linear-to-br from-emerald-500/15 via-slate-800 to-blue-500/15">
                                <span className="text-sm font-medium text-slate-400">
                                    Studio Preview
                                </span>
                            </div>

                            <div className="p-6">
                                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                                    {studio.category}
                                </span>

                                <h3 className="mt-4 text-lg font-semibold text-white">
                                    {studio.name}
                                </h3>

                                <p className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                                    <MapPin size={16} />
                                    {studio.location}
                                </p>

                                <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-5">
                                    <p className="text-sm text-slate-400">
                                        From{" "}
                                        <span className="font-semibold text-white">
                                            ৳{studio.price}
                                        </span>
                                        /hour
                                    </p>

                                    <Link
                                        href="/studios"
                                        className="text-sm font-medium text-emerald-400 hover:text-emerald-300"
                                    >
                                        Explore
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
