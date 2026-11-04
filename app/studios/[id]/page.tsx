import Link from "next/link";
import { ArrowLeft, MapPin, Banknote } from "lucide-react";
import API_URL from "@/lib/api";
import type { Studio } from "@/types/studio";
import { notFound } from "next/navigation";

interface StudioDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

async function getStudio(id: string): Promise<Studio | null> {
    try {
        const response = await fetch(`${API_URL}/api/studios/${id}`, {
            cache: "no-store",
        });

        if (!response.ok) {
            return null;
        }

        const result = await response.json();

        return result.data;
    } catch (error) {
        console.error("Error fetching studio:", error);
        return null;
    }
}

export default async function StudioDetailsPage({
    params,
}: StudioDetailsPageProps) {
    const { id } = await params;
    const studio = await getStudio(id);

    if (!studio) {
        notFound();
    }

    return (
        <main className="flex-1">
            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
                <div className="mt-6">
                    <p className="text-sm font-semibold tracking-widest text-emerald-400 uppercase">
                        Studio Details
                    </p>

                    <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        {studio.name}
                    </h1>

                    <p className="mt-4 max-w-2xl text-slate-400">
                        Explore the details of this creative space and discover whether
                        it is the right fit for your next project.
                    </p>
                </div>
                
                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                    {/* Location Card */}
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                                <MapPin size={20} />
                            </div>

                            <div>
                                <p className="text-sm text-slate-400">Location</p>
                                <p className="mt-1 font-semibold text-white">
                                    {studio.location}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Price Card */}
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-400/10 text-blue-400">
                                <Banknote size={20} />
                            </div>

                            <div>
                                <p className="text-sm text-slate-400">Price</p>
                                <p className="mt-1 font-semibold text-white">
                                    ৳{studio.price}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 rounded-2xl border border-emerald-400/20 bg-linear-to-r from-emerald-400/10 to-blue-500/10 p-6 sm:p-8">
                    <h2 className="text-xl font-semibold text-white">
                        Interested in this studio?
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                        Explore more creative spaces and find the perfect studio for
                        your next project.
                    </p>

                    <Link
                        href="/studios"
                        className="mt-5 inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-300"
                    >
                        Explore More Studios
                        <ArrowLeft size={16} className="rotate-180" />
                    </Link>
                </div>
            </section>
            <Link
                href="/studios"
                className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-emerald-400"
            >
                <ArrowLeft size={16} />
                Back to Studios
            </Link>
        </main>
    );
}