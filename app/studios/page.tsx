import StudioSearch from "@/components/studios/studio-search";
import API_URL from "@/lib/api";
import type { Studio } from "@/types/studio";

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
                    <StudioSearch studios={studios} />
                </div>
            </section>
        </main>
    );
}
