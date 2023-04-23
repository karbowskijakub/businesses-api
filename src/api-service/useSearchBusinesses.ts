import { useQuery } from "react-query";
import getData from "./get-data";
interface SearchParams {
    location: string;
    latitude?: number;
    longitude?: number;
    sort_by?: "best_match" | "rating" | "review_count" | "distance";
    limit?: number;
}
const parseMinMax = (value: number, min: number, max: number): string => {
    if (value > max) return min.toFixed(0);
    if (value > 50) return max.toFixed(0);
    else return value.toFixed(0);
};

function removeEmpty(obj: Record<any, any>): Record<string, string> {
    return Object.fromEntries(
        Object.entries(obj).filter(([_, v]) => v != null)
    );
}

export const useSearchBusinesses = (searchParams?: SearchParams) => {
    const {
        location = "Wroclaw",
        latitude,
        longitude,
        sort_by = "best_match",
        limit = 20,
    } = searchParams || {};
    const normalizedSearchParams: Record<
        keyof SearchParams,
        string | undefined
    > = {
        location,
        latitude: latitude?.toString(),
        longitude: longitude?.toString(),
        sort_by,
        limit: parseMinMax(limit, 0, 50),
    };

    return useQuery("businessesData", () =>
        getData("/businesses/search", removeEmpty(normalizedSearchParams))
    );
};
