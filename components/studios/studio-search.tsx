"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import type { Studio } from "@/types/studio";

interface StudioSearchProps {
    studios: Studio[];
}

export default function StudioSearch({ studios }: StudioSearchProps) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredStudios = studios.filter((studio) =>
        `${studio.name} ${studio.location}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase()),
    );

    return (
        <div>
            <div className="mx-auto mb-8 max-w-md">
                <Input
                    type="text"
                    placeholder="Search by studio name or location..."
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
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