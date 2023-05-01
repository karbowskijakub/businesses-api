import { createContext, useState } from "react";
import { Business } from "../api-service/mock-business";
import { CategoryType } from "../api-service/useSearchBusinesses";

type BusinessContextType = {
    businessesName: CategoryType;
    setBusinessesName: (value: CategoryType) => void;
    businesses: Business[];
    setBusinesses: (value: Business[]) => void;
};

export const BusinessContext = createContext<BusinessContextType>({
    businessesName: "restaurants",
    setBusinessesName: () => {
        console.warn("setBusinessesName is not implemented");
    },
    businesses: [],
    setBusinesses: () => {
        console.warn("setBusinesses is not implemented");
    },
});

type BusinessProviderProps = {
    children: React.ReactNode;
};

export const BusinessProvider = ({ children }: BusinessProviderProps) => {
    const [businessesName, setBusinessesName] =
        useState<CategoryType>("restaurants");
    const [businesses, setBusinesses] = useState<Business[]>([]);

    return (
        <BusinessContext.Provider
            value={{
                businessesName,
                setBusinessesName,
                businesses,
                setBusinesses,
            }}
        >
            {children}
        </BusinessContext.Provider>
    );
};
