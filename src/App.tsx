import React, { useState, useEffect } from "react";
import { Business } from "./api-service/mock-business";
import GlobalStyles from "./assets/styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/assets/styles/theme";
import Navbar from "./layout/Navbar";
import Header from "./layout/Header";
import RestaurantsSection from "./layout/RestaurantsSection";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import getData from "./api-service/get-data";
import { useSearchBusinesses } from "./api-service/useSearchBusinesses";

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Main />
        </QueryClientProvider>
    );
};

const Main = () => {
    const [businesses, setBusinesses] = useState<Business[]>([]);

    const { isLoading, error, data } = useSearchBusinesses({
        location: "Lodz",
        sort_by: "best_match",
    });
    useEffect(() => {
        data && setBusinesses(data.businesses);
    }, [data]);

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Navbar />
                <Header />
                <>
                    {isLoading && "Loading"}
                    {error && "error"}
                    <RestaurantsSection businesses={businesses} />
                </>
            </ThemeProvider>
        </>
    );
};

export default App;
