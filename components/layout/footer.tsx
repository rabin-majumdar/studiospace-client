
import { Mail } from "lucide-react";
import Link from "next/link";

const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Studios", href: "/studios" },
    { label: "About", href: "/about" },
];

export default function Footer() {
    return (
        <footer className="mt-auto border-t border-slate-800 bg-slate-950">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="text-2xl font-bold text-white">
                            Studio<span className="text-emerald-400">Space</span>
                        </Link>

                        <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
                            Discover and book inspiring studio spaces for
                            your creative and professional needs.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-white">Quick Links</h3>

                        <ul className="mt-4 space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Account */}
                    <div>
                        <h3 className="font-semibold text-white">Account</h3>

                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link
                                    href="/login"
                                    className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                                >
                                    Sign In
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/register"
                                    className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                                >
                                    Create Account
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-white">Connect With Us</h3>

                        <a
                            href="mailto:hello@studiospace.com"
                            className="mt-4 inline-flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-emerald-400"
                        >
                            <Mail size={18} />
                            hello@studiospace.com
                        </a>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-800 pt-6 text-center">
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} StudioSpace. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
