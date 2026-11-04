import API_URL from "@/lib/api";
import { Studio } from "@/types/studio";

async function getStudios(): Promise<Studio[]> {
    try {
        const response = await fetch(`${API_URL}/api/studios`, {
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error("Failed to fetch studios");
        }

        const result = await response.json();

        return result.data;
    } catch (error) {
        console.error("Error fetching studios:", error);
        return [];
    }
}

export default async function StudiosPage() {
    const studios = await getStudios();

    return (
        <main className="flex-1">
            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
                <div className="text-center">
                    <p className="text-sm font-semibold tracking-widest text-emerald-400 uppercase">
                        Explore Our Spaces
                    </p>

                    <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                        Discover Your Perfect Studio
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                        Explore available studio spaces and find the perfect
                        place for your next creative project.
                    </p>
                </div>

                <div className="mt-14">
                    {studios.length > 0 ? (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {studios.map((studio) => (
                                <div
                                    key={studio._id}
                                    className="rounded-2xl border border-white/10 bg-white/5 p-6"
                                >
                                    <h2 className="text-xl font-semibold text-white">
                                        {studio.name}
                                    </h2>

                                    <p className="mt-2 text-sm text-slate-400">
                                        {studio.location}
                                    </p>

                                    <p className="mt-4 font-semibold text-emerald-400">
                                        ৳{studio.price}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-sm text-slate-500">
                            No studios available right now.
                        </p>
                    )}
                </div>
            </section>
        </main>
    );
}