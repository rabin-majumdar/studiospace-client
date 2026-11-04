import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10">
            <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl">
                <h1 className="text-center text-3xl font-bold text-white">
                    Create Account
                </h1>

                <p className="mt-2 text-center text-sm text-slate-400">
                    Join StudioSpace and find your perfect space
                </p>

                <form className="mt-8 space-y-5">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-slate-300">
                            Full Name
                        </label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Enter your full name"
                            required
                            autoComplete="name"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-300">
                            Email Address
                        </label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            required
                            autoComplete="email"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password" className="text-sm font-medium text-slate-300">
                            Password
                        </label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Create a password"
                            required
                            autoComplete="new-password"
                        />
                    </div>

                    <Button type="submit" className="w-full">
                        Create Account
                    </Button>
                </form>

                <p className="mt-6 text-center text-sm text-slate-400">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="font-medium text-emerald-400 hover:text-emerald-300"
                    >
                        Sign in
                    </Link>
                </p>
            </div>
        </main>
    );
}