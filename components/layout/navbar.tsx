"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sparkles, X, LogOut } from "lucide-react";

import { useAuth } from "@/components/providers/auth-provider";
import apiRequest from "@/lib/api-request";
import { useRouter } from "next/navigation";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Studios", href: "/studios" },
    { label: "About", href: "/about" },
];

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const { user, isLoading, refreshUser } = useAuth();

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    const handleLogout = async () => {
        try {
            await apiRequest("/api/auth/logout", {
                method: "POST",
            });

            await refreshUser();
            setOpen(false);
            router.push("/login");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-xl">
            {/* Bottom gradient line */}
            <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-linear-to-r from-transparent via-emerald-500/40 to-transparent" />

            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-2.5">
                    <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-emerald-400 to-cyan-500 shadow-lg shadow-emerald-500/20 transition-all duration-300 group-hover:rotate-6 group-hover:shadow-emerald-500/40">
                        <Sparkles className="h-5 w-5 text-slate-950" />
                    </span>
                    <span className="text-xl font-bold tracking-tight text-white">
                        Studio
                        <span className="bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            Space
                        </span>
                    </span>
                </Link>

                {/* Desktop links */}
                <div className="hidden items-center gap-1 rounded-full border border-slate-800 bg-slate-900/50 p-1 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${isActive(link.href)
                                ? "bg-slate-800 text-emerald-400 shadow-sm"
                                : "text-slate-400 hover:text-white"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop actions */}
                <div className="hidden items-center gap-2 md:flex">
                    {!isLoading && (
                        user ? (
                            <>
                                <span className="max-w-40 truncate text-sm font-medium text-slate-300">
                                    {user.email}
                                </span>

                                <button
                                    type="button"
                                    onClick={handleLogout}
                                    className="inline-flex h-9 items-center gap-2 rounded-full border border-slate-700 px-4 text-sm font-medium text-slate-300 transition-colors hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400"
                                >
                                    <LogOut className="h-4 w-4" />
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="inline-flex h-9 items-center justify-center rounded-full px-4 text-sm font-medium text-slate-300 transition-colors hover:text-white"
                                >
                                    Login
                                </Link>

                                <Link
                                    href="/register"
                                    className="inline-flex h-9 items-center justify-center rounded-full bg-linear-to-r from-emerald-500 to-cyan-500 px-5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:from-emerald-400 hover:to-cyan-400 hover:shadow-emerald-500/40 active:scale-[0.97]"
                                >
                                    Get Started
                                </Link>
                            </>
                        )
                    )}
                </div>

                {/* Mobile toggle */}
                <button
                    type="button"
                    onClick={() => setOpen((o) => !o)}
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white md:hidden"
                >
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </nav>

            {/* Mobile menu */}
            {open && (
                <div className="border-t border-slate-800/60 bg-slate-950/95 px-4 pb-5 pt-3 backdrop-blur-xl md:hidden">
                    <div className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive(link.href)
                                    ? "bg-slate-800 text-emerald-400"
                                    : "text-slate-300 hover:bg-slate-900 hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="mt-4">
                        {!isLoading && (
                            user ? (
                                <div className="space-y-3">
                                    <p className="truncate px-3 text-sm text-slate-400">
                                        {user.email}
                                    </p>

                                    <button
                                        type="button"
                                        onClick={handleLogout}
                                        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-slate-700 text-sm font-medium text-slate-200 transition-colors hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400"
                                    >
                                        <LogOut className="h-4 w-4" />
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <div className="grid grid-cols-2 gap-3">
                                    <Link
                                        href="/login"
                                        onClick={() => setOpen(false)}
                                        className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-700 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-800"
                                    >
                                        Login
                                    </Link>

                                    <Link
                                        href="/register"
                                        onClick={() => setOpen(false)}
                                        className="inline-flex h-10 items-center justify-center rounded-lg bg-linear-to-r from-emerald-500 to-cyan-500 text-sm font-semibold text-slate-950"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            )
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}