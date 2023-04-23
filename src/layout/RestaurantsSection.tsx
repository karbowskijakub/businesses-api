import styled from "styled-components";
import Card from "../components/Card";
import React from "react";
import { Business } from "../api-service/mock-business";
import breakpoints from "../assets/breakpoints/breakpoints";

interface RestaurantsSectionProps {
    businesses: Business[];
}

const RestaurantsSection = ({ businesses }: RestaurantsSectionProps) => {
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
