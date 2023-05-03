import React, { useContext, useEffect } from "react";
import GlobalStyles from "./assets/styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/assets/styles/theme";
import Navbar from "./layout/Navbar";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import RestaurantsSection from "./layout/RestaurantsSection";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useSearchBusinesses } from "./api-service/useSearchBusinesses";
import { BusinessProvider, BusinessContext } from "./providers/BusinessContext";

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BusinessProvider>
                <Main />
            </BusinessProvider>
        </QueryClientProvider>
    );
};

const Main = () => {
    const { businessesName, businesses, setBusinesses, location } =
        useContext(BusinessContext);
    const { isLoading, error, data, refetch } = useSearchBusinesses({
        location: location ? location : "Polska",
        // sort_by: "rating",
        categories: businessesName ?? "restaurants",
    });
    useEffect(() => {
        refetch(); // refetch data when location changes
    }, [location]);

    useEffect(() => {
        refetch(); // refetch data when location changes
    }, [businessesName]);

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
                <Footer />
            </ThemeProvider>
        </>
    );
};

export default App;
