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
// const parseMinMax = (value: number, min: number, max: number): string => {
//     if (value > max) return min.toFixed(0);
//     if (value > 50) return max.toFixed(0);
//     else return value.toFixed(0);
// };

function removeEmpty(obj: Record<any, any>): Record<string, string> {
    return Object.fromEntries(
        Object.entries(obj).filter(([_, v]) => v != null)
    );
}

export const useSearchBusinesses = (searchParams?: SearchParams) => {
    const {
        name,
        location = "Lodz",
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
