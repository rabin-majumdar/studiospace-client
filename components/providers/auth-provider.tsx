"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

import apiRequest from "@/lib/api-request";
import type { User } from "@/types/user";

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    refreshUser: () => Promise<void>;
}

interface AuthResponse {
    success: boolean;
    message: string;
    data: User;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AuthProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const refreshUser = useCallback(async () => {
        try {
            const result: AuthResponse = await apiRequest("/api/auth/me");
            setUser(result.data);
        } catch {
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                const result: AuthResponse = await apiRequest("/api/auth/me");
                setUser(result.data);
            } catch {
                setUser(null);
            } finally {
                setIsLoading(false);
            }
        };

        getCurrentUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, isLoading, refreshUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
}