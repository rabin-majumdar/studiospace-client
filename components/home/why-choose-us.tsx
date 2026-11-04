
import {
    Search,
    ShieldCheck,
    CalendarCheck,
    Headset,
} from "lucide-react";

const benefits = [
    {
        icon: Search,
        title: "Easy Studio Discovery",
        description:
            "Find suitable studio spaces with helpful details and clear information.",
    },
    {
        icon: ShieldCheck,
        title: "Trusted Listings",
        description:
            "Explore studio listings with transparent information before booking.",
    },
    {
        icon: CalendarCheck,
        title: "Simple Booking",
        description:
            "Choose your preferred date and time and manage your bookings easily.",
    },
    {
        icon: Headset,
        title: "Dedicated Support",
        description:
            "Get assistance whenever you need help with your studio booking.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="border-t border-slate-800/70 bg-slate-900/30">
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div>
                        <p className="text-sm font-semibold tracking-widest text-emerald-400 uppercase">
                            Why Choose StudioSpace
                        </p>

                        <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
                            Everything You Need to Find Your Creative Space
                        </h2>

                        <p className="mt-5 max-w-lg leading-7 text-slate-400">
                            We make discovering and booking studio spaces
                            easier, so you can focus on bringing your ideas
                            to life.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        {benefits.map((benefit) => {
                            const Icon = benefit.icon;

                            return (
                                <div key={benefit.title} className="space-y-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                                        <Icon size={22} />
                                    </div>

                                    <h3 className="font-semibold text-white">
                                        {benefit.title}
                                    </h3>

                                    <p className="text-sm leading-6 text-slate-400">
                                        {benefit.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
