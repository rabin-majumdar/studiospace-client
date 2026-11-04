import Link from "next/link";

import { Button } from "@/components/ui/button";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Studios", href: "/studios" },
    { label: "About", href: "/about" },
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
                <Link href="/" className="text-2xl font-bold text-white">
                    Studio<span className="text-emerald-400">Space</span>
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 transition-colors hover:text-emerald-400"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <Link
                        href="/login"
                        className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
                    >
                        Login
                    </Link>

                    <Button>
                        Get Started
                    </Button>
                </div>
            </nav>
        </header>
    );
}