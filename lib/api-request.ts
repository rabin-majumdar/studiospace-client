import API_URL from "@/lib/api";

interface ApiRequestOptions {
    method?: "GET" | "POST" | "PUT" | "DELETE";
    body?: Record<string, unknown>;
}

export default async function apiRequest(
    endpoint: string,
    options: ApiRequestOptions = {},
) {
    const response = await fetch(`${API_URL}${endpoint}`, {
        method: options.method || "GET",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: options.body ? JSON.stringify(options.body) : undefined,
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message || "Something went wrong!");
    }

    return result;
}