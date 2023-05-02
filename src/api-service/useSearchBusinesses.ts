import { useQuery } from "react-query";
import getData from "./get-data";

export const categories = [
    "auto",
    "homeservices",
    "spas",
    "handyman",
    "restaurants",
    "pubs",
] as const;

export type CategoryType = (typeof categories)[number];

interface SearchParams {
    location?: string;
    latitude?: number;
    longitude?: number;
    sort_by?: "best_match" | "rating" | "review_count" | "distance";
    limit?: number;
    name?: string;
    term?: string;
    categories?: CategoryType;
}

function removeEmpty(obj: Record<any, any>): Record<string, string> {
    return Object.fromEntries(
        Object.entries(obj).filter(([_, v]) => v != null)
    );
}

export const useSearchBusinesses = (searchParams?: SearchParams) => {
    const {
        name,
        location = "Polska",
        latitude,
        longitude,
        sort_by = "best_match",
        limit = 20,
        term,
        categories,
    } = searchParams || {};
    const normalizedSearchParams: Record<
        keyof SearchParams,
        string | undefined
    > = {
        term,
        name,
        location,
        latitude: latitude?.toString(),
        longitude: longitude?.toString(),
        sort_by,
        limit: limit?.toString(),
        categories: categories,
    };

    return useQuery("businessesData", () =>
        getData("/businesses/search", removeEmpty(normalizedSearchParams))
    );
};
