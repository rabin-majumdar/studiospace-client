
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import type { Studio } from "@/types/studio";

interface StudioSearchProps {
    studios: Studio[];
}

export default function StudioSearch({ studios }: StudioSearchProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("default");

    const filteredStudios = studios
        .filter((studio) =>
            `${studio.name} ${studio.location}`
                .toLowerCase()
                .includes(searchTerm.toLowerCase()),
        )
        .sort((a, b) => {
            if (sortOrder === "low-to-high") {
                return a.price - b.price;
            }

            if (sortOrder === "high-to-low") {
                return b.price - a.price;
            }

            return 0;
        });

    return (
        <div>
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="w-full sm:max-w-md">
                    <Input
                        type="text"
                        placeholder="Search by studio name or location..."
                        value={searchTerm}
                        onChange={(event) =>
                            setSearchTerm(event.target.value)
                        }
                    />
                </div>

                <select
                    value={sortOrder}
                    onChange={(event) => setSortOrder(event.target.value)}
                    className="w-full rounded-md border border-white/10 bg-zinc-900 px-3 py-2.5 text-sm text-white outline-none transition-colors focus:border-emerald-400 sm:w-52"
                >
                    <option value="default">Default Sorting</option>
                    <option value="low-to-high">Price: Low to High</option>
                    <option value="high-to-low">Price: High to Low</option>
                </select>
            </div>

            {filteredStudios.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredStudios.map((studio) => (
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
                    No studios found.
                </p>
            )}
        </div>
    );
}
