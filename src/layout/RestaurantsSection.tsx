import styled from "styled-components";
import Card from "../components/Card";
import React, { useState, useEffect } from "react";
import { Business } from "../api-service/mock-business";
import breakpoints from "../assets/breakpoints/breakpoints";

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
            "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Wroclaw&sort_by=best_match&limit=20",
            options
        )
            .then((response) => response.json())
            .then((response) => setBusinesses(response.businesses))
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
            <Container>
                <Wrapper>
                    {businesses.map((business) => (
                        <Card businessData={business} key={business.id} />
                    ))}
                </Wrapper>
            </Container>
        </>
    );
};

export default RestaurantsSection;

const Wrapper = styled.div`
    padding: 2em;
    display: grid;
    max-width: 1800px;
    justify-content: center;
    grid-template-columns: repeat(1, 1fr);
    gap: 2em;
    @media only screen and ${breakpoints.device.xs} {
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and ${breakpoints.device.md} {
        grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and ${breakpoints.device.lg} {
        grid-template-columns: repeat(4, 1fr);
    }
    @media only screen and ${breakpoints.device.xl} {
        grid-template-columns: repeat(5, 1fr);
    }
`;

const Container = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
