import React from "react";
import logo from "../assets/images/restaurant.jpg";
import styled from "styled-components";
import Form from "../components/Form";
const Header = () => {
    return (
        <Container>
            <Shade />
            <Background />
            <Form />
        </Container>
    );
};

export default Header;

const Container = styled.header`
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const Background = styled.div`
    background: url(${logo});
    width: 100%;
    height: 100%;
    position: absolute;
    background-position: center;
    background-size: cover;
    opacity: 0.4;
`;
const Shade = styled.div`
    background: ${({ theme }) => theme.colors.black};
    width: 100%;
    height: 100%;
    position: absolute;
    background-position: center;
    background-size: cover;
    opacity: 0.7;
`;
