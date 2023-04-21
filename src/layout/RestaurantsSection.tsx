import styled from "styled-components";
import Card from "../components/Card";
import React, { useState, useEffect } from "react";
import { Business } from "../api-service/mock-business";

const RestaurantsSection: React.FC = () => {
    const [businesses, setBusinesses] = useState<Business[]>([]);

    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
        },
    };

    useEffect(() => {
        fetch(
            "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Poland&sort_by=best_match&limit=20",
            options
        )
            .then((response) => response.json())
            .then((response) => setBusinesses(response.businesses))
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
            <Container>
                {businesses.map((business) => (
                    <Card businessData={business} />
                ))}
            </Container>
        </>
    );
};

export default RestaurantsSection;

const Container = styled.section`
    padding: 2em;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2em;
`;
