import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LoginPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10">
            <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl">
                <h1 className="text-center text-3xl font-bold text-white">
                    Welcome Back
                </h1>

                <p className="mt-2 text-center text-sm text-slate-400">
                    Sign in to your StudioSpace account
                </p>

                <form>
                    <div className="mt-8 space-y-2">
                        <label
                            htmlFor="email"
                            className="text-sm font-medium text-slate-300"
                        >
                            Email Address
                        </label>

                        <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                            required
                            autoComplete="email"
                        />
                    </div>

                    <div className="mt-5 space-y-2">
                        <label
                            htmlFor="password"
                            className="text-sm font-medium text-slate-300"
                        >
                            Password
                        </label>

                        <Input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                            autoComplete="current-password"
                        />
                    </div>

                    <Button className="mt-6 w-full" type="submit">
                        Sign In
                    </Button>
                </form>
                <p className="mt-6 text-center text-sm text-slate-400">
                    Don&apos;t have an account?{" "}
                    <Link
                        href="/register"
                        className="font-medium text-emerald-400 transition-colors hover:text-emerald-300"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </main>
    );
}