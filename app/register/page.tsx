"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Lock, Mail, User, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import apiRequest from "@/lib/api-request";

const features = [
    "Browse hundreds of verified studios",
    "Book instantly, pay securely",
    "Manage all your bookings in one place",
];

const inputClass =
    "h-11 border-slate-800 bg-slate-950/60 pl-10 text-white placeholder:text-slate-500 focus-visible:border-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-500/30";

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setError("");
        setSuccess("");

        try {
            setIsLoading(true);

            const result = await apiRequest("/api/auth/register", {
                method: "POST",
                body: {
                    name: formData.name.trim(),
                    email: formData.email.trim(),
                    password: formData.password,
                },
            });

            setSuccess(result.message || "Account created successfully!");

            router.push("/login?registered=true");
        } catch (error) {
            setError(
                error instanceof Error
                    ? error.message
                    : "Registration failed. Please try again.",
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="relative grid min-h-[calc(100vh-4rem)] overflow-hidden bg-slate-950 lg:grid-cols-2">
            {/* Background glow */}
            <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

            {/* Left: branding (desktop only) */}
            <section className="relative hidden items-center justify-center p-12 lg:flex">
                <div className="w-full max-w-md">
                    <h2 className="text-4xl font-bold leading-tight text-white">
                        Find the perfect space <br />
                        <span className="bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            for your creativity.
                        </span>
                    </h2>
                    <ul className="mt-8 space-y-4">
                        {features.map((f) => (
                            <li key={f} className="flex items-center gap-3 text-slate-300">
                                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                                {f}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Right: form */}
            <section className="relative flex items-center justify-center px-4 py-10">
                <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl">
                    <h1 className="text-3xl font-bold tracking-tight text-white">
                        Create your account
                    </h1>
                    <p className="mt-2 text-sm text-slate-400">
                        Join StudioSpace and find your perfect space
                    </p>

                    {/* Social */}
                    <Button
                        type="button"
                        variant="outline"
                        className="mt-6 h-11 w-full gap-2 border-slate-700 bg-transparent text-slate-200 hover:bg-slate-800 hover:text-white"
                    >
                        <svg className="h-4 w-4" viewBox="0 0 24 24">
                            <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.4-1.7 4-5.5 4a6.1 6.1 0 1 1 0-12.2c1.9 0 3.2.8 3.9 1.5l2.7-2.6A9.9 9.9 0 0 0 12 2a10 10 0 1 0 0 20c5.8 0 9.6-4 9.6-9.8 0-.7-.1-1.2-.2-2H12z" />
                        </svg>
                        Continue with Google
                    </Button>

                    <div className="my-6 flex items-center gap-3">
                        <div className="h-px flex-1 bg-slate-800" />
                        <span className="text-xs uppercase tracking-wider text-slate-500">or</span>
                        <div className="h-px flex-1 bg-slate-800" />
                    </div>

                    <form onSubmit={handleRegister} className="space-y-5">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-slate-300">
                                Full Name
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                                <Input
                                    value={formData.name}
                                    onChange={(event) =>
                                        setFormData({ ...formData, name: event.target.value })
                                    }
                                    id="name"
                                    name="name"
                                    placeholder="Enter your full name"
                                    required
                                    autoComplete="name"
                                    className={inputClass}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-slate-300">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                                <Input
                                    value={formData.email}
                                    onChange={(event) =>
                                        setFormData({ ...formData, email: event.target.value })
                                    }
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    required
                                    autoComplete="email"
                                    className={inputClass}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium text-slate-300">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                                <Input
                                    value={formData.password}
                                    onChange={(event) =>
                                        setFormData({ ...formData, password: event.target.value })
                                    }
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create a password"
                                    required
                                    minLength={8}
                                    autoComplete="new-password"
                                    className={`${inputClass} pr-10`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((s) => !s)}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 transition-colors hover:text-slate-300"
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                            <p className="text-xs text-slate-500">At least 8 characters.</p>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <p
                                role="alert"
                                className="rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2 text-sm text-red-400"
                            >
                                {error}
                            </p>
                        )}

                        {/* Success Message */}
                        {success && (
                            <p
                                role="status"
                                className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-400"
                            >
                                {success}
                            </p>
                        )}

                        <label className="flex items-start gap-2 text-sm text-slate-400">
                            <input
                                type="checkbox"
                                required
                                className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-950 accent-emerald-500"
                            />
                            <span>
                                I agree to the{" "}
                                <Link href="/terms" className="text-emerald-400 hover:underline">
                                    Terms
                                </Link>{" "}
                                and{" "}
                                <Link href="/privacy" className="text-emerald-400 hover:underline">
                                    Privacy Policy
                                </Link>
                            </span>
                        </label>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="h-11 w-full bg-linear-to-r from-emerald-500 to-cyan-500 font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:from-emerald-400 hover:to-cyan-400 hover:shadow-emerald-500/40 active:scale-[0.98]"
                        >
                            {isLoading ? "Creating Account..." : "Create Account"}
                        </Button>
                    </form>

                    <p className="mt-6 text-center text-sm text-slate-400">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="font-medium text-emerald-400 transition-colors hover:text-emerald-300"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
            </section>
        </main>
    );
}